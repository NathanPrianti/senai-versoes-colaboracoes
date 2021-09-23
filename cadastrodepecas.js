var ListaDePeca = ['peça 1','peça 2','peça 3','peça 4','peça 5','peça 6','peça 7','peça 8','peça 9','peça 10','peça 11'];
console.log('Quantidade de peças');

if (ListaDePeca.length > 10){
    console.log('Capacidade Insuficiente');
}
else {
    console.log('Capacidade Suficiente!');
}
console.log('quantidade de caracteres');
for (contador = 0; contador < ListaDePeca.length;contador++){
var PecaAtual = ListaDePeca[contador];
if (PecaAtual.length < 3){
    console.log(PecaAtual + ': a paça possui nome inferior a 3 caracteres e nao pode ser cadastrada!')
}
else {
    console.log(PecaAtual + ': a peça pode ser cadastrada')
}
}
console.log('peso da peça');

 var PesoDaPecaEmGramas,as = 50 ;

 if (PesoDaPecaEmGramas >= 100){
     console.log('peso suficiente');
 } else {
     console.log('valor Insuficiente')
 }