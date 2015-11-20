var version = '0.1.1';
device.telephony.addListener('incomingCall', function (telephonySignal)
{
    if (!telephonySignal.phoneNumber || telephonySignal.phoneNumber === 'undefined') return;

    currentCaller = telephonySignal.phoneNumber;
    
    var contact = device.contacts.findByPhone(currentCaller);
    
    if(contact != null && contact.length > 0) return;
    
    console.log('Unknown Caller: ' + currentCaller + ' (v'+version+')');
    
    var notification = device.notifications.createNotification('Unknown Caller');
    notification.content = currentCaller;
    notification.on('click', function() {
        device.browser.launch('https://www.google.com/search?q=' + currentCaller);
    });
    notification.show();
});
