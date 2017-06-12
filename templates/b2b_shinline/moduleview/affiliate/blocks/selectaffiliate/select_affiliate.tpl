{addjs file="%affiliate%/modernizr-columns.js"}
{addjs file="%affiliate%/searchfiiliates.js"}
{addjs file="%affiliate%/affiliate.js"}
{addcss file="%affiliate%/affiliates.css" unshift=true}
{if $current_affiliate.id}
    {$referer=$url->selfUri()}
    <a href="{$router->getUrl('affiliate-front-affiliates', ['referer' => $referer])}" class="location inDialog">
        <span class="cityLink" {$current_affiliate->getDebugAttributes()}>{$current_affiliate.title}</span>
    </a>
{/if}