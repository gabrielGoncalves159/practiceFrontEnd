pesquisarEstacao = function() {

    var mes = document.querySelector("#month").value
    var estacao

    debugger
    if(estacao != null){
        document.querySelector("#resultado").remove();
        document.querySelector("#texto").remove();
    }

    if (mes == 'Janeiro') {

        estacao = document.querySelector('#resultado');

        const image = new Image;
        image.src = 'img/inverno.jpg';       
        estacao.appendChild(image);

        var text = document.querySelector("#texto").textContent = "Inverno";


    } else if (mes == 'Fevereiro') {
        estacao = document.querySelector('#resultado');
    
        const image = new Image;
        image.src = 'img/outono.webp';
          
        estacao.appendChild(image);

        var text = document.querySelector("#texto").textContent = "Outono";

    } else if (mes == 'Março') {
        estacao = document.querySelector('#resultado');
    
        const image = new Image;
        image.src = 'img/primavera.jpg';
          
        estacao.appendChild(image);

        var text = document.querySelector("#texto").textContent = "Primavera";
    } else {
        estacao = document.querySelector('#resultado');
    
        const image = new Image;
        image.src = 'img/verao.jpg';
          
        estacao.appendChild(image);

        var text = document.querySelector("#texto").textContent = "Verão";

    }
}