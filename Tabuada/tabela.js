tabuada = function() {

    var numero = parseInt(document.querySelector("#inputNumber").value)
    var tamanho = parseInt(document.querySelector("#tamanho").value)
    var total = 0;

        var table = document.getElementById("tabuada")
          table.innerHTML = ["<table>"]
        
        for(var i = 0; i <= tamanho; i++){

            var total = i * numero;

            table.innerHTML += [`<tr>
                    <td>${i}</td>
                    <td>X</td>
                    <td>${numero}</td>
                    <td>=</td>
                    <td>${total}</td>
                    </tr>`]

        }  

        table.innerHTML += ["</table>"]

}
