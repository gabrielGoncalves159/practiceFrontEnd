

    validarNumero = function() {



        var numero = document.querySelector("#inputNumero")
        var validar = numero.value;
        debugger

        if(validar === '0') {
            document.querySelector('#resultado').textContent = "NENHUM!";

        } else if (validar === '') {
            document.querySelector('#resultado').textContent = "Digite um número!";
        } else if (validar % 2 !== 0){
            document.querySelector('#resultado').textContent = "O núnero é IMPAR!";

        } else if (validar % 2 === 0) {
            document.querySelector('#resultado').textContent = "O núnero é PAR!";
        }

    }
