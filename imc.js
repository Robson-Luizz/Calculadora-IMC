
function calcular(){
      const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = (peso / (altura *altura)).toFixed(1);
    document.querySelector('p').innerHTML = nome + ' seu IMC é ' + imc + ' ' + classificacao(imc); 
}

function classificacao(imc){
    if(imc < 18.5)
        return ' e voce esta com Magreza';

        if(imc >= 18.5 && imc <= 24.9)
            return' e você esta com peso Normal';

    if(imc >=25 && imc <= 29.9)
        return ' e você esta Sobrepeso I';

    if(imc >= 30 && imc <= 39.9)
        return ' e você esta com Obesidade II';

    if(imc >= 40)
        return ' e você esta com Obesidade III';

    }








