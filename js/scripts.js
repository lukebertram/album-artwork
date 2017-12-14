//back end business
function Album (title, artist, year, art){
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.art = art;
}

var albumsIndex = 0;
var defaultAlbum1 = new Album("Glitter", "Mariah Carey", "1922", "img/glitter.jpg");
var defaultAlbum2 = new Album("Little Criminals", "Randy Newman", "1984", "img/newman.jpg");
var albums = [defaultAlbum1, defaultAlbum2];

//set current album for display
var setCurrentAlbum = function(twentyOneJumpStreet){
  var currentAlbum = albums[twentyOneJumpStreet];
  $("#currentArt").attr('src', currentAlbum.art );
  $("#display-title").text(currentAlbum.title);
  $("#display-artist").text(currentAlbum.artist);
  $("#display-year").text(currentAlbum.year);
};

//front end foolery
$(document).ready(function(){
  //DEFAULT TO FIRST ALBUM IN ALBUMS
  setCurrentAlbum(0);
  //ON PREV CLICK
  $('#prev').click(function(){
    if (albums[albumsIndex - 1]) {
      albumsIndex--;
      setCurrentAlbum(albumsIndex);
    }
  });

  //ON NEXT CLICK
  $('#next').click(function(){
    if (albums[albumsIndex + 1]) {
      albumsIndex++;
      setCurrentAlbum(albumsIndex);
    }
  });

  //ON FORM SUBMIT: add new album from form input
  $('#new-album').submit(function(event){
    event.preventDefault();
    //add validation later
    var title = $('#title').val();
    var artist = $('#artist').val();
    var year = $('#year').val();
    var art = $('#art').val();
    var newAlbum = new Album (title, artist, year, art);
    albums.push(newAlbum);

  });

});
