{if $brands}
    <div class="Catalog_jpg__main col-xs-12">
        <h1 class="title h2">{if $catalog_type=='disk'}Каталог дисков{else}Каталог шин{/if}</h1>
        {if $catalog_type=='tire'}
            <div class="description"><a href="/{$podbor}_catalog/all/summer/">Летние шины</a>:
                {foreach from=$props item=prop}
                    <a href="/{$podbor}_catalog/all/summer/-{$prop.val_str}/">{$prop.val_str}</a>
                {/foreach}
            </div>
            <div class="description"><a href="/{$podbor}_catalog/all/winter/">Зимние шины</a>:
                {foreach from=$props item=prop}
                    <a href="/{$podbor}_catalog/all/winter/-{$prop.val_str}/">{$prop.val_str}</a>
                {/foreach}
            </div>
        {/if}
        <div class="row">
            {foreach from=$brands item=brand name=poo}

                {assign var=brand_new value=$brand.type}
                {if $smarty.foreach.poo.first}
                    {assign var=brand_now value=$brand.type}
                    <div class="title_brand col-xs-12 h2">{$brand_now}</div>
                {else}
                    {if $brand_now != $brand_new}
                        {assign var=brand_now value=$brand.type}
                        <div class="title_brand col-xs-12 h2">{$brand_now}</div>
                    {/if}
                {/if}
                <div class="Catalog_jpg__block michelin col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="Catalog_jpg__block-inner row">
                        <div class="h2"><a
                                    href="/{if $brand_now == 'Грузовая шина'}truck{else}{$podbor}{/if}_catalog/{$brand.title}/{if $brand_now == 'Сельхозшина'}agricultural/{/if}"
                                    alt="{$brand.title}">{$brand.title}</a></div>
                        <a href="/{if $brand_now == 'Грузовая шина'}truck{else}{$podbor}{/if}_catalog/{$brand.title}/{if $brand_now == 'Сельхозшина'}agricultural/{/if}"
                           alt="{$brand.title}" class="Catalog_jpg__block-pic">

                            {if $brand.__image->getUrl(195,100, 'axy') != '/storage/system/resized/axy_195x100/_6a62d029.jpg'}
                                <img src="{$brand.__image->getUrl(195,100, 'axy')}" alt="{$brand.title}">
                            {/if}

                        </a>
                        {if $catalog_type=='tire' && $brand_now=='Легковая шина'}
                            <div class="Catalog_jpg__block-season">
                                <div class="col-xs-6">
                                    <a href="/{$podbor}_catalog/{$brand.title}/summer/" class="summer season">Летние
                                        шины</a>
                                </div>
                                <div class="col-xs-6">
                                    <a href="/{$podbor}_catalog/{$brand.title}/winter/" class="winter season">Зимние
                                        шины</a>
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            {/foreach}
        </div>
    </div>
{else}
    <p class="empty">Нет ни одного бренда</p>
{/if}