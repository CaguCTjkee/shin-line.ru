/**
 * Мего офигительный подбор ёхохоу
 */
var podbor_init = function podbor_construct() {
    var self = this;

    this.ajax_protect = typeof ajax_protect !== "undefined" ? ajax_protect : '';
    this.ajax_protect_hash = typeof ajax_protect_hash !== "undefined" ? ajax_protect_hash : '';
    this.getFormUrl = '/getform/';
    this.moduleName = 'Podbor';
    this.form = jQuery('.podbor form');
    this.restoreToDefault = false;
    this.url = decodeURIComponent(location.pathname).toString().split('/');
    this.formAddress = '.podbor form:not([action="/engine/ajax/2.php"]) select';
    this.formAddress += ', .podbor form:not([action="/engine/ajax/2.php"]) input';

    // Ошибки
    this.alerts_array = {
        1 : "<b>Ошибка:</b> Форма не отправлена, возможно проблемы с соединением",
        2 : "<b>Ошибка:</b> По данным параметрам шина не найдена, выберите другие параметры."
    };

    // view in console
    this.debug = false;

    /**
     * Функция инициализации подбора
     * Вешает события на изменения селектов и инпутов, клики по кнопкам
     */
    this.init = function() {

        if(self.debug)
            console.log(self.moduleName + ': init();');

        if(typeof self.ajax_protect !== "undefined" && typeof self.ajax_protect_hash !== "undefined") {

            if(self.debug)
                console.log(self.moduleName + ': test for ajax_protect success;');

            // Парсим урл на наличие параметров
            self.urlDecode();

            // Вешаем события на формы подбора
            jQuery(document.body).on('change', self.formAddress, function() {
                self.podborChange(jQuery(this));
            });

            // Вешаем событие на кнопку отмены
            jQuery(document.body).on('click', '.podbor-cancel-button', function(e) {
                e.preventDefault();

                self.restoreDefault(jQuery(this));
            });

            // Вешаем на кнопку закрытия алерта
            jQuery(document.body).on('click', '.podbor-alert .close', function(e) {
                e.preventDefault();

                self.alertClose(jQuery(this));
            });

        } else {

            if(self.debug)
                console.log(self.moduleName + ': test for ajax_protect false;');
        }
    };

    /**
     * Функция отвечает за изменения пользователем формы подбора
     * @param el Элемент, который изменили
     */
    this.podborChange = function(el) {

        // Выделяем форму, с которой работаем
        self.form = el.closest('form');

        // Указываем, что изменилась форма, а не нажата кнопка отмены
        self.restoreToDefault = false;

        // Отправка формы
        self.sendForm(el);
    };

    /**
     * Если все параметры по дефолту - ставим флаг "restoreToDefault" = true
     */
    this.testDefaultParams = function() {

        if(self.restoreToDefault === false) {
            var testDefault = true;
            jQuery.each(self.form.find('select'), function(i, v) {
                if(jQuery(v).find('option:first-child').val() !== jQuery(v).val()) {
                    testDefault = false;
                }
            });
            jQuery.each(self.form.find('input[type="checkbox"]'), function(i, v) {
                if(jQuery(v).prop('checked') === true) {
                    testDefault = false;
                }
            });

            if(testDefault)
                self.restoreToDefault = true;
        }
    };

    /**
     * Изменение параметров формы. Отправляет ajax запорос на сервер, получает параметры в формате json и перебирая поля
     * формы, сравнивая их с параметрами, обновляет поля.
     * @param el Элемент, который изменен
     */
    this.sendForm = function(el) {

        // Вытаскиваем параметры и добавляем протекцию
        var data = self.form.serialize();
        data += '&ajax_protect=' + self.ajax_protect;
        data += '&ajax_protect_hash=' + self.ajax_protect_hash;

        // Если все параметры по дефолту - убираем кнопку очистки
        self.testDefaultParams();

        // Замораживаем форму, чтоб ничего не меняли до получения ответа
        self.disable();

        // ajax
        jQuery.ajax({
            type : 'POST',
            url : self.getFormUrl,
            data : data,
            dataType : 'json',
            success : function(response) {

                if(self.debug)
                    console.log(response);

                // Обновляем поля
                self.fieldsAdd(el, response);

                // Размораживаем форму
                self.enable(self.form);
            },
            error : function(e) {

                if(self.debug)
                    console.log(e);

                self.alert(self.alerts_array[1]);

                // Размораживаем форму
                self.enable();
            },
            fail : function() {

                // Алерт об ошибке
                self.alert(self.alerts_array[1]);

                // Размораживаем форму
                self.enable();
            }
        });
    };

    /**
     * Перебирает объект значений, ищет поля с именем ключа массива и оправляет на обработку функции addSelect
     *
     * @param el элемент, который изменил пользователь, чтоб его не обновлять
     * @param response объект с данными значений полей формы
     */
    this.fieldsAdd = function(el, response) {

        if(self.debug)
            console.log('self.fieldsAdd');

        // Чекиним, что все параметры пришли пустыми, для того, чтоб выдать ошибку
        var allObjNull = true;

        // Перебираем входящие данные
        jQuery.each(response, function(i, obj) {

            var tag = self.form.find('[name="' + i + '"]');

            // Проверяем на наличие элемента в форме
            if(tag.length > 0) {
                // Проверяем есть ли данные для обновления, если хоть в одном массиве есть данные, чекиним результат
                if(obj.length > 0)
                    allObjNull = false;

                // Отправляем на обновление поля
                self.addSelect(tag, obj, tag.prop("tagName").toLowerCase());
            }
        });

        if(allObjNull)
            self.alert(self.alerts_array[2]);

        // If we don't restore to default
        if(self.restoreToDefault === false)
            self.showCancelButton();
        else
            self.hideCancelButton();
    };

    /**
     * Сортируем массив входящих данных, понятным для человека принципом
     * @param obj Массив данных
     * @returns {{}|*}
     */
    this.naturalSorter = function(obj) {

        var temp = {};
        var temp_obj = {};
        var keys = [];

        jQuery.each(obj, function(i, val) {
            temp[val.val_str] = i;
            keys.push(val.val_str);
        });

        keys.sort(self.naturalSorter_callback);

        var len = keys.length;
        for(var i = 0; i < len; i++) {
            var k = keys[i];
            temp_obj[i] = obj[temp[k]];
        }

        obj = temp_obj;

        return obj;
    };

    /**
     * Функция для сортировки стандартной функции sort();
     * Сортирует человеко-понятным образом
     * Стырено с https://stackoverflow.com/questions/2802341/javascript-natural-sort-of-alphanumerical-strings
     * @param as
     * @param bs
     * @returns {*}
     */
    this.naturalSorter_callback = function(as, bs) {
        var a, b, a1, b1, i = 0, n, L,
            rx = /(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g;
        if(as === bs) return 0;
        a = as.toString().toLowerCase().match(rx);
        b = bs.toString().toLowerCase().match(rx);
        L = a.length;
        while(i < L) {
            if(!b[i]) return 1;
            a1 = a[i];
            b1 = b[i++];
            if(a1 !== b1) {
                n = a1 - b1;
                if(!isNaN(n)) return n;
                return a1 > b1 ? 1 : -1;
            }
        }
        return b[i] ? -1 : 0;
    };

    /**
     * Функция обновляет поле формы, в зависимости от типа
     *
     * @param el элемент, который планируем обновлять
     * @param obj объект данных
     * @param obj.val_str_i18n параметр на латинице
     * @param obj.val_str параметр
     * @param type тип тега (select, input, etc.)
     */
    this.addSelect = function(el, obj, type) {

        if(self.debug)
            console.log('Add Select');

        // Понятная для человека сортировка (natural sort)
        obj = self.naturalSorter(obj);

        if(type === 'select') {

            // Сохраняем дефолтный элемент, обычно он первый и не требует изменения
            var saveDefaultEl = el.find('option:first-child');
            // Сохраняем предыдущее выбранное значение
            var savePrevVal = el.val();

            // Очищаем select от options
            el.empty();

            // Добавляем дефолтный элемент, который сохранили ранее
            el.append(saveDefaultEl);

            // Проходимся по объекту, чтоб вытащить значения
            jQuery.each(obj, function(i, val) {
                if(typeof val.val_str_i18n !== "undefined")
                    el.append('<option value="' + val.val_str_i18n + '">' + val.val_str + '</option>');
                else
                    el.append('<option value="' + val.val_str + '">' + val.val_str + '</option>');
            });

            // Устанавливаем предыдущее значение
            if(el.find('option[value="' + savePrevVal + '"]').length > 0)
                el.val(savePrevVal);
            else
                el.find('option:first-child').prop("selected", true);
        }
        else if(type === 'input') {

            // change type
            type = el.attr('type');

            if(type === 'checkbox') {

                var show_checkbox = false;

                jQuery.each(obj, function(i, val) {
                    if(typeof val.val_str !== "undefined" && val.val_str.toLowerCase() === 'да')
                        show_checkbox = true;
                });

                if(show_checkbox)
                    el.closest('.checkbox-parent').removeClass('hidden');
                else
                    el.closest('.checkbox-parent').addClass('hidden');
            }
        }
    };

    /**
     * Устанавливает форму подбора в дефолт, возвращая все параметры
     * @param el элемент кнопки отмены
     */
    this.restoreDefault = function(el) {
        if(self.debug)
            console.log(self.moduleName + ': restoreDefault;');

        self.restoreToDefault = true;
        self.form = el.closest('form');

        self.hideCancelButton();

        self.form.find('select option:first-child').prop("selected", true);
        self.sendForm(self.form.find('[name="podbor"]'));
    };

    /**
     * "Замораживает" форму, показывая иконку загрузки
     */
    this.disable = function() {
        if(self.debug)
            console.log(self.moduleName + ': disable;');

        self.form.addClass('podbor_loading');
        self.form.find('select, input').prop('disabled', true);
    };

    /**
     * "Разможраживает" форму, убирая иконку загрузки
     */
    this.enable = function() {
        if(self.debug)
            console.log(self.moduleName + ': enable;');

        self.form.removeClass('podbor_loading');
        self.form.find('select, input').prop('disabled', false);
    };

    /**
     * Получает урл текущей страницы, если она совпадает с паттерном - меняет данные выбранной формы на те, что в урл
     */
    this.urlDecode = function() {
        if(typeof self.url[1] !== "undefined") {

            // Get form
            self.form = jQuery('form[action="/' + self.url[1] + '/"]');

            // Проверяем есть ли такая форма на странице
            if(self.form.length === 0)
                return false;
            else
                this.podborScroll();

            if(self.url[1] === 'tire_catalog' && self.url[2] !== 'model') {
                // Шины без указания модели
                self.urlDecodeTire();
            }
            else if(self.url[1] === 'tire_catalog' && self.url[2] === 'model') {
                // Шины с указанием модели
                self.urlDecodeTire(1);
            }
            else if(self.url[1] === 'agri_catalog') {

                // Select podbor
                jQuery('[data-target=".podbor-block-toggle-agri"]').click();

                // Сельхозшина
                self.urlDecodeAgri();
            }
            else if(self.url[1] === 'truck_catalog') {

                // Select podbor
                jQuery('[data-target=".podbor-block-toggle-truck"]').click();

                // Грузовые шины
                self.urlDecodeTruck();
            }
            else if(self.url[1] === 'disk_catalog') {

                // Select podbor
                jQuery('[data-target=".podbor-toggle-disk"]').click();
                jQuery('[data-target=".podbor-block-toggle-disk"]').click();

                // Диски
                self.urlDecodeDisk();
            }
            else if(self.url[1] === 'truck_disk_catalog') {

                // Select podbor
                jQuery('[data-target=".podbor-toggle-disk"]').click();
                jQuery('[data-target=".podbor-block-toggle-truck-disk"]').click();

                // Грузовые диски
                self.urlDecodeDisk();
            }

            // Send ajax for get params from URL
            self.restoreToDefault = false;
            self.sendForm(self.form.find('select:first-child'));
        }
    };

    /**
     * Распарсивает урл для формы подбора дисков
     */
    this.urlDecodeDisk = function() {
        // Производитель
        if(typeof self.url[2] !== "undefined" && self.url[2] !== '') {
            self.form.find('[name="brand"]').val(self.url[2]);
        }
        // Радиус и ET
        if(typeof self.url[4] !== "undefined" && self.url[4] !== '') {
            var randet = self.url[4].toString().split('x');

            if(randet[0] !== '*')
                self.form.find('[name="r"]').val(randet[0]);
            if(randet[1] !== '*')
                self.form.find('[name="et"]').val(randet[1]);
        }
        // Крепёж и PCD
        if(typeof self.url[5] !== "undefined" && self.url[5] !== '') {
            var krepegandpcd = self.url[5].toString().split('x');
            if(krepegandpcd[0] !== '*')
                self.form.find('[name="krepeg"]').val(krepegandpcd[0]);
            if(krepegandpcd[1] !== '*')
                self.form.find('[name="pcd"]').val(krepegandpcd[1]);
        }
        // DIA
        if(typeof self.url[6] !== "undefined" && self.url[6] !== '' && self.url[6] !== '*') {
            self.form.find('[name="dia"]').val(self.url[6]);
        }
        // TYPE
        if(typeof self.url[7] !== "undefined" && self.url[7] !== '') {
            self.form.find('[name="type"]').val(self.url[7]);
        }
    };

    /**
     * Распарсивает урл для формы подбора грузаля
     */
    this.urlDecodeTruck = function() {

        // Производитель
        if(typeof self.url[2] !== "undefined" && self.url[2] !== '') {
            self.form.find('[name="brand"]').val(self.url[2]);
        }

        // Типоразмер
        if(typeof self.url[3] !== "undefined" && self.url[3] !== '') {
            self.selectTypeSize(self.url[3]);
        }

        // Применяемость
        if(typeof self.url[4] !== "undefined" && self.url[4] !== '') {
            self.form.find('input[name="applicability"][value="' + self.url[4] + '"]').prop('checked', true);
            self.form.find('select[name="applicability"]').val(self.url[4]);
        }
    };

    /**
     * Распарсивает урл для формы подбора сельхозшины
     */
    this.urlDecodeAgri = function() {
        // Типоразмер
        if(typeof self.url[4] !== "undefined" && self.url[4] !== '') {
            self.selectTypeSize(self.url[4]);
        }
    };

    /**
     * Распарсивает урл для формы подбора шин
     */
    this.urlDecodeTire = function(urlstep) {

        urlstep = typeof urlstep !== "undefined" ? urlstep : 0;

        if(urlstep === 0) {
            // Производитель
            if(typeof self.url[2] !== "undefined" && self.url[2] !== '') {
                self.form.find('[name="brand"]').val(self.url[2]);
            }
        } else {
            self.form.find('[name="brand"]').addClass('hidden');
            // Модель
            if(typeof self.url[3] !== "undefined" && self.url[3] !== '') {
                self.form.find('[name="model"]').val(self.url[3]);
            }
        }

        // Время года
        if(typeof self.url[3 + urlstep] !== "undefined" && self.url[3 + urlstep] !== '') {
            self.form.find('[name="season"]').val(self.url[3 + urlstep]).closest('.season_of').addClass(self.url[3 + urlstep]);
        }

        // Типоразмер или ранфлет
        if(typeof self.url[4 + urlstep] !== "undefined" && self.url[4 + urlstep] !== '') {
            if(self.url[4 + urlstep].search('-') !== -1 || self.url[4 + urlstep].search('R') !== -1) {

                // Типоразмер
                self.selectTypeSize(self.url[4 + urlstep]);

            } else {
                // Ранфлет
                self.form.find('.runflat, [for="runflat"]').click();
            }
        }
        // Ранфлет
        if(typeof self.url[5 + urlstep] !== "undefined" && self.url[5 + urlstep] !== '' && self.url[5 + urlstep] !== '*') {
            self.form.find('[for="runflat"]').click();
        }
        if(typeof self.url[6 + urlstep] !== "undefined" && self.url[6 + urlstep] !== '' && self.url[6 + urlstep] !== '*') {
            self.form.find('[for="thorns"]').click();
        }
        // Шипы
        if(window.location.hash === '#thorns') {
            self.form.find('[for="thorns"]').click();
            self.thorns('thorns');
        }
    };

    /**
     * Распарсивает типоразмеры для шин и сельхоза
     */
    this.selectTypeSize = function(urlSize) {

        if(typeof urlSize !== "undefined" && urlSize !== '') {

            var allrazm = urlSize.match(/^([0-9.,]+)-([0-9.,]+)-([RC0-9.,]+)$/);
            var wonly = urlSize.match(/^([0-9.,]+)-$/);
            var honly = urlSize.match(/^-([0-9.,]+)-$/);
            var ronly = urlSize.match(/^-([RC0-9.,]+)$/);
            var wandh = urlSize.match(/^([0-9.,]+)-([0-9.,]+)-$/);
            var wandr = urlSize.match(/^([0-9.,]+)-([RC0-9.,]+)$/);
            var handr = urlSize.match(/^-([0-9.,]+)-([RC0-9.,]+)$/);

            if(allrazm !== null) {
                self.form.find('[name="w"]').val(allrazm[1]);
                self.form.find('[name="h"]').val(allrazm[2]);
                self.form.find('[name="r"]').val(allrazm[3]);
            } else if(wonly !== null) {
                self.form.find('[name="w"]').val(wonly[1]);
            } else if(honly !== null) {
                self.form.find('[name="h"]').val(honly[1]);
            } else if(ronly !== null) {
                self.form.find('[name="r"]').val(ronly[1]);
            } else if(wandh !== null) {
                self.form.find('[name="w"]').val(wandh[1]);
                self.form.find('[name="h"]').val(wandh[2]);
            } else if(wandr !== null) {
                self.form.find('[name="w"]').val(wandr[1]);
                self.form.find('[name="r"]').val(wandr[2]);
            } else if(handr !== null) {
                self.form.find('[name="h"]').val(handr[1]);
                self.form.find('[name="r"]').val(handr[2]);
            }
        }
    };

    /**
     * Выводит сообщение с ошибкой и закрывает его через 5 сек.
     * @param msg Сообщение
     * @param type Тип сообщения
     */
    this.alert = function(msg, type) {
        msg = typeof msg !== "undefined" ? msg : '';
        type = typeof type !== "undefined" ? type : 'danger';

        if(msg.length > 0) {
            var el = self.alertCreate(msg, type);

            if(el.find('.close').length > 0) {
                setTimeout(function() {
                    self.alertClose(el.find('.close'))
                }, 5000);
            }
        }
    };

    /**
     * Вспомагательная функция для функции alert
     * Создает HTML форму сообщения
     * @param msg Сообщение
     * @param type Тип сообщения
     * @returns {*} Возвращает элемент сообщения
     */
    this.alertCreate = function(msg, type) {
        jQuery(document.body).append('<div class="podbor-alert">' +
            '<div class="alert alert-' + type + '">' +
            '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
            '<div class="podbor-alert-content">' +
            msg +
            '</div>' +
            '</div>' +
            '</div>');
        return jQuery('.podbor-alert:last-child');
    };

    /**
     * Функция для удаления сообщения об ошибке
     * @param el Элемент сообщения
     */
    this.alertClose = function(el) {
        el.closest('.podbor-alert').remove();
    };

    /**
     * Показать кнопку очистки формы
     */
    this.showCancelButton = function() {
        self.form.find('.podbor-cancel-button').removeClass('hidden');
    };

    /**
     * Убрать кнопку очистки формы
     */
    this.hideCancelButton = function() {
        self.form.find('.podbor-cancel-button').addClass('hidden');
    };

    /**
     * Если загружена страница с параметрами для подбора - скролим сразу к товарам
     */
    this.podborScroll = function() {
        setTimeout(function() {
            if(jQuery(window).scrollTop() === 0)
                jQuery('body,html').animate({scrollTop : jQuery('.content').offset().top}, 800);
        }, 500);
    };

    /**
     * Показать / убрать шины с шипами, по сути уже не нужно
     * @param view
     * @returns {boolean}
     */
    this.thorns = function(view) {
        var el = jQuery('.table-products tbody tr:not(.thorns)');

        if(view === 'thorns')
            el.addClass('hidden');
        else if(view === 'all')
            el.removeClass('hidden');
        else
            return false
    };
};

jQuery(function() {
    if(jQuery('.podbor').length > 0) {
        var podbor = new podbor_init();
        podbor.init();
    }
});
