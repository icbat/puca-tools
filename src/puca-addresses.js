var module_addresses = {
  init: function(){
    var rows = $('tr:has(.btn-primary)');
    // Slice to remove the table header row
    var older_rows = $('tr:not(.btn-primary):not(th)').slice(1);

    this.addAddressesToScreen(rows, "packages to send");
    this.addAddressesToScreen(older_rows, "all packages including sent");
  },

  addAddressesToScreen: function (rows, message) {
    var messages = [];
    for (i=0; i < rows.size(); i++) {
        var username = $('.trader', rows[i])[0].childNodes[0].nodeValue.trim();
        var address = $('.address_text', rows[i]).html();
        messages.push(this.buildMessage(address, username));
    }

    messages = this.removeDuplicates(messages);
    this.addToDisplay(messages, message);
  },

  buildMessage: function (address, username) {
    var lineBreakCount = (address.match(/<br>/g) || []).length;
    if (lineBreakCount < 4) {
        address = this.addBlankAddressLine2(address);
    }
    var output = address.replace(/<br>/g, '|');
    if (!!username) {
      output += "|" + username;
    }
    return output;
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

  addToDisplay: function (csv, message) {
      var dumpingGround = $('.headerbar');
      dumpingGround.before("<div><h1>Found " + csv.length + " " + message + " </h1></div>");
      dumpingGround.before("<div>Copy this to a new file, save as CSV, and use the pipe character ('|') as the column delimiter.</div>");
      var output = "<div>";

      for (i=0; i < csv.length; i++) {
          output += csv[i];
          output += "<br/>";
      }

      output += "</div>";
      dumpingGround.before(csv);
  }
};
