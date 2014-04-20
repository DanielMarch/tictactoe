(function(){
  'use strict';

  var X = $('<img src="./media/X.png" class="piece player1 X">');
  var O = $('<img src="./media/O.png" class="piece player2 O">');
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
      checkWin();
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

  function checkWin(){
    var row1 = [$('#a1'), $('#a2'), $('#a3')];
    var row2 = [$('#b1'), $('#b2'), $('#b3')];
    var row3 = [$('#c1'), $('#c2'), $('#c3')];
    var col1 = [$('#a1'), $('#b1'), $('#c1')];
    var col2 = [$('#a2'), $('#b2'), $('#c2')];
    var col3 = [$('#a3'), $('#b3'), $('#c3')];
    var diag1 = [$('#a1'), $('#b2'), $('#c3')];
    var diag2 = [$('#c1'), $('#b2'), $('#a3')];

  	if(row1[0].children('.X') && row1[1].children('.X') && row1[2].children('.X') || row1[0].children('.O') && row1[1].children('.O') && row1[2].children('.O')){
      win();
  	}else if(row2[0].children('.X') && row2[1].children('.X') && row2[2].children('.X') || row2[0].children('.O') && row2[1].children('.O') && row2[2].children('.O')){
      win();
  	}else if(row3[0].children('.X') && row3[1].children('.X') && row3[2].children('.X') || row3[0].children('.O') && row3[1].children('.O') && row3[2].children('.O')){
      win();
  	}else if(col1[0].children('.X') && col1[1].children('.X') && col1[2].children('.X') || col1[0].children('.O') && col1[1].children('.O') && col1[2].children('.O')){
      win();
  	}else if(col2[0].children('.X') && col2[1].children('.X') && col2[2].children('.X') || col2[0].children('.O') && col2[1].children('.O') && col2[2].children('.O')){
      win();
  	}else if(col3[0].children('.X') && col3[1].children('.X') && col3[2].children('.X') || col3[0].children('.O') && col3[1].children('.O') && col3[2].children('.O')){
      win();
  	}else if(diag1[0].children('.X') && diag1[1].children('.X') && diag1[2].children('.X') || diag1[0].children('.O') && diag1[1].children('.O') && diag1[2].children('.O')){
      win();
    }else if(diag2[0].children('.X') && diag2[1].children('.X') && diag2[2].children('.X') || diag2[0].children('.O') && diag2[1].children('.O') && diag2[2].children('.O')){
      win();
  	}
  }

  function win(){
    console.log('Game Over');
  }
})();
