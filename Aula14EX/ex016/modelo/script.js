function contar() {
    var ini = document.getElementById('txtin')
    var fi = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.querySelector('div#res')
    var inicio = Number(ini.value)
    var fim = Number(fi.value)
    var passo = Number(pas.value)
    var c = 0


    res.innerHTML = `Contando:<br>`
    if(passo<=0){
        window.alert("Passo inválido! Considerando PASSO 1")
        passo = 1
    }
    if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
        window.alert("[ERRO] Digite os dados novamente.")
    } else if (inicio < fim) {
        for (c = inicio; c <= fim; c += passo) { //Contagem crescente
            res.innerHTML += ` ${c} 👉 `
        }
    } else {
        for (c = inicio; c >= fim; c -= passo) { //Contagem decrescente
            res.innerHTML += ` ${c} 👉 `
        }
    }
    res.innerHTML += `🏁`
}