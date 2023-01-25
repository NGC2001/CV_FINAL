
var num;

alert("Estás a punto de ver un Currículum Vitae");
let caja=document.getElementById("subir");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop>0) {
        caja.style.display="flex"
    } else {
        caja.style.display="none"
    }
})


function redirigir (num){
    if(num==1){


 window.open("https://gestion.pe/economia/management-empleo/10-habilidades-blandas-demandara-mercado-laboral-futuro-nnda-nnlt-261487-noticia/", "_blank");

}
else if(num==4){


window.open("https://web.whatsapp.com/","_blank");

}
else if(num==3){

    window.open("mailto:chinchin69420@outlook.com","_blank");


}
   else{

    window.open("https://www.sanitas.es/empresas/blog/hard-skills-habilidades-duras/index.html#:~:text=Por%20su%20parte%2C%20las%20habilidades,continua%20para%20seguir%20adquiriendo%20conocimientos.", "_blank");



   }







}
