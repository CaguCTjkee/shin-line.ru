{assign var=catalog_config value=ConfigLoader::byModule('catalog')}

{moduleinsert name="\Shop\Controller\Block\CheckoutStep"}

{if $order->hasError()}
    <div class="pageError alert alert-danger">
        {foreach from=$order->getErrors() item=item}
            <p>{$item}</p>
        {/foreach}
    </div>
{/if}

<form method="POST" class="confirm-form">
    <div id="basket">
        <div class="cartInfo col-xs-12 col-lg-8">
            {assign var=products value=$cart->getProductItems()}
            {assign var=cartdata value=$cart->getCartData()}
            {assign var=delivery value=$order->getDelivery()}

            <h4>Подтверждение заказа</h4>

            {hook name="shop-checkout-confirm:products" title="{t}Подтверждение заказа:товары{/t}"}
                <table class="orderBasket">
                    <tbody class="head hidden-xs">
                    <tr>
                        <td>Товар</td>
                        <td class="table-count">Кол-во шт.</td>
                        <td class="table-price">Цена</td>
                    </tr>
                    </tbody>
                    <tbody class="products">
                    {foreach from=$products item=item key=n name="basket"}
                        <tr {if $smarty.foreach.basket.first}class="first"{/if} data-id="{$item.obj.id}">
                            <td>

                                {assign var=barcode value=$item.product->getBarCode($item.cartitem.offer)}
                                {assign var=offer_title value=$item.product->getOfferTitle($item.cartitem.offer)}
                                {assign var=multioffer_titles value=$item.cartitem->getMultiOfferTitles()}

                                {assign var=prorerty value=$item.product->getVisiblePropertyList()}
                                {assign var=model value=$prorerty[1].properties[8].val_str}

                                <a href="{$item.product->getUrl()}" target="_blank" class="prod-name">
                                    {$item.product.title}
                                </a>

                                {if $model}
                                    <span class="prod-desc">Модель: {$model}</span>
                                {/if}

                                {if $item.product->getBrand()->title}
                                    <span class="prod-desc">Производитель: {$item.product->getBrand()->title}</span>
                                {/if}

                                <div class="codeLine">
                                    {if $barcode != ''}Артикул:<span class="value">{$barcode}</span>&nbsp;&nbsp;{/if}
                                    {if $multioffer_titles || ($offer_title && $item.product->isOffersUse())}
                                        <div class="multioffersWrap">
                                            Комплектация:
                                            {foreach $multioffer_titles as $multioffer}
                                                <p class="value">{$multioffer.title} - {$multioffer.value}</p>
                                            {/foreach}
                                            {if !$multioffer_titles}
                                                <p class="value">{$offer_title}</p>
                                            {/if}
                                        </div>
                                    {/if}
                                </div>
                            </td>
                            <td class="td-amount">
                                <div class="pull-left visible-xs color-gray ">Количество:</div>

                                {$item.cartitem.amount}

                                <div class="getUnit hidden">
                                    {if $catalog_config.use_offer_unit}
                                        {$item.product.offers.items[$item.cartitem.offer]->getUnit()->stitle}
                                    {else}
                                        {$item.product->getUnit()->stitle}
                                    {/if}
                                </div>

                                {if !empty($cartdata.items[$n].amount_error)}
                                    <div class="errorNum" style="display:block">
                                        {$cartdata.items[$n].amount_error}
                                    </div>
                                {/if}

                                <div class="clearfix"></div>
                            </td>
                            <td class="td-price">
                                <div class="pull-left visible-xs color-gray ">Цена:</div>
                                <span class="priceBlock">
                                    <span class="priceValue">{$cartdata.items[$n].cost}</span>
                                </span>
                                <div class="text-success discount">
                                    {if $cartdata.items[$n].discount>0}
                                        скидка {$cartdata.items[$n].discount}
                                    {/if}
                                </div>
                            </td>
                        </tr>
                    {/foreach}
                    </tbody>
                    <tbody class="additional">
                    {foreach from=$cart->getCouponItems() key=id item=item}
                        <tr>
                            <td colspan="3" class="text-danger">
                                {t}Купон на скидку{/t} <b>{$item.coupon.code}</b>
                            </td>
                        </tr>
                    {/foreach}
                    {if $cartdata.total_discount>0}
                        <tr class="bold">
                            <td colspan="2">{t}Скидка на заказ{/t}</td>
                            <td class="">{$cartdata.total_discount}</td>
                        </tr>
                    {/if}
                    {foreach from=$cartdata.taxes item=tax}
                        <tr class="taxes{if !$tax.tax.included} bold{/if}">
                            <td colspan="3" class="text-info">{$tax.tax->getTitle()} {$tax.cost}</td>
                        </tr>
                    {/foreach}
                    {if $order.delivery}
                        <tr class="delivery">
                            <td colspan="3">
                                <div class="delivery-block clearfix">
                                    Доставка: {$delivery.title}
                                    <span>{$cartdata.delivery.cost}</span>
                                </div>
                            </td>
                        </tr>
                    {/if}
                    </tbody>
                    <tfoot class="summary">
                    <tr>
                        <td colspan="3">
                            Итого к оплате:
                            <span class="total">{$cartdata.total}</span>
                            <div class="clearfix"></div>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            {/hook}
            <div class="orderComment">
                <label>Комментарий к заказу:</label>
                {$order.__comments->formView()}
            </div>
            {if $this_controller->getModuleConfig()->require_license_agree}
                <input type="checkbox" name="iagree" value="1" id="iagree">
                <label for="iagree">{t}Я согласен с <a href="{$router->getUrl('shop-front-licenseagreement')}"
                                                       class="licAgreement inDialog">условиями предоставления
                        услуг</a>{/t}</label>
                <script type="text/javascript">
                    $(function() {
                        $('.formSave').click(function() {
                            if(!$('#iagree').prop('checked')) {
                                alert('Подтвердите согласие с условиями предоставления услуг');
                                return false;
                            }
                        });
                    });
                </script>
            {/if}
        </div>
        <div class="orderInfo col-xs-12 col-lg-4">
            {assign var=user value=$order->getUser()}

            <h4>Сведения о заказе:</h4>

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
                        <li><span class="key">{$field.title}:</span> <a
                                    href="?do=address">{$fmanager->textView($field.alias)}</a></li>
                    {/foreach}
                </ul>
            {/if}

            {assign var=address value=$order->getAddress()}
            <ul class="section">
                {if $order.delivery}
                    <li><span class="key">Доставка:</span> <a
                                href="{$router->getUrl(null, ['Act' => 'delivery'])}">{$delivery.title}</a></li>
                {/if}
                <li class="hidden"><span class="key">Адрес:</span> <a
                            href="{$router->getUrl(null, ['Act' => 'address'])}">{$address->getLineView()}</a></li>
            </ul>
            {if $order.payment}
                {assign var=pay value=$order->getPayment()}
                <ul class="section last">
                    <li><span class="key">Оплата:</span> <a
                                href="{$router->getUrl(null, ['Act' => 'payment'])}">{$pay.title}</a></li>
                </ul>
            {/if}
        </div>

        <div class="clearfix"></div>

    </div>

    <div class="checkout-btn clearfix">
        <button type="submit" class="btn btn-primary btn-lg btn-block">Подтвердить заказ</button>
        <a href="/checkout/payment/" class="btn btn-link btn-lg btn-block">Назад</a>
    </div>
</form>