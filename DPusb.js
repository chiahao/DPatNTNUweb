
function onDeviceFound(devices) {
  this.devices=devices;
  if (devices) {
    if (devices.length > 0) {
      console.log("Device(s) found: "+devices.length);
    } else {
      console.log("Device could not be found");
    }
  } else {
    console.log("Permission denied.");
  }
}

chrome.usb.getDevices({"vendorId": 05BA, "productId": 000A}, onDeviceFound);

function clickTest(){
  console.log("test");
}



function printTest(){
    console.log("Ha Ha Ha");    
}