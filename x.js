const ChromecastAPI = require('chromecast-api')

const client = new ChromecastAPI()

client.on('device', function (device) {
  var mediaURL = 'http://tvconquistalrv.duckdns.org:8080/hls/tvconquistalrv.m3u8';

  device.play(mediaURL, function (err) {
    if (!err) console.log('Playing in your chromecast')
  })
})