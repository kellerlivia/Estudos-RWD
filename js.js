///Botão
const botaoSubmit = document.getElementById('btnEnviar')
botaoSubmit.addEventListener("click", ()=>{
    const campos = document.querySelectorAll("input[type='text'], input[type='email']")

    for(let x = 0 ; x < campos.length ; x++){
        if(campos[x].value ==""){
            alert("O CAMPO"+ campos[x].Placeholder +" não foi preenchido!")
            return
        }
    }

    document.querySelector('.cadastro').submit()
})