alert("Hello World!")
let primeiroNumero = prompt("Escreva o Primeiro Numero: ")
let segundoNumero = prompt("Escreva o Segundo Numero:")
primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)
let soma = primeiroNumero + segundoNumero
let sub = primeiroNumero - segundoNumero
alert(`A soma dos dois numeros declarados é: ${primeiroNumero + segundoNumero}`)
alert(`A subtração dos dois numeros declarados é: ${primeiroNumero - segundoNumero}`)
alert(`A  multiplicação dos dois numeros declarados é: ${primeiroNumero * segundoNumero}`)
alert(`A divisão dos dois numeros declarados é: ${primeiroNumero / segundoNumero}`) 
if(soma %2 == 0){
    alert("A soma dos numeros declarados é par")
}else{
    alert("A soma dos numeros Declarados Não é um número par")
}
if(sub %2 != 0){
    alert("A subtração dos numeros declarados é impar")
}else{
    alert("A subtração dos numeros declarados Não é um número ímpar")
}
let tipoNumber = 1
let tiponumber = Number(tipoNumber)
if(typeof tipoNumber === typeof tiponumber){
    alert("É um numero! a variavel declarada é 1 ")
}else{
    alert("Não é um numero")
}
let tipoString = "a"
let tipostring = String(tipoString)
 if(typeof tipoString == typeof tipostring){
    alert("É uma String")
 }else{
    alert("Não é uma String")
 }
 let bolean = prompt("Declare um valor booleano")
 let boolean = "true"||"false"
 if(bolean === boolean){
    alert("É um booleano")
 }else{
    alert("Não é um booleano")
 }


 




