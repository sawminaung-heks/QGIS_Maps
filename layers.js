ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([96.781456, 20.682275, 97.512315, 21.075541]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_mmr_Districts_250k_mimu_2 = new ol.format.GeoJSON();
var features_mmr_Districts_250k_mimu_2 = format_mmr_Districts_250k_mimu_2.readFeatures(json_mmr_Districts_250k_mimu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mmr_Districts_250k_mimu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mmr_Districts_250k_mimu_2.addFeatures(features_mmr_Districts_250k_mimu_2);
var lyr_mmr_Districts_250k_mimu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mmr_Districts_250k_mimu_2, 
                style: style_mmr_Districts_250k_mimu_2,
                popuplayertitle: 'mmr_Districts_250k_mimu',
                interactive: true,
                title: '<img src="styles/legend/mmr_Districts_250k_mimu_2.png" /> mmr_Districts_250k_mimu'
            });
var format_mmr_rdsl_mimu_250k_3 = new ol.format.GeoJSON();
var features_mmr_rdsl_mimu_250k_3 = format_mmr_rdsl_mimu_250k_3.readFeatures(json_mmr_rdsl_mimu_250k_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mmr_rdsl_mimu_250k_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mmr_rdsl_mimu_250k_3.addFeatures(features_mmr_rdsl_mimu_250k_3);
var lyr_mmr_rdsl_mimu_250k_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mmr_rdsl_mimu_250k_3, 
                style: style_mmr_rdsl_mimu_250k_3,
                popuplayertitle: 'mmr_rdsl_mimu_250k',
                interactive: true,
                title: '<img src="styles/legend/mmr_rdsl_mimu_250k_3.png" /> mmr_rdsl_mimu_250k'
            });
var format_mmr_State_Region_250k_mimu_1_4 = new ol.format.GeoJSON();
var features_mmr_State_Region_250k_mimu_1_4 = format_mmr_State_Region_250k_mimu_1_4.readFeatures(json_mmr_State_Region_250k_mimu_1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mmr_State_Region_250k_mimu_1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mmr_State_Region_250k_mimu_1_4.addFeatures(features_mmr_State_Region_250k_mimu_1_4);
var lyr_mmr_State_Region_250k_mimu_1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mmr_State_Region_250k_mimu_1_4, 
                style: style_mmr_State_Region_250k_mimu_1_4,
                popuplayertitle: 'mmr_State_Region_250k_mimu_1',
                interactive: true,
                title: '<img src="styles/legend/mmr_State_Region_250k_mimu_1_4.png" /> mmr_State_Region_250k_mimu_1'
            });
var format_mmr_Towns_mimu250k_5 = new ol.format.GeoJSON();
var features_mmr_Towns_mimu250k_5 = format_mmr_Towns_mimu250k_5.readFeatures(json_mmr_Towns_mimu250k_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mmr_Towns_mimu250k_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mmr_Towns_mimu250k_5.addFeatures(features_mmr_Towns_mimu250k_5);
cluster_mmr_Towns_mimu250k_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_mmr_Towns_mimu250k_5
});
var lyr_mmr_Towns_mimu250k_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_mmr_Towns_mimu250k_5, 
                style: style_mmr_Towns_mimu250k_5,
                popuplayertitle: 'mmr_Towns_mimu250k',
                interactive: true,
                title: '<img src="styles/legend/mmr_Towns_mimu250k_5.png" /> mmr_Towns_mimu250k'
            });
var format_mmr_TSP_adm3_250k_mimu_1_6 = new ol.format.GeoJSON();
var features_mmr_TSP_adm3_250k_mimu_1_6 = format_mmr_TSP_adm3_250k_mimu_1_6.readFeatures(json_mmr_TSP_adm3_250k_mimu_1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mmr_TSP_adm3_250k_mimu_1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mmr_TSP_adm3_250k_mimu_1_6.addFeatures(features_mmr_TSP_adm3_250k_mimu_1_6);
var lyr_mmr_TSP_adm3_250k_mimu_1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mmr_TSP_adm3_250k_mimu_1_6, 
                style: style_mmr_TSP_adm3_250k_mimu_1_6,
                popuplayertitle: 'mmr_TSP_adm3_250k_mimu_1',
                interactive: true,
    title: 'mmr_TSP_adm3_250k_mimu_1<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_0.png" /> ကနီ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_1.png" /> ကန်ကြီးထောင့်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_2.png" /> ကန်ပက်လက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_3.png" /> ကန့်ဘလူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_4.png" /> ကံမ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_5.png" /> ကမာရွတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_6.png" /> ကျွန်းစု<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_7.png" /> ကျွန်းလှ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_8.png" /> ကျိုက်ထို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_9.png" /> ကျိုက်မရော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_10.png" /> ကျိုက်လတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_11.png" /> ကျိုင်းတုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_12.png" /> ကျုံပျော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_13.png" /> ကျေးသီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_14.png" /> ကျောက်ကြီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_15.png" /> ကျောက်ဆည်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_16.png" /> ကျောက်တံခါး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_17.png" /> ကျောက်တံတား<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_18.png" /> ကျောက်တန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_19.png" /> ကျောက်တော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_20.png" /> ကျောက်ပန်းတောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_21.png" /> ကျောက်ဖြူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_22.png" /> ကျောက်မဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_23.png" /> ကျောင်းကုန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_24.png" /> ကြံခင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_25.png" /> ကြည့်မြင်တိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_26.png" /> ကြာအင်းဆိပ်ကြီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_27.png" /> ကြို့ပင်ကောက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_28.png" /> ကလေး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_29.png" /> ကလေးဝ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_30.png" /> ကလော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_31.png" /> ကဝ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_32.png" /> ကွတ်ခိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_33.png" /> ကွန်ဟိန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_34.png" /> ကွမ်းခြံကုန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_35.png" /> ကွမ်းလုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_36.png" /> ကသာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_37.png" /> ကိုကိုးကျွန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_38.png" /> ကုန်းကြမ်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_39.png" /> ကော့ကရိတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_40.png" /> ကော့မှူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_41.png" /> ကောလင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_42.png" /> ကော့သောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_43.png" /> ခင်ဦး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_44.png" /> ခန္တီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_45.png" /> ချမ်းမြသာစည်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_46.png" /> ချမ်းအေးသာစံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_47.png" /> ချီ​ဖွေ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_48.png" /> ချောက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_49.png" /> ချောင်းဆုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_50.png" /> ချောင်းဦး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_51.png" /> ခရမ်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_52.png" /> ခေါင်လန်ဖူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_53.png" /> ဂန့်ဂေါ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_54.png" /> ဂွ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_55.png" /> ငပုတော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_56.png" /> ငဖဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_57.png" /> ငါန်းဇွန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_58.png" /> စစ်ကိုင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_59.png" /> စစ်တွေ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_60.png" /> စဉ့်ကိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_61.png" /> စဉ့်ကူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_62.png" /> စမ်းချောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_63.png" /> စလင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_64.png" /> စေတုတ္ထရာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_65.png" /> ဆင်ပေါင်ဝဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_66.png" /> ဆွမ်ပရာဘွမ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_67.png" /> ဆားလင်းကြီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_68.png" /> ဆိပ်ကြီး/ခနောင်တို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_69.png" /> ဆိပ်ဖြူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_70.png" /> ဆီဆိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_71.png" /> ဆော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_72.png" /> ဆော့လော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_73.png" /> ဇမ္ဗူသီရိ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_74.png" /> ဇလွန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_75.png" /> ဇီးကုန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_76.png" /> ဇေယျာသီရိ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_77.png" /> ညောင်တုန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_78.png" /> ညောင်ရွှေ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_79.png" /> ညောင်လေးပင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_80.png" /> ညောင်ဦး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_81.png" /> တံတားဦး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_82.png" /> တနင်္သာရီ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_83.png" /> တနိုင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_84.png" /> တန့်ဆည်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_85.png" /> တန့်ယန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_86.png" /> တပ်ကုန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_87.png" /> တမူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_88.png" /> တွံတေး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_89.png" /> တွန်းဇန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_90.png" /> တာချီလိတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_91.png" /> တာမွေ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_92.png" /> တိုက်ကြီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_93.png" /> တီးတိန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_94.png" /> တောင်ကြီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_95.png" /> တောင်ကုတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_96.png" /> တောင်ငူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_97.png" /> တောင်တွင်းကြီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_98.png" /> တောင်သာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_99.png" /> တောင်ဥက္ကလာပ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_100.png" /> ထန်းတပင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_101.png" /> ထန်တလန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_102.png" /> ထားဝယ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_103.png" /> ထီးချိုင့်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_104.png" /> ထီးလင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_105.png" /> ဒက္ခိဏသီရိ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_106.png" /> ဒဂုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_107.png" /> ဒဂုံမြို့သစ် (ဆိပ်ကမ်း)<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_108.png" /> ဒဂုံမြို့သစ် (တောင်ပိုင်း)<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_109.png" /> ဒဂုံမြို့သစ် (မြောက်ပိုင်း)<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_110.png" /> ဒဂုံမြို့သစ် (အရှေ့ပိုင်း)<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_111.png" /> ဒလ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_112.png" /> ဒိုက်ဦး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_113.png" /> ဒီပဲယင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_114.png" /> ဒီးမော့ဆို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_115.png" /> ဒေးဒရဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_116.png" /> ဒေါပုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_117.png" /> ဓနုဖြူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_118.png" /> နတ်တလင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_119.png" /> နတ်မောက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_120.png" /> နန်းယွန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_121.png" /> နမ္မတူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_122.png" /> နမ့်ခမ်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_123.png" /> နမ့်စန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_124.png" /> နမ့်ဆန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_125.png" /> နွားထိုးကြီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_126.png" /> နားဖန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_127.png" /> နောင်ချို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_128.png" /> နောင်မွန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_129.png" /> ပခုက္ကူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_130.png" /> ပင်းတယ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_131.png" /> ပင်လည်ဘူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_132.png" /> ပင်လောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_133.png" /> ပန်ဆန်း (ပန်ခမ်း)<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_134.png" /> ပန်းတနော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_135.png" /> ပန်းတောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_136.png" /> ပန်းဘဲတန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_137.png" /> ပန်ဝိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_138.png" /> ပျဉ်းမနား<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_139.png" /> ပျော်ဘွယ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_140.png" /> ပြင်ဦးလွင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_141.png" /> ပြည်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_142.png" /> ပြည်ကြီးတံခွန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_143.png" /> ပလက်ဝ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_144.png" /> ပွင့်ဖြူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_145.png" /> ပုဇွန်တောင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_146.png" /> ပုဏ္ဏားကျွန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_147.png" /> ပုဗ္ဗသီရိ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_148.png" /> ပုလော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_149.png" /> ပုလဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_150.png" /> ပုသိမ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_151.png" /> ပုသိမ်ကြီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_152.png" /> ပူတာအို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_153.png" /> ပေါက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_154.png" /> ပေါက်ခေါင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_155.png" /> ပေါက်တော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_156.png" /> ပေါင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_157.png" /> ပေါင်းတည်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_158.png" /> ပဲခူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_159.png" /> ဖယ်ခုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_160.png" /> ဖျာပုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_161.png" /> ဖရူဆို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_162.png" /> ဖြူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_163.png" /> ဖလမ်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_164.png" /> ဖားကန့်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_165.png" /> ဖားဆောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_166.png" /> ဖာပွန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_167.png" /> ဖောင်းပြင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_168.png" /> ဗန်းမောက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_169.png" /> ဗန်းမော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_170.png" /> ဗဟန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_171.png" /> ဗိုလ်တထောင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_172.png" /> ဘားအံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_173.png" /> ဘိုကလေး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_174.png" /> ဘီးလင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_175.png" /> ဘုတလင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_176.png" /> ဘုတ်ပြင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_177.png" /> ဘူးသီးတောင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_178.png" /> ဘောလခဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_179.png" /> မကွေး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_180.png" /> မက်မန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_181.png" /> မချမ်းဘော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_182.png" /> မင်းကင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_183.png" /> မင်းတပ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_184.png" /> မင်းတုန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_185.png" /> မင်းပြား<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_186.png" /> မင်းဘူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_187.png" /> မင်းလှ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_188.png" /> မင်္ဂလာတောင်ညွန့်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_189.png" /> မင်္ဂလာဒုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_190.png" /> မံစီ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_191.png" /> မတူပီ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_192.png" /> မတ္တရာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_193.png" /> မန်တုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_194.png" /> မဘိမ်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_195.png" /> မယ်စဲ့<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_196.png" /> မရမ်းကုန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_197.png" /> မြင်းခြံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_198.png" /> မြင်းမူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_199.png" /> မြစ်ကြီးနား<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_200.png" /> မြစ်သား<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_201.png" /> မြန်အောင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_202.png" /> မြဝတီ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_203.png" /> မြိတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_204.png" /> မြိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_205.png" /> မြို့သစ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_206.png" /> မြေပုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_207.png" /> မြောက်ဥက္ကလာပ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_208.png" /> မြောက်ဦး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_209.png" /> မြောင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_210.png" /> မြောင်းမြ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_211.png" /> မလှိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_212.png" /> မဟာအောင်မြေ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_213.png" /> မှော်ဘီ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_214.png" /> မအူပင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_215.png" /> မာန်အောင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_216.png" /> မိတ္ထီလာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_217.png" /> မိုးကုတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_218.png" /> မိုးကောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_219.png" /> မိုင်းကိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_220.png" /> မိုင်းခတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_221.png" /> မိုင်းဆတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_222.png" /> မိုင်းတုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_223.png" /> မိုင်းပန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_224.png" /> မိုင်းပျဉ်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_225.png" /> မိုင်းဖြတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_226.png" /> မိုင်းမော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_227.png" /> မိုင်းယန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_228.png" /> မိုင်းယောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_229.png" /> မိုင်းရယ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_230.png" /> မိုင်းရှူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_231.png" /> မိုင်းလား<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_232.png" /> မိုးညှင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_233.png" /> မိုးညို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_234.png" /> မိုးနဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_235.png" /> မိုးမိတ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_236.png" /> မိုးမောက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_237.png" /> မုဒုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_238.png" /> မုံရွာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_239.png" /> မူဆယ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_240.png" /> မောက်မယ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_241.png" /> မောင်တော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_242.png" /> မော်လမြိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_243.png" /> မော်လမြိုင်ကျွန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_244.png" /> မော်လိုက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_245.png" /> ယင်းမာပင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_246.png" /> ရန်ကင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_247.png" /> ရပ်စောက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_248.png" /> ရမည်းသင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_249.png" /> ရမ်းဗြဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_250.png" /> ရွှေကျင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_251.png" /> ရွှေကူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_252.png" /> ရွှေတောင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_253.png" /> ရွှေပြည်သာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_254.png" /> ရွှေဘို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_255.png" /> ရွာငံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_256.png" /> ရသေ့တောင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_257.png" /> ရှားတော<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_258.png" /> ရေး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_259.png" /> ရေကြည်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_260.png" /> ရေစကြို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_261.png" /> ရေတာရှည်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_262.png" /> ရေနံချောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_263.png" /> ရေဖြူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_264.png" /> ရေဦး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_265.png" /> လက်ပံတန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_266.png" /> လင်းခေး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_267.png" /> လပွတ္တာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_268.png" /> လမ်းမတော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_269.png" /> လယ်ဝေး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_270.png" /> လွိုင်ကော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_271.png" /> လွိုင်လင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_272.png" /> လသာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_273.png" /> လဟယ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_274.png" /> လှည်းကူး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_275.png" /> လှိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_276.png" /> လှိုင်းဘွဲ့<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_277.png" /> လှိုင်သာယာ (အနောက်ပိုင်း)<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_278.png" /> လှိုင်သာယာ (အရှေ့ပိုင်း)<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_279.png" /> လားရှိုး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_280.png" /> လေးမျက်နှာ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_281.png" /> လေရှီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_282.png" /> လောက်ကိုင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_283.png" /> လောင်းလုံး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_284.png" /> လဲချား<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_285.png" /> ဝက်လက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_286.png" /> ဝန်းသို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_287.png" /> ဝမ်းတွင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_288.png" /> ဝါးခယ်မ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_289.png" /> ဝိုင်းမော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_290.png" /> ဝေါ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_291.png" /> သင်္ဃန်းကျွန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_292.png" /> သံတွဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_293.png" /> သံတောင်ကြီး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_294.png" /> သထုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_295.png" /> သနပ်ပင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_296.png" /> သန်လျင်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_297.png" /> သပိတ်ကျင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_298.png" /> သံဖြူဇရပ်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_299.png" /> သရက်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_300.png" /> သရက်ချောင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_301.png" /> သာကေတ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_302.png" /> သာစည်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_303.png" /> သာပေါင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_304.png" /> သာယာဝတီ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_305.png" /> သိန္နီ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_306.png" /> သီပေါ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_307.png" /> သုံးခွ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_308.png" /> သဲကုန်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_309.png" /> ဟင်္သာတ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_310.png" /> ဟားခါး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_311.png" /> ဟိုပန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_312.png" /> ဟိုပုံး<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_313.png" /> ဟုမ္မလင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_314.png" /> အင်ဂျန်းယန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_315.png" /> အင်းစိန်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_316.png" /> အင်းတော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_317.png" /> အင်္ဂပူ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_318.png" /> အမရပူရ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_319.png" /> အမ်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_320.png" /> အရာတော်<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_321.png" /> အလုံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_322.png" /> အိမ်မဲ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_323.png" /> အုတ်တွင်း<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_324.png" /> အုတ်ဖို<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_325.png" /> အောင်မြေသာစံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_326.png" /> အောင်လံ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_327.png" /> ဥတ္တရသီရိ<br />\
    <img src="styles/legend/mmr_TSP_adm3_250k_mimu_1_6_328.png" /> <br />' });
var format_mmr_shn_VT_adm4_250k_mimu_1_7 = new ol.format.GeoJSON();
var features_mmr_shn_VT_adm4_250k_mimu_1_7 = format_mmr_shn_VT_adm4_250k_mimu_1_7.readFeatures(json_mmr_shn_VT_adm4_250k_mimu_1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mmr_shn_VT_adm4_250k_mimu_1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mmr_shn_VT_adm4_250k_mimu_1_7.addFeatures(features_mmr_shn_VT_adm4_250k_mimu_1_7);
var lyr_mmr_shn_VT_adm4_250k_mimu_1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mmr_shn_VT_adm4_250k_mimu_1_7, 
                style: style_mmr_shn_VT_adm4_250k_mimu_1_7,
                popuplayertitle: 'mmr_shn_VT_adm4_250k_mimu_1',
                interactive: true,
                title: '<img src="styles/legend/mmr_shn_VT_adm4_250k_mimu_1_7.png" /> mmr_shn_VT_adm4_250k_mimu_1'
            });
var format_mmr_shn_VP_unodc_mimu_250k_1_8 = new ol.format.GeoJSON();
var features_mmr_shn_VP_unodc_mimu_250k_1_8 = format_mmr_shn_VP_unodc_mimu_250k_1_8.readFeatures(json_mmr_shn_VP_unodc_mimu_250k_1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mmr_shn_VP_unodc_mimu_250k_1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mmr_shn_VP_unodc_mimu_250k_1_8.addFeatures(features_mmr_shn_VP_unodc_mimu_250k_1_8);
cluster_mmr_shn_VP_unodc_mimu_250k_1_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_mmr_shn_VP_unodc_mimu_250k_1_8
});
var lyr_mmr_shn_VP_unodc_mimu_250k_1_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_mmr_shn_VP_unodc_mimu_250k_1_8, 
                style: style_mmr_shn_VP_unodc_mimu_250k_1_8,
                popuplayertitle: 'mmr_shn_VP_unodc_mimu_250k_1',
                interactive: true,
                title: '<img src="styles/legend/mmr_shn_VP_unodc_mimu_250k_1_8.png" /> mmr_shn_VP_unodc_mimu_250k_1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_mmr_Districts_250k_mimu_2.setVisible(true);lyr_mmr_rdsl_mimu_250k_3.setVisible(true);lyr_mmr_State_Region_250k_mimu_1_4.setVisible(true);lyr_mmr_Towns_mimu250k_5.setVisible(true);lyr_mmr_TSP_adm3_250k_mimu_1_6.setVisible(true);lyr_mmr_shn_VT_adm4_250k_mimu_1_7.setVisible(true);lyr_mmr_shn_VP_unodc_mimu_250k_1_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_mmr_Districts_250k_mimu_2,lyr_mmr_rdsl_mimu_250k_3,lyr_mmr_State_Region_250k_mimu_1_4,lyr_mmr_Towns_mimu250k_5,lyr_mmr_TSP_adm3_250k_mimu_1_6,lyr_mmr_shn_VT_adm4_250k_mimu_1_7,lyr_mmr_shn_VP_unodc_mimu_250k_1_8];
lyr_mmr_Districts_250k_mimu_2.set('fieldAliases', {'ST': 'ST', 'ST_PCODE': 'ST_PCODE', 'DT': 'DT', 'DT_PCODE': 'DT_PCODE', 'DT_MMR': 'DT_MMR', 'PCode_V': 'PCode_V', });
lyr_mmr_rdsl_mimu_250k_3.set('fieldAliases', {'Road_Type': 'Road_Type', 'Sur_Type': 'Sur_Type', 'Route': 'Route', 'Remark': 'Remark', });
lyr_mmr_State_Region_250k_mimu_1_4.set('fieldAliases', {'ST': 'ST', 'ST_PCODE': 'ST_PCODE', 'ST_RG': 'ST_RG', 'ST_MMR': 'ST_MMR', 'PCode_V': 'PCode_V', });
lyr_mmr_Towns_mimu250k_5.set('fieldAliases', {'SD_Pcode': 'SD_Pcode', 'State_Divi': 'State_Divi', 'D_Pcode': 'D_Pcode', 'District': 'District', 'TS_Pcode': 'TS_Pcode', 'Township': 'Township', 'Town_Pcode': 'Town_Pcode', 'Town': 'Town', 'Town_MMR4': 'Town_MMR4', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Level': 'Level', 'Source': 'Source', 'Remark': 'Remark', });
lyr_mmr_TSP_adm3_250k_mimu_1_6.set('fieldAliases', {'ST': 'ST', 'ST_PCODE': 'ST_PCODE', 'DT': 'DT', 'DT_PCODE': 'DT_PCODE', 'TS': 'TS', 'TS_PCODE': 'TS_PCODE', 'TS_MMR': 'TS_MMR', 'PCode_V': 'PCode_V', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_mmr_shn_VT_adm4_250k_mimu_1_7.set('fieldAliases', {'ST': 'ST', 'ST_PCODE': 'ST_PCODE', 'DT': 'DT', 'DT_PCODE': 'DT_PCODE', 'TS': 'TS', 'TS_PCODE': 'TS_PCODE', 'VT': 'VT', 'VT_PCODE': 'VT_PCODE', 'VT_MMR': 'VT_MMR', 'SELF_ADMIN': 'SELF_ADMIN', 'SUB_TS': 'SUB_TS', 'Remark': 'Remark', 'Pcode_V': 'Pcode_V', });
lyr_mmr_shn_VP_unodc_mimu_250k_1_8.set('fieldAliases', {'ST': 'ST', 'ST_PCODE': 'ST_PCODE', 'DT': 'DT', 'DT_PCODE': 'DT_PCODE', 'TS': 'TS', 'TS_PCODE': 'TS_PCODE', 'VT': 'VT', 'VT_PCODE': 'VT_PCODE', 'VILLAGE': 'VILLAGE', 'VLG_PCODE': 'VLG_PCODE', 'VLG_MMR': 'VLG_MMR', 'ALTVLG_ENG': 'ALTVLG_ENG', 'ALTVLG_MMR': 'ALTVLG_MMR', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'PCODE_V': 'PCODE_V', });
lyr_mmr_Districts_250k_mimu_2.set('fieldImages', {'ST': 'TextEdit', 'ST_PCODE': 'TextEdit', 'DT': 'TextEdit', 'DT_PCODE': 'TextEdit', 'DT_MMR': 'TextEdit', 'PCode_V': 'TextEdit', });
lyr_mmr_rdsl_mimu_250k_3.set('fieldImages', {'Road_Type': 'TextEdit', 'Sur_Type': 'TextEdit', 'Route': 'TextEdit', 'Remark': 'TextEdit', });
lyr_mmr_State_Region_250k_mimu_1_4.set('fieldImages', {'ST': 'TextEdit', 'ST_PCODE': 'TextEdit', 'ST_RG': 'TextEdit', 'ST_MMR': 'TextEdit', 'PCode_V': 'TextEdit', });
lyr_mmr_Towns_mimu250k_5.set('fieldImages', {'SD_Pcode': 'TextEdit', 'State_Divi': 'TextEdit', 'D_Pcode': 'TextEdit', 'District': 'TextEdit', 'TS_Pcode': 'TextEdit', 'Township': 'TextEdit', 'Town_Pcode': 'TextEdit', 'Town': 'TextEdit', 'Town_MMR4': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Level': 'TextEdit', 'Source': 'TextEdit', 'Remark': 'TextEdit', });
lyr_mmr_TSP_adm3_250k_mimu_1_6.set('fieldImages', {'ST': 'TextEdit', 'ST_PCODE': 'TextEdit', 'DT': 'TextEdit', 'DT_PCODE': 'TextEdit', 'TS': 'TextEdit', 'TS_PCODE': 'TextEdit', 'TS_MMR': 'TextEdit', 'PCode_V': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_mmr_shn_VT_adm4_250k_mimu_1_7.set('fieldImages', {'ST': 'TextEdit', 'ST_PCODE': 'TextEdit', 'DT': 'TextEdit', 'DT_PCODE': 'TextEdit', 'TS': 'TextEdit', 'TS_PCODE': 'TextEdit', 'VT': 'TextEdit', 'VT_PCODE': 'TextEdit', 'VT_MMR': 'TextEdit', 'SELF_ADMIN': 'TextEdit', 'SUB_TS': 'TextEdit', 'Remark': 'TextEdit', 'Pcode_V': 'TextEdit', });
lyr_mmr_shn_VP_unodc_mimu_250k_1_8.set('fieldImages', {'ST': 'TextEdit', 'ST_PCODE': 'TextEdit', 'DT': 'TextEdit', 'DT_PCODE': 'TextEdit', 'TS': 'TextEdit', 'TS_PCODE': 'TextEdit', 'VT': 'TextEdit', 'VT_PCODE': 'TextEdit', 'VILLAGE': 'TextEdit', 'VLG_PCODE': 'TextEdit', 'VLG_MMR': 'TextEdit', 'ALTVLG_ENG': 'TextEdit', 'ALTVLG_MMR': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'PCODE_V': 'TextEdit', });
lyr_mmr_Districts_250k_mimu_2.set('fieldLabels', {'ST': 'no label', 'ST_PCODE': 'no label', 'DT': 'no label', 'DT_PCODE': 'no label', 'DT_MMR': 'no label', 'PCode_V': 'no label', });
lyr_mmr_rdsl_mimu_250k_3.set('fieldLabels', {'Road_Type': 'no label', 'Sur_Type': 'no label', 'Route': 'no label', 'Remark': 'no label', });
lyr_mmr_State_Region_250k_mimu_1_4.set('fieldLabels', {'ST': 'no label', 'ST_PCODE': 'no label', 'ST_RG': 'no label', 'ST_MMR': 'no label', 'PCode_V': 'no label', });
lyr_mmr_Towns_mimu250k_5.set('fieldLabels', {'SD_Pcode': 'no label', 'State_Divi': 'no label', 'D_Pcode': 'no label', 'District': 'no label', 'TS_Pcode': 'no label', 'Township': 'no label', 'Town_Pcode': 'no label', 'Town': 'no label', 'Town_MMR4': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Level': 'no label', 'Source': 'no label', 'Remark': 'no label', });
lyr_mmr_TSP_adm3_250k_mimu_1_6.set('fieldLabels', {'ST': 'no label', 'ST_PCODE': 'no label', 'DT': 'no label', 'DT_PCODE': 'no label', 'TS': 'no label', 'TS_PCODE': 'no label', 'TS_MMR': 'no label', 'PCode_V': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_mmr_shn_VT_adm4_250k_mimu_1_7.set('fieldLabels', {'ST': 'no label', 'ST_PCODE': 'no label', 'DT': 'no label', 'DT_PCODE': 'no label', 'TS': 'no label', 'TS_PCODE': 'no label', 'VT': 'no label', 'VT_PCODE': 'no label', 'VT_MMR': 'no label', 'SELF_ADMIN': 'no label', 'SUB_TS': 'no label', 'Remark': 'no label', 'Pcode_V': 'no label', });
lyr_mmr_shn_VP_unodc_mimu_250k_1_8.set('fieldLabels', {'ST': 'no label', 'ST_PCODE': 'no label', 'DT': 'no label', 'DT_PCODE': 'no label', 'TS': 'no label', 'TS_PCODE': 'no label', 'VT': 'no label', 'VT_PCODE': 'no label', 'VILLAGE': 'no label', 'VLG_PCODE': 'no label', 'VLG_MMR': 'no label', 'ALTVLG_ENG': 'no label', 'ALTVLG_MMR': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'PCODE_V': 'no label', });
lyr_mmr_shn_VP_unodc_mimu_250k_1_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});