app.post('/genre/:gen', function (req, res) {
    var books = baza({genre: req.params.gen}).select("title", "author");
    var newAuthor = req.body.author;
    var newTitle = req.body.title;
    var genre = req.params.genre;
    
    baza.insert({author: newAuthor, title: newTitle, genre: genre});
    res.json(books);
});


function displayPrompt() {
    var $modal = $('<div id="modal"><p>Dodano ksiazke</p></div>');
    
    $('body').append($modal);
    
    $modal.css({
        'background-color': 'white',
        'margin': 'auto',
        'padding': '20px',
        'border': '1px solid black',
        'box-shadow': '0 0 10px black',
        'width': '10%',
        'text-align': 'center'
    });
    
    $modal.delay(2000).fadeOut();
}

var setup = function() {
    $('form').submit(postBook);
   $.getJSON('/genres', function(data, status){
      if(status == 'success'){
         $.each(data, function(index, value){
            var tr = $('<li></li>').text(value).addClass('clickable').click(getShowGenre(value));
            $('nav ul').append(tr);
         });
      }
      else alert(status);
   });
};
