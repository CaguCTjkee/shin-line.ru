{if $items}
<nav class="nav__bottom-menu hidden-md hidden-sm hidden-xs">
    <ul>
        {include file="blocks/menu/branch.tpl" menu_level=$items}
    </ul>
</nav>
{else}
    {include file="theme:default/block_stub.tpl"  class="noBack blockSmall blockLeft blockMenu" do=[
        {adminUrl do="add" mod_controller="menu-ctrl"} => t("Добавьте пункт меню")
    ]}
{/if}