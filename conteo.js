// Contador: cada posición del contador muestra una palabra de la lista.
const palabras = ['agua', 'cacao', 'manzana', 'quinua', 'guayaba'];

let contador = 0;

const valor = document.querySelector('#valor');
const palabra = document.querySelector('#palabra');
const lista = document.querySelector('#lista');
const botones = document.querySelectorAll('[data-accion]');

// Pinta la lista de palabras una sola vez.
palabras.forEach((texto, indice) => {
    const item = document.createElement('li');
    item.textContent = `${indice}: ${texto}`;
    lista.append(item);
});

function render() {
    const existe = contador >= 0 && contador < palabras.length;

    valor.textContent = contador;
    palabra.textContent = existe ? palabras[contador] : 'No existe';
    palabra.classList.toggle('palabra--vacia', !existe);

    valor.classList.toggle('numero--positivo', contador > 0);
    valor.classList.toggle('numero--negativo', contador < 0);

    [...lista.children].forEach((item, indice) => {
        item.classList.toggle('activa', indice === contador);
    });
}

function ejecutar(accion) {
    if (accion === 'aumentar') contador++;
    else if (accion === 'disminuir') contador--;
    else contador = 0;
    render();
}

botones.forEach((boton) => {
    boton.addEventListener('click', () => ejecutar(boton.dataset.accion));
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowUp' || evento.key === '+') ejecutar('aumentar');
    else if (evento.key === 'ArrowDown' || evento.key === '-') ejecutar('disminuir');
    else if (evento.key === '0' || evento.key === 'Escape') ejecutar('reiniciar');
});

render();
