var num = document.getElementById('txtnum')
var res = document.querySelector('div#res')
var lis = document.getElementById('lista')
let tab = []

function adicionar() {
        if (num.value.length == 0) {
            window.alert('Por favor, digite um número!')
        } else {
            let n = Number(num.value)
            if (n > 100 || n < 0 || tab.indexOf(n) > -1) {
                window.alert('Valor inválido ou já encontrado na lista.')
            } else {
                tab.push(n)
                num.value = ''
                console.log(tab)
                let item = document.createElement('option')
                item.text = `Valor ${n} adicionado`
                lis.appendChild(item)
            }
        }
}


function finalizar() {
    var maior = Math.max.apply(null, tab)
    var menor = Math.min.apply(null, tab)
    const reducer = (n1, n2) => n1+n2
    const total = (tab.reduce(reducer,0))
    const med = total/tab.length
    if (tab == 0) {
        window.alert('Adicione valores antes de finalizar.')
    }else{
    res.innerHTML = `Ao todo, temos ${tab.length} números cadastrados.<br>` 
    res.innerHTML += `O maior valor informado foi ${maior}<br>`
    res.innerHTML += `O menor valor informado foi ${menor}<br>`
    res.innerHTML += `A soma dos valores é ${tab.reduce(reducer,0)}<br>`
    res.innerHTML += `A média dos valores digitados é ${med}`
    }
}