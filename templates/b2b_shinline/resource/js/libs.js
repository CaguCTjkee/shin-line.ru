function parseUrlQuery() {
    var data = {};
    if(location.search) {
        var pair = (location.search.substr(1)).split('&');
        for(var i = 0; i < pair.length; i++) {
            var param = pair[i].split('=');
            data[param[0]] = param[1];
        }
    }
    return data;
}
function carousel_view() {
    if($(window).outerWidth(true) > '992') {
        jQuery('.carousel-view .item').each(function() {
            item_width = +$(this).closest('.carousel-view-inner').outerWidth(true) + $(this).outerWidth();
            $(this).closest('.carousel-view-inner').css('width', item_width + 'px');
        });
    } else {
        $('.carousel-view-inner').css('width', 'auto');
    }
}

function dropdownhide(targetMenu) {
    jQuery(targetMenu + ' .node .dropdown').removeClass('in').addClass('hidden');
}

function thorns(view) {
    var el = jQuery('.table-products tbody tr:not(.thorns)');

    if(view === 'thorns')
        el.addClass('hidden');
    else if(view === 'all')
        el.removeClass('hidden');
    else
        return false
}
function amountpick(self) {
    var amount_el = self.closest('.amount-pick').find('.text-amount');
    var amount_input = self.closest('.amount-pick').find('.field-amount');
    var amount_int = +amount_el.val().replace(new RegExp("[^0-9]", 'g'), '');
    var amount_max = self.closest('[data-id]').find('.product-num .int').text();

    if(self.closest('.amount-pick').hasClass('disabled')) {
        return false; // exit if disabled
    }

    // add complect
    if(self.hasClass('inc-pick'))
        ++amount_int;
    else if(self.hasClass('dec-pick'))
        --amount_int;

    // kill negative int
    if(amount_int < 1)
        amount_int = 1;
    else if(amount_int > amount_max)
        amount_int = amount_max;

    // Visual "effect"
    amount_el.val(amount_int + ' шт');
    amount_input.val(amount_int);
}
function podborScroll() {
    setTimeout(function() {
        if(jQuery(window).scrollTop() === 0)
            jQuery('body,html').animate({scrollTop : jQuery('.content').offset().top}, 800);
    }, 500);
}
function ajax_pagination() {
    if(jQuery('.ajax_pagination').length === 0)
        jQuery('.table-products').after('<div class="ajax_pagination">Еще...</div>');
}
function ajax_pagination_show() {
    var a_count = 0;

    if(jQuery('.table-products tr.hidden').length > 0) {

        jQuery('.table-products tr.hidden').each(function() {
            ++a_count;
            if(a_count <= 30) {
                jQuery(this).removeClass('hidden');
                if(jQuery(this).find('.main-image [data-src]').length > 0)
                    jQuery(this).find('.main-image [data-src]').attr('src', jQuery(this).find('.main-image [data-src]').data('src'));
            }
        });
    }

    // Hide button
    if(a_count === 0 || a_count <= 30)
        jQuery('.ajax_pagination').remove();
}
function ajax_pagination_show_all() {

    if(jQuery('.table-products tr.hidden').length > 0) {

        jQuery('.table-products tr.hidden').each(function() {
            jQuery(this).removeClass('hidden');
            if(jQuery(this).find('.main-image [data-src]').length > 0)
                jQuery(this).find('.main-image [data-src]').attr('src', jQuery(this).find('.main-image [data-src]').data('src'));
        });
    }

    // Hide button
    jQuery('.ajax_pagination').remove();
}

jQuery(document).ready(function(e) {

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var pag = jQuery('.ajax_pagination').offset();

        console.log();

        if(jQuery('.ajax_pagination').length > 0) {
            if((scrolled + jQuery(window).height()) > pag.top) {
                if(typeof ajax_sleep === "undefined" || ajax_sleep === false) {
                    jQuery('.ajax_pagination').click();
                    ajax_sleep = true;

                    setTimeout(function() {
                        ajax_sleep = false;
                    }, 1000);
                }
            }
        }
    }

    // ajax pagination
    if(jQuery('.table-products tr').length > 50) {
        ajax_pagination();
    }

    jQuery(document.body).on('click', '.ajax_pagination', function(e) {
        e.preventDefault();
        ajax_pagination_show();
    });

    // tooltip
    jQuery('[data-toggle="tooltip"]').tooltip();
    // tooltip end

    // b2b add to cart woohoo
    jQuery(document.body).on('click', '.addToCart', function() {
        // private
        var self = jQuery(this);
        var tr = self.closest('tr');
        var img = tr.find('.main-image img');
        var sizes = {};

        // public
        transfer_class = 'image-to-cart';
        basket_offset = jQuery('div.basket').offset();

        if(jQuery('.' + transfer_class).length === 0) {
            jQuery('body').append('<div class="' + transfer_class + '"></div>');
        } else {
            jQuery('.' + transfer_class).empty();
        }

        // get size w and h
        sizes.w = img.outerWidth();
        sizes.h = img.outerHeight();

        // copy to transfer
        img.clone().appendTo('.' + transfer_class);

        // calculate offset img
        sizes.offset = img.offset();

        jQuery('.' + transfer_class).css('width', sizes.w)
        .css('height', sizes.h)
        .css('top', sizes.offset.top)
        .css('left', sizes.offset.left)
        .addClass('show');

        setTimeout(function() {
            jQuery('.' + transfer_class)
            .css('top', basket_offset.top)
            .css('left', basket_offset.left)
            .removeClass('show');
        }, 200);

    });

    // Работа с amount в таблице
    jQuery(document.body).on('click', '.dec-pick, .inc-pick', function(e) {
        e.preventDefault();

        amountpick(jQuery(this));
    });
    jQuery(document.body).on('focusout', '.text-amount', function(e) {
        amountpick(jQuery(this));
    });

    // Сортировка таблицы по полям
    if(jQuery('.table-products').length > 0) {
        jQuery(document.body).on('click', '.table-products td.sortable', function(e) {
            e.preventDefault();

            // vars
            var table_products = jQuery(this).closest('.table-products');
            var tbody = table_products.find('tbody');
            var index = jQuery(this).index();
            var reverse = false;
            var obj = {};

            // temp values
            var temp = {};
            var temp_obj = {};
            var keys = [];

            // Проверяем реверс это или нет
            if(jQuery(this).hasClass('last_sortable_element')) {
                reverse = true;
            }
            // Удаляем класс "last_sortable_element"
            jQuery('.last_sortable_element').removeClass('last_sortable_element');
            // Не добавляем класс "last_sortable_element" если это реверс
            if(reverse === false)
                jQuery(this).addClass('last_sortable_element');

            // Проходимся по таблице в поисках индекса, который нажал пользователь
            tbody.find('td').each(function() {
                if(jQuery(this).index() === index) {

                    // Продукт айди, для того, чтоб индекс был уникален
                    var product_id = jQuery(this).closest('tr').data('id');
                    // Значение + айди
                    var value = jQuery(this).data('sortable').toString() + product_id;

                    // Создаем объект со всем элементами с нужным индексом
                    obj[product_id] = jQuery(this);
                    // Временный объект с значением элемента в качестве ключа и product_id в качестве значения
                    temp[value] = product_id;
                    // Временный массив для сортировки
                    keys.push(value);
                }
            });

            // В зависимости от того, есть ли сортировачная функция - используем стандартную сортировку
            // Плюс проверяем реверс это или нет, и используем sort или revers соответственно
            if(typeof naturalSorter_callback !== "undefined") {
                if(reverse)
                    keys.reverse(naturalSorter_callback);
                else
                    keys.sort(naturalSorter_callback);
            }
            else {
                if(reverse)
                    keys.reverse();
                else
                    keys.sort();
            }

            // После сортировки проходимся по временному масиву keys
            // И в переменную temp_obj ложим объекты из переменной obj в порядке ключей массива keys, используя temp
            // Для понимания сложно, но если делать пошагово, норм. Вся магия происходит тут.
            var len = keys.length;
            for(var i = 0; i < len; i++) {
                var k = keys[i];
                temp_obj[i] = obj[temp[k]];
            }

            // Очищаем поля таблицы
            tbody.empty();
            // Вытаскиваем элементы из temp_obj, и добавляем их обратно в таблицу
            jQuery.each(temp_obj, function(i, el) {
                tbody.append(el.closest('tr'));
            });

            // Вешаем события диалога и подсказок
            jQuery('.inDialog').openInDialog();
            jQuery('[data-toggle="tooltip"]').tooltip();

            // Если кнопка пагинации есть, соответственно некоторые элементы скрыты в пагинации
            // У нас стоит волшебная загрузка при прокрутке, но т.к. мы поменяли элементы местами, вся эта красота идет
            // по пизде. Чтоб этого не произошло, мы записываем сколько элементов сейчас показано на странице, после
            // чего скрываем все элементы, и от числа элементов на странице отталкиваемся и показываем первые n товаров.
            // Ко всему прочему показываем картинки, если нужно.
            if(jQuery('.ajax_pagination').length > 0) {

                // todo-caguct: Хорошо бы это все засунуть в отдельную функцию

                // Счетчик для цикла и кнопки "Показать еще"
                var a_count = 0;

                // Количиство видимых элементов
                var visible_count = jQuery('.table-products tr:not(.hidden)').length;

                // Скрываем все
                jQuery('.table-products tr').addClass('hidden');

                // Проходимся по скртым элементам
                jQuery('.table-products tr.hidden').each(function() {

                    // Увеличиваем счетчик на еденицу
                    a_count++;

                    if(a_count <= visible_count) {
                        // Показываем элементы
                        jQuery(this).removeClass('hidden');

                        // Показываем картинки
                        if(jQuery(this).find('.main-image [data-src]').length > 0)
                            jQuery(this).find('.main-image [data-src]').attr('src', jQuery(this).find('.main-image [data-src]').data('src'));
                    }
                });

                // Hide button
                if(a_count === 0 || a_count <= 30)
                    jQuery('.ajax_pagination').remove();

            }

        });
    }

    /**
     * Функция для сортировки стандартной функции sort(); или reverse();
     * Сортирует человеко-понятным образом
     * Стырено с https://stackoverflow.com/questions/2802341/javascript-natural-sort-of-alphanumerical-strings
     * @param as
     * @param bs
     * @returns {*}
     */
    var naturalSorter_callback = function(as, bs) {
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
    // Сортировка таблицы по полям end

    // new full podbor

    // Описание работы кнопок подбора
    //
    // Для кнопок-переключателей подбора испльзуется класс "btn-podbor-toggle". Он ищет в атрибуте
    // "data-target" элемент и показывает его, добавляет класс "active", скрывая все эелементы с атрибутом, который
    // указан в "data-hide" с помощью класса "hidden".
    //
    // Алешко из будующего, не благодари :)

    jQuery(document.body).on('click', '.btn-podbor-toggle', function(e) {
        e.preventDefault();

        var self = jQuery(this);
        var target = self.data('target');

        if(typeof target !== "undefined" && target !== '') {
            if(jQuery(target).length > 0) {
                self.parent().find('button').removeClass('active');
                self.addClass('active');

                jQuery('[' + self.data('hide') + '="hide"]').addClass('hidden');
                jQuery(target).removeClass('hidden');
            }
        }
    });
    // new full podbor end

    //ofdealer-list
    if(jQuery('.ofdealer-list').length > 0) {
        jQuery.each(jQuery('.ofdealer-list li'), function(index) {
            // index start from 0
            if(index < 3) {
                jQuery(this).removeClass('hidden');
            }
        });

        jQuery(document.body).on('click', '.onemore', function(e) {
            e.preventDefault();
            jQuery('.ofdealer-list li').removeClass('hidden');
            jQuery(this).addClass('hidden');
        });

    }

    // my orders
    jQuery(document.body).on('click', '.status .more', function(e) {
        e.preventDefault();

        if(jQuery(this).find('.fa-angle-down').length > 0) {
            jQuery(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
            jQuery(this).closest('.orderList').find('.products').removeClass('hidden').addClass('last-child');
            jQuery('.status').removeClass('last-child');
        } else {
            jQuery(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
            jQuery(this).closest('.orderList').find('.products').addClass('hidden').removeClass('last-child');
            jQuery('.status').addClass('last-child');
        }
    });

    jQuery(document.body).on('click', '.node a[href="#"]', function(e) {
        e.preventDefault();

        var selfnode = jQuery(this).closest('.node');
        var targetMenu = '.nav__bottom-menu';
        var dropdown = selfnode.find('.dropdown');
        var hide = !dropdown.hasClass('in');

        // hide all nodes
        dropdownhide(targetMenu);

        if(hide)
            dropdown.removeClass('hidden').addClass('in');

    });

    $("[name='only_pickup_points']").on('change', function() {
        $("#formAddressSectionWrapper").toggleClass('hidden', parseInt($("[name='only_pickup_points']:checked").val()) > 0);
    });

    // totop
    $('body').append('<div id="totop"><i class="glyphicon glyphicon-menu-up"></i></div>');
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#totop').fadeIn();
        } else {
            $('#totop').fadeOut();
        }
    });
    $('#totop').click(function() {
        $('body,html').animate({scrollTop : 0}, 800);
    });

    carousel_view();
    $(window).resize(function() {
        carousel_view();
    });

    $('body').on('click', '.carousel-view-control', function() {
        cvi = $(this).closest('.carousel-view').find('.carousel-view-inner');
        item = $(this).closest('.carousel-view').find('.item:first-child');

        if($(this).hasClass('right')) {
            // right
            if(+cvi.css('left').slice(0, -2) * -1 < +(+cvi.outerWidth() - item.outerWidth() * 3))
                cvi.css('left', +cvi.css('left').slice(0, -2) - item.outerWidth() + 'px');
        } else {
            // left
            if(cvi.css('left').slice(0, -2) < 0)
                cvi.css('left', +cvi.css('left').slice(0, -2) + item.outerWidth() + 'px');
        }
        return false;
    });

    $('body').on('click', '.phone', function() {
        if($(this).find('span').text() !== '') {
            document.location.href = 'tel:' + $(this).find('span').text().replace(/[^0-9]/gim, '');
        }
        return false;
    });

    $('body').on('click', '.services__button', function() {
        if($('.nav__bottom-menu').hasClass('menu-show')) {
            $(this).removeClass('active');
            $('.nav__bottom-menu').removeClass('menu-show');
            $('.nav__bottom-menu').addClass('hidden-md').addClass('hidden-sm').addClass('hidden-xs');
        } else {
            $(this).addClass('active');
            $('.nav__bottom-menu').addClass('menu-show');
            $('.nav__bottom-menu').removeClass('hidden-md').removeClass('hidden-sm').removeClass('hidden-xs');
        }
        return false;
    });

    $('body').on('click', '.compare-button', function() {
        var url = $(this).attr('href');
        if($(this).closest('#compareBlock').is('.active') || $(this).is('.active') || url) {
            window.open(url ? url : '/compare/', 'compare', 'top=170, left=100, scrollbars=yes, menubar=yes, resizable=yes');
        }
        return false;
    });

    // Podor switch
    $('.podbor__select button').click(function() {
        if(!$(this).hasClass('active')) {
            $(this).closest('.podbor__select').find('button').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.podbor__select-inner').find('.podbor__select-value').addClass('hidden');
            $(this).closest('.podbor__select-inner').find('.podbor__select-value.for-' + $(this).data('for')).removeClass('hidden');
        }
        return false;
    });

    $('.podbor form').on('submit', function() {
        var podbor = $(this).find('[name="podbor"]').val();
        if(podbor === 'tire') {

            if($(this).find('[name="model"]').val() === 'all') {

                var brand = $(this).find('select[name="brand"]').val();
                var season = $(this).find('select[name="season"]').val();
                var w = $(this).find('select[name="w"]').val();
                var h = $(this).find('select[name="h"]').val();
                var r = $(this).find('select[name="r"]').val();
                var runflat = $(this).find('#runflat').prop('checked');
                var thorns = $(this).find('#thorns').prop('checked');

                url = '/' + podbor + '_catalog/' + brand + '/' + season + '/';

                if(w !== '' && h !== '' && r !== '')
                    url = url + w + '-' + h + '-' + r + '/';
                else if(w !== '' && h !== '')
                    url = url + w + '-' + h + '-/';
                else if(h !== '' && r !== '')
                    url = url + '-' + h + '-' + r + '/';
                else if(w !== '' && r !== '')
                    url = url + w + '-' + r + '/';
                else if(w !== '')
                    url = url + w + '-/';
                else if(h !== '')
                    url = url + '-' + h + '-/';
                else if(r !== '')
                    url = url + '-' + r + '/';

                if(runflat)
                    url = url + 'runflat/';

                if(thorns) {
                    if(!runflat)
                        url = url + '*/';
                    url = url + 'thorns/';
                }

                window.location.href = url;

            } else {
                // model submit form

                model = $(this).find('[name="model"]').val();
                season = $(this).find('select[name="season"]').val();
                w = $(this).find('select[name="w"]').val();
                h = $(this).find('select[name="h"]').val();
                r = $(this).find('select[name="r"]').val();
                runflat = $(this).find('#runflat').prop('checked');

                url = '/' + podbor + '_catalog/model/' + model + '/' + season + '/';

                if(w !== '' && h !== '' && r !== '')
                    url = url + w + '-' + h + '-' + r + '/';
                else if(w !== '' && h !== '')
                    url = url + w + '-' + h + '-/';
                else if(h !== '' && r !== '')
                    url = url + '-' + h + '-' + r + '/';
                else if(w !== '' && r !== '')
                    url = url + w + '-' + r + '/';
                else if(w !== '')
                    url = url + w + '-/';
                else if(h !== '')
                    url = url + '-' + h + '-/';
                else if(r !== '')
                    url = url + '-' + r + '/';

                if(runflat)
                    url = url + 'runflat/';

                if(thorns) {
                    if(!runflat)
                        url = url + '*/';
                    url = url + 'thorns/';
                }

                window.location.href = url;
            }

        } else if(podbor == 'agri') {

            var brand = 'all';
            var season = 'all';
            var w = $(this).find('select[name="w"]').val();
            var h = $(this).find('select[name="h"]').val();
            var r = $(this).find('select[name="r"]').val();

            url = '/' + podbor + '_catalog/' + brand + '/' + season + '/';

            if(w !== '' && h !== '' && r !== '')
                url = url + w + '-' + h + '-' + r + '/';
            else if(w !== '' && h !== '')
                url = url + w + '-' + h + '-/';
            else if(h !== '' && r !== '')
                url = url + '-' + h + '-' + r + '/';
            else if(w !== '' && r !== '')
                url = url + w + '-' + r + '/';
            else if(w !== '')
                url = url + w + '-/';
            else if(h !== '')
                url = url + '-' + h + '-/';
            else if(r !== '')
                url = url + '-' + r + '/';

            window.location.href = url;

        } else if(podbor === 'disk' || podbor === 'truck_disk') {
            brand = $(this).find('[name="brand"]').val();
            r = $(this).find('[name="r"]').val();
            et = $(this).find('[name="et"]').val();
            krepeg = $(this).find('[name="krepeg"]').val();
            pcd = $(this).find('[name="pcd"]').val();
            dia = $(this).find('[name="dia"]').val();
            type = $(this).find('[name="type"]').val();

            url = '/' + podbor + '_catalog/' + brand + '/size/' + r + 'x' + et + '/' + krepeg + 'x' + pcd + '/';

            url = url + dia + '/';

            if(type !== '')
                url = url + type + '/';

            window.location.href = url;

        } else if(podbor == 'truck') {

            brand = $(this).find('[name="brand"]').val();
            w = $(this).find('select[name="w"]').val();
            h = $(this).find('select[name="h"]').val();
            r = $(this).find('select[name="r"]').val();
            if(typeof $(this).find('[name="applicability"]:checked').val() !== "undefined")
                applicability = $(this).find('[name="applicability"]:checked').val();
            else
                applicability = $(this).find('[name="applicability"]').val();

            if(applicability === "undefined")
                applicability = '';

            url = '/' + podbor + '_catalog/' + brand + '/';

            if(w !== '' && h !== '' && r !== '')
                url = url + w + '-' + h + '-' + r + '/';
            else if(w !== '' && h !== '')
                url = url + w + '-' + h + '-/';
            else if(h !== '' && r !== '')
                url = url + '-' + h + '-' + r + '/';
            else if(w !== '' && r !== '')
                url = url + w + '-' + r + '/';
            else if(w !== '')
                url = url + w + '-/';
            else if(h !== '')
                url = url + '-' + h + '-/';
            else if(r !== '')
                url = url + '-' + r + '/';
            else
                url = url + '-/';

            if(applicability !== '')
                url = url + applicability + '/';

            window.location.href = url;

        }

        return false;
    });

    // Shinomontaj
    $('.doc').hide();
    $('.doc').first().show();
    $('.shinbutton a').click(function() {
        $('.doc').hide();
        $('.' + $(this).attr('id')).show();
        $('.shinnow').removeClass('shinnow');
        $(this).addClass('shinnow');
        return false;
    });
});