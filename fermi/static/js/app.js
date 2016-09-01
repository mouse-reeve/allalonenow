$('#main').click(function () {
    setRoom();
});

var setRoom = function () {
    room = Math.floor(Math.random() * rooms.length);
    $('#room').attr('src', 'static/images/rooms/full/' + rooms[room]);
};

setRoom();
