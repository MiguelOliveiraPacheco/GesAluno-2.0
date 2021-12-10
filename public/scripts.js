
function init(){
   getNavbar()
   getTipos()
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3001/navbar')
    .then(res => res.text())
    .then((html)=>[
        nbar.innerHTML += html
    ])
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getTipos(){
    const tipos = document.getElementById('tipo')
    fetch('http://localhost:3001/formdata')
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<data.length; i++){
            const op = 
            `<option value"${data[i].idtipo}">${data[i].designacao}</option>`
            tipos.innerHTML += op

        }
    })
    .catch()
}

function getDados() {
    const nome = document.getElementById('nome').value
        if(nome=='')
            alert('Tem de indicar o seu nome completo.')

    const morada_rua = document.getElementById('morada_rua').value
        if(morada_rua=='')
            alert('Tem de indicar a sua morada.')

    const morada_num = document.getElementById('morada_num').value
        if(morada_num=='')
            alert('Tem de indicar o numero da sua morada.')

    const dnasc = document.getElementById('dnasc').value
        if(dnasc=='')
            alert('Tem de indicar a sua data de nascimento.')

    const telem = document.getElementById('telem').value
        if(telem=='')
            alert('Tem de indicar o seu numero de telemovel.')
        else{
            let i=0
            for(let i=0; i<telem.length; i++){
                if(telem.charAt(i).isNaN){
                    console.log('Número inválido!')
                }
                break
            }
            if(i==telem.legth-1){
                const telemInt = parseInt(telem)
                console.log(telemInt)
            }
        }
    
    const email = document.getElementById('email').value
        if(email=='')
            alert('Tem de indicar o seu endereço de email.')
        
    const tipo = document.getElementById('tipo').value
        if(tipo=='')
            alert('Tem de indicar o seu tipo.')
        else
            console.log(tipo)



    let dadosutilizador = {
        nomeutilizador : nome,
        moradarua : morada_rua,
        moradanumero : morada_num,
        datanascimento : dnasc,
        telemovel : telem,
        email : email,
        idtipo : tipo
    }


}




/*


funções antigas, podem dar jeito :)
function getData(){
    fetch('http://localhost:5000/bd')
    .then(res => res.json())
    .then(data => processData(data))
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}
function processData(data) {
    const linhaCidade = document.getElementById('cidades')
    linhaCidade.innerHTML=''
    for(let i=0 ; i < 100; i++){
        let nome = data[i].Name
        let distrito = data[i].District
        let pop = data[i].Population
        let ID = data[i].ID
        linhaCidade.innerHTML += `<tr>
                                    <td>${nome}</td>
                                    <td>${distrito}</td>
                                    <td>${pop}</td>
                                    <td>
                                    <button
                                        onclick="showID(${ID});"
                                        type="button" 
                                        class="btn btn-success"
                                        style="width:100px;"> Editar                                      
                                    </button>
                                    <button 
                                        type="button" 
                                        class="btn btn-danger"
                                        style="width:100px;"> Eliminar
                                    </button>
                                    </td>
                                </tr>`
    }
}
function showID(ID){
    console.log(ID)
}

*/