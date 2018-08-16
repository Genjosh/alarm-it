
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://unirest.io/HttpResponse%3CInputStream%3E%20response%20=%20Unirest.get%28%22https://montanaflynn-text-to-speech.p.mashape.com/speak",
    "method": "GET",
    "headers": {
      "Cache-Control": "no-cache",
      "Postman-Token": "dbfec823-7a47-4723-86b7-0b2d10c88aa6"
    }
  };


  
  $.ajax(settings).done(function (response) {
    console.log(response);

    
  });