const submitButton = document.querySelector('button[type="submit"]');
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const textArea = document.getElementById("description-area");
const agree = document.getElementById("agree-2");

// Remova a função padrão do botão submit quando ele for clicado
submitButton.onclick = (event) => {
  event.preventDefault();
  const error = (message = "Dados inválidos") => {
    alert(message);
  };
  if (!agree.checked) {
    error("Você precisa marcar a última caixa de seleção para prosseguir.");
    return;
  }
  if (fullname.value.length < 10 || fullname.value.length > 40) {
    error();
    return;
  }
  if (email.value.length < 10 || email.value.length > 50) {
    error();
    return;
  }
  if (textArea.value.length < 10) {
    error();
    return;
  }

  alert(
    "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
  );
};
