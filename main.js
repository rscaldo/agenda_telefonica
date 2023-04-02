const form = document.getElementById("form-atividade");
let linhas = "";
const nomes = [];
const telefones = [];

form.addEventListener("submit", function (e) {
  //REMOVE COMPORTAMENTO DE ATUALIZAR A PAGINA QUANDO CLICA NO SUBMIT
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
  numeroDeContatosFinais();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputTelefoneContato = document.getElementById("telefone-contato");
  const categoriaSelecionada = document.getElementById("categoria");

  //VERIFICAR NOMES REPETIDOS
  if (nomes.includes(inputNomeContato.value)) {
    alert(`O nome ${inputNomeContato.value} já foi adicionado.`);
  } else {
    nomes.push(inputNomeContato.value);
    telefones.push(Number(inputTelefoneContato.value));

    //ADICIONAR NO CORPO DA TABELA
    let linha = "<tr>"; //CRIANDO LINHA
    linha += `<td>${inputNomeContato.value}</td>`; //CRIANDO COLUNA
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `<td>${
      document.getElementById("categoria").options[
        document.getElementById("categoria").selectedIndex
      ].text
    }</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  //LIMPAR OS CAMPOS QUANDO TERMINAR
  inputNomeContato.value = "";
  inputTelefoneContato.value = "";
  categoriaSelecionada.selectedIndex = 0;
}

function atualizaTabela() {
  //AGORA PRECISAMOS JOGAR NO CORPO DA TABELA
  const corpoTabela = document.querySelector("tbody");
  //PARA INSERIR UM CONTEUDO DENTRO DO HTML USAMOS O innerHTML
  corpoTabela.innerHTML = linhas;
}

function numeroContatos() {
  //CALCULAR NUMERO DE CONTATOS
  let numeroDeContatos = 0;
  for (let i = 0; i < nomes.length; i++) {
    numeroDeContatos++;
  }
  return numeroDeContatos;
}

function numeroDeContatosFinais() {
  const contatoFinal = numeroContatos();
  document.getElementById("numero-contatos-finais").innerHTML = contatoFinal;
}
