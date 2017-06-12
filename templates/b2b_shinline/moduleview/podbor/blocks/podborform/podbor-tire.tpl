<div class="podbor">
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
            <form action="/tire_catalog/" method="GET" name="shini" class="select__form" id="form1">
                <input type="hidden" name="podbor" value="tire">
                <input type="hidden" name="model" value="all">
                <div class="tyre__type">
                    <div class="select__button">
                        <select name="brand" id="origin">
                            <option selected="" value="all">Все бренды</option>
                            {foreach from=$brands item=hooyak}
                                <option value="{$hooyak.val_str}" data-type="{$hooyak.type}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>
                <br>
                <div class="tyre__width size1">
                    <label for="t__width">ШИРИНА</label>
                    <div class="select__button">
                        <select name="w" id="t__width">
                            <option selected="" value="">0</option>
                            {foreach from=$weights item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>
                <div class="tyre__height size1">
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
                <div class="tyre__diameter size1">
                    <label for="t__diameter">ДИАМЕТР</label>
                    <div class="select__button">
                        <select name="r" id="t__diameter">>
                            <option selected="" value="">0</option>
                            {foreach from=$sradius item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>
                <div class="radio__button season_of">
                    <select name="season" class="select__button_select">
                        <option value="all">Выбрать</option>
                        <option value="summer">Летние</option>
                        <option value="winter">Зимние</option>
                        <option value="agricultural">Сельхоз шина</option>
                    </select>
                </div>
                <div class="runflat1 checkbox__green">
                    <input type="checkbox" id="runflat">
                    <label for="runflat" class="label2">С технологией <img src="{$THEME_IMG}/icon-runflat.png" alt="runflat"></label>
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

