{addJS file="//api-maps.yandex.ru/2.1/?lang=ru_RU" basepath="root"}
<div class="warehouseCard">
    <h1>{$warehouse.title}</h1>
    <div class="warehouseDesc">
        {if $warehouse.image}
            <img class="mainImage" src="{$warehouse.__image->getUrl(200,200,'axy')}"/>
        {/if}
        {$warehouse.description}
    </div>
    <div class="warehouseInfo container">
        {if $warehouse.adress}
        <div class="address cox-xs-12 col-sm-4">
            <div class="center">
                <i class="glyphicon glyphicon-map-marker"></i>
                <p class="title">{t}Адрес{/t}</p>
                <p class="value">{$warehouse.adress}</p>
            </div>
        </div>
        {/if}

        {if $warehouse.phone}
        <div class="phone cox-xs-12 col-sm-4">
            <div class="center">
                <i class="glyphicon glyphicon-earphone"></i>
                <p class="title">{t}Телефон{/t}</p>
                <p class="value">{$warehouse.phone}</p>
            </div>
        </div>
        {/if}

        {if $warehouse.work_time}
        <div class="worktime cox-xs-12 col-sm-4">
            <div class="center">
                <i class="glyphicon glyphicon-time"></i>
                <p class="title">{t}Время работы{/t}</p>
                <p class="value">{$warehouse.work_time}</p>
            </div>
        </div>
        {/if}
    </div>
    <div class="embed-responsive embed-responsive-16by9">
        <div id="warehouseMap" class="warehouseMap embed-responsive-item">
            {* карта *}
        </div>
    </div>
</div>

<script type="text/javascript">
    $(function () {
        ymaps.ready(init); //Инициализация Yandex карты

        function init() {
            //Ставим параметры карты
            myMap = new ymaps.Map("warehouseMap", {
                center: [{$warehouse.coor_x}, {$warehouse.coor_y}],
                zoom: 12
            });

            //Ставим параметры метке
            myPlacemark = new ymaps.Placemark([{$warehouse.coor_x}, {$warehouse.coor_y}], {
                hintContent: '<div><p><b>{$warehouse.title}</b></p>{if !empty($warehouse.adress)}<p>{t}адрес:{/t} {$warehouse.adress}</p>{/if}{if !empty($warehouse.phone)}<p>тел.:{$warehouse.phone}</p>{/if}{if !empty($warehouse.work_time)}<p>время работы: {$warehouse.work_time}</p>{/if}</div>',
                balloonContent: '<div><p><b>{$warehouse.title}</b></p>{if !empty($warehouse.adress)}<p>{t}адрес:{/t} {$warehouse.adress}</p>{/if}{if !empty($warehouse.phone)}<p>тел.:{$warehouse.phone}</p>{/if}{if !empty($warehouse.work_time)}<p>время работы: {$warehouse.work_time}</p>{/if}</div>'
            });

            myMap.geoObjects.add(myPlacemark); //Добавляем метку
        }
    });
</script>