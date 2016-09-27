
var initialize= function(){
var container = document.getElementById('map');
var center = { lat: 55.94716, lng: -3.20198};
//{ lat: 55.94716, lng: -3.20198}
var map = new Map(container, center, 10);
// map.addMarker(center,"1","CodeClan");
// var center = {lat: 55.968956, lng: -3.187786}
// map.addMarker(center,"2", "Redbraes");
var center1 = {lat: 56.216534, lng: -3.429991}
// map.addMarker(center1,"3", "Home");
map.addMarkerFromArray();

map.addClickEvent();
}



window.onload = initialize;



