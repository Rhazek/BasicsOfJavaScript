function calcular(){
    var num1 = document.getElementById('txtn1')
    var num2 = document.getElementById('txtn2')
    var res = document.querySelector('div#res')
    var oper = document.getElementsByName('oper')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var sinal = ''
    var calc = 0

    if(oper[0].checked){
        sinal = '+'
        calc = n1 + n2
    } else if(oper[1].checked){
        sinal = '-'
        calc = n1 - n2
    } else if(oper[2].checked){
        sinal = 'x'
        calc = n1 * n2
    } else if(oper[3].checked){
        sinal = ':'
        calc = n1 / n2
    }
    /*switch(oper){
        case 'somar':
        calc = Number(n1.value) + Number(n2.value)
        break
        case 'subtrair': 
        calc = Number(n1.value) - Number(n2.value)
        break
        case 'multiplicar':
        calc = Number(n1.value) * Number(n2.value)
        break
        case 'dividir':
        calc = Number(n1.value) / Number(n2.value)
    }*/

    res.innerHTML = `O resultado de ${n1} ${sinal} ${n2} é igual a ${calc}`
}