
    setTimeout(() => {
        var nome = prompt("Qual seu nome?")
        while(nome == ""){
            nome = prompt("Qual seu nome?")
        }
        alert(`Welcome the LOR, ${nome}!!!`)
        confirm("O jogo  testará seus conhecimentos Hard e Soft Skills. Você precisa atingir a no minimo 70 pontos para vencer o jogo")
        alert("Preparado para testar seus conhecimentos?")
        alert("Escolha Seu Personagem")
    }, 1200);
