{$shop_config=ConfigLoader::byModule('shop')}
{assign var=catalog_config value=ConfigLoader::byModule('catalog')}
{assign var=product_items value=$cart->getProductItems()}
<div class="cart" id="cartItems">
    <div class="top clearfix">
        <div class="cartIcon">Корзина</div>
        {if !empty($cart_data.items)}
            <a class="clearCart btn btn-default"
               href="{$router->getUrl('shop-front-cartpage', ["Act" => "cleanCart"])}"><span>Очистить корзину</span></a>
        {/if}
    </div>
    <div class="padd">
        {if !empty($cart_data.items)}
            <form method="POST" action="{$router->getUrl('shop-front-cartpage', ["Act" => "update"])}" id="cartForm">
                <input type="submit" class="hidden">
                {hook name="shop-cartpage:products" title="{t}Корзина:товары{/t}"}
                    <div class="viewport">
                        <table class="cartProducts">
                            <tr class="table-header hidden-xs">
                                <td colspan="2">Товар</td>
                                <td class="table-count">Кол&#x2010;во&nbsp;шт.</td>
                                <td class="table-price" colspan="2">Цена</td>
                            </tr>
                            {foreach from=$cart_data.items key=index item=item name="items"}
                                {assign var=product value=$product_items[$index].product}
                                {assign var=prorerty value=$product->getVisiblePropertyList()}
                                {assign var=model value=$prorerty[1].properties[8].val_str}
                                {assign var=cartitem value=$product_items[$index].cartitem}
                                {if !empty($cartitem.multioffers)}
                                    {assign var=multioffers value=unserialize($cartitem.multioffers)}
                                {/if}
                                <tr data-id="{$index}" data-product-id="{$cartitem.entity_id}"
                                    class="cartitem{if $smarty.foreach.items.first} first{/if}">
                                    <td class="colPreview hidden-xs">
                                        <a class="preview" href="{$product->getUrl()}"><img
                                                    src="{$product->getMainImage(100,100)}" alt="{$product.title}"/></a>
                                    </td>
                                    <td class="colTitle clearfix">
                                        <a class="preview pull-left visible-xs" href="{$product->getUrl()}"><img
                                                    src="{$product->getMainImage(100,100)}" alt="{$product.title}"/></a>

                                        <a class="title" href="{$product->getUrl()}">{$product.title}</a>


                                        {if $model}
                                            Модель: {$model}
                                        {/if}

                                        {if $product->getBrand()->title}
                                            Производитель: {$product->getBrand()->title}
                                        {/if}

                                        <div class="error text-danger clearfix">{$item.amount_error}</div>
                                        {if $product->isMultiOffersUse()}
                                            <div class="multiOffers">
                                                {foreach $product.multioffers.levels as $level}
                                                    {if !empty($level.values)}
                                                        <div class="title">{if $level.title}{$level.title}{else}{$level.prop_title}{/if}</div>
                                                        <select name="products[{$index}][multioffers][{$level.prop_id}]"
                                                                data-prop-title="{if $level.title}{$level.title}{else}{$level.prop_title}{/if}">
                                                            {foreach $level.values as $value}
                                                                <option {if $multioffers[$level.prop_id].value == $value.val_str}selected="selected"{/if}
                                                                        value="{$value.val_str}">{$value.val_str}</option>
                                                            {/foreach}
                                                        </select>
                                                    {/if}
                                                {/foreach}
                                                {if $product->isOffersUse()}
                                                    {foreach from=$product.offers.items key=key item=offer name=offers}
                                                        <input id="offer_{$key}" type="hidden" name="hidden_offers"
                                                               class="hidden_offers" value="{$key}"
                                                               data-info='{$offer->getPropertiesJson()}'
                                                               data-num="{$offer.num}"/>
                                                        {if $cartitem.offer==$key}
                                                            <input type="hidden" name="products[{$index}][offer]"
                                                                   value="{$key}"/>
                                                        {/if}
                                                    {/foreach}
                                                {/if}
                                            </div>
                                        {elseif $product->isOffersUse()}
                                            <select name="products[{$index}][offer]" class="offer">
                                                {foreach from=$product.offers.items key=key item=offer name=offers}
                                                    <option value="{$key}"
                                                            {if $cartitem.offer==$key}selected{/if}>{$offer.title}</option>
                                                {/foreach}
                                            </select>
                                        {/if}
                                    </td>
                                    <td class="colAmount">
                                        <div class="amoutPicker">
                                            <div class="qpicker">
                                                <a class="inc html-icon"><i class="glyphicon glyphicon-chevron-up"></i></a>
                                                <a class="dec html-icon"><i
                                                            class="glyphicon glyphicon-chevron-down"></i></a>
                                            </div>
                                            <input type="text" maxlength="4" class="fieldAmount"
                                                   value="{$cartitem.amount}" name="products[{$index}][amount]">
                                        </div>
                                    </td>
                                    <td class="colPrice">
                                        <div class="floatbox">
                                        <span class="priceBlock">
                                            <span class="priceValue">{$item.cost}</span>
                                        </span>
                                        </div>
                                        <div class="discount text-success">
                                            {if $item.discount>0}скидка {$item.discount}{/if}
                                        </div>
                                    </td>
                                    <td class="colRemove">
                                        <a title="Удалить товар из корзины" class="remove html-icon"
                                           href="{$router->getUrl('shop-front-cartpage', ["Act" => "removeItem", "id" => $index])}">&times;</a>
                                    </td>
                                </tr>
                                {assign var=concomitant value=$product->getConcomitant()}

                                {foreach from=$item.sub_products key=id item=sub_product_data}
                                    {assign var=sub_product value=$concomitant[$id]}
                                    <tr>

                                        <td colspan="2" class="colTitle sub_products">
                                            <label>
                                                <input class="fieldConcomitant" type="checkbox"
                                                       name="products[{$index}][concomitant][]"
                                                       value="{$sub_product->id}"
                                                        {if $sub_product_data.checked}
                                                            checked="checked"
                                                        {/if}
                                                >
                                                {$sub_product->title}
                                            </label>
                                        </td>

                                        <td class="colAmount">
                                            {if $shop_config.allow_concomitant_count_edit}
                                                <div class="amoutPicker">
                                                    <div class="qpicker">
                                                        <a class="inc html-icon"><i
                                                                    class="glyphicon glyphicon-chevron-up"></i></a>
                                                        <a class="dec html-icon"><i
                                                                    class="glyphicon glyphicon-chevron-down"></i></a>
                                                    </div>
                                                    <input type="text" maxlength="4" class="fieldAmount concomitant"
                                                           data-id="{$sub_product->id}"
                                                           value="{$sub_product_data.amount}"
                                                           name="products[{$index}][concomitant_amount][{$sub_product->id}]">
                                                    <span class="unit hidden">{$product->getUnit()->stitle}</span>
                                                </div>
                                            {else}
                                                {$sub_product_data.amount} {$sub_product->getUnit()->stitle}
                                            {/if}
                                            <div class="error">{$sub_product_data.amount_error}</div>
                                        </td>
                                        <td class="colPrice">
                                        <span class="priceBlock">
                                            <span class="priceValue">{$sub_product_data.cost}</span>
                                        </span>
                                            <div class="discount">
                                                {if $sub_product_data.discount>0}
                                                    скидка {$sub_product_data.discount}
                                                {/if}
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                {/foreach}
                            {/foreach}
                        </table>
                    </div>
                {/hook}
                {hook name="shop-cartpage:summary" title="{t}Корзина:итог{/t}"}
                    <div class="cartFooter clearfix">
                        <div class="linesContainer">
                            {foreach from=$cart->getCouponItems() key=id item=item}
                                <div class="line text-danger clearfix">
                                    <a href="{$router->getUrl('shop-front-cartpage', ["Act" => "removeItem", "id" => $id])}"
                                       class="remove html-icon" title="{t}удалить скидочный купон{/t}">&times;</a>
                                    <div class="text">{t}Купон на скидку{/t} <b>{$item.coupon.code}</b></div>
                                    <div class="digits"></div>
                                </div>
                            {/foreach}
                            {if $cart_data.total_discount>0}
                                <div class="line">
                                    <div class="text">Скидка на заказ</div>
                                    <div class="digits">{$cart_data.total_discount}</div>
                                </div>
                            {/if}
                        </div>
                        <div class="total clearfix">
                            <div class="discountText row clearfix">
                                <div class="info col-xs-12 col-sm-4">
                                    <div class="text-middle">
                                        Купон на скидку (если есть):
                                    </div>
                                </div>
                                {assign var=coupon value=$cart->getUserError('coupon')}

                                <div class="col-xs-7 col-sm-3 couponCode-wrapper{if $coupon!==false} has-error{/if}">
                                    <input type="text" class="couponCode form-control" size="12" name="coupon"
                                           value="{$coupon_code}">
                                    {if $coupon!==false}
                                        <small>{$coupon.message}</small>
                                    {/if}
                                </div>
                                <div class="col-xs-5 col-sm-2 couponButton-wrapper">
                                    <button type="button" class="applyCoupon btn btn-primary btn-block">Применить
                                    </button>
                                </div>
                                <div class="total-value hidden-xs col-sm-3">{$cart_data.total}</div>

                            </div>
                            <span class="text visible-xs-inline">Итого:</span>
                            <span class="total-value visible-xs-inline">{$cart_data.total}</span>
                        </div>
                        <div class="loader"></div>
                    </div>
                {/hook}
                {hook name="shop-cartpage:bottom" title="{t}Корзина:подвал{/t}"}
                    <div class="bottom clearfix">
                        <noscript><input type="submit" class="onemoreEmpty recalc" value="{t}Пересчитать{/t}">
                        </noscript>
                        <a href="{$router->getUrl('shop-front-checkout')}"
                           class="btn btn-primary btn-lg btn-block{if $cart_data.has_error} disabled{/if}">{t}Оформить заказ{/t}</a>

                        <a href="JavaScript:;" class="continue btn btn-link btn-lg btn-block">Продолжить покупки</a>

                        {if $THEME_SETTINGS.enable_one_click_cart}
                            <a href="JavaScript:;" class="toggleOneClickCart btn btn-link btn-lg btn-block">
                                <span class="hidden-sm">Заказать по телефону</span>
                                <span class="visible-sm-inline">
                                    <i class="glyphicon glyphicon-earphone"></i>
                                </span>
                            </a>
                        {/if}

                        <div class="error {if !empty($cart_data.errors)}hidden{/if}">
                            {foreach from=$cart_data.errors item=error}
                                {$error}
                                <br>
                            {/foreach}
                        </div>
                    </div>
                {/hook}
            </form>
            {* Покупка в один клик в корзине *}
            {if $THEME_SETTINGS.enable_one_click_cart}
                {moduleinsert name="\Shop\Controller\Block\OneClickCart"}
            {/if}
        {else}
            <div class="empty alert">В корзине нет товаров</div>
        {/if}
    </div>
</div>