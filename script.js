const formulario = document.getElementById("formContato");

const notificacao = document.getElementById("notificacao");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {

        alert("Digite um e-mail válido!");
        return;
    }

    notificacao.style.display = "block";
    notificacao.style.opacity = "1";
    formulario.reset();

    setTimeout(function() {

        notificacao.style.display = "none";

    }, 7000);

});