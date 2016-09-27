
var initialize= function(){
var container = document.getElementById('map');
var center = { lat: 55.94716, lng: -3.20198};
//{ lat: 55.94716, lng: -3.20198}
var map = new Map(container, center, 10);
map.addMarker(center);
map.addClickEvent();
}



window.onload = initialize;