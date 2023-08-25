//var form = document.getElementById('form1');
//form.addEventListener('submit', validarFormulario);

var btn = document.getElementById('cadastro');
btn.addEventListener('click', validarFormulario);

function validarFormulario(e) {
    if (!validarNome() || !validarEmail() || !validarTel() || !validarEndereco() || !validarCEP() || !validarUsuario() || !validarSenha()) {
        e.preventDefault();
    }
}


function validarNome() {
    var nm = document.getElementById('nm').value;

    if (nm == "") {
        alert("Campo nome nulo.");
        return false;
    }
    if ((nm.indexOf("0") != -1) || (nm.indexOf("1") != -1) || (nm.indexOf("2") != -1) || (nm.indexOf("3") != -1) || (nm.indexOf("4") != -1) || (nm.indexOf("5") != -1) || (nm.indexOf("6") != -1) || (nm.indexOf("7") != -1) || (nm.indexOf("8") != -1) || (nm.indexOf("9") != -1)) { //se for -1 não tem
        alert("Por favor, informe um nome válido.");
        return false;
    } else if (nm.length < 8) {
        alert("Informe um nome válido.");
        return false;
    }
    return true;
}

//ver sobre
function validarEmail() {
    var email = document.getElementById('email').value;

    if ((email.length <= 5) && (email.indexOf("@") == -1)) {
        alert("Informe um e-mail válido.");
        return false;
    } else {
        return true;
    }
}

function validarTel() {
    var tel = document.getElementById('tel').value;

    if (tel == "") {
        alert("Campo telefone nulo.");
        return false;
    } if (tel.length != 11) {
        alert("Informe um telefone válido.");
        return false;
    } else {
        return true;
    }
}

function validarEndereco() {
    var endereco = document.getElementById('endereco').value;

    if (endereco == "") {
        alert("Campo endereço nulo.");
        return false;
    } if (endereco.length < 8) {
        alert("Informe um endereço válido.");
        return false;
    } else {
        return true;
    }
}

function validarCEP() {
    var cep = document.getElementById('cep').value;

    if (cep == "") {
        alert("Campo CEP nulo.");
        return false;
    } if (cep.length != 8) {
        alert("Informe um CEP válido.");
        return false;
    } else {
        return true;
    }
}

function validarUsuario() {
    var usuario = document.getElementById('usuario').value;

    if (usuario == "") {
        alert("Campo usuário nulo.");
        return false;
    } if (usuario.length < 5) {
        alert("Nome de usuário muito curto. Insira ao menos 5 caracteres.");
        return false;
    } else {
        return true;
    }
}

function validarSenha() {
    var senha1 = document.getElementById('senha1').value;
    var senha2 = document.getElementById('senha2').value;

    if ((senha1 == "") || (senha2 == "")) {
        alert("Campo senha nulo.");
        return false;
    } if (senha1.length < 6) {
        alert("Informe uma senha válida.");
        return false;
    } if (senha1 != senha2) {
        alert("Senha inválida.");
        return false;
    } else {
        return true;
    }
}



