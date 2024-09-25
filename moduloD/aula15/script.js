function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById("res")
    var res = document.querySelector('div#res')
    if(fano.value.length == 0  || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
      // res.innerHTML =`Idade calculada: ${idade}` //Teste de idade 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
          genero = 'Homem'
          if (idade >=0 && idade<13){
            //Criança
            img.setAttribute('src', 'menino.png')
          }else if (idade <21){
            //jovem
            img.setAttribute('src','homem20.png')
          }else if (idade <60){
            //homem
            img.setAttribute('src','homem40.png')
          }else {
            //idoso
            img.setAttribute('src','homem60.png')
            }
        } 
        else if (fsex[1].checked){
            genero='Mulher'
            if (idade >=0 && idade<13){
                //Criança
                img.setAttribute('src', 'menina.png')
              }else if (idade <21){
                //jovem
                img.setAttribute('src', 'mulher20.png')
              }else if (idade <60){
                //mulher
                img.setAttribute('src', 'mulher40.png')
              }else {
                //idosa
                img.setAttribute('src', 'mulher60.png')
                }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}