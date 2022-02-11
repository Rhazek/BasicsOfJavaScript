function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var boa = window.document.getElementById('boa')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${min} horas.`
if(hora >= 0 && hora<12){
    //BOM DIA
    img.src = "fotomanha.png"
    document.body.style.background = "#bba56e"
    boa.innerText = "BOM DIA!"
}else if(hora >= 12 && hora < 18 ){
    //BOA TARDE
    img.src = "fototarde.png"
    document.body.style.background = "#d86d1a"
    boa.innerText = "BOA TARDE!"
}else if(hora >= 18 && hora <24){
    //BOA NOITE
    img.src = "fotonoite.png"
    document.body.style.background = "#00161f"
    boa.innerText = "BOA NOITE!"
}
}