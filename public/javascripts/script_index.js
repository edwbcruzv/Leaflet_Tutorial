
/**
 * Primero inicializaremos el mapa y configuraremos su vista 
 * a nuestras coordenadas geográficas elegidas y un nivel de zoom.
 * 
 * Si tenemos map y setView + el CSS solo se vera un cuadro sin nada que mostrar. 
 */
let map = L.map('map').setView([51.505, -0.09], 13);


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

/**
 * Agregando un marcador
 */
let marker = L.marker([51.5, -0.09]).addTo(map);

/**
 * Dibujando un circulo en el mapa
 */
let circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

/**
 * Dibujando un poligono en el mapa
 */
let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

/**
 * Ventanas emergentes, cuando se da un clic sobre
 * las figuras o el marcados resaltaran el contenido
 * que se le haya dado.
 * 
 * bindPopup(): el método adjunta una ventana emergente con el contenido HTML especificado 
 * a su marcador, de modo que la ventana emergente aparece cuando hace clic en el objeto.
 * 
 * openPopup(): el metodo hace que cuando se muestre el mapa muestre la ventana emergente.
 */
marker.bindPopup("<b>Esta es una posicion actual</b><br>Se pueden agregar estiquetas html.").openPopup();
circle.bindPopup("Una zona marcada con un circulo");
polygon.bindPopup("Una zona marcada con un poligono");

/**
 * Cuando solo se necesite mostrar una ventana emergente solo una vez cuando se muestre
 * por primera vez el mapa
 */
let popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("Solo un anuncio breve y desaparecere")
    .openOn(map);

// -------------------------EVENTOS-------------------------
/**
 * Cada que de clic en una parte del mapa aparecera la coordenada
 * 
 * e: es una forma de avreviar al evento y este contendra informacion
 * de la zona del mapa donde se hizo clic, ver documentacion para ver
 * las propiedades del evento.
 * 
 */
map.on('click',(e)=>{
    alert("You clicked the map at " + e.latlng);
});

/**
 * Se esta sobreescribiendo la ventana emergente que se tenia antes y le
 * estamos usando para mostrar donde damos clic usando el evento clic sobre
 * el mapa.
 */
popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);
