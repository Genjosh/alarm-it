
var audioClip;
var queryUrl ="http://api.voicerss.org/?key=0a7914a1376346ce8cee9c5045328467&hl=en-us&b64=true&src=You now have 15 minutes to get on the bus!";
  $.ajax({
    url:queryUrl,
    method:"get",
    
  }).then(function(response) {
      audioClip = document.createElement("audio");
      audioClip.setAttribute("src", response);

  });

  $("#clickMe").on("click",function(){
    audioClip.play();
  });

  setInterval(function() {
    audioClip.play();
  } ,1000);
  

  
   
  // $.ajax(settings).done(function (response) {
    

