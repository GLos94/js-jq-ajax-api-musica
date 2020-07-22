
function callPosters() {
  $.ajax({

    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function (data){
      var success = data['success'];
      var dischi = data['response'];
      console.log(dischi);

      drawPoster(dischi)
    },

    error: function (err) {
      console.log('err', err);
    }





  });
}

function drawPoster(dischi) {
  var template = $('#poster-template');
  var compiled = Handlebars.compile(template);
  var target = $('.cds-container container');


  var disco = dischi[i];

  disco = {
    "poster": "",
    "title": "",
    "author": "",
    "year": ""
  },

  target.append(disco);
}




function init(){
  callPosters();
  // drawPoster();
}

$(document).ready(init);
