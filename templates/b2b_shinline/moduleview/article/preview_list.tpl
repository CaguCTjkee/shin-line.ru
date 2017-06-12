{if !empty($list)}
    <div class="h2">{$dir.title}</div>
    <ul class="articles category_{$dir.alias}">
        {foreach from=$list item=item}
            <li {$item->getDebugAttributes()}>
                <a class="link" href="{$item->getUrl()}">
                    <span class="img">{if !empty($item.image)}<img src="{$item.__image->getUrl(120,120,'xy')}" alt="{$item.title}" class="image"/>{/if}</span>
                    <span class="title">{$item.title}</span>
                    <span class="description">{$item->getPreview()}</span>
                </a>
            </li>
        {/foreach}
    </ul>

    {include file="%THEME%/paginator.tpl"}
{else}
    <p class="empty">{t}Не найдено ни одной статьи{/t}</p>
{/if}