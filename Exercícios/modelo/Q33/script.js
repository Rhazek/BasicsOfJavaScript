function analisar(){
var valorDaCasa = document.getElementById('txtval')
var salario = document.getElementById('txtsal')
var anos = document.getElementById('txtano')
var res = document.querySelector('div#res')

if(valorDaCasa.value.length == 0 || salario.value.length == 0 || anos.value.length == 0){
    window.alert("[ERRO] Digite os valores corretamente")
}else{ 
    let val = Number(valorDaCasa.value)
    let sal = Number(salario.value)
    let ano = Number(anos.value)
    let prest = val/(ano*12)
    res.innerHTML = `O valor da prestação é de ${prest.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}<br>`
    if(prest<(sal*30)/100){
        res.innerHTML += `O EMPRÉSTIMO FOI APROVADO! :)`
    }else{
        res.innerHTML += `EMPRÉSTIMO RECUSADO :(`
    }
}
}