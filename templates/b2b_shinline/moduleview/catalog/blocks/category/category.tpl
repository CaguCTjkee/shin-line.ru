{* Список категорий из 2-х уровней*}
{if $dirlist}
    {addjs file="jquery.mainmenu.js" basepath="common"}

    <div id="accordion" class="panel-group">
        {hook name="catalog-blocks-category-category:list-item" title="{t}Категории товаров:элементы списка{/t}"}
        {foreach from=$dirlist item=dir}


            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="panel-title">
                        {*<a href="#collapse-1" data-parent="#accordion" data-toggle="collapse" class="collapsed" aria-expanded="false">Шины</a>*}
                        <a href="{if !empty($dir.child)}#collapse-{$dir.fields.id}{else}{$dir.fields->getUrl()}{/if}" {if !empty($dir.child)}data-parent="#accordion" data-toggle="collapse" class="collapsed" aria-expanded="false"{/if}>{$dir.fields.name}</a>
                    </div>
                </div>
                <div id="collapse-{$dir.fields.id}" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                    <div class="panel-body">
                        {if !empty($dir.child)}
                            {assign var=cnt value=count($dir.child)}
                            {if $cnt>9 && $cnt<21}
                                {assign var=columns value="twoColumn"}
                            {elseif $cnt>20}
                                {assign var=columns value="threeColumn"}
                            {/if}
                            <ul {if $columns}class="{$columns}"{/if}>
{*                                <li class="corner"></li>*}
                                    {foreach from=$dir.child item=item}
                                    <li {if in_array($item.fields.id, $pathids)}class="act"{/if} {$item.fields->getDebugAttributes()}><a href="{$item.fields->getUrl()}">{$item.fields.name}</a>
                                    {/foreach}
                            </ul>
                        {/if}
                    </div>
                </div>
            </div>
        {/foreach}
        {/hook}
    </div>
{else}
    {include file="theme:default/block_stub.tpl"  class="blockCategory" do=[
        [
            'title' => t("Добавьте категории товаров"),
            'href' => {adminUrl do=false mod_controller="catalog-ctrl"}
        ]
    ]}
{/if}