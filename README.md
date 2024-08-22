# Decodificador de Texto

Este é um projeto de um decodificador de texto que utiliza um sistema de substituição simples para criptografar e descriptografar mensagens. Ele é desenvolvido com HTML, CSS e JavaScript.

## Funcionalidades

- **Criptografia**: Converte texto de entrada para uma versão criptografada usando as seguintes substituições:
  - A letra "e" é convertida para "enter"
  - A letra "i" é convertida para "imes"
  - A letra "a" é convertida para "ai"
  - A letra "o" é convertida para "ober"
  - A letra "u" é convertida para "ufat"

- **Descriptografia**: Converte o texto criptografado de volta para sua forma original.

- **Validação de Entrada**: Aceita apenas letras minúsculas e não permite acentos ou caracteres especiais.

- **Cópia de Texto**: Permite copiar o texto criptografado/descriptografado para a área de transferência com um clique.

## Exemplo de Uso

- **Entrada**: "gato"
- **Criptografia**: "gaitober"
- **Descriptografia**: "gato"

## Como Usar

1. Digite ou cole o texto no campo de entrada.
2. Escolha entre "Criptografar" ou "Descriptografar".
3. O resultado será exibido na tela.
4. Clique no botão "Copiar" para copiar o resultado para a área de transferência.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização da interface.
- **JavaScript**: Lógica de criptografia e interatividade.

## Estrutura do Projeto

```plaintext
/
├── index.html         # Arquivo principal HTML
├── style.css          # Arquivo de estilos CSS
├── app.js             # Arquivo principal JavaScript
└── assets/            # Pasta com as imagens e ícones
