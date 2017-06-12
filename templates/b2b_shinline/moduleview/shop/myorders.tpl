<div class="dialog myorders">

    <div class="col-xs-12 col-lg-3 no-padding-horizontal-md">
        <div class="btn-group" role="group">
            <a href="{$router->getUrl('users-front-profile')}" class="btn btn-default btn-inverse">Мой профиль</a>
            <a href="{$router->getUrl('shop-front-myorders')}" class="btn btn-default btn-inverse active">Мои заказы</a>
            <a href="{$router->getUrl('users-front-auth', ['Act' => 'logout'])}" class="btn btn-default btn-inverse">Выход</a>
        </div>
    </div>

    <div class="col-xs-12 col-lg-9 no-padding-horizontal-md">
        <div class="top">
            <div class="bigtitle h2">Мои заказы</div>
        </div>

        {if count($order_list)}
            {foreach $order_list as $order}

                {$cart=$order->getCart()}
                {$products=$cart->getProductItems()}
                {$order_data=$cart->getOrderData()}

                {$products_first=array_slice($products, 0, 5)}
                {$products_more=array_slice($products, 5)}

                {$products_count=$products_first|count}
                <div class="orderList">
                    <table>
                        <tr>
                            <td class="date">
                                № {$order.order_num}
                                <div class="pull-right">{$order.dateof|date_format:"d.m.Y"}</div>
                            </td>
                            <td class="price">
                                {$products_count}
                                {if $products_count == 1}
                                    товар
                                {elseif $products_count > 1 && $products_count < 5}
                                    товара
                                {elseif $products_count > 4}
                                    товаров
                                {/if}

                                <div class="pull-right">
                                    на сумму <span class="fz14">{$order_data.total_cost}</span>
                                </div>
                            </td>
                            <td class="status last-child clearfix">
                        <span class="statusItem"
                              style="color: {$order->getStatus()->bgcolor}">{$order->getStatus()->title}</span>
                                <a href="{$router->getUrl('shop-front-myorderview', ["order_id" => $order.order_num])}"
                                   class="more">Подробнее <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    </table>
                    <div class="products hidden">

                        {hook name="shop-myorders:products" title="{t}Мои заказы:список товаров одного заказа{/t}"}
                            <table class="table">

                                {foreach $products_first as $item}
                                    {$multioffer_titles=$item.cartitem->getMultiOfferTitles()}
                                    {$main_image=$item.product->getMainImage()}
                                    {$currency=$item.product->getCurrency()}
                                    {$single_cost=$order_data.items[$item.cartitem.uniq].cartitem.single_cost}
                                    {$price=$order_data.items[$item.cartitem.uniq].cartitem.price}
                                    {$amount=$order_data.items[$item.cartitem.uniq].cartitem.amount}
                                    <tr>
                                        {if $item.product.id>0}
                                            <td class="image">
                                                <a href="{$item.product->getUrl()}">
                                                    <img src="{$main_image->getUrl(80, 80, 'xy')}"
                                                         alt="{$main_image.title|default:"{$item.cartitem.title}"}"/></a>
                                            </td>
                                            <td class="title">
                                                <a href="{$item.product->getUrl()}">{$item.cartitem.title}</a>
                                            </td>
                                        {else}
                                            <td class="image">
                                                <span>
                                                    <img src="{$main_image->getUrl(80, 80, 'xy')}"
                                                         alt="{$main_image.title|default:"{$item.cartitem.title}"}"/></span>
                                            </td>
                                            <td class="title">
                                                <span>{$item.cartitem.title}</span>
                                            </td>
                                        {/if}
                                        <td class="single_cost hidden-xs">{$single_cost} {$currency}</td>
                                        <td class="amount">{$amount} шт</td>
                                        <td class="price">{$price} {$currency}</td>

                                        {if $multioffer_titles || $item.cartitem.model}
                                            <td class="multioffersWrap">
                                                {foreach $multioffer_titles as $multioffer}
                                                    {$multioffer.value}{if !$multioffer@last}, {/if}
                                                {/foreach}
                                                {if !$multioffer_titles}
                                                    {$item.cartitem.model}
                                                {/if}
                                            </td>
                                        {/if}
                                    </tr>
                                {/foreach}

                                {if !empty($order.user_text)}
                                    <tr>
                                        <td class="value" colspan="2">
                                            {$order.user_text}
                                        </td>
                                    </tr>
                                {/if}

                                {assign var=fm value=$order->getFieldsManager()}
                                {foreach from=$fm->getStructure() item=item}
                                    <tr>
                                        <td class="key">{$item.title}</td>
                                        <td class="value">{$item.current_val}</td>
                                    </tr>
                                {/foreach}

                                {if $order->getPayment()->hasDocs()}
                                    <tr class="delivery">
                                        <td class="pull-left" colspan="1">Документы:</td>
                                        <td class="pull-right" colspan="4">
                                            {assign var=type_object value=$order->getPayment()->getTypeObject()}
                                            {foreach from=$type_object->getDocsName() key=key item=doc name="docs"}
                                                <a href="{$type_object->getDocUrl($key)}" class="underline"
                                                   target="_blank">{$doc.title}</a>{if !$smarty.foreach.docs.last},{/if}
                                            {/foreach}
                                        </td>
                                    </tr>
                                {/if}

                                {if $files=$order->getFiles()}
                                    <tr class="delivery">
                                        <td class="pull-left" colspan="1">Файлы:</td>
                                        <td class="pull-right" colspan="4">
                                            {assign var=type_object value=$order->getPayment()->getTypeObject()}
                                            {foreach $files as $file}
                                                <a href="{$file->getUrl()}" class="underline"
                                                   target="_blank">{$file.name}</a>{if !$file@last},{/if}
                                            {/foreach}
                                        </td>
                                    </tr>
                                {/if}

                                <tr class="delivery">
                                    <td class="pull-left" colspan="2">Доставка:</td>
                                    <td class="pull-right" colspan="3">{$order->getDelivery()->title}</td>
                                </tr>

                                <tr class="sumPrice">
                                    <td class="pull-left" colspan="4">Итого к оплате:</td>
                                    <td class="pull-right bold" colspan="1">{$order_data.total_cost}</td>
                                </tr>

                                {if $order->canOnlinePay()}
                                    <tr>
                                        <td colspan="5">
                                            {if $order->canOnlinePay()}
                                                <a href="{$order->getOnlinePayUrl()}"
                                                   class="btn btn-lg btn-primary pull-right">Оплатить</a>
                                            {/if}
                                        </td>
                                    </tr>
                                {/if}

                            </table>
                        {if !empty($products_more)}
                            <div class="moreItems">
                                <a class="expand rs-parent-switcher">показать все...</a>
                                <ul class="items">
                                    {foreach $products_more as $item}
                                        {$multioffer_titles=$item.cartitem->getMultiOfferTitles()}
                                        <li>
                                            {if $item.product.id>0}
                                                <a href="{$item.product->getUrl()}" class="image"><img
                                                            src="{$item.product->getMainImage(36, 36, 'xy')}"></a>
                                                <a href="{$item.product->getUrl()}"
                                                   class="title">{$item.cartitem.title}</a>
                                                {if $multioffer_titles || $item.cartitem.model}
                                                    <div class="multioffersWrap">
                                                        {foreach $multioffer_titles as $multioffer}
                                                            {$multioffer.value}{if !$multioffer@last}, {/if}
                                                        {/foreach}
                                                        {if !$multioffer_titles}
                                                            {$item.cartitem.model}
                                                        {/if}
                                                    </div>
                                                {/if}
                                            {else}
                                                <span class="image"><img
                                                            src="{$item.product->getMainImage(36, 36, 'xy')}"></span>
                                                <span class="title">{$item.cartitem.title}</span>
                                            {/if}
                                        </li>
                                    {/foreach}
                                </ul>
                                <a class="collapse rs-parent-switcher">показать кратко</a>
                            </div>
                        {/if}
                        {/hook}
                    </div>
                </div>
            {/foreach}
        {else}
            <div class="noData alert alert-warning">
                Еще не оформлено ни одного заказа
            </div>
        {/if}

        {include file="%THEME%/paginator.tpl"}
    </div>
    <div class="clearfix"></div>
</div>