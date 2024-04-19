let caja1=document.getElementById("caja1"),
caja2=document.getElementById("caja2"),
caja3=document.getElementById("caja3"),
caja_img1=document.getElementById("caja_img1"),
caja_img2=document.getElementById("caja_img2"),
caja_img3=document.getElementById("caja_img3");


function cambiosDisplays() {
    caja_img1.style.display="none";
    caja_img2.style.display="none";
    caja_img3.style.display="none";
}

function cd1(){
    cambiosDisplays();
    caja_img1.style.display="block";
}

function cd2(){
    cambiosDisplays();
    caja_img2.style.display="block";
}

function cd3(){
    cambiosDisplays();
    caja_img3.style.display="block";
}

caja1.addEventListener("click",cd1);
caja2.addEventListener("click",cd2);
caja3.addEventListener("click",cd3);