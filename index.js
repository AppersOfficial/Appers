window.onload = function() {
    if (localStorage.hasOwnProperty("started")) {
        window.location.assign("https://
    }

    var head = document.getElementById("wcm");
    var codes = document.getElementById("codes_call");
    var language = navigator.language;
    var head2 = document.getElementById("wcm2");
    var commu = document.getElementById("commu_call");
    var sigin = document.getElementById("ok");
    var letr = document.getElementById("end");
    
    if (language.split("-")[0] === "pt") {
        head.innerHTML = "Bem-vindo(a) ao site oficial da Appers";
        codes.innerHTML = "Ferramentas para desenvolvedores, códigos gratuitos para ajudá-los em todos os momentos, nas mais diversas linguagens de programação.";
        head2.innerHTML = "• Saiba mais sobre nós";
        commu.innerHTML = "Tenha uma comunidade para ajudá-lo e auxiliá-lo em qualquer dia e em qualquer hora com problemas e entre outros.";
        letr.innerHTML = "Comece agora mesmo!";
        sigin.innerHTML = "Continuar";
        document.title = "Bem-vindo(a) à Appers!";
    } else if (language.split("-")[0] === "es") {
        head.innerHTML = "Bienvenido(a) al website oficial de Appers";
        codes.innerHTML = "Herramientas para desarrolladores, códigos gratuitos para ayudarlos en todo momento, en lenguajes de programación muy.";
        head2.innerHTML = "• Aprenda más acerca de nosotros";
        commu.innerHTML = "Tenga una comunidad para ayudarlo y asistirlo cualquier día y en cualquier momento.";
        letr.innerHTML = "¡Vamos a empezar!";
        sigin.innerHTML = "Continuar";
        document.title = "¡Bienvenidos a Appers!";
    }
    
    sigin.addEventListener("click", function() {
        window.location.assign("http://localhost:8158/sigin.html");
    });
}
