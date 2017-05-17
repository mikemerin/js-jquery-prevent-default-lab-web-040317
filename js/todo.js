$(document).ready(function(){
  addToList()
});

function addToList() {
  $('form').on('submit', (event) => {
    var item = $('#item').val();
      $('ol').append('<li>' + item + '</li>' )
      event.preventDefault();
    }
  )
}
