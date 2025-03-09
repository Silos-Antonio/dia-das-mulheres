$("#messageState").on("change", function () {
    if ($("#messageState").is(":checked")) {
        // Ao abrir a mensagem:
        $(".message").removeClass("closeNor closed").addClass("openNor");
        $(".heart").removeClass("closeHer").addClass("openHer");
        $(".container").css("background-color", "#f48fb1"); // Fundo rosa mais forte ao abrir
        $(".instruction").addClass("hidden"); // Esconde a instrução ao abrir a mensagem
        console.log("Mensagem aberta");

        // Força a reinicialização da animação da mensagem
        $(".message").css("animation", "none");
        $(".message").offset(); // Força a reinicialização da animação
        $(".message").css("animation", "openmsg 2s linear forwards"); // Reinicia a animação de abertura

        // Reinicia a música
        var audio = document.getElementById("music");
        audio.currentTime = 0; // Faz a música voltar ao início
        audio.play(); // Toca a música
    } else {
        // Ao fechar a mensagem:
        $(".message").removeClass("openNor").addClass("closeNor");
        $(".heart").removeClass("openHer").addClass("closeHer");

        // Aguarda o tempo da animação e então retorna ao fundo inicial
        setTimeout(() => {
            $(".container").css("background-color", "#fce4ec"); // Retorna para rosa claro
            $(".message").addClass("closed"); // Esconde a mensagem
            $(".instruction").removeClass("hidden"); // Mostra a instrução novamente
        }, 2000); // Tempo igual à duração da transição
        console.log("Mensagem fechada");

        // Força a reinicialização da animação de fechamento
        $(".message").css("animation", "none");
        $(".message").offset(); // Força a reinicialização da animação de fechamento
        $(".message").css("animation", "closemsg 2s linear forwards"); // Reinicia a animação de fechamento

        // Para a música ao fechar
        var audio = document.getElementById("music");
        audio.pause(); // Pausa a música
    }

    // Reinicia a animação do coração
    $(".heart").css("animation", "none");
    $(".heart").offset(); // Reinicia a animação do coração
    $(".heart").css("animation", "heartMove 2s linear forwards");
});
