{addjs file="jquery.changeoffer.js?v=2"}
{addjs file="jcarousel/jquery.jcarousel.min.js"}
{addjs file="list_product.js"}
{$shop_config=ConfigLoader::byModule('shop')}
{$check_quantity=$shop_config->check_quantity}
{$list = $this_controller->api->addProductsMultiOffersInfo($list)}
{$list = $this_controller->api->addProductsDirs($list)}

{if $no_query_error}
    <div class="noQuery">
        {t}Не задан поисковый запрос{/t}
    </div>
{else}
    {if count($list)}
        <div class="col-xs-12 col-md-12 col-lg-5">
            <div class="select__button">

                <label for="sort">{t}Сортировать по{/t}:</label>

                <span class="dropdown">
                        <button class="dropdown-toggle" type="button" id="sort" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="true">
                            {if $cur_sort=='dateof'}{t}по дате{/t}
                            {elseif $cur_sort=='rating'}{t}популярности{/t}
                            {elseif $cur_sort=='title'}{t}названию{/t}
                            {elseif $cur_sort=='num'}{t}наличию{/t}
                            {elseif $cur_sort=='rank'}{t}релевантности{/t}
                            {else}{t}цене{/t}{/if}
                        </button>
                        <ul class="dropdown-menu list-sort" aria-labelledby="dropdownMenu1">

                            <li {if $cur_sort=='cost'}class="active"{/if}><a
                                        href="{urlmake sort="cost" nsort=$sort.cost}"
                                        class="item{if $cur_sort=='cost'} {$cur_n}{/if}"
                                        rel="nofollow"><span>{t}цене{/t}</span></a></li>
                            <li {if $cur_sort=='rating'}class="active"{/if}><a
                                        href="{urlmake sort="rating" nsort=$sort.rating}"
                                        class="item{if $cur_sort=='rating'} {$cur_n}{/if}"
                                        rel="nofollow"><span>{t}популярности{/t}</span></a></li>
                            <li {if $cur_sort=='dateof'}class="active"{/if}><a
                                        href="{urlmake sort="dateof" nsort=$sort.dateof}"
                                        class="item{if $cur_sort=='dateof'} {$cur_n}{/if}"
                                        rel="nofollow"><span>{t}дате{/t}</span></a></li>
                            <li {if $cur_sort=='num'}class="active"{/if}><a href="{urlmake sort="num" nsort=$sort.num}"
                                                                            class="item{if $cur_sort=='num'} {$cur_n}{/if}"
                                                                            rel="nofollow"><span>{t}наличию{/t}</span></a></li>
                            <li {if $cur_sort=='title'}class="active"{/if}><a
                                        href="{urlmake sort="title" nsort=$sort.title}"
                                        class="item{if $cur_sort=='title'} {$cur_n}{/if}"
                                        rel="nofollow"><span>{t}названию{/t}</span></a></li>
                            {if $can_rank_sort}
                                <li {if $cur_sort=='rank'}class="active"{/if}><a
                                            href="{urlmake sort="rank" nsort=$sort.rank}"
                                            class="item{if $cur_sort=='rank'} {$cur_n}{/if}"
                                            rel="nofollow"><span>{t}релевантности{/t}</span></a></li>
                            {/if}
                        </ul>
                    </span>
            </div>
        </div>
        <table class="table table-striped table-products">
            <thead>
            <tr class="info">
                <td>Фото</td>
                <td>Код</td>
                <td>Название</td>
                <td>Остаток</td>
                <td>Срок доставки</td>
                <td>
                    {if $podbor.podbor == 'tire'}
                        Сезон
                    {elseif $podbor.podbor == 'truck'}
                        <span data-toggle="tooltip" data-placement="top" title="Применяемость">Прим.</span>
                    {else}
                        Тип
                    {/if}
                </td>
                <td>Цена</td>
                <td>Кол-во</td>
                <td>Корзина</td>
            </tr>
            </thead>
            <tbody>
            {foreach $list as $product}
                {$main_image=$product->getMainImage()}
                {$product_type=$product->getPropertyValueByTitle('Тип товара')}
                {$thorns=$product->getPropertyValueByTitle('Шип')}
                {assign var=warehouse_stock value=$product->getWarehouseFullStock()}
                {assign var=stick_info value=$product->getWarehouseStickInfo()}

                {if $warehouse_stock[11] > 0}
                    {assign var=delivery_days value='1'}
                    {assign var=delivery_days_text value='день'}
                {else}
                    {assign var=day_of_week value=$smarty.now|date_format:"%u"}
                    {if $day_of_week == 1}
                        {assign var=delivery_days value=7}
                        {assign var=delivery_days_text value='дней'}
                    {elseif $day_of_week == 2}
                        {assign var=delivery_days value=6}
                        {assign var=delivery_days_text value='дней'}
                    {elseif $day_of_week == 3}
                        {assign var=delivery_days value=5}
                        {assign var=delivery_days_text value='дней'}
                    {elseif $day_of_week == 4}
                        {assign var=delivery_days value=4}
                        {assign var=delivery_days_text value='дня'}
                    {elseif $day_of_week == 5}
                        {assign var=delivery_days value=3}
                        {assign var=delivery_days_text value='дня'}
                    {elseif $day_of_week == 6}
                        {assign var=delivery_days value=2}
                        {assign var=delivery_days_text value='дня'}
                    {else}
                        {assign var=delivery_days value=1}
                        {assign var=delivery_days_text value='день'}
                    {/if}
                {/if}

                {assign var=warehouses_info value=''}
                {foreach $stick_info.warehouses as $warehous}
                    {if $warehouse_stock[$warehous.id] > 0 }
                        {if $warehouse_stock[$warehous.id] > 30}
                            {assign var=warehouse_stock_count value='более 30'}
                        {else}
                            {assign var=warehouse_stock_count value=$warehouse_stock[$warehous.id]}
                        {/if}

                        {assign var=warehouses_info value=$warehouses_info|cat:$warehous.title|cat:' - '|cat:$warehouse_stock_count|cat:' шт.<br>'}
                    {/if}
                {/foreach}

                {if $product@first}
                    {*{$stick_info|var_dump}*}
                {/if}
                <tr class="clearfix {if $thorns|trim == 'да'}thorns{/if}" data-id="{$product.id}">
                    <td class="main-image">
                        <a href="{$product->getUrl()}">
                            <img src="{$main_image->getUrl(250, 270, 'xy')}" class="middlePreview"
                                 alt="{$main_image.title|default:"{$product.title}"}"/>
                        </a>
                    </td>
                    <td class="product-barcode">
                        <span class="visible-xs-inline">Код: </span>
                        {$product.id}
                    </td>
                    <td class="product-title clearfix">
                        <a href="{$product->getUrl()}">
                            {$product.title}
                        </a>
                    </td>
                    <td class="product-num">
                        <span class="visible-xs-inline">Остаток: </span>
                        {if $product.num > 0}
                            <span class="text-success" data-toggle="tooltip" data-html="true" data-placement="top"
                                  title="{$warehouses_info}">
                                <i class="int hidden">{$product.num}</i>

                                {assign var=maykop value=$warehouse_stock[15]+$warehouse_stock[16]}
                                {if $warehouse_stock[11] > 0}
                                    {if $warehouse_stock[11] > 30}
                                        более 30
                                    {else}
                                        {$warehouse_stock[11]}
                                    {/if}
                                {/if}
                                {if $warehouse_stock[11] > 0 && $maykop > 0}
                                    +
                                {/if}
                                {if $maykop > 0}
                                    {if $maykop > 30}
                                        более 30
                                    {else}
                                        {$maykop}
                                    {/if}
                                {/if}
                                шт
                            </span>
                        {else}
                            <span class="text-danger">нет в наличии</span>
                        {/if}
                    </td>
                    <td class="product-delivery">
                        {if $product.num > 0}
                            <span class="visible-xs-inline">Срок доставки: <i class="sicon sicon-info"
                                                                              data-toggle="tooltip" data-placement="top"
                                                                              title="{$delivery_days} {$delivery_days_text} до склада Краснодар"></i></span>
                            <span class="hidden-xs" data-toggle="tooltip" data-placement="top"
                                  title="{$delivery_days} {$delivery_days_text} до склада Краснодар">{$delivery_days} {$delivery_days_text}</span>
                        {else}
                            <span class="text-danger">-</span>
                        {/if}
                    </td>
                    <td class="product-season">
                        <span class="visible-xs-inline">
                            {if $podbor.podbor == 'tire' && $product_type != 'Сельхозшина'}
                            Сезон
                            {elseif $podbor.podbor == 'truck'}
                            Применяемость
                            {else}
                            Тип
                            {/if}:
                        </span>
                        {if $product_type == 'Летняя шина'}
                            <i class="sicon sicon-sun" data-toggle="tooltip" data-placement="top" title="Лето"></i>
                        {elseif $product_type == 'Зимняя шина'}
                            <i class="sicon sicon-snow" data-toggle="tooltip" data-placement="top" title="Зима"></i>
                        {elseif $product_type == 'Грузовая шина'}
                            {$product->getPropertyValueByTitle('Применяемость грузового колеса')}
                        {else}
                            {$product_type}
                        {/if}
                    </td>
                    <td class="product-cost">
                        {$product->getCost()} {$product->getCurrency()}
                    </td>
                    <td class="product-count">
                        <div class="amount-pick {if $product.num == 0}disabled{/if}">
                            <input type="hidden" name="amount" class="field-amount"
                                   value="{if $product.num > 4}5{else}{$product.num}{/if}">
                            <div class="amount-quick-pick">
                                <button type="button" class="btn btn-primary dec-pick">-</button>
                                <span class="text-amount">
                                    <i class="int">{if $product.num > 4}5{else}{$product.num}{/if}</i> шт
                                </span>
                                <button type="button" class="btn btn-primary inc-pick">+</button>
                            </div>
                        </div>
                    </td>
                    <td class="product-cart">
                        <a data-href="{$router->getUrl('shop-front-cartpage', ["add" => $product.id])}"
                           class="{if $product.num > 0}addToCart noShowCart{/if} {if $product.num == 0}disabled{/if}">
                            <i class="sicon sicon-cart"></i>
                        </a>
                    </td>
                </tr>
            {/foreach}
            </tbody>
        </table>
    {else}
        <div class="alert alert-danger">Товары не найдены</div>
    {/if}
{/if}