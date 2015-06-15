// see: https://github.com/forairan/Agar.io-Protocol/blob/master/Protocol.md

var WebSocket = require('ws')
  , ws = new WebSocket('ws://167.114.174.63:1506');
ws.on('open', function() {
  console.log('onopen');

  ws.onmessage = function (message) {
    console.log(message.data)

    // $a(new DataView(toArrayBuffer(message.data)));
  }

  function P(a) {
    ws.send(a.buffer)
  }

  function O(a) {
    return new DataView(new ArrayBuffer(a))
  }

  var a;

  a = O(5);
  a.setUint8(0, 254);
  a.setUint32(1, 4, !0);

  ws.send(a);

  a = O(5);
  a.setUint8(0, 255);
  a.setUint32(1, 673720361, !0);

  ws.send(a);
});

function toArrayBuffer(buffer) {
  var ab = new ArrayBuffer(buffer.length);
  var view = new Uint8Array(ab);

  for (var i = 0; i < buffer.length; ++i) {
      view[i] = buffer[i];
  }

  return ab;
}