$('#main').click(function () {
    setRoom();
});

var position = -1;

var room = Math.floor(Math.random() * (rooms.length - 1));

var setRoom = function () {
    $('#room').attr('src', 'static/images/rooms/full/' + rooms[room][0]);
    $('#quote').css('color', rooms[room][1]);

    // move arrow
    position += 1;
    $('#arrow').css('transform', 'rotate(' + position + 'deg)');

    // ready the next photo
    room++;
    if (room > rooms.length - 1) {
        room = 0;
    }
};

setRoom();
