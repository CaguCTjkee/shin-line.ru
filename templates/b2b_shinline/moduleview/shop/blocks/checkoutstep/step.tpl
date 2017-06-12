{$steps=[["key" => "address", "text" => "Адрес и контакты"]]}
{$config=$this_controller->getModuleConfig()}
{if !$config.hide_delivery}{$steps[]=["key" => "delivery", "text" => "Доставка товара"]}{/if}
{if !$config.hide_payment}{$steps[]=["key" => "payment", "text" => "Выбор способа оплаты"]} {/if}
{$steps[]=["key" => "confirm",
"text" => "<i class='visible-sm-inline'>Оформить</i><i class='hidden-sm'>Подтверждение заказа</i>"]}
{$cnt=count($steps)}

<ul class="checkout-top">
    {foreach from=$steps key=n item=item}
        <li class="col-xs-3 clearfix {$item.key}{if $step==$n+1 || ($n==$cnt-1 && $step>$cnt)} act{/if}{if $step>$n+1} already{/if}">
            {if $n+1>$step || $step>$cnt}<span class="item">{else}
                <a class="item" href="{$router->getUrl('shop-front-checkout', ['Act' => $item.key])}">
        {/if}
                    <i class="image-icon {$item.key}"></i>
            <span class="text">
                <span class="text-middle">
                    {$item.text}
                 </span>
            </span>
                {if $n+1>$step || $step>$cnt}</span>{else}</a>{/if}
        </li>
    {/foreach}
</ul>