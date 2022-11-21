/**
 * Primero inicializaremos el mapa y configuraremos su vista 
 * a nuestras coordenadas geográficas elegidas y un nivel de zoom.
 * 
 * Si tenemos map y setView + el CSS solo se vera un cuadro sin nada que mostrar. 
 */
let map = L.map('map').setView([-104.99404, 39.75621], 13);


/**
  * capa de mosaico generalmente implica configurar la plantilla 
  * de URL para las imágenes de mosaico, el texto de atribución y el 
  * nivel de zoom máximo de la capa
  * 
  *  La mayoría de los demás proveedores de mosaicos 
  * (como Mapbox , Stamen o Thunderforest ) también requieren una atribución
  * 
  * Hasta esta parte del codigo y el CSS se debe de mostrar un mapa sin marcadores
  */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '© OpenStreetMap'
}).addTo(map);


var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};


L.geoJSON(geojsonFeature).addTo(map);
