{foreach from=$menu_level item=item}
    {if $item.fields.typelink!='separator'}
        <li {$item.fields->getDebugAttributes()}>
            <a href="{$item.fields->getHref()}" {if $item.fields.target_blank}target="_blank"{/if}
                    {if !empty($item.child)}class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false"{/if}>{$item.fields.title}</a>
            {if !empty($item.child)}
                <ul class="dropdown-menu">
                    {include file="blocks/menu/foot_branch.tpl" menu_level=$item.child}
                </ul>
            {/if}
        </li>
    {else}
        <li class="divider"></li>
    {/if}
{/foreach}