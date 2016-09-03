$('#main').click(function () {
    setRoom();
});

var roomstack = [];

var setRoom = function () {
    var current = $('#room').attr('src');
    if (current) {
        roomstack.push(current);
    }
    room = Math.floor(Math.random() * rooms.length);
    $('#room').attr('src', 'static/images/rooms/full/' + rooms[room]);
};

setRoom();
