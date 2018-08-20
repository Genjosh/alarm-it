
// accepted ajax GET address format:
// 1555 Blake St, Denver, CO 80202

<<<<<<< HEAD
// var apiKey = "FX1GGwHVna3hSW5VqqYNR8FOjqQhDdlM";

// var deviceLatitude;
// var deviceLongitude;
// var deviceLocSearchStr;
// var destSearchStr;
// var origin;
// var origin = "2105+Coronado+Pkwy+N,Denver,CO80229";
// var dest;
// var dest = "1901+East+Asbury+Avenue,Denver,CO";
// var dest = "2105+Coronado+Pkwy+N,Denver,CO80229";

// // if device geolocation exists
// if (navigator.geolocation) {
//     // grab device latitude and longitude
//     navigator.geolocation.getCurrentPosition(function (position) {
//         // navigator.geolocation.watchPosition(function (position) {
//         deviceLatitude = position.coords.latitude;
//         deviceLongitude = position.coords.longitude;
//         console.log("ok: ", deviceLatitude);
//         console.log("ok: ", deviceLongitude);
//         doAjax();
//     })
//     // else warn and offer manual entry
// }
// else {
//     $("#home_location_input").attr("placeholder", "Geolocation is not available on this device. Enter current address.");
// }
// // ^ device geolocation

// function doAjax() {

//     if (deviceLatitude && deviceLongitude) {

//         $.ajax({
//             url: "http://www.mapquestapi.com/geocoding/v1/reverse?key=" + apiKey + "&location=" + deviceLatitude + "," + deviceLongitude + "&includeRoadMetadata=true&includeNearestIntersection=true",
//             method: "GET"

//         }).then(function (response) {

//             var shortZip = response.results[0].locations[0].postalCode.split("-");
//             deviceLocation = response.results[0].locations[0].street + "," + response.results[0].locations[0].adminArea5 + "," + response.results[0].locations[0].adminArea3 + shortZip[0];
//             $("#start_address_input").val(response.results[0].locations[0].street);
//             $("#start_city_input").val(response.results[0].locations[0].adminArea5);
//             $("#start_state_input").val(response.results[0].locations[0].adminArea3);
//             $("#start_zip_input").val(response.results[0].locations[0].postalCode);
//             deviceLocSearchStr = deviceLocation.replace(/\s/g, "+");
//             console.log("ok : ", deviceLatitude);
//             console.log("ok : ", deviceLongitude);
//             console.log("ok : ", deviceLocSearchStr);
//             console.log("? : ", origin);

//         }).then(function () {

//             $.ajax({
//                 url: "https://www.mapquestapi.com/directions/v2/route?key=" + apiKey + "&from=" + deviceLocSearchStr + "&to=" + destSearchStr + "&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false",
//                 method: "GET"
//             }).then(function (response) {
//                 timeEstimate = response.route.legs[0].formattedTime;
//                 console.log("timeEstimate : " + timeEstimate);
//             }).then(function () {
//                 console.log("deviceLocSearchStr : ", deviceLocSearchStr);
//                 console.log("destSearchStr : " + destSearchStr);

//                 $.ajax({
//                     url: "https://www.mapquestapi.com/directions/v2/route?key=" + apiKey + "&from=" + deviceLocSearchStr + "&to=" + destSearchStr + "&outFormat=json&ambiguities=ignore&routeType=pedestrian&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false",
//                     method: "GET"
//                 }).then(function (response) {
//                     timeEstimatePed = response.route.legs[0].formattedTime;
//                     console.log("timeEstimatePed : " + timeEstimatePed);
//                 })
//             })
//         })
//     }
// }

// $("#add-info").on("click", function (event) {
//     event.preventDefault();
//     name = $("#name_input").val().trim();
//     home = $("#start_address_input").val().trim();
//     destination = $("#end_address_input").val().trim();
//     destCity = $("#end_city_input").val().trim();
//     destState = $("#end_state_input").val().trim();
//     destZip = $("#end_zip_input").val().trim();
//     streetStr = destination.replace(/\s/g, "+");
//     destSearchStr = streetStr + "," + destCity + "," + destState + destZip;
//     console.log("name : " + name);
//     console.log("home : " + home);
//     console.log("destination : " + destination);
//     console.log("destCity : " + destCity);
//     console.log("destState : " + destState);
//     console.log("destZip : " + destZip);
//     // console.log("destSearchStr : " + destSearchStr);
// })

// $("form")[0].reset();

// 2105 Coronado Pkwy N
=======
var apiKey = "FX1GGwHVna3hSW5VqqYNR8FOjqQhDdlM";

// var from = "2105+Coronado+Pkwy+N,Denver,CO";
var from = "2105+Coronado+Pkwy+N,Denver,CO";
var to = "1901+East+Asbury+Avenue,Denver,CO";

var altRoutes = "http://www.mapquestapi.com/directions/v2/alternateroutes?key=" + apiKey + "&from=" + from + "&to=" + to + "&maxRoutes=2&timeOverage=100";
console.log("altRoutes : " + altRoutes);

var optRoute = "http://www.mapquestapi.com/directions/v2/optimizedroute?key=" + apiKey + "&json={'locations':['Denver,CO','Westminster,CO','Boulder,CO']}";
console.log("optRoute : " + optRoute);

var geocode = "http://www.mapquestapi.com/geocoding/v1/address?key=" + apiKey + "&location=" + to + "&thumbMaps=false";
console.log("geocode : " + geocode);

var route = "https://www.mapquestapi.com/directions/v2/route?key=" + apiKey + "&from=" + from + "&to=" + to + "&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false";
console.log("route : " + route);

// var trafficDelays = "http://www.mapquestapi.com/traffic/v2/incidents?key=" + apiKey + "&boundingBox=39.95,-105.25,39.52,-104.71&filters=construction,incidents";

// console.log("optRoute : " + optRoute);

var fromStr = topicArr[i].split("+").join(" ");

$.ajax({
    url: altRoutes,
    method: "GET"
}) // end $.ajax
    .then(function (responseAr) {
        console.log(responseAr);
        // console.log(response.route);
    }); //end .then

$.ajax({
    url: optRoute,
    method: "GET"
}) // end $.ajax
    .then(function (responseOr) {
        console.log(responseOr);
        // var print = JSON.stringify(responseOr);
        // document.getElementById("test").innerHTML = JSON.stringify(responseOr);
    }); //end .then

$.ajax({
    url: geocode,
    method: "GET"
}) // end $.ajax
    .then(function (responseGc) {
        console.log(responseGc);
        // console.log(responseGc.info);
    }); //end .then

$.ajax({
    url: route,
    method: "GET"
}) // end $.ajax
    .then(function (response) {
        console.log(response);
        // console.log(response.route);
    }); //end .then

$("#add-information-btn").on("click", function (event) {
    console.log(event);
    event.preventDefault();
    name = $("#name_input").val().trim();
    home = $("#home_location_input").val().trim();
    destination = $("#destination_input").val().trim();
    arrival = $("#arrival_time").val().trim();
    console.log("name : " + name);
    console.log("home : " + home);
    console.log("destination : " + destination);
    console.log("arrival : " + arrival);
});

$("form")[0].reset();


// TTS javascript
var audioClip;
var alarm;

var queryUrl ="http://api.voicerss.org/?key=0a7914a1376346ce8cee9c5045328467&hl=en-us&b64=true&src=hello world";
  $.ajax({
    url:queryUrl,
    method:"get",
    
  }).then(function(response) {
      audioClip = document.createElement("audio");
      audioClip.setAttribute("src", response);


  });

  $("#add-info").on("click",function(){
    
    console.log(then);

  });

>>>>>>> d2df75cb27d6fa33feedfc56209faddc12e2bd7a
