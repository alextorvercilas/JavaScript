// Exercicio 2 - Estrutura de decisão

//Percorrer uma lista de cidades
//Contendo:  ['Sao Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Recife']
//Para cada item, verificar se a cidade de Belo Horizonte está na lista
//Printar nome da cidade
//Caso esteja, avisar
//Caso nao esteja oe lemento procurado, avisar
//Numero da execução

//Execução: 1
//Cidade: São Paulo
//Encontraddo
// --------------------

const cidades =  ['Sao Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Recife']

cidades.forEach((nome, index) => {       
//for (index = 1; index < nomes.length; index++){
    console.log('Execução: ' , index + 1)
    console.log('Nome: '+ nome)
    if(nome == 'Belo Horizonte'){     
    console.log('Encontrado!')
    console.log('-----------------')
}else{
    console.log('Não Encontrado')
    console.log('-----------------')
}
});