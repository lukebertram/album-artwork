//back end business
function Album (title, artist, year, art){
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.art = art;
}

var albumsIndex = 0;
var defaultAlbum1 = new Album("Currents", "Tame Impala", "2015", "img/tame.jpg");
var defaultAlbum2 = new Album("Little Criminals", "Randy Newman", "1984", "img/newman.jpg");
var defaultAlbum3 = new Album("Frances The Mute", "The Mars Volta", "2005", "img/mars.jpg");
var defaultAlbum4 = new Album("Coloring Book", "Chance The Rapper", "2016", "img/chance.jpg");
var defaultAlbum5 = new Album("Unknown Pleasures", "Joy Division", "1979", "img/joy.jpg");
var defaultAlbum6 = new Album("Lemonade", "Beyonce", "1916", "img/lemonade.jpg");
var defaultAlbum7 = new Album("Rumors", "Fleetwood Mac", "1977", "img/rumors.jpg");
var defaultAlbum8 = new Album("Places Like This", "Architecture in Helsinki", "2007", "img/places.jpg");
var albums = [defaultAlbum1, defaultAlbum2, defaultAlbum3, defaultAlbum4, defaultAlbum5, defaultAlbum6, defaultAlbum7, defaultAlbum8];

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

  //ON CROSS CLICK
  $('.add-album-btn').click(function(){
    $('.add-menu').toggleClass('menu-show');
    $('.add-album-btn').toggleClass('close-button');
  });
  //ON PREV CLICK
  $('#prev').click(function(){
    if (albums[albumsIndex - 1]) {
      albumsIndex--;
    } else {
      albumsIndex = albums.length;
    }
    setCurrentAlbum(albumsIndex);
  });



  //ON NEXT CLICK
  $('#next').click(function(){
    if (albums[albumsIndex + 1]) {
      albumsIndex++;
    } else {
      albumsIndex = 0;
    }
    setCurrentAlbum(albumsIndex);
  });

  //ON ALBUM CLICK
  $('.landing-pad').click(function(){
    $('.album').toggleClass('flipped');
  });

  //ON SUBMIT BUTTON CLICK
  $('#submit-btn').click(function(){
    $('add-album-btn').toggleClass('close-button');
    $('.add-menu').toggleClass('menu-show');

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
