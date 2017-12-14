//back end business
function Album (title, artist, year, art){
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.art = art;
}

var albums = [];


//front end foolery
$(document).ready(function(){
  $('#new-album').submit(function(event){
    event.preventDefault();
    var title = $('#title')
  });

});
