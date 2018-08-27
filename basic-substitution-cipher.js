var newMessage = '';

function rotateAlphabet(offset) {
  var lookupShifted = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if(offset < 0) {
    offset = Math.abs(offset);
    while (offset--) {
      var temp = lookupShifted.shift();
      lookupShifted.push(temp);
    }
  }else {
    while (offset--) {
      var temp = lookupShifted.pop();
      lookupShifted.unshift(temp);
    }
  }
  return lookupShifted;
}

$(document).ready(function() {

  $('.encrypt').click(function() {
    var offset = $('.offset').val();
    var message = $('.message').val();
    encryptMessage(message, offset);
  });
  
  $('.decrypt').click(function() {
    var offset = $('.offset').val();
    var message = $('.message').val();
    decryptMessage(message, offset);
  });
});

function encryptMessage(message,offset) {
  // begin the stream cipher
  newMessage = '';
  var lookup = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var offsetLookup = rotateAlphabet(offset);
  for(x=0; x < message.length; x++) {
    var tempLocation = lookup.indexOf(message[x]);
    if(tempLocation > -1) {
      newMessage += offsetLookup[lookup.indexOf(message[x])];
    }else if(message[x] = ' ') {
      newMessage += ' ';
    }
  }
  $('.result').html('');
  $('.result').html(newMessage);
}

function decryptMessage(message, offset) {
  newMessage = '';
  var lookup = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var offsetLookup = rotateAlphabet(offset);
  for(x=0; x < message.length; x++) {
    var tempLocation = offsetLookup.indexOf(message[x]);
    if(tempLocation > -1) {
      newMessage += lookup[tempLocation];
    }else if(message[x] = ' ') {
      newMessage += ' ';
    }
  }
  $('.result').html('');
  $('.result').html(newMessage);
}
