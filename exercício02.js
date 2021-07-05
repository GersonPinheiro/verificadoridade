function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Erro. Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var faixaetaria = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                faixaetaria = "Criança."
            } else if (idade < 21) {
                faixaetaria = "Jovem."
            } else if (idade < 50) {
                faixaetaria = "Adulto."
            } else {
                faixaetaria = "Idoso."
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                faixaetaria = "Criança."
            } else if (idade < 21) {
                faixaetaria = "Jovem."
            } else if (idade < 50) {
                faixaetaria = "Adulto."
            } else {
                faixaetaria = "Idosa."
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `O usuário é ${genero}, ${faixaetaria} com ${idade} anos.`
    }
}

