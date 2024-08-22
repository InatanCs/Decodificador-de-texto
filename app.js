document.addEventListener("DOMContentLoaded", function () {
    const textareaInput = document.getElementById("textarea_input");
    const textoOutput = document.getElementById("texto_output");
    const btnCriptografar = document.getElementById("btnCriptografar");
    const btnDescriptografar = document.getElementById("btnDescriptografar");
    const btnCopiarOutput = document.getElementById("btnCopiarOutput");
    const gatoImg = document.getElementById("gato_img");
    const mensagemNaoLocalizada = document.querySelector("h3");

    function validarTexto(texto) {
        const regex = /^[a-z\s]*$/; 
        return regex.test(texto);
    }

    // Função para criptografar o texto
    function criptografarTexto(texto) {
        let textoCriptografado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoCriptografado;
    }

    function descriptografarTexto(texto) {
        let textoDescriptografado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDescriptografado;
    }

    function copiarTexto(texto) {
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert("Texto copiado para a área de transferência!");
            })
            .catch(err => {
                console.error("Erro ao copiar texto: ", err);
            });
    }

    function exibirTextoResultado(texto) {
        if (texto.trim() === "") {
            textoOutput.textContent = "";
            mensagemNaoLocalizada.style.display = "block";
            gatoImg.style.display = "block";
            btnCopiarOutput.style.visibility = "hidden";
        } else {
            textoOutput.textContent = texto;
            mensagemNaoLocalizada.style.display = "none";
            gatoImg.style.display = "block"; 
            btnCopiarOutput.style.visibility = "visible";
            btnCopiarOutput.style.pointerEvents = "auto";
        }
    }

    btnCriptografar.addEventListener("click", function () {
        const texto = textareaInput.value.trim();
        if (validarTexto(texto)) {
            const textoCriptografado = criptografarTexto(texto);
            exibirTextoResultado(textoCriptografado);
        } else {
            alert("Por favor, escreva somenta letras minúscula sem acentos ou caracteres especiais!");
        }
    });

    btnDescriptografar.addEventListener("click", function () {
        const texto = textareaInput.value.trim();
        if (validarTexto(texto)) {
            const textoDescriptografado = descriptografarTexto(texto);
            exibirTextoResultado(textoDescriptografado);
        } else {
            alert("Por favor, escreva somenta letras minúscula sem acentos ou caracteres especiais!");
        }
    });

    btnCopiarOutput.addEventListener("click", function () {
        const texto = textoOutput.textContent;
        copiarTexto(texto);
    });
});
