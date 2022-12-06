function orcamento(){   
    var hspd, day, valorU, total, idQuarto, nomeSuite, totalAd, nomeRef;
    
    idQuarto = document.frmOrcamento.slcSuite.selectedIndex;
    nomeSuite = document.frmOrcamento.slcSuite[idQuarto].text;
    switch (idQuarto){
        case 1: 
            valorU = 400.00
            break;
        case 2:
            valorU = 956.90
            break;
        case 3: 
            valorU = 650.67
            break;
        case 4:
            valorU = 850.99
            break;
        case 5:
            valorU = 599.99
            break;
    }
    
    hspd = parseInt(document.getElementById('hspd').value);
    day = parseInt(document.getElementById('day').value);

    if (hspd <= 5 && day <= 90){
    
        total = valorU * day

        //radio button
        var i, refeicoes, adicionais = 0;

        for (i = 0; i <= document.frmOrcamento.rdRefeicoes.length; i++) {
            if (document.frmOrcamento.rdRefeicoes[i].checked)
                break;
        }

        if (parseInt(document.frmOrcamento.rdRefeicoes[i].value) == 0){
            refeicoes = 57.90;
            nomeRef = "Café da Manhã";
        }  else if (parseInt(document.frmOrcamento.rdRefeicoes[i].value) == 1) {
                    refeicoes = 108,50;
                    nomeRef = "Meia Pensão"
        }  else if (parseInt(document.frmOrcamento.rdRefeicoes[i].value) == 2){
                    refeicoes = 179.99;
                    nomeRef = "Pensão Completa"
        }
            
       
        
        total += refeicoes;
        totalAd = 0

        //checkbox
        if (document.getElementById('translado').checked == true) {
            adicionais += 32.99;
            nomeAd = "Translado";
            totalAd = totalAd + adicionais
        } else if (document.getElementById('citytour').checked == true){
            adicionais += 43.53;
            nomeAd = "City Tour";
            totalAd = totalAd + adicionais
        } else if (document.getElementById('passeio').checked == true){
            adicionais += 29.80;
            nomeAd = "Passeio";
            totalAd = totalAd + adicionais
        }

        total += adicionais;


        document.getElementById('total').innerHTML = " TOTAL: R$ " + total; 
        document.getElementById('resumo').innerHTML = "RESUMO DA RESERVA:";
        document.getElementById('suite').innerHTML =  nomeSuite + " - R$" + valorU;
        document.getElementById('hospd').innerHTML = "Quantidades de hóspedes: " + hspd;
        document.getElementById('dia').innerHTML = "Quantidade de dias: " + day;
        document.getElementById('refeicoes').innerHTML = "Refeições: " + nomeRef + " - R$" + refeicoes;
        document.getElementById('adicoes').innerHTML = "Adicionais - R$" + adicionais;
 
    } else if (hspd > 5 && day <= 90) {
        alert ("O número de hóspedes não pode ser maior do que 5!");
    } else if (hspd <= 5 && day > 90){
        alert("O número de dias não pode ser maior do que 90!");
    }
}