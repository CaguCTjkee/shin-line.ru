{if !empty($brands)}
    <div class="brandLine">
        {*<div class="h2">{t}Мы является официальным дилером таких брендов как:{/t}</div>*}
        <div class="wrapWidth">

            <div id="brandCarousel" class="carousel slide hidden-xs" data-interval="false" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    {$brands_count = $brands|count/3-1}
                    {for $foo=0 to $brands_count}
                        <li data-target="#brandCarousel" data-slide-to="{$foo}" {if $foo==0}class="active"{/if}></li>
                    {/for}
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                    {foreach $brands as $brand}
                        {if $brand@first}
                            <div class="item active clearfix">
                        {/if}
                        <div class="col-sm-4 text-center"><img src="{$brand->__image->getUrl(195,100,'axy')}" alt="{$brand.title}"/>
                        </div>
                        {if $brand@iteration is div by 3}
                            </div>
                            {if !$brand@last}<div class="item clearfix">{/if}
                        {/if}
                        {if 1==2}
                            </div>
                        {/if}
                    {/foreach}
                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#brandCarousel" data-slide="prev">
                    <span class="svg-icon svg-icon-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#brandCarousel" data-slide="next">
                    <span class="svg-icon svg-icon-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


            <ul class="ofdealer-list visible-xs">
                {foreach $brands as $brand}
                    {if $brand.image}
                        <li class="hidden">
                            <img src="{$brand->__image->getUrl(195,100,'axy')}" alt="{$brand.title}"/>
                        </li>
                    {/if}
                {/foreach}
            </ul>
        </div>
        <a class="onemore" href="{$router->getUrl('catalog-front-allbrands')}">{t}Больше брендов{/t}</a>
    </div>
{/if}