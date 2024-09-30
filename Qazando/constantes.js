const paises = ['Brasil', 'Argentina','Alemanha'] //lista de dados

console.log('Acessando o pais: ' + paises[0]) //acessando uma posição do array 

console.log('Tamanho do array: ' + paises.length) //acessando tamanho do array 

//Operaçoes com o array 

paises.push('EUA')  // Adiciona no final do array 
paises.pop()//Remove o ultimo elemento
paises.unshift('França') //adiciona pais na primeira posição
paises.shift() // remove na primeira posição 

console.log (paises)
console.log (paises[0])