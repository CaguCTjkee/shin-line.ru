{addjs file="{$mod_js}jquery.compare.js" basepath="root"}
<div class="compare" id="compareBlock" data-compare-url='{ "add":"{$router->getUrl('catalog-block-compare', ["cpmdo" => "ajaxAdd", "_block_id" => $_block_id])}", "remove":"{$router->getUrl('catalog-block-compare', ["cpmdo" => "ajaxRemove", "_block_id" => $_block_id])}" }' style="{if !count($list)}display:none;{/if}">
    <div class="h3-title">{t}Товары для сравнения{/t}</div>
    <ul class="compareProducts">
        {$list_html}
    </ul>
    <a href="{$router->getUrl('catalog-front-compare')}" class="compare-button" target="_blank"><span>{t}Cравнить{/t}</span></a>
</div>