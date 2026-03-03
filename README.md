# ⚡ CSS Gerador com IA — Do Texto ao Código!

**Status:** 🚀 100% Funcional e Gerando Magia!

Cansado de passar horas tentando lembrar como faz um `@keyframes` para algo girar ou quicar? O **CSS Gerador com IA** é a sua nova ferramenta favorita. Você escreve o que imagina em português, e a inteligência artificial gera o código pronto com **preview em tempo real**. É o poder da IA generativa direto no seu navegador! ✨

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com o "trio de ferro" do desenvolvimento web, integrado com uma das IAs mais rápidas do mercado:

| Tecnologia | Função | Destaque Técnico |
|------------|--------|-----------------|
| **HTML5** | Estrutura | Uso de tags semânticas e `iframe` para renderização segura |
| **CSS3** | Estilo | Design Dark Mode moderno, Flexbox e tipografia Inter |
| **JavaScript** | Lógica & API | Comunicação assíncrona com `fetch`, `async/await` e manipulação de DOM |
| **Groq API** | Cérebro (IA) | Modelo **Llama-3.3-70b-versatile** para geração ultra-rápida |

---

## 💡 Destaques Técnicos

### 🤖 Integração Real com IA

O sistema se comunica diretamente com a API do Groq Cloud. Através de um **System Prompt estratégico**, a IA é instruída a responder **apenas com código puro**, eliminando textos explicativos e garantindo que o resultado possa ser injetado diretamente no preview.

### 📺 Preview Dinâmico via `srcdoc`

Em vez de apenas mostrar o código na tela, o projeto utiliza o atributo `srcdoc` em um `iframe`. Isso permite que o HTML/CSS gerado seja interpretado pelo navegador em um ambiente isolado, mostrando a animação exatamente como ela ficaria no site.

### 🎨 Lógica de Injeção de Código

O JavaScript captura a resposta da IA e faz a mágica em duas frentes:

- ✅ Exibe o código para o usuário copiar  
- ✅ Renderiza automaticamente no preview  

```javascript
// Exemplo da lógica de renderização
let resultado = dados.choices[0].message.content;

blocoCodigo.textContent = resultado; // Mostra o código na tela
resultadoCodigo.srcdoc = resultado;  // Renderiza no iframe
```

---

## 🚀 Como Executar

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/css-gerador-ia.git
```

### 2️⃣ Abra o projeto

Basta abrir o arquivo `index.html` no seu navegador favorito.

### 3️⃣ Configure sua chave da API

No arquivo `src/js/scripts.js`, você encontrará a variável da chave. Para uso próprio, gere sua chave gratuita no Groq Cloud Console e substitua no código.

---

## 📝 O que este projeto exercita?

Este projeto foi excelente para consolidar conhecimentos em:

- 🔹 Consumo de APIs REST (envio de headers de autorização e JSON via POST)
- 🔹 Programação Assíncrona
- 🔹 Manipulação de DOM
- 🔹 UX/UI focada em produtividade (Dark Mode)
- 🔹 Integração com IA generativa

---

## 🛠️ Quer Contribuir?

Sinta-se à vontade para enviar um Pull Request!

### Ideias para melhorias futuras:

- [ ] Adicionar botão **Copiar Código**
- [ ] Implementar histórico de gerações com `localStorage`
- [ ] Adicionar opção de download do arquivo gerado
- [ ] Melhorar responsividade mobile
- [ ] Adicionar seleção de modelo da IA

---

> “O melhor código é aquele que ajuda você a criar mais rápido.” ⚡🔥  

---

## 👨‍💻 Desenvolvido por David Martins 🚀

Se esse projeto te ajudou, deixa uma ⭐ no repositório!
