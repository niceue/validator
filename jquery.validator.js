/*! nice Validator 0.8.0
 * (c) 2012-2014 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e){"function"==typeof define?define([],function(){return e}):e(jQuery)}(function(e,t){"use strict";function i(n,r){var s=this;return!s instanceof i?new i(n,r):(s.$el=e(n),s._init(n,r),t)}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(z(e))for(var r in e)i[r]=s(e[r])}function r(e,t){var i=t?t===!0?this:t:r.prototype;if(z(e))for(var n in e){if(!e[n])return;i[n]=e[n]}}function s(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function a(t){var i="";return e.map(t.split(" "),function(e){i+=","+("#"===e.charAt(0)?e:'[name="'+e+'"]')}),i.substring(1)}function l(t){var i;if(t&&t.tagName){switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":case"FIELDSET":i=t.form||e(t).closest("."+k);break;case"FORM":i=t;break;default:i=e(t).closest("."+k)}return e(i).data(h)||e(i)[h]().data(h)}}function u(e){var t,i=e.currentTarget;i.form&&null===K(i.form,N)&&(t=l(i),t?(t._parse(i),t["_"+e.type](e)):K(i,V,null))}function o(i,n){var r=e.trim(K(i,V+"-"+n));if(r)return r=Function("return "+r)(),r?s(r):t}function c(e,t,i,n){var r=t.msg,s=t._r;return z(r)&&(r=r[s]),Q(r)||(r=K(e,F+"-"+s)||K(e,F)||i||(n?Q(n)?n:n[s]:"")),r}function d(e){var t;return e&&(t=B.exec(e)),t?t[1]:""}function f(e){return"INPUT"===e.tagName&&"checkbox"===e.type||"radio"===e.type}function g(e){return Date.parse(e.replace(/\.|\-/g,"/"))}!function(){var t,i,n=document.getElementsByTagName("script"),r=e._VALIDATOR_URI;if(r)i=n[0],t=r.match(/(.*)\/local\/(\w{2,5})\.js/);else for(var s=n.length,a=/(.*validator.js)\?.*local=(\w+)/;s--&&!t;)i=n[s],t=(i.hasAttribute?i.src:i.getAttribute("src",4)||"").match(a);if(t){var l=t[0].split("/").slice(0,-1).join("/").replace(/\/(local|src)$/,"")+"/",u=document.createElement("link");u.rel="stylesheet",u.href=l+"jquery.validator.css",i.parentNode.insertBefore(u,i),r||(u=document.createElement("script"),u.async=1,u.src=l+"local/"+t[2].replace("-","_")+".js",i.parentNode.insertBefore(u,i))}}();var p,m,h="validator",v="."+h,y=".rule",_=".field",b=".form",k="nice-"+h,w="n-ok",M="n-error",O="n-tip",$="n-loading",x="msg-box",C="aria-required",A="aria-invalid",V="data-rule",F="data-msg",T="data-tip",R="data-ok",j="data-target",E="data-inputstatus",N="novalidate",S=":verifiable",q=/(!?)\s?(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?\s*(;|\||&)?/g,D=/(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?/,I=/(?:([^:;\(\[]*):)?(.*)/,U=/[^\x00-\xff]/g,B=/^.*(top|right|bottom|left).*$/,L=/(?:(post|get):)?(.+)/i,H=/<|>/g,P=e.noop,W=e.proxy,X=e.isFunction,J=e.isArray,Q=function(e){return"string"==typeof e},z=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},G=!window.XMLHttpRequest,K=function(e,i,n){return n===t?e.getAttribute(i):(null===n?e.removeAttribute(i):e.setAttribute(i,""+n),t)},Y=window.console||{log:P,info:P},Z={debug:0,timely:1,theme:"default",ignore:"",focusInvalid:!0,beforeSubmit:P,validClass:"n-valid",invalidClass:"n-invalid",msgWrapper:"span",msgMaker:function(e){var t,i={error:M,ok:w,tip:O,loading:$}[e.type];return t='<span class="msg-wrap '+i+'" role="alert">',t+=e.arrow+e.icon+'<span class="n-msg">'+e.msg+"</span>",t+="</span>"},msgIcon:'<span class="n-icon"></span>',msgArrow:"",msgClass:"",defaultMsg:"{0} is not valid.",loadingMsg:"Validating..."},et={"default":{formClass:"n-default",msgClass:"n-right",showOk:""}};e.fn[h]=function(t){var n=this,r=arguments;return n.is(":input")?n:(!n.is("form")&&(n=this.find("form")),!n.length&&(n=this),n.each(function(){var n=e(this).data(h);if(n)if(Q(t)){if("_"===t.charAt(0))return;n[t].apply(n,Array.prototype.slice.call(r,1))}else t&&(n._reset(!0),n._init(this,t));else new i(this,t)}),this)},e.fn.isValid=function(e,t){var i,n,r=l(this[0]),s=X(e);return r?(r.checkOnly=!!t,n=r.options,i=r._multiValidate(this.is(":input")?this:this.find(S),function(t){t||!n.focusInvalid||r.checkOnly||r.$el.find(":input["+A+"]:first").focus(),s&&e.call(null,t),r.checkOnly=!1}),s?this:i):!0},e.expr[":"].verifiable=function(e){var t=e.nodeName.toLowerCase();return("input"===t&&!{submit:1,button:1,reset:1,image:1}[e.type]||"select"===t||"textarea"===t)&&e.disabled===!1},i.prototype={_init:function(i,s){var l,u,o,c=this;if(X(s)&&(s={valid:s}),s=s||{},o=K(i,"data-"+h+"-option"),o=o&&"{"===o.charAt(0)?Function("return "+o)():{},u=et[s.theme||o.theme||Z.theme],l=c.options=e.extend({},Z,u,o,c.options,s),c.rules=new n(l.rules,!0),c.messages=new r(l.messages,!0),c.elements=c.elements||{},c.deferred={},c.errors={},c.fields={},c._initFields(l.fields),J(l.groups)&&e.map(l.groups,function(i){return Q(i.fields)&&X(i.callback)?(i.$elems=c.$el.find(a(i.fields)),e.map(i.fields.split(" "),function(e){c.fields[e]=c.fields[e]||{},c.fields[e].group=i}),t):null}),c.msgOpt={type:"error",pos:d(l.msgClass),wrapper:l.msgWrapper,cls:l.msgClass,style:l.msgStyle,icon:l.msgIcon,arrow:l.msgArrow,show:l.msgShow,hide:l.msgHide},c.isAjaxSubmit=!1,l.valid||!e.trim(K(i,"action")))c.isAjaxSubmit=!0;else{var f=e[e._data?"_data":"data"](i,"events");f&&f.valid&&e.map(f.valid,function(e){return-1!==e.namespace.indexOf("form")?1:null}).length&&(c.isAjaxSubmit=!0)}c.$el.data(h)||(c.$el.data(h,c).addClass(k+" "+l.formClass).on("submit"+v+" validate"+v,W(c,"_submit")).on("reset"+v,W(c,"_reset")).on("showtip"+v,W(c,"_showTip")).on("validated"+_+v,S,W(c,"_validatedField")).on("validated"+y+v,S,W(c,"_validatedRule")).on("focusin"+v+" click"+v+" showtip"+v,S,W(c,"_focusin")).on("focusout"+v+" validate"+v,S,W(c,"_focusout")),l.timely>=2&&c.$el.on("keyup"+v+" paste"+v,S,W(c,"_focusout")).on("click"+v,":radio,:checkbox",W(c,"_focusout")).on("change"+v,'select,input[type="file"]',W(c,"_focusout")),c._novalidate=K(i,N),K(i,N,N))},_initFields:function(t){var i=this;z(t)&&e.each(t,function(e,t){if(null===t){var n=i.elements[e];n&&i._resetElement(n,!0),delete i.fields[e]}else i.fields[e]=Q(t)?{rule:t}:t}),i.$el.find(S).each(function(){i._parse(this)})},_parse:function(e){var t,i=this,n=e.name,r=K(e,V);r&&K(e,V,null),(e.id&&"#"+e.id in i.fields||!e.name)&&(n="#"+e.id),n&&(t=i.fields[n]||{},t.key=n,t.old={},t.rule=t.rule||r||"",t.rule&&(t.rule.match(/match|checked/)&&(t.must=!0),-1!==t.rule.indexOf("required")&&(t.required=!0,K(e,C,!0)),("timely"in t&&!t.timely||!i.options.timely)&&K(e,"notimely",!0),Q(t.target)&&K(e,j,t.target),Q(t.tip)&&K(e,T,t.tip),i.fields[n]=i._parseRule(t)))},_parseRule:function(e){var i=I.exec(e.rule),n=this.options;if(i)return e._i=0,i[1]&&(e.display=i[1]),!e.display&&n.display&&(e.display=n.display),i[2]&&(e.rules=[],i[2].replace(q,function(){var i=arguments;i[3]=i[3]||i[4],e.rules.push({not:"!"===i[1],method:i[2],params:i[3]?i[3].split(", "):t,or:"|"===i[5]})})),e},_multiValidate:function(i,n){var r=this,s=r.options;return r.verifying=!0,r.isValid=!0,s.ignore&&(i=i.not(s.ignore)),i.each(function(e,i){var n=r.getField(i);return n&&(r._validate(i,n),!r.isValid&&s.stopOnError)?!1:t}),e.when.apply(null,e.map(r.deferred,function(e){return e})).done(function(){n.call(r,r.isValid),r.verifying=!1}),e.isEmptyObject(r.deferred)?r.isValid:t},_submit:function(t){var i=this,n=i.options,r=t.target,s="submit"===t.type;t.preventDefault(),m&&~(m=!1)||i.submiting||"validate"===t.type&&i.$el[0]!==r||n.beforeSubmit.call(i,r)===!1||(n.debug&&Y.log("\n"+t.type),i._reset(),i.submiting=!0,i._multiValidate(i.$el.find(S),function(t){var a,l=t||2===n.debug?"valid":"invalid";t||(n.focusInvalid&&i.$el.find(":input["+A+'="true"]:first').focus(),a=e.map(i.errors,function(e){return e})),i.submiting=!1,X(n[l])&&n[l].call(i,r,a),i.$el.trigger(l+b,[r,a]),t&&!i.isAjaxSubmit&&s&&(m=!0,p&&p.name&&i.$el.append('<input type="hidden" name="'+p.name+'" value="'+e(p).val()+'">'),r.submit())}))},_reset:function(e){var t=this;t.errors={},e&&t.$el.find(S).each(function(e,i){t._resetElement(i)})},_resetElement:function(t,i){var n=this.options;e(t).removeClass(n.validClass+" "+n.invalidClass),this.hideMsg(t),i&&K(t,C,null)},_focusin:function(t){var i,n=this,r=n.options,s=t.target;n.verifying||("showtip"!==t.type&&"error"===K(s,E)&&r.focusCleanup&&(e(s).removeClass(r.invalidClass),n.hideMsg(s)),i=K(s,T),i&&n.showMsg(s,{type:"tip",msg:i}))},_focusout:function(t){var i,n,r=this,s=r.options,a=t.target,l=t.type,u={click:1,change:1,paste:1},o=0;if(!u[l]){if("validate"===l)n=!0;else{if(K(a,"notimely"))return;if(s.timely>=2&&"keyup"!==l)return}if(s.ignore&&e(a).is(s.ignore))return;if("keyup"===l){var c=t.keyCode,d={8:1,9:1,16:1,32:1,46:1};if(9===c&&!a.value)return;if(48>c&&!d[c])return;o=s.timely>=100?s.timely:500}}i=r.getField(a),i&&(o?(i._t&&clearTimeout(i._t),i._t=setTimeout(function(){r._validate(a,i,n)},o)):r._validate(a,i,n))},_showTip:function(e){var t=this;t.$el[0]===e.target&&t.$el.find(S+"["+T+"]").each(function(){t.showMsg(this,{msg:K(this,T),type:"tip"})})},_validatedField:function(t,i,n){var r=this,s=r.options,a=t.target,l=n.isValid=i.isValid=!!n.isValid,u=l?"valid":"invalid";n.key=i.key,n.rule=i._r,l?n.type="ok":(r.submiting&&(r.errors[i.key]=n.msg),r.isValid=!1),i.old.value=a.value,i.old.id=a.id,r.elements[i.key]=n.element=a,r.$el[0].isValid=l?r.isFormValid():l,X(i[u])&&i[u].call(r,a,n),e(a).attr(A,l?null:!0).removeClass(l?s.invalidClass:s.validClass).addClass(n.skip?"":l?s.validClass:s.invalidClass).trigger(u+_,[n,r]),r.$el.triggerHandler("validation",[n,r]),r.checkOnly||(i.msgMaker||s.msgMaker)&&r[n.showOk||n.msg?"showMsg":"hideMsg"](a,n,i)},_validatedRule:function(i,n,r,s){n=n||o.getField(f),s=s||{};var a,l,u,o=this,d=o.options,f=i.target,g=n._r,p=!1;if(null===r)return e(f).trigger("validated"+_,[n,{isValid:!0,skip:!0}]),t;if(r===!0||r===t||""===r?p=!0:Q(r)?a=r:z(r)&&(r.error?a=r.error:(a=r.ok,p=!0)),n.rules&&(l=n.rules[n._i],l.not&&(a=t,p="required"===g||!p),l.or))if(p)for(;n._i<n.rules.length&&n.rules[n._i].or;)n._i++;else u=!0;u||(p?(s.isValid=p,d.showOk!==!1&&(Q(a)||(Q(n.ok)?a=n.ok:Q(K(f,R))?a=K(f,R):Q(d.showOk)&&(a=d.showOk)),Q(a)&&(s.showOk=p,s.msg=a)),e(f).trigger("valid"+y,[g,s.msg])):(s.msg=(c(f,n,a,o.messages[g])||Z.defaultMsg).replace("{0}",o._getDisplay(f,n.display||"")),e(f).trigger("invalid"+y,[g,s.msg]))),d.debug&&Y.log("   "+n._i+": "+g+" => "+(p||s.msg||p)),u||p&&n._i<n.rules.length-1?(n._i++,o._checkRule(f,n)):(n._i=0,e(f).trigger("validated"+_,[n,s]))},_checkRule:function(i,n){var r,s,a=this,l=n.key,u=n.rules[n._i],c=u.method,d=u.params;a.submiting&&a.deferred[l]||(s=n.old,n._r=c,r=!n.must&&s.ret!==t&&s.rule===u&&s.id===i.id&&i.value&&s.value===i.value?s.ret:(o(i,c)||a.rules[c]||P).call(a,i,d,n),z(r)&&X(r.then)?(a.deferred[l]=r,!a.checkOnly&&a.showMsg(i,{type:"loading",msg:a.options.loadingMsg},n),r.then(function(r,l,o){var c,d=o.responseText,f=n.dataFilter||a.options.dataFilter;"json"===this.dataType?d=r:"{"===d.charAt(0)&&(d=e.parseJSON(d)||{}),X(f)||(f=function(e){return Q(e)||z(e)&&("error"in e||"ok"in e)?e:t}),c=f(d),c===t&&(c=f(d.data)),s.rule=u,s.ret=c,e(i).trigger("validated"+y,[n,c])},function(t,r){e(i).trigger("validated"+y,[n,r])}).always(function(){delete a.deferred[l]}),n.isValid=t):e(i).trigger("validated"+y,[n,r]))},_validate:function(i,n){if(!i.disabled&&null===K(i,N)){var r,s=this,a=e(i),l={},u=n.group,o=n.isValid=!0;if(n.rules||s._parse(i),s.options.debug&&Y.info(n.key),u&&(r=u.callback.call(s,u.$elems),r!==t&&(s.hideMsg(u.target,{},n),r===!0?r=t:(n._i=0,n._r="group",o=!1,s.hideMsg(i,{},n),e.extend(l,u)))),o&&!n.required&&!n.must&&!i.value){if("tip"===K(i,E))return;if(!f(i))return a.trigger("validated"+_,[n,{isValid:!0}]),t}r!==t?a.trigger("validated"+y,[n,r,l]):n.rule&&s._checkRule(i,n)}},test:function(e,i){var n,r,s,a=this,l=D.exec(i);return l&&(r=l[1],r in a.rules&&(s=l[2]||l[3],s=s?s.split(", "):t,n=a.rules[r].call(a,e,s))),n===!0||n===t||null===n},getRangeMsg:function(e,t,i,n){if(t){var r=this,s=r.messages[i]||"",a=t[0].split("~"),l=a[0],u=a[1],o="rg",c=[""],d=+e===+e;if(2===a.length){if(l&&u){if(d&&e>=+l&&+u>=e)return!0;c=c.concat(a)}else if(l&&!u){if(d&&e>=+l)return!0;c.push(l),o="gte"}else if(!l&&u){if(d&&+u>=e)return!0;c.push(u),o="lte"}}else{if(e===+l)return!0;c.push(l),o="eq"}return s&&(n&&s[o+n]&&(o+=n),c[0]=s[o]),r.renderMsg.apply(null,c)}},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},_getDisplay:function(e,t){return Q(t)?t:X(t)?t.call(this,e):""},_getMsgOpt:function(t){return e.extend({},this.msgOpt,Q(t)?{msg:t}:t)},_getMsgDOM:function(t,i){var n,r,s,a=e(t);if(a.is(":input")?(s=i.target||K(t,j),s&&(s=this.$el.find(s),s.length&&(s.is(":input")?t=s.get(0):n=s)),n||(r=!f(t)&&t.id?t.id:t.name,n=this.$el.find(i.wrapper+"."+x+'[for="'+r+'"]'))):n=a,!n.length)if(a=this.$el.find(s||t),n=e("<"+i.wrapper+">").attr({"class":x+(i.cls?" "+i.cls:""),style:i.style||"","for":r}),f(t)){var l=a.parent();n.appendTo(l.is("label")?l.parent():l)}else n[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](a);return n},showMsg:function(t,i,n){var r,s=this;if(i=s._getMsgOpt(i),(i.msg||i.showOk)&&(t=e(t).get(0),e(t).is(S)&&(K(t,E,i.type),n=n||s.getField(t),n&&(i.style=n.msgStyle||i.style,i.cls=n.msgClass||i.cls,i.wrapper=n.msgWrapper||i.wrapper)),r=(n||{}).msgMaker||s.options.msgMaker)){var a=s._getMsgDOM(t,i),l=a[0].className;!B.test(l)&&a.addClass(i.cls),G&&"bottom"===i.pos&&(a[0].style.marginTop=e(t).outerHeight()+"px"),a.html(r.call(s,i))[0].style.display="",X(i.show)&&i.show.call(s,a,i.type)}},hideMsg:function(t,i,n){var r=this;t=e(t).get(0),i=r._getMsgOpt(i),e(t).is(S)&&(K(t,E,null),K(t,A,null),n=n||r.getField(t),n&&(i.wrapper=n.msgWrapper||i.wrapper));var s=r._getMsgDOM(t,i);s.length&&(X(i.hide)?i.hide.call(r,s,i.type):s[0].style.display="none")},mapMsg:function(t){var i=this;e.each(t,function(e,t){var n=i.elements[e]||i.$el.find(':input[name="'+e+'"]')[0];i.showMsg(n,t)})},setMsg:function(e){new r(e,this.messages)},setRule:function(t){new n(t,this.rules),e.map(this.fields,function(e){e.old={}})},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,K(e,V)&&i._parse(e),i.fields[t]},setField:function(e,t){var i={};Q(e)?i[e]=t:z(e)&&(i=e),this._initFields(i)},isFormValid:function(){var e=this.fields;for(var t in e)if(!e[t].isValid)return e[t].isValid;return!0},holdSubmit:function(e){this.submiting=e===t||e},cleanUp:function(){this._reset(1)},destroy:function(){this._reset(1),this.$el.off(v).removeData(h),K(this.$el[0],N,this._novalidate)}},e(document).on("focusin",":input["+V+"]",function(e){u(e)}).on("click","input,button",function(e){var t=this,i=t.name;if(t.form)if("submit"===t.type)p=t,null!==K(t,N)&&(m=!0);else if(i&&f(t)){var n=t.form.elements[i];n.length&&(n=n[0]),K(n,V)&&u(e)}}).on("submit validate","form",function(t){if(null===K(this,N)){var i,n=e(this);n.data(h)||(i=n[h]().data(h),e.isEmptyObject(i.fields)?(K(this,N,N),n.off(v).removeData(h)):i._submit(t))}}),new n({required:function(t,i){var n=e.trim(t.value),r=!0;if(i)if(1===i.length){if(!n&&!this.test(t,i[0]))return K(t,C,null),null;K(t,C,!0)}else"not"===i[0]&&e.map(i.slice(1),function(t){n===e.trim(t)&&(r=!1)});return r&&!!n},integer:function(e,t){var i,n="0|",r="[1-9]\\d*",s=t?t[0]:"*";switch(s){case"+":i=r;break;case"-":i="-"+r;break;case"+0":i=n+r;break;case"-0":i=n+"-"+r;break;default:i=n+"-?"+r}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[s]},match:function(t,i,n){if(i){var r,s,a,l,u,o,c,d=this,f="eq";if(1===i.length?a=i[0]:(f=i[0],a=i[1]),u="#"===a.charAt(0)?a:':input[name="'+a+'"]',o=d.$el.find(u)[0]){if(c=d.getField(o),r=t.value,s=o.value,n._match||(d.$el.on("valid"+_+v,u,function(){e(t).trigger("validate")}),n._match=c._match=1),!n.required&&""===r&&""===s)return null;if(i[2]&&("date"===i[2]?(r=g(r),s=g(s)):"time"===i[2]&&(r=+r.replace(":",""),s=+s.replace(":",""))),"eq"!==f&&!isNaN(+r)&&isNaN(+s))return!0;switch(l=d.messages.match[f].replace("{1}",d._getDisplay(t,c.display||a)),f){case"lt":return+s>+r||l;case"lte":return+s>=+r||l;case"gte":return+r>=+s||l;case"gt":return+r>+s||l;case"neq":return r!==s||l;default:return r===s||l}}}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i,n){if(f(t)){var r,s,a=this;return s=a.$el.find('input[name="'+t.name+'"]').filter(function(){var t=this;return!r&&f(t)&&(r=t),!t.disabled&&t.checked&&e(t).is(":visible")}).length,i?a.getRangeMsg(s,i,"checked"):!!s||c(r,n,"")||a.messages.required}},length:function(e,t){var i=e.value,n=(t[1]?i.replace(U,"xx"):i).length;return this.getRangeMsg(n,t,"length",t[1]?"_2":"")},remote:function(t,i){if(i){var n,r=this,s=L.exec(i[0]),a=s[2],l=(s[1]||"POST").toUpperCase(),u={};return u[t.name]=t.value,i[1]&&e.map(i.slice(1),function(t){var i,n=t.split(":");t=e.trim(n[0]),i=e.trim(n[1]||"")||t,u[t]=r.$el.find("#"===i.charAt(0)?i:':input[name="'+i+'"]').val()}),u=e.param(u),"POST"===l&&(n=a.indexOf("?"),-1!==n&&(u+="&"+a.substring(n+1,a.length),a=a.substring(0,n))),e.ajax({url:a,type:l,data:u,cache:!1})}},filter:function(e,t){e.value=e.value.replace(t?RegExp("["+t[0]+"]","gm"):H,"")}}),i.config=function(t){e.each(t,function(e,t){"rules"===e?new n(t):"messages"===e?new r(t):Z[e]=t})},i.setTheme=function(t,i){z(t)?e.each(t,function(e,t){et[e]=t}):Q(t)&&z(i)&&(et[t]=i)},e[h]=i});
