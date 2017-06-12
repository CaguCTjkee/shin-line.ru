<form method="GET" class="search__form" action="{$router->getUrl('catalog-front-listproducts', [])}">
    <div class="searchLine">
        <div class="queryWrap" id="queryBox">
            <input type="text" class="search__input pull-right query{if !$param.hideAutoComplete} autocomplete{/if}" data-deftext="Поиск" name="query" value="{$query}" autocomplete="off" data-source-url="{$router->getUrl('catalog-block-searchline', ['sldo' => 'ajaxSearchItems', _block_id => $_block_id])}">
            <input type="submit" class="find search__submit hidden-xs hidden-sm hidden-md">
        </div>
    </div>
</form>