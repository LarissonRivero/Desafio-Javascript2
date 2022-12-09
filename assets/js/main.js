//Desafio N° 1
const bordear = () => {
    const foto = document.getElementById("img");

    if (foto.style.border === "2px solid red") {
        foto.style.border = "0px";
    }
    else {
        foto.style.border = "2px solid red";
    }
};

//Desafio N°2
const canHomer = document.getElementById("homero").value;
const canMarge = document.getElementById("marge").value;
const canBart = document.getElementById("bart").value;

const button2 = document.getElementById("btn2");
button2.addEventListener("click", function() {
    var total = (parseInt(canHomer) + parseInt(canMarge) + parseInt(canBart));

    if (total > 10){
        document.querySelector("#text2").innerHTML = `Llevas ${total} , Solo puede adquirir 10 como maximo, Intentelo Nuevamente.`;

    } else
        document.querySelector("#text2").innerHTML = "Gracias por su compra, Vuelva Pronto";    
});

//Desafio N°3
const num1 = document.getElementById("password1").value;
const num2 = document.getElementById("password2").value;
const num3 = document.getElementById("password3").value;
let passwordCorrecto = num1 + num2 + num3;

const button3 = document.getElementById("btn3");
button3.addEventListener("click", function() {
    if (passwordCorrecto == 911){
        document.querySelector("#text3").innerHTML = "PassWord 1, Correcto!!!";

    }else if (passwordCorrecto == 714){
        document.querySelector("#text3").innerHTML = "PassWord 2, Correcto!!!";

    } else
        document.querySelector("#text3").innerHTML = `El Password ${passwordCorrecto} es incorrecto, Intentalo Nuevamente.`;  
});
