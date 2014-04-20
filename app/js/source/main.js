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
    var rowA = [$('#a1').html(), $('#a2').html(), $('#a3').html()];
    var rowB = [$('#b1').html(), $('#b2').html(), $('#b3').html()];
    var rowC = [$('#c1').html(), $('#c2').html(), $('#c3').html()];
    var colA = [$('#a1').html(), $('#b1').html(), $('#c1').html()];
    var colB = [$('#a2').html(), $('#b2').html(), $('#c2').html()];
    var colC = [$('#a3').html(), $('#b3').html(), $('#c3').html()];
    var diagOne = [$('#a1').html(), $('#b2').html(), $('#c3').html()];
    var diagTwo = [$('#a3').html(), $('#b2').html(), $('#c1').html()];

    function win(){
      console.log('win');
    }

    if(rowA[0] === rowA[1] && rowA[2] === rowA[0] && rowA[0] !== ''){
      win();
    }else if (rowB[0] === rowB[1] && rowB[2] === rowB[0] && rowB[0] !== ''){
      win();
    }else if (rowC[0] === rowC[1] && rowC[2] === rowC[0] && rowC[0] !== ''){
      win();
    }

    if(colA[0] === colA[1] && colA[2] === colA[0] && colA[0] !== ''){
      win();
    }else if (colB[0] === colB[1] && colB[2] === colB[0] && colB[0] !== ''){
      win();
    }else if (colC[0] === colC[1] && colC[2] === colC[0] && colC[0] !== ''){
      win();
    }

    if(diagOne[0] === diagOne[1] && diagOne[2] === diagOne[0] && diagOne[0] !== ''){
      win();
    }else if (diagTwo[0] === diagTwo[1] && diagTwo[2] === diagTwo[0] && diagTwo[0] !== ''){
      win();
    }
  }
})();
