var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Temanggung_1 = new ol.format.GeoJSON();
var features_Temanggung_1 = format_Temanggung_1.readFeatures(json_Temanggung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temanggung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temanggung_1.addFeatures(features_Temanggung_1);
var lyr_Temanggung_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Temanggung_1, 
                style: style_Temanggung_1,
                popuplayertitle: 'Temanggung',
                interactive: true,
    title: 'Temanggung<br />\
    <img src="styles/legend/Temanggung_1_0.png" /> <br />\
    <img src="styles/legend/Temanggung_1_1.png" /> Bansari<br />\
    <img src="styles/legend/Temanggung_1_2.png" /> Bejen<br />\
    <img src="styles/legend/Temanggung_1_3.png" /> Bulu<br />\
    <img src="styles/legend/Temanggung_1_4.png" /> Candiroto<br />\
    <img src="styles/legend/Temanggung_1_5.png" /> Gemawang<br />\
    <img src="styles/legend/Temanggung_1_6.png" /> Jumo<br />\
    <img src="styles/legend/Temanggung_1_7.png" /> Kaloran<br />\
    <img src="styles/legend/Temanggung_1_8.png" /> Kandangan<br />\
    <img src="styles/legend/Temanggung_1_9.png" /> Kedu<br />\
    <img src="styles/legend/Temanggung_1_10.png" /> Kledung<br />\
    <img src="styles/legend/Temanggung_1_11.png" /> Kranggan<br />\
    <img src="styles/legend/Temanggung_1_12.png" /> Ngadirejo<br />\
    <img src="styles/legend/Temanggung_1_13.png" /> Parakan<br />\
    <img src="styles/legend/Temanggung_1_14.png" /> Pringsurat<br />\
    <img src="styles/legend/Temanggung_1_15.png" /> Selopampang<br />\
    <img src="styles/legend/Temanggung_1_16.png" /> Temanggung<br />\
    <img src="styles/legend/Temanggung_1_17.png" /> Tembarak<br />\
    <img src="styles/legend/Temanggung_1_18.png" /> Tlogomulyo<br />\
    <img src="styles/legend/Temanggung_1_19.png" /> Tretep<br />\
    <img src="styles/legend/Temanggung_1_20.png" /> Wonoboyo<br />' });
var format_JaringanJalan_2 = new ol.format.GeoJSON();
var features_JaringanJalan_2 = format_JaringanJalan_2.readFeatures(json_JaringanJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_2.addFeatures(features_JaringanJalan_2);
var lyr_JaringanJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_2, 
                style: style_JaringanJalan_2,
                popuplayertitle: 'Jaringan Jalan',
                interactive: false,
                title: '<img src="styles/legend/JaringanJalan_2.png" /> Jaringan Jalan'
            });
var format_Titik_3 = new ol.format.GeoJSON();
var features_Titik_3 = format_Titik_3.readFeatures(json_Titik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_3.addFeatures(features_Titik_3);
cluster_Titik_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Titik_3
});
var lyr_Titik_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Titik_3, 
                style: style_Titik_3,
                popuplayertitle: 'Titik',
                interactive: true,
    title: 'Titik<br />\
    <img src="styles/legend/Titik_3_0.png" /> Sekolah Rakyat Menengah Atas 16 Temanggung<br />\
    <img src="styles/legend/Titik_3_1.png" /> SMA Bhakti Karya Kaloran<br />\
    <img src="styles/legend/Titik_3_2.png" /> SMA Harapan Bangsa Porot<br />\
    <img src="styles/legend/Titik_3_3.png" /> SMA ISLAM KANDANGAN<br />\
    <img src="styles/legend/Titik_3_4.png" /> SMA Islam Sudirman Tembarak<br />\
    <img src="styles/legend/Titik_3_5.png" /> SMA Kristen Shekinah<br />\
    <img src="styles/legend/Titik_3_6.png" /> SMA Negeri 1 Parakan<br />\
    <img src="styles/legend/Titik_3_7.png" /> SMA Negeri 1 Pringsurat<br />\
    <img src="styles/legend/Titik_3_8.png" /> SMA Negeri 1 Temanggung<br />\
    <img src="styles/legend/Titik_3_9.png" /> SMA Negeri 2 Temanggung<br />\
    <img src="styles/legend/Titik_3_10.png" /> SMA Negeri 3 Temanggung<br />\
    <img src="styles/legend/Titik_3_11.png" /> SMA Nur Lintang<br />\
    <img src="styles/legend/Titik_3_12.png" /> SMA PGRI<br />\
    <img src="styles/legend/Titik_3_13.png" /> SMA Swasta Muhammadiyah 1 Temanggung<br />\
    <img src="styles/legend/Titik_3_14.png" /> SMAN 1 Candiroto<br />\
    <img src="styles/legend/Titik_3_15.png" /> <br />' });
var format_Alternatiflahankosong_4 = new ol.format.GeoJSON();
var features_Alternatiflahankosong_4 = format_Alternatiflahankosong_4.readFeatures(json_Alternatiflahankosong_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alternatiflahankosong_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alternatiflahankosong_4.addFeatures(features_Alternatiflahankosong_4);
var lyr_Alternatiflahankosong_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alternatiflahankosong_4, 
                style: style_Alternatiflahankosong_4,
                popuplayertitle: 'Alternatif lahan kosong',
                interactive: true,
                title: '<img src="styles/legend/Alternatiflahankosong_4.png" /> Alternatif lahan kosong'
            });

lyr_Positron_0.setVisible(true);lyr_Temanggung_1.setVisible(true);lyr_JaringanJalan_2.setVisible(true);lyr_Titik_3.setVisible(true);lyr_Alternatiflahankosong_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Temanggung_1,lyr_JaringanJalan_2,lyr_Titik_3,lyr_Alternatiflahankosong_4];
lyr_Temanggung_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Kemiskinan': 'Kemiskinan', 'Pelayanan': 'Pelayanan', 'Miskin': 'Miskin', 'Demografi': 'Demografi', });
lyr_JaringanJalan_2.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'service': 'service', 'name': 'name', });
lyr_Titik_3.set('fieldAliases', {'field_2': 'field_2', 'field_3': 'Nama Sekolah', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'Keteradaan': 'Keteradaan', 'Akreditasi': 'Akreditasi', 'Kapasitas': 'Kapasitas', 'Gambar': 'Gambar', });
lyr_Alternatiflahankosong_4.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Lah': 'Luasan_Lah', });
lyr_Temanggung_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Kemiskinan': 'TextEdit', 'Pelayanan': 'TextEdit', 'Miskin': 'TextEdit', 'Demografi': 'TextEdit', });
lyr_JaringanJalan_2.set('fieldImages', {'fid': 'TextEdit', 'highway': 'TextEdit', 'service': 'TextEdit', 'name': 'TextEdit', });
lyr_Titik_3.set('fieldImages', {'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'Keteradaan': 'TextEdit', 'Akreditasi': 'TextEdit', 'Kapasitas': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_Alternatiflahankosong_4.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Lah': 'TextEdit', });
lyr_Temanggung_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'WADMKC': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Kemiskinan': 'hidden field', 'Pelayanan': 'hidden field', 'Miskin': 'hidden field', 'Demografi': 'hidden field', });
lyr_JaringanJalan_2.set('fieldLabels', {'fid': 'hidden field', 'highway': 'hidden field', 'service': 'hidden field', 'name': 'hidden field', });
lyr_Titik_3.set('fieldLabels', {'field_2': 'hidden field', 'field_3': 'header label - always visible', 'field_4': 'hidden field', 'field_5': 'hidden field', 'field_6': 'hidden field', 'field_7': 'hidden field', 'Keteradaan': 'hidden field', 'Akreditasi': 'inline label - visible with data', 'Kapasitas': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_Alternatiflahankosong_4.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'hidden field', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Clamped': 'hidden field', 'Extruded': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Luasan_Lah': 'header label - always visible', });
lyr_Alternatiflahankosong_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});