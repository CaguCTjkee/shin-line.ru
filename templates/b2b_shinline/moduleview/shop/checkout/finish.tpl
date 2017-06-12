
{moduleinsert name="\Shop\Controller\Block\CheckoutStep"}

<div id="finish">

    <h4>Спасибо! Ваш заказ успешно оформлен</h4>

    <p class="underText">
        Следить за изменениями статуса заказа можно в разделе <a href="{$router->getUrl('shop-front-myorders')}"
                                                                 target="_blank">история заказов</a>.
        Все уведомления об изменениях в данном заказе также будут отправлены на электронную почту покупателя. </p>

    {if $order->getPayment()->hasDocs()}
        <div class="paymentDocuments">
            <h3>Документы на оплату</h3>
            {if $user.id}
                <p class="helpText underText">
                    Воспользуйтесь следующими документами для оплаты заказа. Эти документы
                    всегда доступны в разделе <a href="{$router->getUrl('shop-front-myorders')}" target="_blank">история
                        заказов</a>
                </p>
            {/if}
            <ul class="docsList">
                {assign var=type_object value=$order->getPayment()->getTypeObject()}
                {foreach from=$type_object->getDocsName() key=key item=doc}
                    <li><a href="{$type_object->getDocUrl($key)}" target="_blank">{$doc.title}</a></li>
                {/foreach}
            </ul>
        </div>
    {/if}

    <div class="cartInfo col-xs-12 col-lg-8">
        <h4>Заказ № {$order.order_num} от {$order.dateof|date_format:"d.m.Y"}</h4>

        {assign var=orderdata value=$cart->getOrderData()}
        <table class="orderBasket">
            <tbody class="head hidden-xs">
            <tr>
                <td>Товар</td>
                <td class="table-count">Кол-во шт.</td>
                <td class="table-price">Цена</td>
            </tr>
            </tbody>
            <tbody class="products">
            {foreach from=$orderdata.items item=item key=n name="basket"}
                {assign var=orderitem value=$item.cartitem}
                <tr {if $smarty.foreach.basket.first}class="first"{/if}>
                    <td>
                        {assign var=barcode value=$orderitem.barcode}
                        {assign var=offer_title value=$orderitem.model}
                        {assign var=multioffer_titles value=$orderitem->getMultiOfferTitles()}

                        <span class="prod-name">{$orderitem.title}</span>

                        <div class="codeLine">
                            {if $barcode != ''}Артикул:<span class="value">{$barcode}</span>&nbsp;&nbsp;{/if}
                            {if !empty($multioffer_titles)}
                                <div class="multioffersWrap">
                                    Комплектация:
                                    {foreach $multioffer_titles as $multioffer}
                                        <div>
                                            <span class="value">{$multioffer.title} - {$multioffer.value}</span>
                                        </div>
                                    {/foreach}
                                </div>
                            {elseif $offer_title != ''}
                                Комплектация:
                                <span class="value">{$offer_title}</span>
                            {/if}
                        </div>
                    </td>
                    <td class="td-amount">
                        <div class="pull-left visible-xs color-gray ">Количество:</div>

                        {$orderitem.amount}

                        <div class="getUnit hidden">
                            {$orderitem.data.unit}
                        </div>

                        <div class="clearfix"></div>
                    </td>
                    <td class="td-price">
                        <div class="pull-left visible-xs color-gray ">Цена:</div>
                        <span class="priceBlock">
                            <span class="priceValue">{$item.total}</span>
                        </span>
                        <div class="text-success discount">
                            {if $item.discount>0}
                                скидка {$item.discount}
                            {/if}
                        </div>
                    </td>
                </tr>
            {/foreach}
            </tbody>
            <tbody class="additional">
            {foreach from=$orderdata.other item=item name="other"}
                {if $item.cartitem.type === 'delivery'}
                    <tr class="delivery">
                        <td colspan="3">
                            <div class="delivery-block clearfix">
                                {$item.cartitem.title}
                                <span>{$item.total}</span>
                            </div>
                        </td>
                    </tr>
                {elseif $item.cartitem.type === 'coupon'}
                    <tr>
                        <td colspan="3" class="text-danger">
                            {$item.cartitem.title}
                        </td>
                    </tr>
                {else}
                    <tr class="taxes{if $smarty.foreach.other.first} first{/if}">
                        <td colspan="3" class="text-info">
                            {$item.cartitem.title}
                            {if $item.total != 0}{$item.total}{/if}
                        </td>
                    </tr>
                {/if}
            {/foreach}
            </tbody>
            <tfoot class="summary">
            <tr>
                <td colspan="3">
                    Итого к оплате:
                    <span class="total">{$orderdata.total_cost}</span>
                    <div class="clearfix"></div>
                </td>
            </tr>
        </table>
    </div>

    <div class="orderInfo col-xs-12 col-lg-4">

        <h4>Сведения о заказе:</h4>

        {assign var=user value=$order->getUser()}
        <ul class="section first clearfix">
            {if $user.surname || $user.name}
                <li>
                    <span class="key">Заказчик:</span>
                    {$user.surname} {$user.name}
                </li>
            {/if}
            {if $user.phone}
                <li>
                    <span class="key">Телефон:</span>
                    {$user.phone}
                </li>
            {/if}
            {if $user.e_mail}
                <li>
                    <span class="key">E-mail:</span>
                    {$user.e_mail}
                </li>
            {/if}
        </ul>

        {assign var=fmanager value=$order->getFieldsManager()}
        {if $fmanager->notEmpty()}
            <ul class="section">
                {foreach from=$fmanager->getStructure() item=field}
                    <li><span class="key">{$field.title}:</span> {$fmanager->textView($field.alias)}</li>
                {/foreach}
            </ul>
        {/if}

        {assign var=delivery value=$order->getDelivery()}
        {assign var=address value=$order->getAddress()}
        <ul class="section">
            {if $order.delivery}
                <li><span class="key">Доставка:</span> {$delivery.title}</li>
            {/if}
            <li><span class="key">Адрес:</span> {$address->getLineView()}</li>
        </ul>
        {if $order.payment}
            {assign var=pay value=$order->getPayment()}
            <ul class="section">
                <li><span class="key">Оплата:</span> {$pay.title}</li>
            </ul>
        {/if}
        {$url=$order->getTrackUrl()}
        {if !empty($url)}
            <ul class="section">
                <li>Данные заказа: <span><a href="{$url}" target="_blank">Отследить заказ</a></span></li>
            </ul>
        {/if}
    </div>

    <div class="clearfix"></div>

</div>

<div class="checkout-btn clearfix">
    {if $order->canOnlinePay()}
        <a href="{$order->getOnlinePayUrl()}" class="btn btn-success btn-lg btn-block">Перейти к оплате</a>
    {else}
        <a href="{$router->getRootUrl()}" class="btn btn-primary btn-lg btn-block">Завершить заказ</a>
    {/if}
</div>