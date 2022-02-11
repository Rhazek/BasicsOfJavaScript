let a = [8,6,2]

function ordena(){
    var menor = 0
    var aux = 0
    for(let c=0; c<a.length; c++){
        if(a[c]>menor){
            aux=a[c]
            menor=aux
            a[c]=menor            
        }else{
            a[c]=menor   
        }
    }
    for(let c=0; c<a.length; c++){
        console.log(a[c])
    }
  
}


ordena()