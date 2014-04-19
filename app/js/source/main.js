(function(){
  'use strict';

  var X = $('<img src="./media/X.png" class="piece player1">');
  var O = $('<img src="./media/O.png" class="piece player2">');

  var active = 'player1';

  $(document).ready(init);

  function init(){
    $('#newgame').click(start);
    $('.place').on('click', move);
  }

  function start(){
    $('.place').empty();
    $('.X').empty();
    $('.O').empty();
    $('.X').append(X);
    $('.O').append(O);
    $('img').click(choose);
  }

  function choose(){
    if($(this).hasClass(active)){
      $('.selected').removeClass('selected');
      $('.current').removeClass('current');
      $(this).addClass('selected');
      $('.selected.piece').addClass('current');
      choose();
    }
    move();
  }

  function move(){
    var $piece = $('.current');
    var $square = $(this);
    $square.append($piece);
    switchPlayer();
    // debugger;
    // $('.current').removeClass('current');
    // $('.selected').removeClass('selected');
  }

  function switchPlayer(){
    if(active === 'player1'){
      active = 'player2';
    }else{
      active = 'player1';
    }
  }

})();
