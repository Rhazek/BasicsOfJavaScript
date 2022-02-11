let num = [5,8,2,9,3]
num[5] = 6
num.push(7)
num.sort()

/*
for(let c=0;c<num.length;c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}*/

for(let c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)  
}

console.log(`O valor 9 está na posição ${num.indexOf(9)}`)