
{moduleinsert name="\Shop\Controller\Block\CheckoutStep"}

{if $order->hasError()}
    <div class="pageError alert alert-danger">
        {foreach from=$order->getErrors() item=item}
            <p>{$item}</p>
        {/foreach}
    </div>
{/if}

<form method="POST" id="order-form" class="delivery-form">
    <input type="hidden" name="warehouse" value="0">

    <div class="formSection hidden">
        <span class="formSectionTitle">Доставка - выбор склада для вывоза товара</span>
    </div>

    <h4>Выбор склада для вывоза товара</h4>
    
    <table class="formTable">
            {foreach from=$warehouses_list item=item}
                <tr class="row">
                    <td class="value fixedRadio topPadd">
                        <input type="radio" name="warehouse" value="{$item.id}" id="dlv_{$item.id}" {if ($order.warehouse>0)&&($order.warehouse==$item.id)}checked{elseif ($order.warehouse==0) && $item.default_house}checked{/if}>
                        <label for="dlv_{$item.id}"><i class="fake-ratio"></i></label>
                    </td>                    
                    <td class="value marginRadio topPadd" colspan="2">
                        {if !empty($item.image)}
                           <img class="logoService hidden" src="{$item.__image->getUrl(100, 100, 'xy')}"/>
                       {/if}
                       <div class="middleBox">
                           <label for="dlv_{$item.id}">{$item.title}</label>
                            <div class="help">
                                {if !empty($item.adress)}Адрес: {$item.adress}<br/>{/if}
                                {if !empty($item.phone)}Тел.: {$item.phone}<br/>{/if}
                                {if !empty($item.work_time)}Время работы.: {$item.work_time}{/if}
                            </div>
                       </div>
                    </td>
                </tr>
            {/foreach}
        </tr>
    </table>

    <div class="checkout-btn clearfix">
        <button type="submit" class="btn btn-primary btn-lg btn-block">Продолжить</button>
        <a href="/checkout/address/" class="btn btn-link btn-lg btn-block">Назад</a>
    </div>

</form>