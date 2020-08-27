
$(document).ready(function(){

  //Ciclo per tabella
  for (var i = 0; i < 36; i++){
    $('.template').append('<div class="square"></div>');
  }

  // Al click
  $('.square').click(function(){

       var text = $(this);

         $.ajax(
            {
              url: "https://flynn.boolean.careers/exercises/api/random/int",
              method: "GET",
              success: function (risposta) {
                // console.log(risposta);
                // console.log(risposta.response);

                //Inserisco il numero nel quadrato
                text.html(risposta.response);

                //Cambio background se + o - 5
                var numero = risposta.response;

                if (numero <= 5) {
                  text.addClass('under');
                } else {
                  text.addClass('over');
                }

            },
          }
        );
    }); //fine click

}); //fine doc
