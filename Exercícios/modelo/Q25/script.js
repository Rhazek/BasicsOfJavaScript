function classificar(){
var lado1 = document.getElementById('txtl1')
var lado2 = document.getElementById('txtl2')
var lado3 = document.getElementById('txtl3')
var res = document.querySelector('div#res')
var pop = document.querySelector('div#pop')
var img = document.createElement('img')
    img.setAttribute('id','foto')


if(lado1.value.length == 0 || lado2.value.length == 0 || lado3.value.length == 0){
    window.alert("[ERRO] Digite os valores dos lados.")
} else{
    l1 = Number(lado1.value)
    l2 = Number(lado2.value)
    l3 = Number(lado3.value)
    res.innerHTML = `CLASSIFICAÇÃO DO TRIÂNGULO<br>`
    if( l1<l2+l3 && l2<l1+l3 && l3<l1+l2){
        if(l1==l2 && l2==l3){
            img.setAttribute('src','t1.png')
            pop.innerHTML = `EQUILÁTERO`
        }else if(l1!=l2 && l2!=l3 && l3!=l1){
            img.setAttribute('src','t3.png')
            pop.innerHTML += `ESCALENO`
        } else if((l1==l2 && l1!=l3)||(l1==l3 && l1!=l2)||(l2==l3 && l2!=l1)){
            img.setAttribute('src','t2.png')
            pop.innerHTML += `ISÓSCELES`
        }
    } else{
        res.innerHTML = `Não foi possível classificar o triângulo, digite os dados novamente.`
    }
    res.appendChild(img)
}
}