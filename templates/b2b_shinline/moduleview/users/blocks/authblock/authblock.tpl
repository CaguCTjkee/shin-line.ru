{if $is_auth}
    <script>var is_auth = true;</script>
    <div class="auth alignright">
        <div class="sign_up pull-right">

            <a  href="{$router->getUrl('users-front-profile')}" class="username first dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{$current_user.name} {$current_user.surname} <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="{$router->getUrl('users-front-profile')}">Профиль</a></li>
                <li><a href="{$router->getUrl('shop-front-myorders')}">Мои заказы</a></li>
                    {if $use_personal_account}
                    <li><a href="{$router->getUrl('shop-front-mybalance')}">Лицевой счет</a></li>
                    {/if}
                <li role="separator" class="divider"></li>
                <li><a href="{$router->getUrl('users-front-auth', ['Act' => 'logout'])}" class="exit">Выход</a></li>
            </ul>
        </div>
    </div>
{else}
    <script>var is_auth = false;</script>
    <div class="auth alignright">
        {assign var=referer value=urlencode($url->server('REQUEST_URI'))}
        <div class="sign_up pull-right">
            <a href="{$router->getUrl('users-front-register', ['referer' => $referer])}" class="inDialog">Зарегистрироваться</a>
        </div>
        <div class="sign_in pull-right">
            <a href="{$router->getUrl('users-front-auth', ['referer' => $referer])}" class="first inDialog">Войти</a>
        </div>
    </div>
{/if}