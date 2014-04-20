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
    var row1 = [$('#a1').html(), $('#a2').html(), $('#a3').html()];
  	var row2 = [$('#b1').html(), $('#b2').html(), $('#b3').html()];
  	var row3 = [$('#c1').html(), $('#c2').html(), $('#c3').html()];
  	var col1 = [$('#a1').html(), $('#b1').html(), $('#c1').html()];
  	var col2 = [$('#a2').html(), $('#b2').html(), $('#c2').html()];
  	var col3 = [$('#a3').html(), $('#b3').html(), $('#c3').html()];
  	var diag1 = [$('#a1').html(), $('#b2').html(), $('#c3').html()];
  	var diag2 = [$('#c1').html(), $('#b2').html(), $('#a3').html()];

    function win(){
      console.log('yay, the code works!');
    }

  	if(row1[0] === 'X' && row1[1] === 'X' && row1[2] === 'X' || row1[0] === 'O' && row1[1] === 'O' && row1[2] === 'O'){
      win();
  	}else if(row2[0] === 'X' && row2[1] === 'X' && row2[2] === 'X' || row2[0] === 'O' && row2[1] === 'O' && row2[2] === 'O'){
      win();
  	}else if(row3[0] === 'X' && row3[1] === 'X' && row3[2] === 'X' || row3[0] === 'O' && row3[1] === 'O' && row3[2] === 'O'){
      win();
  	}else if(col1[0] === 'X' && col1[1] === 'X' && col1[2] === 'X' || col1[0] === 'O' && col1[1] === 'O' && col1[2] === 'O'){
      win();
  	}else if(col2[0] === 'X' && col2[1] === 'X' && col2[2] === 'X' || col2[0] === 'O' && col2[1] === 'O' && col2[2] === 'O'){
      win();
  	}else if(col3[0] === 'X' && col3[1] === 'X' && col3[2] === 'X' || col3[0] === 'O' && col3[1] === 'O' && col3[2] === 'O'){
      win();
  	}else if(diag1[0] === 'X' && diag1[1] === 'X' && diag1[2] === 'X' || diag1[0] === 'O' && diag1[1] === 'O' && diag1[2] === 'O'){
      win();
    }else if(diag2[0] === 'X' && diag2[1] === 'X' && diag2[2] === 'X' || diag2[0] === 'O' && diag2[1] === 'O' && diag2[2] === 'O'){
      win();
  	}
  }
})();
