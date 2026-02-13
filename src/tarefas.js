const tarefas = [
  { id: 1, descricao: "Estudar química", concluida: false },
  { id: 2, descricao: "Criar páginas no Figma", concluida: true }
];

export function encontrarTarefaId(id) {
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id === id) {
      return i;
    }
  }
  return -1;
}

export function listarTarefas() {
  console.log("LISTA DE TAREFAS");

  tarefas.forEach(function (tarefa) {
    console.log(
      `#${tarefa.id} - ${tarefa.descricao} - concluida: ${tarefa.concluida}`
    );
  });
}

export function criarTarefa(descricao) {
  const novaTarefa = {
    id: tarefas.length + 1,
    descricao: descricao,
    concluida: false
  };

  tarefas.push(novaTarefa);
}

export function atualizarTarefa(id, novaDescricao, novoStatus) {
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

export function excluirTarefa(id) {
  const indiceEncontrado = encontrarTarefaId(id);

  if (indiceEncontrado === -1) {
    console.log(`Tarefa com id ${id} não encontrada`);
  }

  const tarefaRemovida = tarefas[indiceEncontrado];

  tarefas.splice(indiceEncontrado, 1);

  console.log(`Tarefa removida: ${tarefaRemovida.descricao}`);
}
