<div class="select_sidebar col-xs-12 col-sm-5 col-md-4 col-lg-3 podbor">
    <div class="podbor__select-inner select_sidebar-inner">
        <div class="podbor__select select__type">
            <div class="autos">
                <button class="active">По параметрам</button>
            </div>
        </div>
        <div class="podbor__select-value select__form-value for-tire">
            <form action="/truck_catalog/" method="GET" class="select__form">
                <input type="hidden" name="podbor" value="truck">
                <input type="hidden" name="brand" value="all">
                <div class="tyre__width size1">
                    <label for="t__width">ШИРИНА</label>
                    <div class="select__button">
                        <select name="w">
                            <option value="" selected="selected">0</option>
                            {foreach from=$weights item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>
                <div class="tyre__height size1">
                    <label for="t__height">ВЫСОТА</label>
                    <div class="select__button">
                        <select name="h">
                            <option value="" selected="selected">0</option>
                            {foreach from=$heights item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>
                <div class="tyre__diameter size1">
                    <label for="t__diameter">ДИАМЕТР</label>
                    <div class="select__button">
                        <select name="r">
                            <option value="" selected="selected">0</option>
                            {foreach from=$sradius item=hooyak}
                                <option value="{$hooyak.val_str}">{$hooyak.val_str}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>

                <div class="podbor__select__applicability">
                    <div class="applicability">
                        <div class="sp-list-radio">
                            <input type="radio" id="anyone" name="applicability" value="" checked="">
                            <label for="anyone">Любая</label>
                            <input type="radio" id="steering" name="applicability" value="steering">
                            <label for="steering">Рулевая</label>
                            <input type="radio" id="leading" name="applicability" value="leading">
                            <label for="leading">Ведущая</label>
                            <input type="radio" id="trailers" name="applicability" value="trailers">
                            <label for="trailers">Прицепная</label>
                            <input type="radio" id="universal" name="applicability" value="universal">
                            <label for="universal">Универсальная</label>
                        </div>
                    </div>
                </div>

                <div class="ABC_submit-block">
                    <input type="submit" value="Подобрать" class="submit-button">
                </div>
            </form>
        </div>
    </div>
</div>