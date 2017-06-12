<div class="podbor">
    <div class="select__block col-lg-6 hidden-xs hidden-sm hidden-md">
        <div class="podbor__select-inner select__block-inner">
            <div class="podbor__select select__form-types blue clearfix">
                <div class="h2">Подбор шин</div>
                <button data-for="truck">Грузовых</button>
                <button data-for="tyres" class="active">Легковых</button>
            </div>
            <div class="podbor__select-value select__form-value for-tyres">
                <form action="/tire_catalog/" class="select__form">
                    <div class="select__form-parameters tyres">
                        <input type="hidden" name="podbor" value="tire">
                        <input type="hidden" name="model" value="all">
                        <div class="first-int">
                            <div class="tyre__type">
                                <div class="select__button">
                                    <select name="season" id="season">
                                        <option value="all">Сезон</option>
                                        <option value="summer">Летние</option>
                                        <option value="winter">Зимние</option>
                                        {*<option value="agricultural">Сельхоз шина</option>*}
                                    </select>
                                </div>
                            </div>
                            <div class="tyre__type">
                                <div class="select__button">
                                    <select name="brand">
                                        <option selected="" value="all">Все бренды</option>
                                        {foreach from=$brands item=hooyak}
                                            <option value="{$hooyak.val_str}" data-type="{$hooyak.type}">{$hooyak.val_str}</option>
                                        {/foreach}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="tyre__width size">
                            <label for="t__width">ШИРИНА</label>
                            <div class="select__button">
                                <select name="w">
                                    <option selected="" value="" id="t__width">0</option>
                                    {foreach from=$weights item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="tyre__height size">
                            <label for="t__height">ВЫСОТА</label>
                            <div class="select__button">
                                <select name="h" id="t__height">
                                    <option selected="" value="">0</option>
                                    {foreach from=$heights item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="tyre__diameter size">
                            <label for="t__diameter">ДИАМЕТР</label>
                            <div class="select__button">
                                <select name="r" id="t__diameter">
                                    <option selected="" value="">0</option>
                                    {foreach from=$sradius item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="runflat checkbox__green">
                            <input name="runflat" id="runflat" type="checkbox" value="RunFlat">
                            <label for="runflat" class="label2">С технологией <img src="{$THEME_IMG}/icon-runflat.png" alt="runflat"></label>
                        </div>
                    </div>
                    <div class="select__form-submit-block clearfix">
                        <input type="submit" value="Подобрать" class="submit-button">
                    </div>
                </form>
            </div>
            <div class="podbor__select-value select__form-value for-truck hidden">
                <form action="/truck_catalog/" class="select__form">
                    <div class="select__form-parameters tyres">
                        <input type="hidden" name="podbor" value="truck">
                        <input type="hidden" name="brand" value="all">
                        <div class="first-int">
                            <div class="tyre__type">
                                <div class="select__button">
                                    Применяемость (ось)
                                </div>
                            </div>
                            <div class="tyre__type">
                                <div class="select__button">
                                    <select id="applicability" name="applicability">
                                        <option value="">Любая</option>
                                        <option value="universal">Универсальная</option>
                                        <option value="leading">Ведущая</option>
                                        <option value="trailers">Прицепная</option>
                                        <option value="steering">Рулевая</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="tyre__width size">
                            <label for="t__width">ШИРИНА</label>
                            <div class="select__button">
                                <select name="w">
                                    <option selected="" value="">0</option>
                                    {foreach from=$weights item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="tyre__height size">
                            <label for="t__height">ВЫСОТА</label>
                            <div class="select__button">
                                <select name="h">
                                    <option selected="" value="">0</option>
                                    {foreach from=$heights item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                        <div class="tyre__diameter size">
                            <label for="t__diameter">ДИАМЕТР</label>
                            <div class="select__button">
                                <select name="r">
                                    <option selected="" value="">0</option>
                                    {foreach from=$sradius item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="select__form-submit-block clearfix">
                        <input type="submit" value="Подобрать" class="submit-button">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="select__block col-lg-6 hidden-xs hidden-sm hidden-md">
        <div class="podbor__select-inner select__block-inner podbor">
            <div class="podbor__select select__form-types clearfix">
                <div class="h2">Подбор дисков</div>
                <button data-for="auto">По автомобилю</button>
                <button data-for="disk" class="active">По параметрам</button>
            </div>
            <div class="podbor__select-value select__form-value for-disk">
                <form action="/disk_catalog/" class="select__form">
                    <input type="hidden" name="podbor" value="disk">
                    <input type="hidden" name="brand" value="all">
                    <div class="select__form-parameters disks">
                        <div class="sizes-block">
                            <label for="t__sizes">ДИАМЕТР х ШИРИНА ДИСКА</label>
                            <div class="select__button">
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
                        <div class="hole-block">
                            <label for="hole">КРЕПЕЖНЫК ОТВЕРСТИЯ (PCD)</label>
                            <div class="select__button">
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
                        <div class="center__hole-block">
                            <label for="center__hole">ЦЕНТРАЛЬНОЕ ОТВЕРСТИЕ</label>
                            <div class="select__button">
                                <select name="dia">
                                    <option selected="" value="*">0</option>
                                    {foreach from=$dia item=hooyak}
                                        <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                                    {/foreach}
                                </select>
                                <select name="type">
                                    <option selected="" value="">Все типы</option>
                                    <option value="molded">Литые</option>
                                    <option value="extruded">Штамповка</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="select__form-submit-block clearfix">
                        <input type="submit" value="Подобрать" class="submit-button">
                    </div>
                </form>
            </div>
            <div class="podbor__select-value select__form-value for-auto hidden">
                <form action="/engine/ajax/2.php" method="GET" name="auto" class="select__form">
                    <div class="ABC_select select__button">
                        <label class="podbor-title">Производитель:</label>
                        <select name="auto" id="auto" size="1" onchange="xajax_getmodels(this.value)">
                            <option value="">Выберите производителя</option>
                            {foreach from=$vendors item=vendor key=vendor_id}
                                <option value="{$vendor_id}">{$vendor.vendor}</option>
                            {/foreach}
                        </select>
                    </div>
                    <div class="ABC_select select__button">
                        <label class="podbor-title">Марка:</label>
                        <select name="models" id="models" size="1" onchange="xajax_getyear(this.value)"></select>
                    </div>
                    <div class="ABC_select select__button">
                        <label class="podbor-title">Год выпуска:</label>
                        <select name="year" id="year" size="1" onchange="xajax_getmodification(this.value)"></select>
                    </div>
                    <div class="ABC_select select__button">
                        <label class="podbor-title">Модификация:</label>
                        <select name="modification" id="modification" size="1"></select>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>