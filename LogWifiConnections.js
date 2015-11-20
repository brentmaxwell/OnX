var version = '0.1.2';
device.network.addListener('wifiOn',function(networkSignal){
    var ssid = networkSignal.ssid;
    var latitude = networkSignal.location.latitude;
    var longitude = networkSignal.location.longitude;
    var horizontalAccuracy = networkSignal.location.horizontalAccuracy;
    console.log('SSID: ' + ssid + "; Location: " + latitude + ", " + longitude + " (+/-" + horizontalAccuracy + ') (v' + version + ')');
});
