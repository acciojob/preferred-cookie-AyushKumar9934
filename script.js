//your JS code here. If required.
let fontsizeCookie=getCookie("fontsize")
let fontcolorCookie=getCookie("fontcolor");
let fontsize=document.getElementById("fontsize");

    let fontcolor=document.getElementById("fontcolor");
if(fontsizeCookie!=""){
    console.log("this is font size by cookie",fontsizeCookie)
    fontsize.value=(fontsizeCookie);
}
if(fontcolorCookie!=""){
fontcolor.value=fontcolorCookie;
}

document.getElementById("save").addEventListener('click',saveCookie);
function saveCookie(){
   const d=new Date();
   d.setTime(d.getTime()+(365*24*60*60*1000));
   let expires="expires="+d.toUTCString();
   document.cookie="fontsize"+"="+fontsize.value+";"+expires+";path=/";
   console.log("the saved cookie is ",document.cookie);
   document.cookie="fontcolor"+"="+fontcolor.value+";"+expires+";path=/";
}
function getCookie(cname){
    let name=cname+"=";
   // let decodeCookie=decodeURIComponent(document.cookie);
    let ca=document.cookie.split(';');
    for(let i=0;i<ca.length;i++){
        let c=ca[i];
        while(c.charAt(0)==' '){
            c=c.substring(1);
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}