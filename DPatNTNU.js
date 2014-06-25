//fingerprint reader
var DEVICE1_INFO = {name:"fingerprint reader", device:{"vendorId": 1466, "productId": 10}};
//card reader
var DEVICE2_INFO = {name:"card reader", device:{"vendorId": 3238, "productId": 16}};
//mouse
var DEVICE3_INFO = {name:"mouse", device:{"vendorId": 4871, "productId": 865}};

var requestButton = document.getElementById("requestPermission");

requestButton.addEventListener('click', function() {
  customFindDevices(DEVICE1_INFO);
  customFindDevices(DEVICE2_INFO);
  customFindDevices(DEVICE3_INFO);
});

function customFindDevices(DEVICE_INFO) {
  chrome.usb.findDevices( DEVICE_INFO.device, 
    function(devices){
      if (!devices || !devices.length) {
        console.log(DEVICE_INFO.name +': device not found');
        return;
      } else {
        console.log('Found device: ' + devices[0].handle);
      }
    }
  );
}