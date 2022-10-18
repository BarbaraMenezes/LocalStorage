function cadastrar() {


    var nome = document.getElementById("nome");
    var data = document.getElementById("data");
    var cpf = document.getElementById("cpf");
    var email = document.getElementById("email");
    var endereco = document.getElementById("endereco");
    var cep = document.getElementById("cep");
    var contato = document.getElementById("contato");
    var senha = document.getElementById("senha");

//localStorage consiste em salvar, adicionar, recuperar ou excluir dados localmente em um navegador Web

    var dados = JSON.parse(localStorage.getItem("dadosCliente"));

    if (dados == null) {
        localStorage.setItem("dadosCliente", "[]");
        dados = [];
    }
    var auxRegistro = {
        Nome: nome.value,
        Data_de_Nascimento: data.value,
        CPF: cpf.value,
        Email: email.value,
        Endereço: endereco.value,
        CEP: cep.value,
        Contato: contato.value,
        Senha: senha.value
    }
    dados.push(auxRegistro);
    localStorage.setItem("dadosCliente", JSON.stringify(dados));
    alert("Cliente Cadastrado com Sucesso!")

    nome.value = " ";
    data.value = " ";
    cpf.value = " ";
    email.value = " ";
    endereco.value = " ";
    cep.value = " ";
    contato.value = " ";
    senha.value = " ";
}

function entrar() {
    let emaillog = document.querySelector('#emaillog')
    let emaillogLabel = document.querySelector('#emaillogLabel')

    let senhalog = document.querySelector('#senhalogin')
    let senhaLabel = document.querySelector('#senhaLabel')

    let dadosCliente = []
    let uservalid = {
        nome: '',
        email: '',
        senha: ''
    }
    dadosCliente = JSON.parse(localStorage.getItem('dadosCliente'))
    dadosCliente.forEach((item) => {

        if (emaillog.value == item.Email && senhalog.value == item.Senha) {

            uservalid = {
                nome: item.Nome,
                email: item.Email,
                senha: item.Senha
            }
        }
    })

    if (emaillog.value == uservalid.email && senhalog.value == uservalid.senha) {

        alert('Seja Bem-Vindo(a), ' + uservalid.nome + '!')

    } else {
        alert('Email ou Senha Inválidos/Inexistentes!')
    }
}



