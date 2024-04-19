const d=document;

let caja1=d.getElementById("caja1"),
caja2=d.getElementById("caja2"),
caja3=d.getElementById("caja3"),
caja_img1=d.getElementById("caja_img1"),
caja_img2=d.getElementById("caja_img2"),
caja_img3=d.getElementById("caja_img3")
titulo=d.getElementById("titulo"),
menu=d.getElementById("menu"),
cerrar=d.getElementById("cerrar_menu"),
panel=d.getElementById("panel"),
html=d.getElementById("html"),
logo=d.getElementById("logo");


function cambiosDisplays() {
    caja_img1.style.display="none";
    caja_img2.style.display="none";
    caja_img3.style.display="none";
}

function cd1(){
    cambiosDisplays();
    caja_img1.style.display="block";
    titulo.innerText = "postre crema de limón";
}

function cd2(){
    cambiosDisplays();
    caja_img2.style.display="block";
    titulo.innerText = "postre crema de fresa";
}

function cd3(){
    cambiosDisplays();
    caja_img3.style.display="block";
    titulo.innerText = "postre crema de mora";
}

function cerrarPanel() {
    panel.style.transform = "translateY(100vh)";
    panel.style.visibility = "hidden";
}

function abrirPanel(){
    panel.style.transform="translateY(0vh)";
    panel.style.visibility = "visible";
}

function cambioTema(){
    html.classList.toggle("dark");
}

caja1.addEventListener("click",cd1);
caja2.addEventListener("click",cd2);
caja3.addEventListener("click",cd3);
cerrar.addEventListener("click",cerrarPanel);
menu.addEventListener("click",abrirPanel);
logo.addEventListener("click",cambioTema);