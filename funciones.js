       function cambiarContenido() {
            let div = document.getElementById('miDiv');
                div.innerHTML = 'Contenido cambiado';
        }
        function sumar(){
            let numero1 = document.getElementById('num1').value;
            let suma = 25 + Number(numero1);
            let div = document.getElementById('resultado')
                div.innerHTML = 'RESULTADO: <h2>'+suma+'</a>';
        }