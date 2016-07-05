function startson(){	var site='http://sonline.su/order_new2b/place_5706/theme_9';var css=document.createElement("link");
css.setAttribute("rel", "stylesheet");
css.setAttribute("type", "text/css");
css.setAttribute("href", 'http://sonline.su/css/widget.css');
document.getElementsByTagName("head")[0].appendChild(css);
var url=site;
if(window.innerHeight!=undefined){
var iH=window.innerHeight,
Yo=window.pageYOffset;
}else{
var d=document.documentElement,
iH=d.clientHeight,
Yo=d.scrollTop;
}
var h=iH/2+Yo-345;
var popup=document.createElement("div");
popup.innerHTML='<div class="conline-signup-popup-wrap" id="conline_signup_overlay"><div class="conline-overlay">&#160;</div><div class="conline-signup-popup-inner" style="z-index: 99; top: '+h+'px"><span style="top:25px;" class="conline-popup-close" onclick="var po=document.getElementById(\'conline_signup_overlay\');po.parentNode.removeChild(po)">&nbsp;</span><iframe style="width:1024px; height:661px;" scrolling="no" src="'+url+'"></iframe></div></div>';document.getElementsByTagName("body")[0].appendChild(popup);
}
