<div class="podbor clearfix">

    {*
    <!--
    Описание работы кнопок подбора

        Для кнопок-переключателей подбора испльзуется класс "btn-podbor-toggle". Он ищет в атрибуте
        "data-target" элемент и показывает его, добавляет класс "active", скрывая все эелементы с атрибутом, который
        указан в "data-hide" с помощью класса "hidden".

    Алешко из будующего, не благодари :)
    -->
    *}

    <div class="podbor-header hidden-lg">
        <div class="podbor-header-top clearfix">
            <button class="btn btn-link btn-podbor-toggle active" data-target=".podbor-toggle-tire"
                    data-hide="data-podbor">Подбор шин
            </button>
            <button class="btn btn-link btn-podbor-toggle" data-target=".podbor-toggle-disk" data-hide="data-podbor">
                Подбор дисков
            </button>
        </div>
        <div class="podbor-header-bottom clearfix podbor-toggle-tire" data-podbor="hide">
            <button class="btn btn-default btn-podbor-toggle active" data-target=".podbor-block-toggle-tire"
                    data-hide="data-podbor-block">Легковые
            </button>
            <button class="btn btn-default btn-podbor-toggle" data-target=".podbor-block-toggle-truck"
                    data-hide="data-podbor-block">Грузовые
            </button>
            <button class="btn btn-default btn-podbor-toggle" data-target=".podbor-block-toggle-agri"
                    data-hide="data-podbor-block">Сельхоз.
            </button>
        </div>
        <div class="podbor-header-bottom clearfix podbor-toggle-disk hidden" data-podbor="hide">
            <button class="btn btn-default btn-podbor-toggle active" data-target=".podbor-block-toggle-disk"
                    data-hide="data-podbor-block2">Легковые
            </button>
            <button class="btn btn-default btn-podbor-toggle" data-target=".podbor-block-toggle-truck-disk"
                    data-hide="data-podbor-block2">Грузовые
            </button>
            <button class="btn btn-default btn-podbor-toggle" data-target=".podbor-block-toggle-auto"
                    data-hide="data-podbor-block2">По авто
            </button>
        </div>
    </div>

    <div class="col-xs-12 col-lg-6 podbor-wrapper podbor-toggle-tire visible-lg" data-podbor="hide">
        <div class="podbor-block">
            <div class="podbor-block-header clearfix visible-lg">
                <div class="h2">Шины</div>
                <button class="btn btn-default btn-podbor-toggle" data-target=".podbor-block-toggle-agri"
                        data-hide="data-podbor-block">Сельхозные
                </button>
                <button class="btn btn-default btn-podbor-toggle" data-target=".podbor-block-toggle-truck"
                        data-hide="data-podbor-block">Грузовые
                </button>
                <button class="btn btn-default btn-podbor-toggle active" data-target=".podbor-block-toggle-tire"
                        data-hide="data-podbor-block">Легковые
                </button>
            </div>
            <div class="podbor-block-inner podbor-tire podbor-block-toggle-tire" data-podbor-block="hide">
                <form action="/tire_catalog/">
                    <input type="hidden" name="podbor" value="tire">
                    <input type="hidden" name="model" value="all">

                    <div class="form-group select-wrapper select-season">
                        <select name="season" id="season" class="form-control">
                            <option value="all">Выбор сезона</option>
                            {foreach from=$params.tire_season item=hooyak}
                                <option value="{if $hooyak.val_str_i18n}{$hooyak.val_str_i18n}{else}{$hooyak.val_str}{/if}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>

                    <div class="form-group select-wrapper select-brand">
                        <select name="brand" class="form-control">
                            <option selected="" value="all">Все производители</option>
                            {foreach from=$brands item=hooyak}
                                <option value="{$hooyak.val_str}" data-type="{$hooyak.type}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>

                    <div class="form-group select-group clearfix">
                        <div class="col-xs-4">
                            <label for="w">Ширина</label>
                            <div class="select-wrapper">
                                <select name="w" class="form-control">
                                    <option selected="" value="" id="t__width">0</option>
                                    {foreach from=$params.tire_weight item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <label for="h">Высота</label>
                            <div class="select-wrapper">
                                <select name="h" class="form-control">
                                    <option selected="" value="">0</option>
                                    {foreach from=$params.tire_heights item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <label for="r">Радиус</label>
                            <div class="select-wrapper">
                                <select name="r" class="form-control">
                                    <option selected="" value="">0</option>
                                    {foreach from=$params.tire_radius item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="runflat checkbox__green">
                        <span class="checkbox-parent">
                            <input name="runflat" id="runflat" type="checkbox" value="Да">
                            <label for="runflat" class="label2">С технологией
                                <img src="{$THEME_IMG}/icon-runflat.png" alt="runflat"></label>
                        </span>
                        <span class="checkbox-parent">
                            <input name="thorns" id="thorns" type="checkbox" value="да">
                            <label for="thorns" class="label2">Шипы</label>
                        </span>
                    </div>

                    <div class="select__form-submit-block clearfix">
                        <input type="submit" value="Подобрать" class="submit-button">
                        <button type="button" class="podbor-cancel-button submit-button cancel-button hidden">Очистить
                        </button>
                    </div>
                </form>
            </div>
            <div class="podbor-block-inner podbor-truck podbor-block-toggle-truck hidden" data-podbor-block="hide">
                <form action="/truck_catalog/">
                    <input type="hidden" name="podbor" value="truck">
                    <input type="hidden" name="brand" value="all">

                    <div class="form-group select-wrapper select-season">
                        <select id="applicability" name="applicability">
                            <option value="">Применяемость (ось)</option>
                            {foreach from=$params.truck_applicability item=hooyak}
                                <option value="{if $hooyak.val_str_i18n}{$hooyak.val_str_i18n}{else}{$hooyak.val_str}{/if}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                    <div class="clearfix"></div>

                    <div class="form-group select-group clearfix">
                        <div class="col-xs-4">
                            <label for="w">Ширина</label>
                            <div class="select-wrapper">
                                <select name="w" class="form-control">
                                    <option selected="" value="" id="t__width">0</option>
                                    {foreach from=$params.truck_weight item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <label for="h">Высота</label>
                            <div class="select-wrapper">
                                <select name="h" class="form-control">
                                    <option selected="" value="">0</option>
                                    {foreach from=$params.truck_heights item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <label for="r">Радиус</label>
                            <div class="select-wrapper">
                                <select name="r" class="form-control">
                                    <option selected="" value="">0</option>
                                    {foreach from=$params.truck_radius item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="select__form-submit-block clearfix">
                        <input type="submit" value="Подобрать" class="submit-button">
                        <button type="button" class="podbor-cancel-button submit-button cancel-button hidden">Очистить
                        </button>
                    </div>
                </form>
            </div>
            <div class="podbor-block-inner podbor-truck podbor-block-toggle-agri hidden" data-podbor-block="hide">
                <form action="/agri_catalog/">
                    <input type="hidden" name="podbor" value="agri">
                    <input type="hidden" name="brand" value="all">

                    <div class="form-group select-group clearfix">
                        <div class="col-xs-4">
                            <label for="w">Ширина</label>
                            <div class="select-wrapper">
                                <select name="w" class="form-control">
                                    <option selected="" value="" id="t__width">0</option>
                                    {foreach from=$params.agri_weight item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <label for="h">Высота</label>
                            <div class="select-wrapper">
                                <select name="h" class="form-control">
                                    <option selected="" value="">0</option>
                                    {foreach from=$params.agri_heights item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <label for="r">Радиус</label>
                            <div class="select-wrapper">
                                <select name="r" class="form-control">
                                    <option selected="" value="">0</option>
                                    {foreach from=$params.agri_radius item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="select__form-submit-block clearfix">
                        <input type="submit" value="Подобрать" class="submit-button">
                        <button type="button" class="podbor-cancel-button submit-button cancel-button hidden">Очистить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-lg-6 podbor-wrapper hidden visible-lg podbor-toggle-disk" data-podbor="hide">
        <div class="podbor-block">
            <div class="podbor-block-header clearfix visible-lg">
                <div class="h2">Диски</div>
                <button class="btn btn-default btn-podbor-toggle" data-target=".podbor-block-toggle-auto"
                        data-hide="data-podbor-block2">По автомобилю
                </button>
                <button class="btn btn-default btn-podbor-toggle" data-target=".podbor-block-toggle-truck-disk"
                        data-hide="data-podbor-block2">Грузовые
                </button>
                <button class="btn btn-default btn-podbor-toggle active" data-target=".podbor-block-toggle-disk"
                        data-hide="data-podbor-block2">Легковые
                </button>
            </div>
            <div class="podbor-block-inner disk-bg podbor-block-toggle-disk" data-podbor-block2="hide">
                <form action="/disk_catalog/" class="select__form">
                    <input type="hidden" name="podbor" value="disk">
                    <input type="hidden" name="brand" value="all">

                    <div class="form-group clearfix">
                        <div class="col-sm-6">
                            <label for="t__sizes" class="label-inline">ДИАМЕТР х ШИРИНА ДИСКА</label>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="r" id="radius">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.disk_radius item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="et">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.disk_et item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group clearfix">
                        <div class="col-sm-6">
                            <label for="hole" class="label-inline">КРЕПЕЖНЫК ОТВЕРСТИЯ (PCD)</label>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="krepeg">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.disk_krepeg item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="pcd">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.disk_pcd item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group clearfix">
                        <div class="col-sm-6">
                            <label for="center__hole" class="label-inline">ЦЕНТРАЛЬНОЕ ОТВЕРСТИЕ</label>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="dia">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.disk_dia item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="type">
                                    <option selected="" value="">Все типы</option>
                                    {foreach from=$params.disk_type item=hooyak}
                                        <option value="{if $hooyak.val_str_i18n}{$hooyak.val_str_i18n}{else}{$hooyak.val_str}{/if}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="select__form-submit-block clearfix">
                        <input type="submit" value="Подобрать" class="submit-button">
                        <button type="button" class="podbor-cancel-button submit-button cancel-button hidden">Очистить
                        </button>
                    </div>
                </form>
            </div>
            <div class="podbor-block-inner disk-bg podbor-block-toggle-truck-disk hidden" data-podbor-block2="hide">
                <form action="/truck_disk_catalog/" class="select__form">
                    <input type="hidden" name="podbor" value="truck_disk">
                    <input type="hidden" name="brand" value="all">
                    <input type="hidden" name="type" value="">

                    <div class="form-group clearfix">
                        <div class="col-sm-6">
                            <label for="t__sizes" class="label-inline">ДИАМЕТР х ШИРИНА ДИСКА</label>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="r" id="radius">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.truck_disk_radius item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="et">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.truck_disk_et item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group clearfix">
                        <div class="col-sm-6">
                            <label for="hole" class="label-inline">КРЕПЕЖНЫК ОТВЕРСТИЯ (PCD)</label>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="krepeg">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.truck_disk_krepeg item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="pcd">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.truck_disk_pcd item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group clearfix">
                        <div class="col-sm-6">
                            <label for="center__hole" class="label-inline">ЦЕНТРАЛЬНОЕ ОТВЕРСТИЕ</label>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="select-wrapper">
                                <select name="dia">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$params.truck_disk_dia item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="select__form-submit-block clearfix">
                        <input type="submit" value="Подобрать" class="submit-button">
                        <button type="button" class="podbor-cancel-button submit-button cancel-button hidden">Очистить
                        </button>
                    </div>
                </form>
            </div>
            <div class="podbor-block-inner podbor-block-toggle-auto hidden" data-podbor-block2="hide">
                <form action="/engine/ajax/2.php" method="GET" name="auto" class="select__form">

                    <div class="form-group clearfix">
                        <div class="col-xs-12 col-sm-4">
                            <label for="t__sizes" class="label-inline">Производитель</label>
                        </div>
                        <div class="col-xs-12 col-sm-8">
                            <div class="select-wrapper">
                                <select name="auto" id="auto" onchange="xajax_getmodels(this.value)">
                                    <option value="">Выберите производителя</option>
                                    {foreach from=$vendors item=vendor key=vendor_id}
                                        <option value="{$vendor_id}">{$vendor.vendor}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group clearfix">
                        <div class="col-xs-12 col-sm-4">
                            <label for="t__sizes" class="label-inline">Марка</label>
                        </div>
                        <div class="col-xs-12 col-sm-8">
                            <div class="select-wrapper">
                                <select name="models" id="models" onchange="xajax_getyear(this.value)"></select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group clearfix">
                        <div class="col-xs-12 col-sm-4">
                            <label for="t__sizes" class="label-inline">Год выпуска</label>
                        </div>
                        <div class="col-xs-12 col-sm-8">
                            <div class="select-wrapper">
                                <select name="year" id="year" onchange="xajax_getmodification(this.value)"></select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group clearfix">
                        <div class="col-xs-12 col-sm-4">
                            <label for="t__sizes" class="label-inline">Модификация</label>
                        </div>
                        <div class="col-xs-12 col-sm-8">
                            <div class="select-wrapper">
                                <select name="modification" id="modification"></select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>