function initMap() {
    var pos = {lat: 53.909129, lng: 27.470102}
    var pos1 = {lat: 53.908344, lng: 27.484478}
    var pos2 = {lat: 53.907308, lng: 27.492482}

    var opt = {
        center: pos1,
        zoom: 14,
    };

    var map = new google.maps.Map(document.getElementById("map"), opt);

    var marker = new google.maps.Marker({ 
        map: map,
        position: pos,
        title: "OJJO"
    });

    var info = new google.maps.InfoWindow({ 
        content: '<p>ТЦ Скала</p>'
    });

    marker.addListener("click", function() {
        info.open(map, marker)
    });

    var marker1 = new google.maps.Marker({
        map: map,
        position: pos1,
        title: "OJJO"
    });

    var info1 = new google.maps.InfoWindow({
        content: '<p>ТЦ Тивали</p>'
    });

    marker1.addListener("click", function() {
        info1.open(map, marker1)
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: pos2,
        title: "OJJO"
    });

    var info2 = new google.maps.InfoWindow({
        content: '<p>Раковский</p>'
    });

    marker2.addListener("click", function() {
        info2.open(map, marker2)
    });    
}