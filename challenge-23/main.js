(function(win, doc) {

  'use strict';

  var $operacaoCE = doc.querySelector('[data-button="operacaoCE"]');
  var $visor = doc.querySelector('[data-input="visor"]');
  var $value0 = doc.querySelector('[data-button="value0"]');
  var $value1 = doc.querySelector('[data-button="value1"]');
  var $value2 = doc.querySelector('[data-button="value2"]');
  var $value3 = doc.querySelector('[data-button="value3"]');
  var $value4 = doc.querySelector('[data-button="value4"]');
  var $value5 = doc.querySelector('[data-button="value5"]');
  var $value6 = doc.querySelector('[data-button="value6"]');
  var $value7 = doc.querySelector('[data-button="value7"]');
  var $value8 = doc.querySelector('[data-button="value8"]');
  var $value9 = doc.querySelector('[data-button="value9"]');

  var $operacaoSoma = doc.querySelector('[data-button="operacaoSoma"]');
  var $operacaoDivisao = doc.querySelector('[data-button="operacaoDivisao"]');
  var $operacaoSubtracao = doc.querySelector('[data-button="operacaoSubtracao"]');
  var $operacaoMultiplicacao = doc.querySelector('[data-button="operacaoMultiplicacao"]');

  var $operacaoIgual = doc.querySelector('[data-button="operacaoIgual"]');

  $operacaoCE.addEventListener('click', function() {
    $visor.value = "0";
  });

  $value0.addEventListener('click', function() {
    $visor.value = $visor.value + "0";
  });

  $value1.addEventListener('click', function() {
    $visor.value = $visor.value +  "1";
  });

  $value2.addEventListener('click', function() {
    $visor.value = $visor.value +  "2";
  });

  $value3.addEventListener('click', function() {
    $visor.value = $visor.value + "3";
  });

  $value4.addEventListener('click', function() {
    $visor.value = $visor.value + "4";
  });

  $value5.addEventListener('click', function() {
    $visor.value = $visor.value + "5";
  });

  $value6.addEventListener('click', function() {
    $visor.value = $visor.value +  "6";
  });

  $value7.addEventListener('click', function() {
    $visor.value = $visor.value +  "7";
  });

  $value8.addEventListener('click', function() {
    $visor.value = $visor.value +  "8";
  });

  $value9.addEventListener('click', function() {
    $visor.value = $visor.value +  "9";
  });

  $operacaoSoma.addEventListener('click', function() {
    removerUltimoItemOperador();

    $visor.value  = $visor.value + '+';
  });

  $operacaoDivisao.addEventListener('click', function() {
    removerUltimoItemOperador();

    $visor.value  = $visor.value + '/';
  });

  $operacaoSubtracao.addEventListener('click', function() {
    removerUltimoItemOperador();

    $visor.value  = $visor.value + '-';
  });

  $operacaoMultiplicacao.addEventListener('click', function() {
    removerUltimoItemOperador();

    $visor.value  = $visor.value + '*';
  });

  $operacaoIgual.addEventListener('click', function () {
    removerUltimoItemOperador();
  });

  function isCaracterOperacao() {
    if( $visor.value[$visor.value.length - 1] === '-' ||
        $visor.value[$visor.value.length - 1] === '+' ||
        $visor.value[$visor.value.length - 1] === '*' ||
        $visor.value[$visor.value.length - 1] === '/' )
        return true;
  }

  function removerUltimoItemOperador() {
    if(isCaracterOperacao())
      $visor.value = $visor.value.slice(0, -1);
  }


})(window, document);
