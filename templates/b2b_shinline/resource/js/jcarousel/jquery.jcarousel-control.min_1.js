/*! jCarousel - v0.3.0-beta.2 - 2013-02-25
* http://sorgalla.com/jcarousel
* Copyright (c) 2013 Jan Sorgalla; Licensed MIT */
(function(t){"use strict";t.jCarousel.plugin("jcarouselControl",{_options:{target:"+=1",event:"click",method:"scroll"},_active:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("createend.jcarousel",t.proxy(this._create,this))},this),this.onReload=t.proxy(this._reload,this),this.onEvent=t.proxy(function(i){i.preventDefault();var s=this.options("method");t.isFunction(s)?s.call(this):this.carousel().jcarousel(this.options("method"),this.options("target"))},this)},_create:function(){this.carousel().one("destroy.jcarousel",this.onDestroy).bind("reloadend.jcarousel scrollend.jcarousel",this.onReload),this._element.bind(this.options("event")+".jcarouselcontrol",this.onEvent),this._reload()},_destroy:function(){this._element.unbind(".jcarouselcontrol",this.onEvent),this.carousel().unbind("destroy.jcarousel",this.onDestroy).unbind("reloadend.jcarousel scrollend.jcarousel",this.onReload)},_reload:function(){var i,s=t.jCarousel.parseTarget(this.options("target")),e=this.carousel();if(s.relative)i=e.jcarousel(s.target>0?"hasNext":"hasPrev");else{var r="object"!=typeof s.target?e.jcarousel("items").eq(s.target):s.target;i=e.jcarousel("target").index(r)>=0}return this._active!==i&&(this._trigger(i?"active":"inactive"),this._active=i),this}})})(jQuery);