var pucastats = {

    // Responsible for initial loading and setup
    setup: function () {
        if ( window.location.href.toLowerCase().indexOf('pucatrade.com') === -1 ) {
            alert('Hey!  This doesn\'t look like PucaTrade!');
            return this;
        }

        if ( window.location.href.toLowerCase().indexOf('pucatrade.com/trades/past/sent') === -1 ) {
            alert('Hey!  This isn\'t the History section!');
            return this;
        }

        alert('Things seem to be working!');
        return this;
    }
}.setup();
