const numeroSenha = document.querySelector('.parametro-senha__texto');
const botoes = document.querySelectorAll('.parametro-senha__botao');

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;


function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?#¨&+-.';

function geraSenha(){
    let alfabeto = '';

   let alfabeto = " ",
if (checkbox [0].checked) {
senha += letrasMaiusculas [
math.floor (math.random () * letrasMaiusculas.lenght ) 
];
};

    let senha = " ",
if (checkbox[1].checked) {
senha += letrasMinusculas [
math.floor (math.random () * letrasMinusculas.lenght ) 
];
};

    let senha = " ",
if (checkbox[2].checked) {
senha += numeros [
math.floor(math.random () * numeros.lenght ) 
];
};

    let senha = " ",
if (checkbox[3].checked) {
senha += simbolos [
math.floor (math.random () * simbolos.lenght ) 
];
};



    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];
    }

   
          

    campoSenha.value = senha;
}

geraSenha();