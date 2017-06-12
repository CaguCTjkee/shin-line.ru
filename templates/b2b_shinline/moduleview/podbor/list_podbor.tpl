<h2>Подбор дисков и шин для автомобиля <b>{$vendor} {$car} {$year} {$modification}</b></h2>
<div class="col-xs-12 col-sm-6">
    <div class="select__result-block">
        <h3>Параметры шин</h3>

        {if $zavod_shini[0] }
            <h4>Заводская комплектация</h4>
            <ul>
                {foreach from=$zavod_shini key=id item=var}
                    <li><a href="/tire_catalog/all/all/{$zavod_shini_param[$id].w}-{$zavod_shini_param[$id].h}-{$zavod_shini_param[$id].r}/">{$var}</a></li>
                {/foreach}
            </ul>
        {/if}
        {if $zamen_shini[0] }
            <h4>Варианты замены</h4>
            <ul>
                {foreach from=$zamen_shini key=id item=var}
                    <li><a href="/tire_catalog/all/all/{$zamen_shini_param[$id].w}-{$zamen_shini_param[$id].h}-{$zamen_shini_param[$id].r}/">{$var}</a></li>
                {/foreach}
            </ul>
        {/if}

        {if $tuning_shini[0] }
            <h4>Тюнинг</h4>
            <ul>
                {foreach from=$tuning_shini key=id item=var}
                    <li><a href="/tire_catalog/all/all/{$tuning_shini_param[$id].w}-{$tuning_shini_param[$id].h}-{$tuning_shini_param[$id].r}/">{$var}</a></li>
                {/foreach}
            </ul>
        {/if}
    </div>
</div>
<div class="col-xs-12 col-sm-6">
    <div class="select__result-block">
        <h3>Параметры дисков</h3>
        <div class="disk__name">PCD: {$pcd}; диаметр: {$diametr}; Болт: {$gaika}</div>
        {if $zavod_diskov[0] }
            <h4>Заводская комплектация</h4>
            <ul>
                {foreach from=$zavod_diskov key=id item=var}
                    <li><a href="/disk_catalog/all/size/{$zavod_diskov_param[$id].dr}x{$zavod_diskov_param[$id].et}/{$krepeg}x{$realpcd}/{$dia}/">{$var}</a></li>
                {/foreach}
            </ul>
        {/if}

        {if $zamen_diskov[0] }
            <h4>Варианты замены</h4>
            <ul>
                {foreach from=$zamen_diskov key=id item=var}
                    <li><a href="/disk_catalog/all/size/{$zamen_diskov_param[$id].dr}x{$zamen_diskov_param[$id].et}/{$krepeg}x{$realpcd}/{$dia}/">{$var}</a></li>
                {/foreach}
            </ul>
        {/if}
        {if $tuning_diski[0] }
            <h4>Тюнинг</h4>
            <ul>
                {foreach from=$tuning_diski key=id item=var}
                    <li><a href="/disk_catalog/all/size/{$tuning_diski_param[$id].dr}x{$tuning_diski_param[$id].et}/{$krepeg}x{$realpcd}/{$dia}/">{$var}</a></li>
                {/foreach}
            </ul>
        {/if}
    </div>
</div>