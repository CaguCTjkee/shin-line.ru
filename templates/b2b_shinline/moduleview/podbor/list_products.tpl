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

    {if $brand !== false }
        <div class="welcome clearfix">
        <div class="categoryDescription seo">
            <h1>{$h1_title}</h1>
            <img src="{$brand->__image->getUrl(200,200,'xy')}" class="alingleft" />
            {if !$podbor.radius && !$podbor.season && !$podbor.width && !$podbor.height && !$podbor.et && !$podbor.krepeg && !$podbor.pcd && !$podbor.dia && !$podbor.model}
            {descTopBottom($brand.description)}
            {/if}
            <!-- text_top -->
            </div>
        </div>
    {else}
        <div class="welcome clearfix">
            <div class="categoryDescription seo">
                <h1>{$h1_title}</h1>
            <!-- text_top -->
            </div>
        </div>
    {/if}
    <div id="products" {if $shop_config}class="shopVersion"{/if}>
        {hook name="catalog-list_products:options" title="{t}Просмотр категории продукции:параметры отображения{/t}"}
        <div class="catalog__menu row">
            <div class="sort__by col-xs-12 col-md-12 col-lg-5">
                <div class="select__button">

                    <label for="sort">{t}Сортировать по{/t}:</label>

                    <span class="dropdown">
                        <button class="dropdown-toggle" type="button" id="sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            {if $cur_sort=='dateof'}{t}по дате{/t}
                            {elseif $cur_sort=='rating'}{t}популярности{/t}
                            {elseif $cur_sort=='title'}{t}названию{/t}
                            {elseif $cur_sort=='num'}{t}наличию{/t}
                            {elseif $cur_sort=='rank'}{t}релевантности{/t}
                            {else}{t}цене{/t}{/if}
                        </button>
                        <ul class="dropdown-menu list-sort" aria-labelledby="dropdownMenu1">

                            <li {if $cur_sort=='cost'}class="active"{/if}><a href="{urlmake sort="cost" nsort=$sort.cost}" class="item{if $cur_sort=='cost'} {$cur_n}{/if}" rel="nofollow"><span>{t}цене{/t}</span></a></li>
                            <li {if $cur_sort=='rating'}class="active"{/if}><a href="{urlmake sort="rating" nsort=$sort.rating}" class="item{if $cur_sort=='rating'} {$cur_n}{/if}" rel="nofollow"><span>{t}популярности{/t}</span></a></li>
                            <li {if $cur_sort=='dateof'}class="active"{/if}><a href="{urlmake sort="dateof" nsort=$sort.dateof}" class="item{if $cur_sort=='dateof'} {$cur_n}{/if}" rel="nofollow"><span>{t}дате{/t}</span></a></li>
                            <li {if $cur_sort=='num'}class="active"{/if}><a href="{urlmake sort="num" nsort=$sort.num}" class="item{if $cur_sort=='num'} {$cur_n}{/if}" rel="nofollow"><span>{t}наличию{/t}</span></a></li>
                            <li {if $cur_sort=='title'}class="active"{/if}><a href="{urlmake sort="title" nsort=$sort.title}" class="item{if $cur_sort=='title'} {$cur_n}{/if}" rel="nofollow"><span>{t}названию{/t}</span></a></li>
                                {if $can_rank_sort}
                                <li {if $cur_sort=='rank'}class="active"{/if}><a href="{urlmake sort="rank" nsort=$sort.rank}" class="item{if $cur_sort=='rank'} {$cur_n}{/if}" rel="nofollow"><span>{t}релевантности{/t}</span></a></li>
                                {/if}
                        </ul>
                    </span>
                </div>
            </div>
            <div class="menu__mode hidden-xs hidden-sm col-md-3 col-lg-1 pull-right">
                <a href="{urlmake viewAs=table}" class="menu__mode-left viewAs {if $view_as == 'table'} act{/if}" rel="nofollow"></a>
                <a href="{urlmake viewAs=blocks}" class="menu__mode-right viewAs {if $view_as == 'blocks'} act{/if}" rel="nofollow"></a>
            </div>
        </div>
        {/hook}

        {if count($list)}
            <div class="product__block">
                {if $view_as == 'blocks'}
                    {foreach $list as $product}
                        {$main_image=$product->getMainImage()}
                        {$product_type=$product->getPropertyValueByTitle('Тип товара')}
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div class="tyre_block catalog__tyre_block row {if $product->isOffersUse() || $product->isMultiOffersUse()} showOfferSelect{/if}" {$product->getDebugAttributes()} data-id="{$product.id}">
                                {foreach $product->getMySpecDir() as $spec}
                                    {if $spec.image}
                                        <img src="{$spec->__image->getUrl()}" alt=""/>
                                    {/if}
                                {/foreach}
                                </span>
                                <span class="labels tyre__new">
                                    {foreach $product->getMySpecDir() as $spec}
                                        {if $spec.image}
                                            <img src="{$spec->__image->getUrl()}" alt=""/>
                                        {/if}
                                    {/foreach}
                                </span>
                                <div class="catalog__tyre__pic">
                                    <a href="{$product->getUrl()}"><img src="{$main_image->getUrl(250, 270, 'xy')}" class="middlePreview" alt="{$main_image.title|default:"{$product.title}"}"/></a>
                                </div>
                                <div class="catalog__tyre__description">
                                    <div class="tyre__name"><a href="{$product->getUrl()}"><span style="font-weight: bold;">{$product.title}</span></a></div>
                                    <span class="{if $product_type == 'Летняя шина'}summer__tyres{elseif $product_type == 'Зимняя шина'}winter__tyres{/if} season_of_tyre">{$product_type}</span>
                                    <span class="catalog__price__actual">{$product->getCost()} {$product->getCurrency()}</span>
                                    <div class="form_submit-block">
                                        <span class="in__stock hidden-xs hidden-sm">
                                            {if $product.num == 0}
                                                <div class="count">Под заказ</div>
                                            {else if $product.num > 4}
                                                <div class="count">В наличии</div>
                                            {else}
                                                <div class="count">Количество: {$product.num}</div>
                                            {/if}
                                        </span>
                                        <a href="{$product->getUrl()}" class="buy-button">Купить</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/foreach}
                {else}
                    {foreach $list as $product}
                        {$main_image=$product->getMainImage()}
                        {$product_type=$product->getPropertyValueByTitle('Тип товара')}
                        {$product_runflat=$product->getPropertyValueByTitle('RunFlat')}
                        <div class="no-padding-horisontal col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="tyre_block viewAs-table catalog__tyre_block row {if $product->isOffersUse() || $product->isMultiOffersUse()} showOfferSelect{/if}" {$product->getDebugAttributes()} data-id="{$product.id}">
                                <span class="labels tyre__new">
                                    {foreach $product->getMySpecDir() as $spec}
                                        {if $spec.image}
                                            <img src="{$spec->__image->getUrl()}" alt=""/>
                                        {/if}
                                    {/foreach}
                                </span>
                                <div class="catalog1__tyre__pic col-xs-12 col-md-4 col-lg-3">
                                    <a href="{$product->getUrl()}"><img src="{$main_image->getUrl(250, 270, 'xy')}" class="middlePreview" alt="{$main_image.title|default:"{$product.title}"}"/></a>
                                </div>
                                <div class="catalog1__tyre__description col-xs-12 col-md-8 col-lg-9">
                                    <div class="tyre__name"><a href="{$product->getUrl()}"><span style="font-weight: bold;">{$product.title}</span></a></div>
                                    <span class="{if $product_type == 'Летняя шина'}summer__tyres{elseif $product_type == 'Зимняя шина'}winter__tyres{/if} season_of_tyre">{$product_type}</span>
                                    {if $product_runflat != ''}
                                        <div class="tyre__runflat"><img src="{$THEME_IMG}/icon-runflat.png" alt=""></div>
                                        {/if}
                                    <div class="price__block">
                                        <span class="catalog1__price__actual">{$product->getCost()} {$product->getCurrency()}</span>
                                    </div>
                                    <div class="form_submit-block1">
                                        <a href="{$product->getUrl()}" class="buy-button">Купить</a>
                                        <span class="in__stock1 hidden-xs hidden-sm">
                                            {if $product.num == 0}
                                                <div class="count">Под заказ</div>
                                            {else if $product.num > 4}
                                                <div class="count">В наличии</div>
                                            {else}
                                                <div class="count">Количество: {$product.num}</div>
                                            {/if}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/foreach}
                {/if}
            </div>
        {else}
            <div class="noProducts error">
                {if !empty($query)}
                    {t}Извините, ничего не найдено{/t}
                {else}
                    {t}В данной категории нет ни одного товара{/t}
                {/if}
            </div>
        {/if}
    </div>
    <div style="clear: both;"></div>
    <div class="categoryDescription seo">
        {if !$podbor.radius && !$podbor.season && !$podbor.width && !$podbor.height && !$podbor.et && !$podbor.krepeg && !$podbor.pcd && !$podbor.dia && !$podbor.model}
         {descTopBottom($brand.description, true)}
        {/if}
        <!-- text_bottom -->
    </div>
{/if}