{if !empty($status_message)}<div class="pageError">{$status_message}</div>{/if}
<form method="POST" action="{$router->getUrl('users-front-auth')}" class="authorization">
    {$this_controller->myBlockIdInput()}
    <input type="hidden" name="referer" value="{$data.referer}">
    {hook name="users-authorization:form" title="{t}Авторизация:форма{/t}"}
        {if $url->request('dialogWrap', $smarty.const.TYPE_INTEGER)}
            <h2 data-dialog-options='{ "width": "360" }'>Авторизация</h2>
            <div class="dialogForm">
                {if !empty($error)}<div class="error">{$error}</div>{/if}
                <input type="text" name="login" value="{$data.login|default:$Setup.DEFAULT_DEMO_LOGIN}" class="login" placeholder="E-mail">
                <input type="password" name="pass" class="password" value="{$Setup.DEFAULT_DEMO_PASS}" placeholder="Пароль">

                <div class="floatWrap clearfix">
                    <div class="rememberBlock">
                        <input type="checkbox" id="rememberMe" name="remember" value="1" {if $data.remember}checked{/if}> <label for="rememberMe">Запомнить меня</label>
                    </div>
                    <button type="submit" class="submit-button">Войти</button>
                </div>

                <div class="noAccount">
                    Нет аккаунта? &nbsp;&nbsp;&nbsp;<a href="{$router->getUrl('users-front-register')}" class="inDialog">Зарегистрируйтесь</a><br>
                    Забыли пароль? &nbsp;&nbsp;&nbsp;<a href="{$router->getUrl('users-front-auth', ["Act" => "recover"])}" class="inDialog">Восстановить пароль</a>
                </div>
            </div>
        {else}
            <table class="formTable">
                <tr>
                    <td class="key">E-mail</td>
                    <td class="value"><input type="text" size="30" name="login" value="{$data.login}" {if !empty($error)}class="has-error"{/if}>
                    <span class="formFieldError">{$error}</span>
                    </td>
                </tr>
                <tr>
                    <td class="key">Пароль</td>
                    <td class="value"><input type="password" size="30" name="pass" {if !empty($error)}class="has-error"{/if}>
                        <div class="rememberBox">
                            <input type="checkbox" id="rememberMe" name="remember" value="1" {if $data.remember}checked{/if}> <label for="rememberMe">Запомнить меня</label>
                        </div>
                    </td>
                </tr>
            </table>
            <a href="{$router->getUrl('users-front-auth', ["Act" => "recover"])}" class="forgotPassword"><span>Забыли пароль?</span></a>
            <a href="{$router->getUrl('users-front-register')}" class="inDialog">Регистрация</a>
            <button type="submit" class="formSave submit-button" >Войти</button>
        {/if}
    {/hook}
</form>