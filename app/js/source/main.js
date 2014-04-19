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
    $('td').addClass('playable');
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
  }

  function move(){
    $('.place').has('.piece').removeClass('playable');
    var $piece = $('.current');
    var $square = $(this);
    if ($($square).hasClass('playable')){
      $square.append($piece);
      switchPlayer();
    }else{
      alert('invalid move');
    }
  }

  function switchPlayer(){
    if(active === 'player1'){
      active = 'player2';
    }else{
      active = 'player1';
    }
  }
})();
