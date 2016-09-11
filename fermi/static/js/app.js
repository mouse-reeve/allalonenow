$('.window-overlay').click(function () {
    setRoom(1);
});

$('audio').bind('ended', function () {
    playAudio();
});

$('html').keydown(function(e){
    if (e.which == 39) {
        // right/down arrow keys
        setRoom(1);
    } else if (e.which == 37) {
        setRoom(-1);
    }
});

$('.volume').click(function () {
    toggleSound();
});

var position = -1;
var room = Math.floor(Math.random() * (rooms.length - 1));
var muted = true;
var track = 1;

var setRoom = function (back) {
    // delete zombies
    $('.zombie').remove();
    room += back;

    if (back > 0 && room > rooms.length - 1) {
        // don't go over the max
        room = 0;
    } else if (back < 0 && room < 0) {
        room = rooms.length - 1;
    }

    $('#room').clone().attr('src', 'static/images/rooms/full/' + rooms[room][0]).attr('id', 'newRoom').hide().css('opacity', 1).appendTo('.window');
    $('#room').attr('id', 'oldRoom');
    $('#newRoom').fadeIn(function() {
        $('#oldRoom').remove();
    });
    $('#oldRoom').addClass('zombie');
    $('#newRoom').attr('id', 'room');

    var rgb = rooms[room][1];
    var color = 'rgb(' + rgb.join(', ') + ')';

    $('#quote').css('color', color);

    track = getTrack(rgb[0], rgb[1], rgb[2]);

    // move arrow
    position += back;
    $('#arrow').css('transform', 'rotate(' + position + 'deg)');
};

var getTrack = function (r, g, b) {
    var luminance = 0.299*r + 0.587*g + 0.114*b;
    // bins are the luminance values sorted and divided into 12 parts
    var bins = [
        0, //actual min: 30.388,
        96,
        109,
        118,
        125,
        131,
        137,
        144,
        150,
        157,
        164,
        178,
        10000 //actual max: 4147.557
    ];
    for (var i=0; i<bins.length-1; i++) {
        if (luminance > bins[i] && luminance <= bins[i+1]) {
            return i + 1;
        }
    }
    return 1;
};


var toggleSound = function () {
    if (muted) {
        $('.volume i').attr('class', 'icon-volume-high');
        playAudio();
    } else {
        $('.volume i').attr('class', 'icon-volume-mute');
        $('.playing').trigger('pause');
        $('.playing').removeClass('playing');
    }
    muted = !muted;
};

var playAudio = function () {
    var id = '#audio' + track;
    var current = $('.playing').attr('id')
    if (!current) {
        // start audio if nothing is playing
        $(id).trigger('play');
        $(id).addClass('playing');
    } else if (current != id){
        // switch tracks
        $('.playing').trigger('pause');
        $(id).trigger('play');

        $('.playing').removeClass('pause');
        $($('audio')[1]).addClass('playing');
    } else {
        // continue looping
        $(id).trigger('play');
    }
};

// load first image
setRoom(1);
