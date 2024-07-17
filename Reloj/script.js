function actualizarHora(){
    const now = new Date();
    const hora = now.getHours().toString().padStart(2,0);
    const minutos = now.getMinutes().toString().padStart(2,0);
    const segundos = now.getSeconds().toString().padStart(2,0);
    const milisegundos = now.getMilliseconds();
    const ampm = hora >= 12 ? 'PM' : 'AM';
    const stringReloj = `${hora}:${minutos}:${segundos}:${milisegundos} ${ampm}`;

    document.getElementById("reloj").textContent = stringReloj;
}



if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        function(position){
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;
            document.getElementById("ubicacion").textContent = `Latitud: ${latitud} - Longitud: ${longitud}`
        },
        function(error){
            console.error("No se pudo obtener la ubicacion"+ error.message);
        }
    );

} else {
    console.log("No se pudo obtener la posición");
}




actualizarHora();

setInterval(actualizarHora,1);