{assign var=referer value=urlencode($url->server('REQUEST_URI'))}

<div class="auth-block container">

    <div class="auth-text-block col-xs-12 col-sm-6 col-lg-8">
        <span class="text-feel">Почувствуйте все</span>
        <span class="text-advantages">преимущества</span>
        <span class="text-work">работы с нами</span>
    </div>

    <div class="col-sm-6 col-lg-4 hidden-xs">
        <div class="auth-block-block">
            <div class="auth-block-title">Добро пожаловать на бизнес-портал</div>
            <form class="auth-block-form" method="POST" action="{$router->getUrl('users-front-auth')}">
                {$this_controller->myBlockIdInput()}
                <input type="hidden" name="referer" value="/">
                <input type="hidden" name="_controller_id" value="1110558447">

                <div class="form-group login-input">
                    <label for="auth-block-login">E-mail:</label>
                    <input class="form-control" type="text" name="login" id="auth-block-login"
                           placeholder="Укажите ваш mail">
                </div>
                <div class="form-group password-input">
                    <label for="auth-block-password">Пароль:</label>
                    <input class="form-control" type="password" name="pass" id="auth-block-password"
                           placeholder="Укажите ваш пароль">
                </div>
                <div class="buttons">
                    <button type="submit" class="btn btn-primary btn-block">Войти</button>
                    <a href="#" class="btn btn-link">Зарегистрироваться</a>
                </div>
            </form>
        </div>
    </div>

    <div class="auth-link visible-xs">
        <a href="{$router->getUrl('users-front-auth', ['referer' => $referer])}"
           class="btn btn-primary btn-block inDialog">Войти</a>
    </div>

</div>