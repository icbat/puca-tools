var module_addresses = {
  init: function(){
    var addresses = $('tr:has(.btn-primary) .address_text');

    var messages = this.buildMessages(addresses);
    messages = this.removeDuplicates(messages);
    console.log('found', messages.length, 'people to send to');
    this.addToDisplay(messages);
  },

  buildMessages: function (addresses) {
      var messages = [];
      for (i=0; i < addresses.size(); i++) {
          var address = $(addresses[i]).html();
          address = this.normalizeAddress(address);
          var message = address.replace(/<br>/g, '|');
          messages.push(message);
      }
      return messages;
  },

  normalizeAddress: function (address) {
      var lineBreakCount = (address.match(/<br>/g) || []).length;
      if (lineBreakCount < 4) {
          address = this.addBlankAddressLine2(address);
      }
      return address;
  },

  addBlankAddressLine2: function (text) {
      var delimiter = '<br>';
      tokens = text.split(delimiter);
      tokens.splice(2, 0, '');
      return tokens.join(delimiter);
  },

  removeDuplicates: function (array) {
      return array.filter(function(item, index, array){
          return index == array.indexOf(item);
      });
  },

  addToDisplay: function (messages) {
      var dumpingGround = $('.headerbar');
      console.log('adding messages to element', dumpingGround);
      dumpingGround.before("<div><h1>Found " + messages.length + " unique packages</h1></div>");
      dumpingGround.before("<div>Copy this to a new file, save as CSV, and use the pipe character ('|') as the column delimiter.</div>");
      var csv = "<div>";

      for (i=0; i < messages.length; i++) {
          csv += messages[i];
          csv += "<br/>";
      }

      csv += "</div>";
      dumpingGround.before(csv);
  }
};

module_addresses.init();
