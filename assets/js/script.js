const minhaFormacao = document.getElementById('formacao');

const formacao = [{curso: "ADS", tipo: "Faculdade"},
                  {curso: "Pentest", tipo: "Especialidade"},
                  {curso: "Ethical Hacking", tipo: "Especialidade"},
                  {curso: "Python", tipo: "Basico"}];

for(let key in formacao){
const itemDaLista = document.createElement('li');
itemDaLista.classList.add('itemdalista');
itemDaLista.innerHTML = `${formacao[key].curso}: ${formacao[key].tipo}`;
minhaFormacao.appendChild(itemDaLista);
}

const insertBotao = document.getElementById('form-contact');
const botaoEnviar = document.createElement('button');
botaoEnviar.classList.add('botao-enviar');
botaoEnviar.setAttribute('type', 'button');
botaoEnviar.innerText = 'Enviar';
insertBotao.appendChild(botaoEnviar);

function salvarFormulario(field){
  field.preventDefault();
  const user = document.querySelector('.input-nome').value;
  const email = document.querySelector('.input-email').value;
  const msg = document.querySelector('.mensagem').value;

  const visitantes = {
    Nome: user,
    Email: email,
    Mensagem: msg
  };
  console.log(visitantes);

  let inputs = document.querySelectorAll('.input-nome, .input-email, .mensagem');
  inputs.forEach(input => {
    input.value = "";
  });
}

botaoEnviar.addEventListener('click', salvarFormulario);