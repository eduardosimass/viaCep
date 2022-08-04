/* Buscando Dados da Api */ 

const cepValue = document.querySelector('input'); 
const submitValue = document.querySelector('button')





submitValue.addEventListener('click', function (){
    
         const options = {
            method: "GET",
            mode: "cors",
            headers: {
                'content-type': 'application/json;charset=utf-8',
            }
        }
        
        fetch(`https://viacep.com.br/ws/${cepValue.value}/json/`,options )
        .then(
            response => response.json()
        ).then(
            data => {
            document.getElementById('logradouro').value=(data.logradouro);
            document.getElementById('bairro').value=(data.bairro);
            document.getElementById('localidade').value=(data.localidade);
            document.getElementById('uf').value=(data.uf);
            
            }
        ) 
    

})