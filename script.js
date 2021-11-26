const calcular = document.getElementById('calcular');


function valorfuturo () {
    const nome = document.getElementById('nome').value;
    const p = document.getElementById('investimento').value;
    const n = document.getElementById('meses').value;
    const juros = (document.getElementById('juros').value);
    const resultado = document.getElementById('resultado');

    if (nome !== '' && p !== '' && n !== ''&& juros !== '') {

        const i = juros/100;

        const vf = ((p*(((1+i)**n)-1))/i) .toFixed(2);
        
        let classificacao = '';

        resultado.textContent = `Olá, ${nome}! Se você aplicar R$${p},00, à taxa de ${juros}%a.m., durante ${n} meses, poupará R$ ${vf}.`;

    }else {
        resultado.textContent = 'Para calcular o valor poupado, preencha todos os campos.';
    }

}
calcular.addEventListener('click', valorfuturo);
