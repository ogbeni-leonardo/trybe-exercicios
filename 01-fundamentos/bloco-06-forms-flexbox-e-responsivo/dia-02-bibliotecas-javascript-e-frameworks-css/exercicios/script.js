const validate = new window.JustValidate("#form");

validate.addField("#fullname", [
  ({
    rule: "minLength",
    value: 10,
  },
  {
    rule: "maxLength",
    value: 40,
  }),
  {
    rule: "required",
    errorMessage: "Você precisa digitar seu nome!",
  },
]);

validate.addField("#email", [
  ({
    rule: "minLength",
    value: 10,
  },
  {
    rule: "maxLength",
    value: 50,
  }),
  {
    rule: "required",
    errorMessage: "Um e-mail é necessário!",
  },
]);

// ...

document.getElementById("submit").onclick = (event) => {
  event.preventDefault();
  const fields = validate.fields;
  console.log(fields["#fullname"]["isValid"]);
};
