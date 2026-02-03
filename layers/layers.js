var wms_layers = [];


        var lyr_esrisatellite_0 = new ol.layer.Tile({
            'title': 'esri satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatasAdministrasiKecamatan_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_1 = format_BatasAdministrasiKecamatan_1.readFeatures(json_BatasAdministrasiKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_1.addFeatures(features_BatasAdministrasiKecamatan_1);
var lyr_BatasAdministrasiKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_1, 
                style: style_BatasAdministrasiKecamatan_1,
                popuplayertitle: 'Batas Administrasi Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_1.png" /> Batas Administrasi Kecamatan'
            });
var format_JalanKabupaten_2 = new ol.format.GeoJSON();
var features_JalanKabupaten_2 = format_JalanKabupaten_2.readFeatures(json_JalanKabupaten_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_2.addFeatures(features_JalanKabupaten_2);
var lyr_JalanKabupaten_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_2, 
                style: style_JalanKabupaten_2,
                popuplayertitle: 'Jalan Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_2.png" /> Jalan Kabupaten'
            });
var format_JalanNasional_3 = new ol.format.GeoJSON();
var features_JalanNasional_3 = format_JalanNasional_3.readFeatures(json_JalanNasional_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanNasional_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanNasional_3.addFeatures(features_JalanNasional_3);
var lyr_JalanNasional_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanNasional_3, 
                style: style_JalanNasional_3,
                popuplayertitle: 'Jalan Nasional',
                interactive: true,
                title: '<img src="styles/legend/JalanNasional_3.png" /> Jalan Nasional'
            });
var group_LayerGSB = new ol.layer.Group({
                                layers: [lyr_esrisatellite_0,lyr_BatasAdministrasiKecamatan_1,lyr_JalanKabupaten_2,lyr_JalanNasional_3,],
                                fold: 'open',
                                title: 'Layer GSB'});

lyr_esrisatellite_0.setVisible(true);lyr_BatasAdministrasiKecamatan_1.setVisible(true);lyr_JalanKabupaten_2.setVisible(true);lyr_JalanNasional_3.setVisible(true);
var layersList = [group_LayerGSB];
lyr_BatasAdministrasiKecamatan_1.set('fieldAliases', {'left_fid': 'left_fid', 'right_fid': 'right_fid', });
lyr_JalanKabupaten_2.set('fieldAliases', {'Nm_Ruas': 'Nama_Ruas_Jalan', 'Nomor': 'Nomor', 'Garis_Semp': 'Garis_Sempadan_Bangunan', 'Garis_Se_1': 'Garis_Sempadan_Pagar', 'Foto_1': 'Foto', });
lyr_JalanNasional_3.set('fieldAliases', {'OID_': 'OID', 'GSP': 'Garis_Sempadan_Pagar', 'GSB': 'Garis_Sempadan_Bangunan', 'NamaRuas': 'Nama_Ruas_Jalan', 'Nomor': 'Nomor', 'Foto': 'Foto', });
lyr_BatasAdministrasiKecamatan_1.set('fieldImages', {'left_fid': 'Range', 'right_fid': 'Range', });
lyr_JalanKabupaten_2.set('fieldImages', {'Nm_Ruas': 'TextEdit', 'Nomor': 'TextEdit', 'Garis_Semp': 'TextEdit', 'Garis_Se_1': 'TextEdit', 'Foto_1': 'TextEdit', });
lyr_JalanNasional_3.set('fieldImages', {'OID_': 'TextEdit', 'GSP': 'TextEdit', 'GSB': 'TextEdit', 'NamaRuas': 'TextEdit', 'Nomor': 'TextEdit', 'Foto': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_1.set('fieldLabels', {'left_fid': 'no label', 'right_fid': 'no label', });
lyr_JalanKabupaten_2.set('fieldLabels', {'Nm_Ruas': 'inline label - always visible', 'Nomor': 'inline label - always visible', 'Garis_Semp': 'inline label - always visible', 'Garis_Se_1': 'inline label - always visible', 'Foto_1': 'inline label - always visible', });
lyr_JalanNasional_3.set('fieldLabels', {'OID_': 'no label', 'GSP': 'inline label - always visible', 'GSB': 'inline label - always visible', 'NamaRuas': 'inline label - always visible', 'Nomor': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_JalanNasional_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});