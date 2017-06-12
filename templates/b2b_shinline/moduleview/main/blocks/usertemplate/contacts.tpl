<h1>Наши контакты</h1>
<div class="regime col-xs-12 col-sm-6 col-sm-push-6 col-md-3 col-md-push-4">
    <div class="regime-block">
        <h3>Режим работы офиса:</h3>
        <ul>
            <li>Пн-Пт с 09:00 до 18:00</li>
            <li>Сб с 9:00 до 17:00</li>
            <li>Вс с 10:00 до 16:00</li>
        </ul>
    </div>
</div>
<div class="contact__info col-xs-12 col-sm-6 col-sm-pull-6 col-md-4 col-md-pull-3">
    <div class="contact__info-block">
        <ul class="tel tel__free">
            <li><a href="tel:88005556963">8-800-555-69-63</a></li>
        </ul>
        <div class="contact__about">Звонок бесплатный</div>
        <ul class="tel">
            <li><a href="tel:+79182866326">8 (918) 286-63-26</a></li>
            <li><a href="tel:+79184419717">8 (918) 441-97-17</a></li>
            <li><a href="tel:+78612603560">8 (861) 260-35-60</a></li>
        </ul>
        <div class="contact__about">Факс</div>
        <div class="email"><a href="mailto:info@shin-line.ru">info@shin-line.ru</a></div>
        <div class="contact__about">Вы всегда можете найти нас по адресу:</div>
        <div class="adress">г.Краснодар ул. Тюляева 34</div>
    </div>
</div>
<div class="lil__map hidden-xs hidden-sm col-md-5">
    <p style="text-align: center;">
        <object width="500" height="300" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,18,0">
            <object width="500" height="300" type="application/x-shockwave-flash" data="http://www.shin-line.ru/swf/map.swf">
                <param name="quality" value="high">
                <param name="scale" value="noborder">
                <param name="salign" value="t">
                <param name="wmode" value="opaque">
                <param name="src" value="http://www.shin-line.ru/swf/map.swf">
                <param name="width" value="850">
                <param name="height" value="500">
                <embed width="850" height="500" id="linebanner" src="http://www.shin-line.ru/swf/map.swf">
            </object>
        </object>
    </p>
</div>
<div style="display:none;visibility:hidden">
    <div itemscope itemtype="http://schema.org/Organization">
        <span itemprop="name">Шин-Лайн</span>
        Контакты:
        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            Адрес:
            <span itemprop="streetAddress">ул. Тюляева 34</span>,
            <span itemprop="addressLocality">Краснодар</span>
        </div>
        Телефон:<span itemprop="telephone">8-800-555-69-63</span>,
        Телефон:<span itemprop="telephone">8 (918) 286-63-26</span>,
        Телефон:<span itemprop="telephone">8 (918) 441-97-17</span>,
        Факс:<span itemprop="faxNumber">8 (861) 260-35-60</span>,
        Электронная почта: <span itemprop="email">info@shin-line.ru</span>
    </div>
</div>
<div id="map"></div>
<script type="text/javascript">
    var directionsService;
    var directionsDisplay;
    var shinline;
    var givegeolocation = false;
    var latitude;
    var longitude;

    function initMap() {
        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();

        shinline = new google.maps.LatLng(45.045785, 39.09633);
        var mapOptions = {
            zoom: 18,
            center: shinline,
            scrollwheel: false
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        directionsDisplay.setMap(map);

        var image = new google.maps.MarkerImage(
                '/templates/shinline2016/resource/img/map_marker_blue.png',
                new google.maps.Size(40, 54),
                new google.maps.Point(0, 0),
                new google.maps.Point(29, 78)
                );

        var marker = new google.maps.Marker({
            icon: image,
            position: shinline,
            map: map,
            title: 'Shin-Line'
        });
    }
</script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJSWP0Ve_O1LC0-Kzwju935JHLCVoE9PE&callback=initMap"></script>