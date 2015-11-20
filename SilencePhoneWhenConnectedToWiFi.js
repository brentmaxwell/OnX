// Initializing variables 

var ssid = "SSID";

// End of variables initializing 

var storage = device.localStorage;

device.network.addListener("wifiOn", function (networkSignal)
{
    if(networkSignal.ssid === '"'+ssid+'"') {
        console.log('Connected to ' + networkSignal.ssid);
        storage.setItem('previousRingerMode',device.audio.ringerMode);
        storage.setItem('previousRingerVolumne',device.audio.ringerVolume);
        device.audio.ringerMode = "vibrate";
    }
});

device.network.addListener("wifiOff", function (networkSignal)
{
    var previousRingerMode = storage.getItem('previousRingerMode');
    if(previousRingerMode !== null){
        device.audio.ringerMode = previousRingerMode;    
    }
    
    var previousRingerVolumne = storage.getItem('previousRingerVolumne');
    if(previousRingerVolumne !== null){
        device.audio.ringerVolume = previousRingerVolumne;
    }
    
});
