/**
* Скрипт инициализирует стандартные функции для работы темы
*/

$.detectMedia = function( checkMedia ) {
    var init = function() {
        var detectMedia = function() {
            var
                currentMedia = $('body').data('currentMedia'),
                newMedia = '';

            if ($(document).width() < 760) {
                newMedia = 'mobile';
            }
            if ($(document).width() >= 760 && $(document).width() <= 980) {
                newMedia = 'portrait';
            }

            if (currentMedia != newMedia) {
                $('body').data('currentMedia', newMedia);
            }
        }
        $(window).on('resize.detectMedia', detectMedia);
        detectMedia();
    }

    var check = function(media) {
        return $('body').data('currentMedia') == media;
    }

    if (checkMedia) {
        return check(checkMedia);
    } else {
        init();
    }
};


$(function() {

    //Решение для корректного отображения масштаба в Iphone, Ipad
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
            viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
            document.body.addEventListener('gesturestart', function () {
                viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
            }, false);
        }
    }//----

    $.cart(); //Инициализируем корзину
    $('.inDialog').openInDialog();
    $('.activeTabs').activeTabs();
    $('input[type="checkbox"]').each(function() {
        if (!$(this).parents('.admin-style').length) $(this).styler();
    });
    $.detectMedia();

    //Инициализируем быстрый поиск по товарам
    $(window).resize(function() {
        $( ".searchLine .query.autocomplete" ).autocomplete( "close" );
    });

    //Инициализируем открытие картинок во всплывающем окне
    $('a[rel="lightbox"], .lightimage').colorbox({
       rel:'lightbox',
       className: 'titleMargin',
       opacity:0.2
    });

    //Инициализируем ссылки Купить в 1 клик, Заказать
    $('a[data-href]:not(.addToCart):not(.applyCoupon)').on('click', function() {
        if ($.detectMedia('mobile')) {
            location.href = $(this).data('href');
        }
    });

    /**
    * Автозаполнение в строке поиска
    */
    $( ".searchLine .query.autocomplete" ).each(function() {
        $(this).autocomplete({
            source: $(this).data('sourceUrl'),
            appendTo: '#queryBox',
            minLength: 3,
            select: function( event, ui ) {
                location.href=ui.item.url;
                return false;
            },
            messages: {
                noResults: '',
                results: function() {}
            }
        }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
            ul.addClass('searchItems');
            var img = $('<img />').attr('src', item.image).css('visibility', 'hidden').load(function() {
                $(this).css('visibility', 'visible');
            });

            return $( "<li />" )
            .append($('<div class="image" />').append(img))
            .append( '<a><span class="label">' + item.label +
                     '</span><span class="barcode">' + item.barcode + '</span><span class="price">' + item.price + '</span> </a>' )
            .appendTo( ul );
        };
    });
});

//Инициализируем обновляемые зоны
$(window).bind('new-content', function(e) {
    $('.activeTabs', e.target).activeTabs({
        onTabChange: function() {
            if ($(this).closest('#colorbox')) $.colorbox.resize();
        }
    });

//    $('input[data-deftext]', e.target).deftext();
    $('input[type="checkbox"]', e.target).each(function() {
        if (!$(this).parents('.admin-style').length) $(this).styler();
    });
    $('.inDialog', e.target).openInDialog();
    $('.rs-parent-switcher', e.target).switcher({parentSelector: '*:first'});
});

/**
* Плагин, инициализирующий работу покупки корзины в один клик
*/
$.extend({
    oneClickCart: function( method ) {
        var defaults = {
            form   : '.oneClickCartForm',               //Селектор формы для отправки
            blockWrapper : '.oneClickCartWrapper',      //Селектор оборачивающей блок
            toggleOneClickCart : '#toggleOneClickCart', //Идентификатор оборачивающего блока
            openBlockFlag : false,
        },
        $this = $('body'),
        args = arguments,
        data = $this.data('oneClickCart');

        if (!data) { //Инициализация
            data = { options: defaults };
            $this.data('oneClickCart', data);
        }

        var methods = {
            init: function(initoptions) {
                if (data) return;
                data                    = {}; $this.data('oneClickCart', data);
                data.options            = $.extend({}, defaults, initoptions);

                methods.bindChanges(); //Привяжем нужные события
                $(window).on('cart.beforeupdate', beforeUpdateCart);
                $(window).on('cart.afterupdate', methods.bindChanges); //Привязем после обновления корзины
            },

            /**
            * Переключает открытие или закрытие блока
            *
            * @param boolean open - true - открыть, блок false - закрыть
            */
            openBlockTrigger: function(open){
                $(data.options.toggleOneClickCart, $this).toggle(open);
                data.options.openBlockFlag = open; //Запомним последнее состояние блока
                if (open){
                    $.colorbox.resize();
                }
            },

            /**
            *  Переключатель блока с формой оформления заказа в один клик
            *
            */
            triggerBlockTrigger: function(){
                $(data.options.toggleOneClickCart, $this).toggle();
                var open = $(data.options.toggleOneClickCart, $this).is(":visible");
                data.options.openBlockFlag = open; //Запомним последнее состояние блока
                $.colorbox.resize();
            },

            /**
            * Возвращает флаг открытия или закрытия блока
            *
            */
            getOpenBlockFlag: function(){
                return data.options.openBlockFlag;
            },

            /**
            * Навешивает необходимые события
            *
            */
            bindChanges: function(){
                $(data.options.form, $this).off('submit.oneClickCart').on('submit.oneClickCart', methods.refresh); //Попытка отправки формы
                methods.openBlockTrigger(methods.getOpenBlockFlag()); //
            },

            /**
            * Обновление блока с отправкой в один клик
            *
            */
            refresh: function(event){
                var params = $(this).serialize();
                $.ajax({
                    type : 'POST',
                    url  : $(this).attr('action'),
                    data : params,
                    dataType : 'json',
                    success : function(response){
                        if (response.success){ //Если успех и мы в диалоговом окне
                            methods.openBlockTrigger(false);
                            //Обновим сведения по корзине
                            $.cart('refresh');
                            //Вызовем диалог
                            $.colorbox({
                                className : "noBorder",
                                html : response.html,
                                opacity: 0.4
                            });
                        }else{
                            var context = $(data.options.blockWrapper, $this); //Текущий контекст
                            var html = $(response.html);
                            //Заменим контент
                            context.html($(data.options.blockWrapper, html).html());
                            methods.openBlockTrigger(true);
                            methods.bindChanges(); //Навесим событие
                        }

                        $this.trigger('oneclickcart.update');
                    }
                });
                event.preventDefault();
            }

        };

        //private
        /**
        * Функция срабатывает перед обновлением корзины и отключает поля ввода
        *
        */
        var beforeUpdateCart = function(){
            $("input", $(data.options.form, $this)).prop('disabled', true);
        }



        if ( methods[method] ) {
            methods[ method ].apply( this, Array.prototype.slice.call( args, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, args );
        }
    }

});


$(function() {
    $.oneClickCart(); //Инициализируем плагин
});