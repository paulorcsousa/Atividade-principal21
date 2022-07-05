function receber(){
var nome       = document.getElementById('nome').value;
var comentario = document.getElementById('comentario').value;
var result     = document.getElementById('result');
var corFundo   = document.getElementById("corfundo").value;
var corTexto   = document.getElementById("cortexto").value;

    result.innerHTML += '<div class="resposta" style="color: ' + corTexto + '; background-color: ' + corFundo + ';"> <strong>' + nome + '</strong> <br> <br>' + comentario + '</div>'; 

    
    document.getElementById('nome').value       = '';
    document.getElementById('comentario').value = '';
}