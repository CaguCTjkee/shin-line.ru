{if $products}
    <section class="product">
        <div class="h2">ТОП продаваемых товаров</div>
        <div class="container">
            {foreach from=$products item=product}
                {foreach from=$product->fillProperty() item=data}
                    {foreach from=$data.properties item=property}
                        {assign var=prop_value value=$property->textView()}
                        {if $property.title=='Тип товара'}
                            {assign var=xfvalue_type value=$prop_value}
                        {/if}
                    {/foreach}
                {/foreach}
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" {$product->getDebugAttributes()}>
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
                                    <span class="{if $xfvalue_type == 'Летняя шина'}summer{elseif $xfvalue_type == 'Грузовая шина'}{else}winter{/if}__tyres season_of_tyre">{if $xfvalue_type == 'Летняя шина'}Летние шины{elseif $xfvalue_type == 'Грузовая шина'}Грузовые шины{else}Зимние шины{/if}</span>
                                    <span class="price__old"></span>
                                    <span class="price__actual">{$product->getCost()} {$product->getCurrency()}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            {/foreach}
            <div class="clearLeft"></div>
            {if $paginator->total_pages > $paginator->page}
                <a data-pagination-options='{ "appendElement":".productList", "context":".pl{$_block_id}" }' data-href="{$router->getUrl('catalog-block-topproducts', ['_block_id' => $_block_id, 'page' => $paginator->page+1])}" class="onemoreEmpty ajaxPaginator">{t}посмотреть еще{/t}</a>
            {/if}
        </div>
    </section>

{else}
    {include file="theme:default/block_stub.tpl"  class="blockTopProducts" do=[
        [
            'title' => t("Добавьте категорию с товарами"),
            'href' => {adminUrl do=false mod_controller="catalog-ctrl"}
        ],
        [
            'title' => t("Настройте блок"),
            'href' => {$this_controller->getSettingUrl()},
            'class' => 'crud-add'
        ]
    ]}
{/if}