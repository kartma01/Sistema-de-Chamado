
//adicionar o chamado no sistema
function adicionarChamado(localChamado,item){
    localChamado.push(item)
}



//Listar chamados
function listarChamado(listaDeChamados,voltar){
    console.log(listaDeChamados)
    voltar(listaDeChamados)
}



//Atualizar status
//atualizarChamado() FUTURO

//Remover chamados
//removerChamado() FUTURO

export {adicionarChamado,listarChamado}