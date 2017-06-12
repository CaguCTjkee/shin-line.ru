{if $site_config.logo}
    {if $link != ' '}<a href="{$link}">{/if}
    <img src="{$site_config.__logo->getLink()}" alt="">
    {if $link != ' '}</a>{/if}
{else}
    {include file="theme:default/block_stub.tpl"  class="noBack blockSmall blockLeft blockLogo" do=[
        {adminUrl do=false mod_controller="site-options"}    => t("Добавьте логотип")
    ]}
{/if}