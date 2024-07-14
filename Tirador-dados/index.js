


function tirarDados(){
    const numeroDados = document.getElementById("numeroDados").value;
    const resultado = document.getElementById("resultado");
    const imagenes = document.getElementById("imagenes");
    const values = [];
    const imgs =[];

    for(let i=0;i<numeroDados;i++){
        const valor = Math.floor(Math.random() * 6 )+1;
        values.push(valor); 
        imgs.push(`<img src="img/dado-${valor}.png">`);
        console.log(imgs);
    }

    resultado.textContent=`Dado: ${values.join(', ')}`
    imagenes.innerHTML = imgs.join(" ");


}
