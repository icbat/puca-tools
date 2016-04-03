var module_addresses = {
  init: function(){
    var addresses = $('tr:has(.btn-primary) .address_text');
    var older_addresses = $('tr:not(.btn-primary) .address_text');

    this.addFromAddresses(addresses, "packages to send");
    this.addFromAddresses(older_addresses, "all packages including sent");
  },

  addFromAddresses: function (addresses, message) {
    var messages = this.buildMessages(addresses);
    messages = this.removeDuplicates(messages);
    this.addToDisplay(messages, message);
  },

  buildMessages: function (addresses) {
      var messages = [];
      for (i=0; i < addresses.size(); i++) {
          var address = $(addresses[i]).html();
          console.log(addresses[i], address);
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

  addToDisplay: function (messages, message) {
      var dumpingGround = $('.headerbar');
      console.log('adding messages to element', dumpingGround);
      dumpingGround.before("<div><h1>Found " + messages.length + " " + message + " </h1></div>");
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

var module_history = {

    // Responsible for initial loading and setup
    setup: function () {
        if ( window.location.href.toLowerCase().indexOf('pucatrade.com') === -1 ) {
            alert('Hey!  This doesn\'t look like PucaTrade!');
            return this;
        }

        if ( window.location.href.toLowerCase().indexOf('pucatrade.com/trades/past') === -1 ) {
            alert('Hey!  This isn\'t the History section!');
            return this;
        }

        alert(JSON.stringify($('div.explain-text')));
        return this;
    }
};

// The wiring together and turning off of the pieces.

module_addresses.init();
module_history.setup();
