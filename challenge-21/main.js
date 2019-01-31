(function (win, doc){

    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    // ?

    'use strict';

    var $cronometro = document.querySelector('[data-js="txtCronometro"]');
    var $start = doc.querySelector('[data-js="btnStart"]');
    var $stop = doc.querySelector('[data-js="btnStop"]');
    var $reset = doc.querySelector('[data-js="btnReset"]');
    var intervalId;

    $start.addEventListener('click', function() {

        intervalId = setInterval(function (){

            $cronometro.value = +$cronometro.value + 1;
        }, 1000);

    }, false);

    $stop.addEventListener('click', stopTimer, false);  
    
    $reset.addEventListener('click', function() {
        
        $cronometro.value =  0;
        stopTimer();

    }, false);    

    function stopTimer() {
        clearInterval(intervalId);
    }
    


})(window, document);