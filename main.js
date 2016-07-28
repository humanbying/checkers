  "use strict";

  $(() => {
    let $square;

    function createBoard() {
      let $rows = [];
      let counter = 0;
      // fill board up with rows
      for(let i = 0; i < 8; i++) {
        let $row = $('<div>').addClass('row');
        // fill row with squares
        for(let j = 0; j < 8; j++) {
          $square = $('<div>').addClass('square');
          counter++;
          if(counter%2 == 1){
          $square.addClass('black');
          if ($rows.length < 3){
            let $redPiece = $('<div>').addClass('redPiece');
            $square.append($redPiece);
          } else if (4 < $rows.length){
            let $greyPiece = $('<div>').addClass('greyPiece');
            $square.append($greyPiece);
          }
        } else {
          $square.addClass('white');
        }
          $row.append($square);
        }
        counter++;
        $rows.push($row);
      }

      $('.board').append($rows);
    }
    createBoard();

// making clickable detachable pieces

    $(".redPiece").one("click",function(){
    	let saved = $(this).detach('.redPiece');
    });

  function sumEvens(numbers) {
    let num = 0;
      numbers.map(function(e){
        if(e%2 == 0){
          num += e;
        }
      })
    return num;
  }








    // $('.redPiece').click(function() {
    //   let x = $(this).detach('.redPiece');
    //   $(this).onclick($(this).append('.redpiece'));
    //        });

    $('.greyPiece').click(function() {
      $(this).detach('.greyPiece');
      alert("flocka");

           });
})
