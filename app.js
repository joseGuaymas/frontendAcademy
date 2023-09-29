// CAMBIO EL COLOR DEL ELEMENTO ENLACE-PORTAFOLIO USANDO
// EVENTOS JAVASCRIPT, UNO PARA CUANDO EL MOUSE SE 
// POSA POR ENCIMA Y OTRO PARA CUANDO DEJA DE HACERLO
// 

const enlacePortafolio = document.getElementById('enlace-portafolio');

enlacePortafolio.addEventListener('mouseenter', () => {
    enlacePortafolio.style.color = 'rgb(24, 71, 137)'
});

enlacePortafolio.addEventListener('mouseout', () => {
    enlacePortafolio.style.color = '#3b3b3b'
});

// ANIMACIÓN PARA VISUALIZAR/OCULTAR LA SECCIÓN
// CURSOS Y CERTIFICACIONES EN DOS PARTES

const listaCursos1 = document.getElementById('lista-cursos-1'); 
const listaCursos2 = document.getElementById('lista-cursos-2'); 
const verMasBTN = document.getElementById('ver-mas-btn');
const volverBTN = document.getElementById('volver-btn');

function alterarListaCursos() {
    listaCursos1.classList.toggle('hidden');
    listaCursos2.classList.toggle('hidden');
    verMasBTN.classList.toggle('hidden');
    volverBTN.classList.toggle('hidden');
};

verMasBTN.addEventListener('click', e => {
    e.preventDefault();
    alterarListaCursos();
});

volverBTN.addEventListener('click', e => {
    e.preventDefault();
    alterarListaCursos();
});