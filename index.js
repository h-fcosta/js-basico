const tarefas = [
  { id: 1, descricao: "Estudar química", concluida: false },
  { id: 2, descricao: "Criar páginas no Figma", concluida: true }
];

listarTarefas();

console.log("Adicionando nova tarefa");
criarTarefa("Estudando para o enem");

atualizarTarefa(1, "", true);
excluirTarefa(2);

listarTarefas();

function encontrarTarefaId(id) {
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id === id) {
      return i;
    }
  }
  return -1;
}

function listarTarefas() {
  console.log("LISTA DE TAREFAS");

  tarefas.forEach(function (tarefa) {
    console.log(
      `#${tarefa.id} - ${tarefa.descricao} - concluida: ${tarefa.concluida}`
    );
  });
}

function criarTarefa(descricao) {
  const novaTarefa = {
    id: tarefas.length + 1,
    descricao: descricao,
    concluida: false
  };

  tarefas.push(novaTarefa);
}

function atualizarTarefa(id, novaDescricao, novoStatus) {
  const indiceEncontrado = encontrarTarefaId(id);

  if (indiceEncontrado === -1) {
    console.log(`Tarefa com id ${id} não encontrada`);
    return;
  }

  const tarefa = tarefas[indiceEncontrado];

  if (novaDescricao !== undefined && novaDescricao.trim() !== "") {
    tarefa.descricao = novaDescricao;
  }

  if (novoStatus !== undefined) {
    tarefa.concluida = novoStatus;
  }

  console.log(`Tarefa ${tarefa.descricao} atualizada!`);
}

function excluirTarefa(id) {
  const indiceEncontrado = encontrarTarefaId(id);

  if (indiceEncontrado === -1) {
    console.log(`Tarefa com id ${id} não encontrada`);
  }

  const tarefaRemovida = tarefas[indiceEncontrado];

  tarefas.splice(indiceEncontrado, 1);

  console.log(`Tarefa removida: ${tarefaRemovida.descricao}`);
}
