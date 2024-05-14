function calcularPontuacaoTotal(pontuacoes){
     let pontuacaoTotal = 0;
     for (let i = 0; i < pontuacoes.length; i++){
         pontuacaoTotal += pontuacoes[i];

     }
     console.log("Pontuação total do jogador:", pontuacaoTotal);
    }
     // array de pontucoes do jogador
     const pontuacoesdoJogador = ( 10, 15, 20 , 5 ,8);
   //Chamando função para calcular a pontução total do jogador
     calcularPontuacaoTotal(pontuacoesdoJogador);

