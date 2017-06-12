{if $sameproducts}
    {assign var=carousel_count value=3}
    <div class="products {*carousel slide*}" {*data-ride="carousel" data-type="multi" data-interval="3500" id="same_products"*}>
        <div class="h2-title">Похожие модели</div>
        <div class="row carousel-view" id="sameproducts">
            <div class="carousel-view-inner">
                {foreach from=$sameproducts item=product name=product}
                    {assign var=fillProperty value=$product->fillProperty()}
                    {$xfvalue_type = $product->getPropertyValueByTitle('Тип товара')}
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 item" {$product->getDebugAttributes()}>
                        <div class="tyre_block_container">
                            <a href="{$product->getUrl()}">
                                <div class="tyre_block row">
                                    <div class="tyre__new">
                                        <span class="labels">
                                            {foreach from=$product->getMySpecDir() item=spec}
                                                {if $spec.image}
                                                    <img src="{$spec->__image->getUrl(62,62, 'xy')}" alt="{$spec.name}"/>
                                                {/if}
                                            {/foreach}
                                        </span>
                                    </div>
                                    <div class="tyre__pic col-xs-4 col-md-12 col-lg-12">
                                        {$main_image=$product->getMainImage()}
                                        <img src="{$main_image->getUrl(141,185,'xy')}" alt="{$main_image.title|default:"{$product.title}"}"/>
                                    </div>
                                    <div class="tyre__description col-xs-8 col-md-12 col-lg-12">
                                        <div class="tyre__name">{$product.title}</div>
                                        <span class="{if $xfvalue_type == 'Летняя шина'}summer{elseif $xfvalue_type == 'Зимняя шина'}winter{else}default{/if}__tyres season_of_tyre">{if $xfvalue_type == 'Летняя шина'}Летние шины{elseif $xfvalue_type == 'Зимняя шина'}Зимние шины{else}{$xfvalue_type}{/if}</span>
                                        <span class="price__old"></span>
                                        <span class="price__actual">{$product->getCost()} {$product->getCurrency()}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                {/foreach}
            </div>
            {if count($sameproducts) > $carousel_count}
                <a class="carousel-control left carousel-view-control" href="#sameproducts" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
                <a class="carousel-control right carousel-view-control" href="#sameproducts" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
                {/if}
        </div>
    </div>
{/if}