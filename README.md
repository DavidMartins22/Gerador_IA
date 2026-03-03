# ⚡ CSS Gerador com IA — Do Texto ao Código!

**Status:** 🚀 100% Funcional e pronto para dar vida às suas ideias!

Cansado de passar horas tentando lembrar como faz um `@keyframes` para algo girar ou quicar? O **CSS Gerador com IA** é a sua nova ferramenta favorita. Você descreve o que imagina em português, e a inteligência artificial gera o código pronto com um **preview em tempo real**. É o poder da IA generativa direto no seu navegador!

---

## 🛠️ O que tem "debaixo do capô"?

Para fazer essa mágica acontecer, o projeto utiliza o "trio de ferro" do desenvolvimento web integrado a uma das infraestruturas de IA mais rápidas do mundo:

| Tecnologia | Função na Aplicação | Destaque Técnico |
| :--- | :--- | :--- |
| **HTML5** | **Estrutura** | Uso de tags semânticas e um `iframe` para renderização segura e isolada. |
| **CSS3** | **Estilo & UI** | Tema *Dark Mode* moderno (`#09090b`), Flexbox e tipografia Inter (Google Fonts). |
| **JavaScript** | **Lógica & API** | O motor que captura o prompt, gerencia o estado assíncrono e manipula o DOM. |
| **Groq API** | **Cérebro (IA)** | Utiliza o modelo **Llama-3.3-70b-versatile** para geração de código instantânea. |

---

## 💡 Destaques Técnicos

Este projeto demonstra o domínio de conceitos essenciais de desenvolvimento Front-end moderno e integração com APIs externas.

### 1. 🤖 Integração com Groq Cloud (Llama 3.3)
Diferente de geradores estáticos, este sistema faz uma requisição real para a API do Groq. O segredo está no "System Prompt", que instrui a IA a responder **apenas com código puro**, eliminando explicações e garantindo que o resultado seja injetável no site.

### 2. 📺 Preview Dinâmico via `srcdoc`
Em vez de apenas mostrar o texto, o sistema utiliza o atributo `srcdoc` dentro de um `iframe`. Isso cria um ambiente isolado onde o código HTML/CSS gerado é interpretado pelo navegador na hora, sem interferir no layout principal da aplicação.

### 3. ⚙️ Programação Assíncrona (UX)
A função `gerarCodigo()` utiliza `async/await` para garantir que a interface não trave enquanto a IA processa a resposta. O fluxo segue uma lógica rigorosa:
1. Captura o valor do `textarea`.
2. Faz o `fetch` (POST) enviando o prompt em JSON.
3. Converte a resposta e atualiza simultaneamente o bloco de código e o preview visual.

```javascript
// A essência da lógica:
let resultado = dados.choices[0].message.content;
blocoCodigo.textContent = resultado; // Exibe para cópia
resultadoCodigo.srcdoc = resultado;  // Renderiza visualmente
```
### 🚀 Como Executar

## 1. Clone o repositório:
```git clone [https://github.com/seu-usuario/css-gerador-ia.git](https://github.com/seu-usuario/css-gerador-ia.git)```
