<a class="basket showCart basket__container" id="cart" href="{$router->getUrl('shop-front-cartpage')}">
    <span class="basket-pic"></span>
    <span class="basket-text hidden-xs"><span class="black__text">В корзине</span> <span class="products"><span class="value">{$cart_info.items_count}</span></span> товаров на сумму <span class="cost"><span class="value">{$cart_info.total}</span></span></span>
    <span class="basket-text hidden-sm hidden-md hidden-lg"><span class="black__text products"><span class="value">{$cart_info.items_count}</span></span></span>
</a>