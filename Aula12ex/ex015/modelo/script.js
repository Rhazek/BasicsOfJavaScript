function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')     
    }else{
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)   
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade<10){
                //Criança
                genero = 'Menino'
                img.setAttribute('src','menino.png')
                document.body.style.background=`#FF665A` 
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','jovemhomem.png')
                document.body.style.background=`#705E78`
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','adulto.png')
                document.body.style.background=`#FFF587`
            }else{
                //Idoso
                img.setAttribute('src','idoso.png')
                document.body.style.background=`#A3A1A8`
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade<10){
                //Criança
                genero = 'Menina'
                img.setAttribute('src','menina.png')
                document.body.style.background=`#FF8C64`
            }else if(idade<21){
                img.setAttribute('src','jovemmulher.png')
                document.body.style.background=`#A5AAA3`
                //Jovem
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','adulta.png')
                document.body.style.background=`#812F33`
            }else{
                //Idoso
                img.setAttribute('src','idosa.png')
                document.body.style.background=`#FEA443`
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}