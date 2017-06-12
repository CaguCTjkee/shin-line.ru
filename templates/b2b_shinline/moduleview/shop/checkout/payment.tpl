
{moduleinsert name="\Shop\Controller\Block\CheckoutStep"}

{if $order->hasError()}
    <div class="pageError alert alert-danger">
        {foreach from=$order->getErrors() item=item}
            <p>{$item}</p>
        {/foreach}
    </div>
{/if}

<form method="POST" id="order-form" class="payment-form">
    <input type="hidden" name="payment" value="0">
    <div class="formSection hidden">
        <span class="formSectionTitle">Оплата</span>
    </div>
    <h4>Выбор способа оплаты</h4>
    <table class="formTable clearfix">
        <tr>
            {foreach from=$pay_list item=item}
        <tr>
            <td class="value fixedRadio topPadd">
                <input type="radio" name="payment" value="{$item.id}" id="pay_{$item.id}"
                       {if $order.payment==$item.id}checked{/if}>
                <label for="pay_{$item.id}"><i class="fake-ratio"></i></label>
            </td>
            <td class="value marginRadio topPadd" colspan="2">
                {if !empty($item.picture)}
                    <img class="logoService hidden" src="{$item.__picture->getUrl(100, 100, 'xy')}"
                         alt="{$item.title}"/>
                {/if}
                <div class="middleBox">
                    <label for="pay_{$item.id}">{$item.title}</label>
                    <div class="help">{$item.description}</div>
                </div>
            </td>
        </tr>
        {/foreach}
        </tr>
    </table>

    <div class="checkout-btn clearfix">
        <button type="submit" class="btn btn-primary btn-lg btn-block">Продолжить</button>
        <a href="/checkout/delivery/" class="btn btn-link btn-lg btn-block">Назад</a>
    </div>

</form>