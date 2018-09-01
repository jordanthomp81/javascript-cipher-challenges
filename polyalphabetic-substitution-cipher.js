var newMessage = '';

function rotateAlphabet(offset) {
  var lookupShifted = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if(offset > 0) {
    while (offset--) {
      var temp = lookupShifted.shift();
      lookupShifted.push(temp);
    }
  }else {
    offset = Math.abs(offset);
    while (offset--) {
      var temp = lookupShifted.pop();
      lookupShifted.unshift(temp);
    }
  }
  return lookupShifted;
}

$(document).ready(function() {

  $('.encrypt').click(function() {
    var key = $('.key').val();
    var message = $('.message').val();
    encryptMessage(message, key);
  });
  
  $('.decrypt').click(function() {
    var key = $('.key').val();
    var message = $('.message').val();
    decryptMessage(message, key);
  });
});

function encryptMessage(message, key) {
  // begin the stream cipher
  newMessage = '';
  for (var p = 0;p < key.length; p++) {
    if(newMessage == '') {
      loopMessage(message, key, p);
    }else {
      loopMessage(newMessage, key, p);
    }
  }
  
  $('.result').html('');
  $('.result').html(newMessage);
}

function loopMessage(message, key, p) {
  var lookup = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var offset = lookup.indexOf(key[p]);
  alert(offset);
  var offsetLookup = rotateAlphabet(offset);
  newMessage = '';
  for(x=0; x < message.length; x++) {
    var tempLocation = lookup.indexOf(message[x]);
    if(tempLocation > -1) {
      newMessage += offsetLookup[tempLocation];
    }else if(message[x] = ' ') {
      newMessage += ' ';
    }
  }
  return newMessage;
}

function decryptMessage(message, key) {
  newMessage = '';
  for (var p = 0;p < key.length; p++) {
    debugger;
    if(newMessage == '') {
      loopMessage(message, key, p);
    }else {
      loopMessage(newMessage, key, p);
    }
  }
  
  $('.result').html('');
  $('.result').html(newMessage);
}
