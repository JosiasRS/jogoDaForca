var acertos = 0;
var errosMax = 7;
var erros = 0;
var desenhos = [];
var acertou = false;
var jogando = false;
var jog;
var biblioteca;
var tam;
var palavra;
var pLetra;

function defineLetras(L) {
    for (var i = 0; i < 11; i++) {
        document.getElementById("letra" + i).value = "";
        document.getElementById("letra" + i).style.display = "none";
    }
    for (var i = 0; i < L; i++) {
        document.getElementById("letra" + i).style.display = "inline-block";
    }
}

function jogar(){
    jog.focus();
    if(jog.value==""){
        alert("Digite uma letra");
    }else{
        if(jogando){
            var obj;
            var letraTmp;
            var letra;
            var pesq;
            letra=jog.value;
            jog.value="";
            acertou=false;
            pesq=palavra.match(letra);
            while(pesq!=null){
                letraTmp=palavra.search(letra);
                obj=document.getElementById("letra"+letraTmp).value=letra;
                palavra=palavra.replace(letra,'0');
                acertos++;
                pesq=palavra.match(letra);
                acertou=true;
            }
            if(!acertou){
                document.getElementById("dvletrasdigitadas").innerHTML+=letra.toUpperCase() + " ";
                erros++;
                if(erros<7){
                    desenhos[erros].style.display="block";
                }else{
                    document.getElementById("cabeca").src="img/cabeca2.png";
                    document.getElementById("dvmsgp").innerHTML="VOCÊ PERDEU! :(";
                    document.getElementById("resp").style.display = "block";
                    jogando=false;
                }
            }
            if(acertos==tam){
                document.getElementById("dvmsg").innerHTML="";
                document.getElementById("dvmsg").innerHTML="VOCÊ GANHOU! :)";
                jogando=false;
            }
        }
    }
}

function dica() {
    alert("FRUTA");
    jog.focus();
}

function resposta() {
    alert(palavra);
    jog.focus();
}

function quatro() {
    jogando = true;
    biblioteca = ["maça", "açai", "pera", "lima", "kiwi", "jaca", "coco"];
    var pos = Math.floor(Math.random() * biblioteca.length);
    palavra = biblioteca[pos];
    pLetra = palavra.substring(0, 1);
    tam = palavra.length;
    jog = document.getElementById("letraJ");
    jog.value = "";
    jog.focus();
    acertos = 0;
    erros = 0;
    acertou = false;
    document.getElementById("dvletrasdigitadas").innerHTML = "Letras Digitadas:";
    document.getElementById("palavra").innerHTML = "Adivinhe a palavra que começa com a letra: " + pLetra;
    defineLetras(tam);
    document.getElementById("dvmsg").innerHTML = "";
    document.getElementById("dvmsgp").innerHTML = "";
    desenhos[1]=document.getElementById("cabeca");
    desenhos[2]=document.getElementById("corpo");
    desenhos[3]=document.getElementById("bracoE");
    desenhos[4]=document.getElementById("bracoD");
    desenhos[5]=document.getElementById("pernaE");
    desenhos[6]=document.getElementById("pernaD");
    document.getElementById("cabeca").src="img/cabeca1.png";
    for(var i=1;i<7;i++){
        desenhos[i].style.display="none";
    }
}

function cinco() {
    biblioteca = ["jambo", "limao", "manga", "goiaba", "acerola", "jabuticaba", "guaraná", "carambola", "pitaya"];
    var pos = Math.floor(Math.random() * biblioteca.length);
    palavra = biblioteca[pos];
    pLetra = palavra.substring(0, 1);
    tam = palavra.length;
    jogando = true;
    jog = document.getElementById("letraJ");
    jog.value = "";
    jog.focus();
    acertos = 0;
    erros = 0;
    acertou = false;
    document.getElementById("dvletrasdigitadas").innerHTML = "Letras Digitadas:";
    document.getElementById("palavra").innerHTML = "Adivinhe a palavra que começa com a letra: " + pLetra;
    defineLetras(tam);
    document.getElementById("dvmsg").innerHTML = "";
    document.getElementById("dvmsgp").innerHTML = "";
    desenhos[1]=document.getElementById("cabeca");
    desenhos[2]=document.getElementById("corpo");
    desenhos[3]=document.getElementById("bracoE");
    desenhos[4]=document.getElementById("bracoD");
    desenhos[5]=document.getElementById("pernaE");
    desenhos[6]=document.getElementById("pernaD");
    document.getElementById("cabeca").src="img/cabeca1.png";
    for(var i=1;i<7;i++){
        desenhos[i].style.display="none";
    }
}

function inicia() {
    document.getElementById("in").style.display = "none";
    document.getElementById("qua").style.display = "block";
    document.getElementById("cin").style.display = "block";
    desenhos[1] = document.getElementById("cabeca");
    desenhos[2] = document.getElementById("corpo");
    desenhos[3] = document.getElementById("bracoE");
    desenhos[4] = document.getElementById("bracoD");
    desenhos[5] = document.getElementById("pernaE");
    desenhos[6] = document.getElementById("pernaD");
}

window.addEventListener("load", ini);