function calcular() {
            // Pegando os valores dos campos de input
            let pontos = Number(document.getElementById('pontos').value);
            let tecnico = Number(document.getElementById('tecnico').value);
            let dias = Number(document.getElementById('dias').value);

            // Validação simples para não dividir por zero
            if (tecnico <= 0) {
                document.getElementById('resultado').innerText = "Erro: Técnicos deve ser maior que 0";
                return;
            }

            // O seu cálculo original
            let produtividade = pontos / (tecnico * dias);

            // Exibindo o resultado no HTML com 2 casas decimais
            document.getElementById('resultado').innerText = 
                `A produtividade é: ${produtividade.toFixed(2)}`;
        }