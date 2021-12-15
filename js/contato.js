function validarCampos() {

    let ret = true;
    let form = document.forms["formContato"];

    let msgErro = document.getElementById("msgErro");
    msgErro.innerHTML = "";

    /* Validação nome */
    if (form.nome.value.trim() == "") {
        msgErro.innerHTML = "Favor preencher o campo nome <br>";
        form.nome.focus();
        ret = false;
    }

    /* Validação e-mail */
    if ((form.email.value.indexOf(".") == -1) ||
        (form.email.value.indexOf("@") == -1) ||
        (form.email.value.indexOf(".") - form.email.value.indexOf("@") == 1)) {
        msgErro.innerHTML = msgErro.innerHTML + "Favor preencher o campo e-mail <br>";
        form.email.focus();
        ret = false;
    }

    /* Validação telefone */
    if (form.telefone.value.trim() == "") {
        msgErro.innerHTML = "Favor preencher o campo telefone <br>";
        form.telefone.focus();
        ret = false;
    }

    /* Validação mensagem */
    if (form.mensagem.value.trim() == "") {
        msgErro.innerHTML = "Favor preencher o campo mensagem <br>";
        form.mensagem.focus();
        ret = false;
    }

    /* Validação contato */
    if (form.contato.value.trim() == "") {
        msgErro.innerHTML = "Favor selecionar o contato <br>";
        form.contato.focus();
        ret = false;
    }

    return ret;
}