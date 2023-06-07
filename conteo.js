let  array=['agua', 'cacao', 'manzana','quiqo','garu']
let contador=0;

const valor=document.querySelector("#value");
const boton=document.querySelectorAll(".Boton");


boton.forEach(botones=>{
    botones.addEventListener('click',function(h){
        const estilos= h.currentTarget.classList;
        
        if (estilos.contains('+')){
            contador++
            valor.style.color='#5D5B5A'
            valor.style.transition='2s'
        }
        else if (estilos.contains('-')){
            contador--
            valor.style.color='#7ACA69'
            valor.style.transition='2s'
        }
        else {
            contador=0
            valor.style.color='#9C69CA'
            valor.style.transition='3s'
        }
        if (contador in array){
            valor.textContent = `${contador} : ${array[contador]}`
            valor.style.transition = '1s'
        }

        else{
            valor.textContent = `${contador} : No existe`
            valor.style.transition = '1s'
        }
    })
      
})