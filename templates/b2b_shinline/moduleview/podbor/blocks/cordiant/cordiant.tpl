{if count($list)}
    <div class="alternative">
        <div class="title h4 ta-c">Лучшая альтернатива</div>
        <div class="product__block">
            {foreach $list as $product}
                {$main_image=$product->getMainImage()}
                {$product_type=$product->getPropertyValueByTitle('Тип товара')}
                <div class="col-xs-12">
                    <div class="tyre_block catalog__tyre_block clearfix {if $product->isOffersUse() || $product->isMultiOffersUse()} showOfferSelect{/if}" {$product->getDebugAttributes()} data-id="{$product.id}">
                        {foreach $product->getMySpecDir() as $spec}
                            {if $spec.image}
                                <img src="{$spec->__image->getUrl()}" alt=""/>
                            {/if}
                        {/foreach}
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
                                <div class="in__stock hidden-xs hidden-sm">
                                    {if $product.num == 0}
                                        <div class="count">Под заказ</div>
                                    {else if $product.num > 4}
                                        <div class="count">В наличии</div>
                                    {else}
                                        <div class="count">Количество: {$product.num}</div>
                                    {/if}
                                </div>
                                <a href="{$product->getUrl()}" class="buy-button">Купить</a>
                            </div>
                        </div>
                    </div>
                </div>
            {/foreach}
        </div>
    </div>
{/if}