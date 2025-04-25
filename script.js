document.addEventListener('DOMContentLoaded',()=>{
    const texto = 'Carlos Hernández';
    const destino = document.getElementById('typed');
    let i = 0;

    const escribir = () =>{
        if(i<texto.length){
            destino.textContent += texto[i++];
            setTimeout(escribir,150);
        }
    }

    escribir()
});