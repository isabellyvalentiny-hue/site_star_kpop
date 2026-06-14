const form =
    document.getElementById("formFeedback");

const lista =
    document.getElementById("lista-feedbacks");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const mensagem =
        document.getElementById("mensagem").value;

    const estrelas =
        document.querySelector(
            'input[name="estrela"]:checked'
        ).value;

    const produto =
        document.querySelector(
            'input[name="produto"]:checked'
        ).value;

    const feedback =
        document.createElement("div");

    feedback.className = "feedback";

    feedback.innerHTML = `
        <div class="estrelas">
            ${estrelas}
        </div>

        <strong>${nome}</strong> • ${produto}

        <p>"${mensagem}"</p>
    `;

    lista.prepend(feedback);

    form.reset();

});