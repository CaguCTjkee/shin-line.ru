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

$(document).ready(function(e) {

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

    // $('.node > a').click(function() {
    //     if(!$(this).parent().find('.dropdown').hasClass('in')) {
    //         $('.node .dropdown').each(function(index, element) {
    //             if($('.dropdown').hasClass('in')) {
    //                 $('.dropdown').removeClass('in');
    //                 $('.dropdown').css('z-index', '0');
    //             }
    //         });
    //         $(this).parent().find('.dropdown').addClass('in');
    //         $(this).parent().find('.dropdown').css('z-index', '9995');
    //     } else {
    //         $(this).parent().find('.dropdown').removeClass('in');
    //         $(this).parent().find('.dropdown').css('z-index', '0');
    //     }
    //     return false;
    // });

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

    if(location.pathname.search('/tire_catalog/') != -1) {
        urlarr = decodeURIComponent(location.pathname).toString().split('/');

        if(urlarr[2] !== 'model') {
            if(typeof urlarr[2] !== "undefined" && urlarr[2] !== '') {  // Производитель
                $('select[name="brand"]').val(urlarr[2]);
            }
            if(typeof urlarr[3] !== "undefined" && urlarr[3] !== '') { // Время года
                $('select[name="season"]').val(urlarr[3]);
                $('select[name="season"]').closest('.season_of').addClass(urlarr[3]);
            }
            if(typeof urlarr[4] !== "undefined" && urlarr[4] !== '') { // Типоразмер или ранфлет
                if(urlarr[4].search('-') !== -1 || urlarr[4].search('R') !== -1) { // Типоразмер
                    allrazm = urlarr[4].match(/^([0-9.]+)-([0-9.]+)-([RC0-9.]+)$/);
                    wonly = urlarr[4].match(/^([0-9.]+)-$/);
                    honly = urlarr[4].match(/^-([0-9.]+)-$/);
                    ronly = urlarr[4].match(/^-([RC0-9.]+)$/);
                    wandh = urlarr[4].match(/^([0-9.]+)-([0-9.]+)-$/);
                    wandr = urlarr[4].match(/^([0-9.]+)-([RC0-9.]+)$/);
                    handr = urlarr[4].match(/^-([0-9.]+)-([RC0-9.]+)$/);

                    if(allrazm !== null) { // zzz-zzz-
                        $('select[name="w"]').val(allrazm[1]);
                        $('select[name="h"]').val(allrazm[2]);
                        $('select[name="r"]').val(allrazm[3]);
                    } else if(wonly !== null) {
                        $('select[name="w"]').val(wonly[1]);
                    } else if(honly !== null) {
                        $('select[name="h"]').val(honly[1]);
                    } else if(ronly !== null) {
                        $('select[name="r"]').val(ronly[1]);
                    } else if(wandh !== null) {
                        $('select[name="w"]').val(wandh[1]);
                        $('select[name="h"]').val(wandh[2]);
                    } else if(wandr !== null) {
                        $('select[name="w"]').val(wandr[1]);
                        $('select[name="r"]').val(wandr[2]);
                    } else if(handr !== null) {
                        $('select[name="h"]').val(handr[1]);
                        $('select[name="r"]').val(handr[2]);
                    }

                } else { // Ранфлет
                    $('.runflat, [for="runflat"]').click();
                }
            }
            if(typeof urlarr[5] !== "undefined" && urlarr[5] !== '') { // Ранфлет
                $('.runflat, [for="runflat"]').click();
            }
        } else {
            // model form
            $('select[name="brand"]').addClass('hidden');
            //            console.log($('select[name="brand"]'));
            if(typeof urlarr[3] !== "undefined" && urlarr[3] !== '') {  // Модель
                $('[name="model"]').val(urlarr[3]);
            }
            if(typeof urlarr[4] !== "undefined" && urlarr[4] !== '') { // Время года
                $('select[name="season"]').val(urlarr[4]);
                $('select[name="season"]').closest('.season_of').addClass(urlarr[4]);
            }
            if(typeof urlarr[5] !== "undefined" && urlarr[5] !== '') { // Типоразмер или ранфлет
                if(urlarr[5].search('-') !== -1 || urlarr[5].search('R') !== -1) { // Типоразмер
                    allrazm = urlarr[5].match(/^([0-9.]+)-([0-9.]+)-([RC0-9.]+)$/);
                    wonly = urlarr[5].match(/^([0-9.]+)-$/);
                    honly = urlarr[5].match(/^-([0-9.]+)-$/);
                    ronly = urlarr[5].match(/^-([RC0-9.]+)$/);
                    wandh = urlarr[5].match(/^([0-9.]+)-([0-9.]+)-$/);
                    wandr = urlarr[5].match(/^([0-9.]+)-([RC0-9.]+)$/);
                    handr = urlarr[5].match(/^-([0-9.]+)-([RC0-9.]+)$/);

                    if(allrazm !== null) { // zzz-zzz-
                        $('select[name="w"]').val(allrazm[1]);
                        $('select[name="h"]').val(allrazm[2]);
                        $('select[name="r"]').val(allrazm[3]);
                    } else if(wonly !== null) {
                        $('select[name="w"]').val(wonly[1]);
                    } else if(honly !== null) {
                        $('select[name="h"]').val(honly[1]);
                    } else if(ronly !== null) {
                        $('select[name="r"]').val(ronly[1]);
                    } else if(wandh !== null) {
                        $('select[name="w"]').val(wandh[1]);
                        $('select[name="h"]').val(wandh[2]);
                    } else if(wandr !== null) {
                        $('select[name="w"]').val(wandr[1]);
                        $('select[name="r"]').val(wandr[2]);
                    } else if(handr !== null) {
                        $('select[name="h"]').val(handr[1]);
                        $('select[name="r"]').val(handr[2]);
                    }

                } else { // Ранфлет
                    //                    $('.runflat, [for="runflat"]').click();
                }
            }
            if(typeof urlarr[6] !== "undefined" && urlarr[6] !== '') { // Ранфлет
                $('.runflat, [for="runflat"]').click();
            }
        }
    } else if(location.pathname.search('/disk_catalog/') != -1) {
        urlarr = decodeURIComponent(location.pathname).toString().split('/');
        if(typeof urlarr[2] !== "undefined" && urlarr[2] !== '') {  // Производитель
            $('[name="brand"]').val(urlarr[2]);
        }
        if(typeof urlarr[4] !== "undefined" && urlarr[4] !== '') { // Радиус и ET
            randet = urlarr[4].toString().split('x');
            $('[name="r"]').val(randet[0]);
            $('[name="et"]').val(randet[1]);
        }
        if(typeof urlarr[5] !== "undefined" && urlarr[5] !== '') { // Крепёж и PCD
            krepegandpcd = urlarr[5].toString().split('x');
            $('[name="krepeg"]').val(krepegandpcd[0]);
            $('[name="pcd"]').val(krepegandpcd[1]);
        }
        if(typeof urlarr[6] !== "undefined" && urlarr[6] !== '') { // DIA
            $('[name="dia"]').val(urlarr[6]);
        }
        if(typeof urlarr[7] !== "undefined" && urlarr[7] !== '') { // TYPE
            $('[name="type"]').val(urlarr[7]);
        }

    } else if(location.pathname.search('/truck_catalog/') != -1) {
        urlarr = decodeURIComponent(location.pathname).toString().split('/');
        if(typeof urlarr[2] !== "undefined" && urlarr[2] !== '') {  // Производитель
            $('[name="brand"]').val(urlarr[2]);
        }
        if(typeof urlarr[3] !== "undefined" && urlarr[3] !== '') { // Типоразмер или ранфлет

            urlarr[3] = urlarr[3].replace(/\,/, ".");
            allrazm = urlarr[3].match(/^([0-9.]+)-([0-9.]+)-([RC0-9.]+)$/);
            wonly = urlarr[3].match(/^([0-9.]+)-$/);
            honly = urlarr[3].match(/^-([0-9.]+)-$/);
            ronly = urlarr[3].match(/^-([RC0-9.]+)$/);
            wandh = urlarr[3].match(/^([0-9.]+)-([0-9.]+)-$/);
            wandr = urlarr[3].match(/^([0-9.]+)-([RC0-9.]+)$/);
            handr = urlarr[3].match(/^-([0-9.]+)-([RC0-9.]+)$/);

            if(allrazm !== null) { // zzz-zzz-
                $('select[name="w"]').val(allrazm[1]);
                $('select[name="h"]').val(allrazm[2]);
                $('select[name="r"]').val(allrazm[3]);
            } else if(wonly !== null) {
                $('select[name="w"]').val(wonly[1]);
            } else if(honly !== null) {
                $('select[name="h"]').val(honly[1]);
            } else if(ronly !== null) {
                $('select[name="r"]').val(ronly[1]);
            } else if(wandh !== null) {
                $('select[name="w"]').val(wandh[1]);
                $('select[name="h"]').val(wandh[2]);
            } else if(wandr !== null) {
                $('select[name="w"]').val(wandr[1]);
                $('select[name="r"]').val(wandr[2]);
            } else if(handr !== null) {
                $('select[name="h"]').val(handr[1]);
                $('select[name="r"]').val(handr[2]);
            }
        }
        if(typeof urlarr[4] !== "undefined" && urlarr[4] !== '') { // Применяемость
            $('[name="applicability"][value="' + urlarr[4] + '"]').prop('checked', true);
        }
    }

    $('form[action="/tire_catalog/"] select[name="brand"]').on('change', function() {
        if($(this).children("option:selected").data('type') == 'Летняя шина')
            $('select[name="season"]').val('summer');
        else if($(this).children("option:selected").data('type') == 'Зимняя шина')
            $('select[name="season"]').val('winter');
        else if($(this).children("option:selected").data('type') == 'Зимняя шина')
            $('select[name="season"]').val('agricultural');

        return false;
    });

    $('form[action="/tire_catalog/"] select[name="season"]').on('change', function() {
        $(this).closest('.season_of').removeClass('summer').removeClass('winter').removeClass('agricultural');
        $(this).closest('.season_of').addClass($(this).val());

        return false;
    });

    $('.podbor form').on('submit', function() {
        podbor = $(this).find('[name="podbor"]').val();
        if(podbor === 'tire') {

            if($(this).find('[name="model"]').val() === 'all') {

                brand = $(this).find('select[name="brand"]').val();
                season = $(this).find('select[name="season"]').val();
                w = $(this).find('select[name="w"]').val();
                h = $(this).find('select[name="h"]').val();
                r = $(this).find('select[name="r"]').val();
                runflat = $(this).find('#runflat').prop('checked');

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

                window.location.href = url;
            }

        } else if(podbor == 'disk') {
            brand = $(this).find('[name="brand"]').val();
            r = $(this).find('[name="r"]').val();
            et = $(this).find('[name="et"]').val();
            krepeg = $(this).find('[name="krepeg"]').val();
            pcd = $(this).find('[name="pcd"]').val();
            dia = $(this).find('[name="dia"]').val();
            type = $(this).find('[name="type"]').val();

            url = '/' + podbor + '_catalog/' + brand + '/size/' + r + 'x' + et + '/' + krepeg + 'x' + pcd + '/' + dia + '/';
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

    //        $("#slider-range").slider({
    //            range: true,
    //            min: -35,
    //            max: 185,
    //            values: [slidermin, slidermax],
    //            slide: function (event, ui) {
    //                $('input[name="et[min]"]').val(ui.values[ 0 ]);
    //                $('input[name="et[max]"]').val(ui.values[ 1 ]);
    //            }
    //        });
});