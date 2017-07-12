
<script>
    {if $current_user.login == 'CaguCT'}is_admin = true;{/if}
    var ajax_protect = '{$smarty.now}';
    var ajax_protect_hash = '{$smarty.now|cat:"@!_)R*GFE)VI!#PEHdjcoiehq1eiq"|md5}';
</script>