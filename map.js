function initialize() {
    var map = new GMap2(document.getElementById("imf_canvas"));
    map.setUIToDefault();
	map.addControl(new GMapTypeControl());
	var dock = new GLatLng(33.6055, -117.8988);
	var center = new GLatLng(33.6, -117.89);
	var opts = {
	  title: "Island Marine Fuel Dock"
	};
	var marker = new GMarker(dock, opts);
	map.setCenter(center, 14);
	map.addOverlay(marker);
}