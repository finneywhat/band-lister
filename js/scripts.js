//Business Logic
function Band(band, album) {
  this.band = band;
  this.album = album;
}


//User Interface
$(document).ready(function(){
  $('form#bandForm').submit(function(event){
    event.preventDefault();

    var newBand = $("input#bandName").val();
    var newAlbum = $("input#album").val();

    var bandInfo = new Band(newBand, newAlbum);

    $("#bandList").append("<li><span class='clickable'>" + bandInfo.band + "</span></li>");

  });

});
