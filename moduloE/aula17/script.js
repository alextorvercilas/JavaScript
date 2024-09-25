function carregar(){
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    //var horas = 19
    var minutos = data.getMinutes()
    var horaatual = [horas, minutos].join(':')
    
    msg.innerHTML = `Agora são ${horaatual}`
    if (horas >= 0 && horas <12){
        //BOM DIA
        img.src = 'Manha.png'
        document.body.style.background='#faf290'
    }else if(horas >= 12 && horas <=18){
        //BOA TARDE 
        img.src = 'tarde.png'
        document.body.style.background='#e88d3c'
    }
    else{
       //BOA NOITE
       img.src = 'noite.png'
       document.body.style.background='#31336c'
    }
    }
    
    