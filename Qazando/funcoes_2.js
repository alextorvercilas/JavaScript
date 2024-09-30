//Funções

//Precisa chamar
//Pode ou nao receber parametros
//Pode ou nao retornar dados

//function gerarNome(nome, sobrenome, idade){
    //const  nome = 'Alexander '
    //const sobrenome = 'Melo'
    //const idade = 43
    
    //console.log('Nome: ', nome + sobrenome)
    //console.log('Idade: ', idade)
    //console.log('************************')
//}
function gerarNome(nome, sobrenome, idade){
    return 'Nome: '+ nome + sobrenome + '- Idade: '+ idade
    
}
const nomeGerado = gerarNome('Viviam ', 'Souza ', 37)
console.log(nomeGerado)


//console.log(gerarNome('Viviam ', 'Souza ', 37))
//console.log(gerarNome('Larissa ','Souza ',15))
//console.log(gerarNome('Lucas ','Souza ',11))
