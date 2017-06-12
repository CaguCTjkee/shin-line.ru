<article>
    <div class="about__text col-xs-12 {if $article.id == 2}col-lg-7 col-lg-offset-5{/if} clearfix"
         {if !empty($article.image) && 1==2}style="background-image: url({$article.__image->getLink()});"{/if}>
        <div class="h2">{$article.title}</div>
        <div class="about__text__image">
            <img src="{$article.__image->getLink()}" alt="{$article.title}">
        </div>
        <div class="about__text__content">
            {$article.content}
        </div>
    </div>
</article>