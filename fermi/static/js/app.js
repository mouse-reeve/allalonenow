$('#main').click(function () {
    setRoom();
});

var roomstack = [];
var position = -1;

var setRoom = function () {
    var current = $('#room').attr('src');
    if (current) {
        roomstack.push(current);
    }
    room = Math.floor(Math.random() * rooms.length);
    $('#room').attr('src', 'static/images/rooms/full/' + rooms[room][0]);
    $('#quote').css('color', rooms[room][1]);

    // move arrow
    position += 1;
    $('#arrow').css('transform', 'rotate(' + position + 'deg)');
};

setRoom();
