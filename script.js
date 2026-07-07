function musica(){

    let audio = document.getElementById("cancion");

    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }

}



function sorpresa(){

    document.getElementById("mensaje").innerHTML =
    "❤️ Gracias por estos 3 meses tan especiales. Espero seguir creando muchos recuerdos contigo. Te Amoo muchísimo ❤️";


    crearCorazones();

}



function crearCorazones(){

    for(let i=0;i<30;i++){

        let corazon = document.createElement("div");

        corazon.className="corazon";

        corazon.innerHTML="❤️";

        corazon.style.left=Math.random()*100+"%";

        corazon.style.animationDuration=
        (Math.random()*3+3)+"s";


        document.body.appendChild(corazon);


        setTimeout(()=>{

            corazon.remove();

        },5000);

    }

}


// corazones automáticos

setInterval(()=>{

    let corazon=document.createElement("div");

    corazon.className="corazon";

    corazon.innerHTML="💖";

    corazon.style.left=Math.random()*100+"%";

    document.body.appendChild(corazon);


    setTimeout(()=>{

        corazon.remove();

    },5000);


},800);
