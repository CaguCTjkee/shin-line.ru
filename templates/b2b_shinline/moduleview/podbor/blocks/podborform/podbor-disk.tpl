<div class="select_sidebar col-xs-12 col-sm-5 col-md-4 col-lg-3 podbor">
    <div class="podbor__select-inner select_sidebar-inner">
        <div class="podbor__select select__type">
            <div class="autos">
                <button data-for="auto">По автомобилю</button>
            </div>
            <div class="params">
                <button data-for="tire" class="active">По параметрам</button>
            </div>
        </div>
        <div class="podbor__select-value select__form-value for-tire">
            <form action="/disk_catalog/" method="GET" name="shini" class="select__form" id="form1">
                <input type="hidden" name="podbor" value="disk">
                <input type="hidden" name="brand" value="all">

                <label class="podbor-title">Диаметр х Вылет диска (ЕТ)</label>
                <div class="podbor-two-select">
                    <div class="select__button first-child">
                        <select name="r" id="radius">
                            <option selected="" value="*">0</option>
                            {foreach from=$dradius item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                    <div class="select__button">
                        <select name="et">
                            <option selected="" value="*">0</option>
                            {foreach from=$et item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>

                <label class="podbor-title">Крепежные отверстия (PCD)</label>
                <div class="podbor-two-select">
                    <div class="select__button first-child">
                        <select name="krepeg">
                            <option selected="" value="*">0</option>
                            {foreach from=$krepeg item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                    <div class="select__button">
                        <select name="pcd">
                            <option selected="" value="*">0</option>
                            {foreach from=$pcd item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>

                <label class="podbor-title">Центральное отверстие (DIA)</label>
                <div class="podbor-two-select">
                    <div class="select__button first-child">
                        <select name="dia">
                            <option selected="" value="*">0</option>
                            {foreach from=$dia item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>

                    <div class="select__button">
                        <select name="type">
                            <option selected="" value="">Все типы</option>
                            <option value="molded">Литые</option>
                            <option value="extruded">Штамповка</option>
                        </select>
                    </div>
                </div>
                <div class="ABC_submit-block">
                    <input type="submit" value="Подобрать" class="submit-button">
                </div>
            </form>
        </div>
        <div class="podbor__select-value select__form-value for-auto hidden">
            <form action="/engine/ajax/2.php" method="GET" name="auto" class="select__form">
                <div class="ABC_select select__button">
                    <select name="auto" id="auto" size="1" onchange="xajax_getmodels(this.value)">
                        <option value="">Выберите производителя</option>
                        {foreach from=$vendors item=vendor key=vendor_id}
                            <option value="{$vendor_id}">{$vendor.vendor}</option>
                        {/foreach}
                    </select>
                </div>
                <div class="ABC_select select__button">
                    <select name="models" id="models" size="1" onchange="xajax_getyear(this.value)"></select>
                </div>
                <div class="ABC_select select__button">
                    <select name="year" id="year" size="1" onchange="xajax_getmodification(this.value)"></select>
                </div>
                <div class="ABC_select select__button">
                    <select name="modification" id="modification" size="1"></select>
                </div>
            </form>
        </div>
    </div>
</div>