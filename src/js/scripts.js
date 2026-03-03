/*
    Variável - Pedacinho da memória 
    que eu posso guardar o que eu quiser

    Função - Pedacinho de código Que só Executa qunado é chamado
    Algoritmo - Receita do bolo
    Lógica de programação - Fazer o bolo

    // Algoritmo do nosso sistema
    // Lógica de Programação

    [x] Saber quem é o botão 
    [x] Saber quando o botão foi clicado
    [x] Saber quem é o textarea
    [x] Pegar o que tem dentro
    [x] Enviar para a IA
    [x] Pegar a resposta da IA e colocar na tela
    [x] Extilizar a resposta

    // Ir no HTML e pegar o botão
    // HTML = document (documento)
    // Quem ? Botão
    // Apelido para o botão - classes(class="")
    fetch = ferramenta do JS para se comunicar com  a IA
*/

let botao = document.querySelector(".botao-gerar");
let chave = "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";
let endereco = "https://api.groq.com/openai/v1/chat/completions";

// Criei a função que será chamada quando clicar no botão
// async / await(espere)
 async function gerarCodigo() {
  let textoUsuario = document.querySelector(".caixa-texto").value
  let blocoCodigo = document.querySelector(".bloco-codigo")
  let resultadoCodigo = document.querySelector(".resultado-codigo")
  let resposta = await fetch(endereco, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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",
    },

    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "Você é um gerador de código HTML Semântico e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate.",
        },

        {
            role: "user",
            content: textoUsuario
        }
      ],
    }),
  });

  let dados = await resposta.json()
  let resultado = dados.choices[0].message.content

  blocoCodigo.textContent = resultado
  resultadoCodigo.srcdoc = resultado
}

// Ficar de olho no botão, quando clicado chamar o gerarCódigo
botao.addEventListener("click", gerarCodigo);

// vizinho curioso (addEventListener)
// Adicionar ouvinte de eventos
// Envento = clique, digite...