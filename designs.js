let color = $('#colorPicker').val();

$('#colorPicker').change(
    function(){
        color = $('#colorPicker').val();
    }
  );      
      // When size is submitted by the user, call makeGrid()
      $('input[type=submit]').click(makeGrid);
      
      
      function makeGrid() {
        $('#pixelCanvas').empty();      

      // Select size input
      let n = $('#inputHeight').val();
      let m = $('#inputWeight').val();

          let table = $('#pixelCanvas');
        
          for (let i = 0; i < n; i++){
            let row = $('<tr></tr>');
            table.append(row);
            
              for (let j = 0; j < m; j++){
                let cell = $('<td></td>');
                cell.click(function () {
                  cell.css('background', color);
                });
                row.append(cell);
              }
          }
      }