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

    const feedback =
        document.createElement("div");

    feedback.className = "feedback";

    feedback.innerHTML =
        `
        <strong>${nome}:</strong>

        <p>${mensagem}</p>
        `;

    lista.prepend(feedback);

    form.reset();

});