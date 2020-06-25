function getColor(value) {
  //value from 0 to 1
  var hue = ((value) * 120).toString(10);
  return ["hsl(", hue, ",100%,50%)"].join("");
}

$(document).ready(function() {

  $('form').keydown(function(event) {
    if (event.ctrlKey && event.keyCode === 13) {
      $(this).trigger('submit');
    }
  })

  var spinner = $('#loader');

  $( "#request_inference").on("submit",function(e){
    e.preventDefault();

  //do something

    // alert("Clicked");
    var text_to_infer = $('textarea#sentences').val();
    if (text_to_infer.length>2){

        console.log("Recieved :"+text_to_infer);
        html_output = "";
        spinner.show();
        $.ajax({
          type : 'GET',
          dataType: 'json',
          crossDomain:true,
          url:"http://35.214.174.105:8080/predict/",
          data : {text : text_to_infer},
          success: function(response){
            if (response['msg']=='success'){
              response['predictions'].forEach(
                function( result ) {
                  console.log(result)
                  lidwoord = Object.keys(result.predicition)[0]
                  probability = result.predicition[lidwoord]
                  text_color = getColor(probability)
                  probability_text = Math.floor(probability*100)
                  woord = result.woord
                  var d=document.createElement('div');

                  html_output +=  '<h5> <span class="step" style="background-color:' + text_color + '" >' + probability_text + '</span>% kans : <mark>'+ lidwoord +'</mark> '+woord +'</h5>'
                }
            )

          }else{
            html_output = '<b>'+response['detail']+'</b>'
          }
          $('#predicitions').html(html_output)

          },
          error : function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
          }
         }
        ).done(function() {
            spinner.hide();
        });
    }


  });



});
