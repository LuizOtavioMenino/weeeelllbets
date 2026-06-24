// define o objeto com os resultados(banco de dados)
const placarOficial = {
    1:{time1:2, time2:1},
    2:{time1:3, time2:4},
}
// função salvar palpite
function salvarpalpite(nomeJogo, id){
    // captura os elementos do dom
    const input1= document.getElementById(`time-1${id}`);
    const input2= document.getElementById(`time-2${id}`);
    // validaçãos dos campos 
}