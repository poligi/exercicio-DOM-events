/* 1. Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no
botão calcular efetuar os cálculos solicitados na página. 
*/ 

const valorBase = document.getElementById('valor_base')
const valorTransporte = document.getElementById('valor_transporte')
const valorAlimentacao = document.getElementById('valor_alimentacao')
const totalReceitas = document.getElementById('valor_receita')
const descontoAutomovel = document.getElementById('valor_automovel')
const faltas = document.getElementById('faltas')
const totalDescontos = document.getElementById('valor_descontos')
const total = document.getElementById('valor_total')

function calculoReceita() {
    const receita = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value)
    
    totalReceitas.value = receita.toFixed(2)
}     //o .value é usado para acessar um valor inserido no HTML, como <input>, <select>, <textarea>, ele retorna o valor atual contido no elemento

function calculoDescontos() {
    const descontos = parseFloat(descontoAutomovel.value) + parseFloat(faltas.value)

    totalDescontos.value = descontos.toFixed(2)
}

function totalPlanilha() {
    const resultado = parseFloat(totalReceitas.value) - parseFloat(totalDescontos.value)

    total.value = resultado.toFixed(2)
}

// document.getElementById('btn_calcular').addEventListener('click', () => {
//     calculoReceita()
//     calculoDescontos()
//     totalPlanilha()
// })

/* 2. Alterar o cálculo do botão calcular para que a cada vez que o
usuário digitar um valor e sair do input o formulário seja
automaticamente recalculado. 
*/

function recalcularTudo() {
    calculoReceita()
    calculoDescontos()
    totalPlanilha()
}

valorBase.addEventListener('input', recalcularTudo)
valorTransporte.addEventListener('input', recalcularTudo)
valorAlimentacao.addEventListener('input', recalcularTudo)
descontoAutomovel.addEventListener('input', recalcularTudo)
faltas.addEventListener('input', recalcularTudo) 
   //O evento input é utilizado em cada campo relevante do formulário. 
   //Assim, quando o usuário alterar qualquer valor dos campos de receitas 
   //ou descontos, os cálculos serão automaticamente atualizados sem que 
   //o usuário precise clicar em um botão.

