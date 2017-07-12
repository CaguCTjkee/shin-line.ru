{if $items}
    <nav class="nav__top-menu">
        <ul>
            {include file="blocks/menu/foot_branch.tpl" menu_level=$items}
        </ul>
    </nav>
{else}
    {include file="theme:default/block_stub.tpl"  class="noBack blockSmall blockLeft blockLogo" do=[
    {$this_controller->getSettingUrl()}    => t("Настройте блок")
    ]}
{/if}