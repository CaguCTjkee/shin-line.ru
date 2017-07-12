{addjs file="order.js"}

{moduleinsert name="\Shop\Controller\Block\CheckoutStep"}

{assign var=errors value=$order->getNonFormErrors()}
{if $errors}
    <div class="pageError alert alert-danger">
        {foreach from=$errors item=item}
            <p>{$item}</p>
        {/foreach}
    </div>
{/if}

<form method="POST" id="order-form"
      data-city-autocomplete-url="{$router->getUrl('shop-front-checkout', ['Act'=>'searchcity'])}">

    {if $is_auth}
    <div class="col-xs-12 col-lg-8">
        <div class="formSection">
            <span class="formSectionTitle">Покупатель</span>
            <a href="{urlmake logout=true}" class="ml10">сменить пользователя (Выход)</a>
        </div>
        <table class="formTable">
            {if $user.is_company}
                <tbody>
                <tr>
                    <td class="key">Название организации</td>
                    <td class="value">
                        {$user.company}
                    </td>
                </tr>
                <tr>
                    <td class="key">ИНН</td>
                    <td class="value">
                        {$user.company_inn}
                    </td>
                </tr>
                </tbody>
            {/if}
            <tbody>
            <tr>
                <td class="key">Имя</td>
                <td class="value">
                    {$user.name}
                </td>
            </tr>
            <tr>
                <td class="key">Фамилия</td>
                <td class="value">
                    {$user.surname}
                </td>
            </tr>
            <tr>
                <td class="key">Отчество</td>
                <td class="value">
                    {$user.midname}
                </td>
            </tr>
            <tr>
                <td class="key">Телефон</td>
                <td class="value">
                    {$user.phone}
                </td>
            </tr>
            <tr>
                <td class="key">E-mail</td>
                <td class="value">
                    {$user.e_mail}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    {else}
<input type="hidden" name="user_type" value="{$order.user_type}">
    <div class="userProfile activeTabs" data-input-name="user_type">
        <div class="formSection">
            <noscript><p class="text-center">Для корректной работы сайта необходимо включить поддержку
                    JavaScript</p></noscript>
            <span class="sectionListBlock">
                <ul class="lineList tabList">
                    <li>
                        <a class="item {if $order.user_type=='person'} act{/if}" data-tab="#user-tab1"
                           data-input-val="person" href="JavaScript:;">
                            <i class="fake-ratio"></i>
                            Частное лицо
                        </a>
                    </li>
                    <li>
                        <a class="item{if $order.user_type=='company'} act{/if}" data-tab="#user-tab1"
                           data-class="thiscompany" data-input-val="company" href="JavaScript:;">
                            <i class="fake-ratio"></i>
                            Компания
                        </a>
                    </li>
                    <li>
                        <a class="item{if $order.user_type=='noregister'} act{/if}" data-tab="#user-tab2"
                           data-input-val="noregister" href="JavaScript:;">
                            <i class="fake-ratio"></i>
                            Без регистрации
                        </a>
                    </li>
                    <li>
                        <a class="item{if $order.user_type=='user'} act{/if}" data-tab="#user-tab3"
                           data-input-val="user" href="JavaScript:;">
                            <i class="fake-ratio"></i>
                            Я регистрировался ранее
                        </a>
                    </li>
                </ul>
            </span>
        </div>
        <div class="col-xs-12 col-lg-6">

            <h4>Контактная информация</h4>

            <div class="tabFrame {if $order.user_type =='user' || $order.user_type =='noregister'} lowhide{/if}{if $order.user_type =='company'} thiscompany{/if}"
                 id="user-tab1">
                <table class="formTable">
                    <tbody class="organization">
                    <tr>
                        <td class="key">Название организации</td>
                        <td class="value">
                            {$order->getPropertyView('reg_company')}
                            <div class="help">Например: ООО Аудиторская фирма "Аудитор"</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">ИНН</td>
                        <td class="value">
                            {$order->getPropertyView('reg_company_inn')}
                            <div class="help">10 или 12 цифр</div>
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td class="key">Имя</td>
                        <td class="value">
                            {$order->getPropertyView('reg_name')}
                            <div class="help">Имя покупателя, владельца аккаунта</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Фамилия</td>
                        <td class="value">
                            {$order->getPropertyView('reg_surname')}
                            <div class="help">Фамилия покупателя, владельца аккаунта</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Отчество</td>
                        <td class="value">
                            {$order->getPropertyView('reg_midname')}
                            <div class="help">Отчество покупателя, владельца аккаунта</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Телефон</td>
                        <td class="value">
                            {$order->getPropertyView('reg_phone')}
                            <div class="help">В формате: +7(123)9876543</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">E-mail</td>
                        <td class="value">
                            {$order->getPropertyView('reg_e_mail')}
                            <div class="help">Например shinline@mail.ru</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Пароль</td>
                        <td class="value">
                            <input type="checkbox" name="reg_autologin" {if $order.reg_autologin}checked{/if} value="1"
                                   id="reg-autologin">
                            <label for="reg-autologin">Получить автоматически на e-mail</label>
                            <div class="help">Нужен для проверки статуса заказа, обращения в поддержку, входа в
                                кабинет
                            </div>
                            <div id="manual-login" {if $order.reg_autologin}style="display:none"{/if}>
                                <div class="inline f">
                                    {$order.__reg_openpass->formView(['form'])}
                                    <div class="help">Пароль</div>
                                </div>
                                <div class="inline">
                                    {$order.__reg_pass2->formView()}
                                    <div class="help">Повтор пароля</div>
                                </div>
                                <div class="inline">
                                    <div class="form-error">{$order->getErrorsByForm('reg_openpass', ', ')}</div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    {foreach from=$reg_userfields->getStructure() item=fld}
                        <tr>
                            <td class="key">{$fld.title}</td>
                            <td class="value">
                                {$reg_userfields->getForm($fld.alias)}
                                {assign var=errname value=$reg_userfields->getErrorForm($fld.alias)}
                                {assign var=error value=$order->getErrorsByForm($errname, ', ')}
                                {if !empty($error)}
                                    <span class="form-error">{$error}</span>
                                {/if}
                            </td>
                        </tr>
                    {/foreach}

                    </tbody>
                </table>
            </div>
            <div class="tabFrame{if $order.user_type !='noregister'} lowhide{/if}" id="user-tab2">
                <table class="formTable">
                    <tbody>
                    <tr>
                        <td class="key">Ф.И.О.</td>
                        <td class="value">
                            {$order->getPropertyView('user_fio')}
                            <div class="help">Фамилия, Имя и Отчество покупателя</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">E-mail</td>
                        <td class="value">
                            {$order->getPropertyView('user_email')}
                            <div class="help">E-mail покупателя</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Телефон</td>
                        <td class="value">
                            {$order->getPropertyView('user_phone')}
                            <div class="help">В формате: +7(123)9876543</div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="tabFrame{if $order.user_type !='user'} lowhide{/if}" id="user-tab3">
                <table class="formTable">
                    <tbody>
                    <tr>
                        <td class="key">Логин</td>
                        <td class="value">
                            {$order->getPropertyView('login')}
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Пароль</td>
                        <td class="value">
                            {$order->getPropertyView('password')}
                            <a href="?ologin=1" id="order_login" class="submit-button">Вход</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        {/if}
    </div>

    <div class="col-xs-12 col-lg-6 address-info">

        <h4>Адрес</h4>

        {if $have_pickup_points} {* Если есть пункты самовывоза *}
        <div class="formPickUpTypeWrapper">
            <label for="onlyPickUpPoints">
                <input id="onlyPickUpPoints" type="radio" name="only_pickup_points" value="1"
                       {if $order.only_pickup_points!==0}checked{/if}/>
                <i class="fake-ratio"></i> {t}Самовывоз{/t}
            </label>
            <label for="onlyDelivery">
                <input id="onlyDelivery" type="radio" name="only_pickup_points" value="0"
                       {if $order.only_pickup_points===0}checked{/if}/>
                <i class="fake-ratio"></i> {t}Доставка по адресу{/t}
            </label>
        </div>
        <div id="formAddressSectionWrapper"
             class="formAddressSectionWrapper {if $order.only_pickup_points!==0}hidden{/if}">

            {/if}

            {if count($address_list)>0}
                <div class="existsAddress">
                    Использовать следующий адрес:
                    <table id="address-list">
                        {foreach from=$address_list item=address}
                            <tr>
                                <td><input type="radio" name="use_addr" value="{$address.id}" id="adr_{$address.id}"
                                           {if $order.use_addr == $address.id}checked{/if}></td>
                                <td>
                                    <label for="adr_{$address.id}">{$address->getLineView()}</label>
                                    <a href="{$router->getUrl('shop-front-checkout', ['Act' =>'deleteAddress', 'id' => $address.id])}"
                                       class="deleteAddress"/></a>
                                </td>
                            </tr>
                        {/foreach}
                        <tr>
                            <td><input type="radio" name="use_addr" value="0" id="use_addr_new"
                                       {if $order.use_addr == 0}checked{/if}></td>
                            <td><label for="use_addr_new">Другой адрес</label></td>
                        </tr>
                    </table>
                </div>
            {else}
                <input type="hidden" name="use_addr" value="0">
            {/if}
            <table class="formTable">
                <tbody class="new-address">
                <tr>
                    <td class="key">Страна</td>
                    <td class="value">
                        {assign var=region_tools_url value=$router->getUrl('shop-front-regiontools', ["Act" => 'listByParent'])}
                        {$order->getPropertyView('addr_country_id', ['data-region-url' => $region_tools_url])}
                        <div class="help hidden">Например: Россия</div>
                    </td>
                </tr>
                <tr>
                    <td class="key">Область, Город</td>
                    <td class="value">
                        <div class="inline f">
                            {assign var=regcount value=$order->regionList()}
                            <span {if count($regcount) == 0}style="display:none"{/if} id="region-select">
                                {$order.__addr_region_id->formView()}
                            </span>

                            <span {if count($regcount) > 0}style="display:none"{/if} id="region-input">
                                {$order.__addr_region->formView()}
                            </span>
                            <div class="help">Область/Край</div>
                        </div>
                        <div class="inline">
                            {$order->getPropertyView('addr_city')}
                            <script type="text/javascript">
                                $(document).ready(function() {
                                    $('[name="addr_city"]').val('Краснодар');
                                });
                            </script>
                            <div class="help">Город</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="key">Индекс, Адрес</td>
                    <td class="value">
                        <div class="inline f">
                            {$order.__addr_zipcode->formView()}
                            <div class="help">Индекс</div>
                        </div>
                        <div class="inline">
                            {$order->getPropertyView('addr_address')}
                            <div class="help">Адрес</div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            {if $have_pickup_points}
        </div>
        {/if}
        {if $order.__code->isEnabled()}
            <table class="formTable robot-code">
                <tbody>
                <tr>
                    <td class="key">Защитный код</td>
                    <td class="value">
                        <span class="code">{$order->getPropertyView('code')}</span>
                        <div class="help">Необходим для защиты от спам роботов</div>
                    </td>
                </tr>
                </tbody>
            </table>
        {/if}

        {if $conf_userfields->notEmpty()}
            <br>
            <div class="formSection">
                <span class="formSectionTitle">дополнительные сведения</span>
            </div>
            <table class="formTable">
                <tbody>
                {foreach from=$conf_userfields->getStructure() item=fld}
                    <tr>
                        <td class="key">{$fld.title}</td>
                        <td class="value">
                            {$conf_userfields->getForm($fld.alias)}
                            {assign var=errname value=$conf_userfields->getErrorForm($fld.alias)}
                            {assign var=error value=$order->getErrorsByForm($errname, ', ')}
                            {if !empty($error)}
                                <span class="form-error">{$error}</span>
                            {/if}
                        </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        {/if}
    </div>

    <div class="clearfix"></div>

    <div class="checkout-btn clearfix">
        <button type="submit" class="btn btn-primary btn-lg btn-block">Продолжить</button>
        <a href="/cart/" class="btn btn-link btn-lg btn-block">Назад</a>
    </div>
</form>