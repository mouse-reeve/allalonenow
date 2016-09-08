$('.window-overlay').click(function () {
    setRoom();
});

$('html').keydown(function(e){
    if (e.which == 39) {
        // right/down arrow keys
        setRoom();
    } else if (e.which == 37) {
        backRoom();
    }
});

$('.volume').click(function () {
    toggleSound();
});

var position = -1;
var room = Math.floor(Math.random() * (rooms.length - 1));
var muted = true;

var setRoom = function () {
    // delete zombies
    $('.zombie').remove();
    room++;
    // ready the next photo
    if (room > rooms.length - 1) {
        room = 0;
    }

    $('#room').clone().attr('src', 'static/images/rooms/full/' + rooms[room][0]).attr('id', 'newRoom').hide().css('opacity', 1).appendTo('.window');
    $('#room').attr('id', 'oldRoom');
    $('#newRoom').fadeIn(250);
    $('#oldRoom').fadeOut(250, function () {
        $('#oldRoom').remove();
    });
    $('#oldRoom').addClass('zombie');
    $('#newRoom').attr('id', 'room');
    $('#quote').css('color', rooms[room][1]);

    // move arrow
    position += 1;
    $('#arrow').css('transform', 'rotate(' + position + 'deg)');
};

var backRoom = function () {
    // ready the next photo
    room--;
    if (room < 0) {
        room = rooms.length - 1;
    }

    $('#room').attr('src', 'static/images/rooms/full/' + rooms[room][0]);
    $('#quote').css('color', rooms[room][1]);

    // move arrow
    position -= 1;
    $('#arrow').css('transform', 'rotate(' + position + 'deg)');
};

var toggleSound = function () {
    if (muted) {
        $('.volume i').attr('class', 'icon-volume-high');
    } else {
        $('.volume i').attr('class', 'icon-volume-mute');
    }
    muted = !muted;
};

// load first image
setRoom();
