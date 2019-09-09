var settings = {
    prompt: '> ',
    name: 'tilda',
    enabled: false,
    greetings: 'Quake like console',
    keypress: function(e) {
        if (e.which == 96) {
            return false;
        }
    }
};

$(function() {
    $('#terminal').terminal(function (command, term) {
        term.echo("handle" + command)
    }, settings);
});