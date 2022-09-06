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

const form = document.querySelector('form')
const userNome = document.querySelector('.input-nome');
const userEmail = document.querySelector('.input-email');
const mensagem = document.querySelector('.mensagem');