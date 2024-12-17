$(document).ready(function() {
    $('#btn-css').click(function() {
        $('#box').css('background-color', '#325dfa');
    });

    $('#btn-height').click(function() {
        var height = $('#box').height();
        $('#output').text('Height: ' + height);
    });

    $('#btn-innerHeight').click(function() {
        var innerHeight = $('#box').innerHeight();
        $('#output').text('Inner Height: ' + innerHeight);
    });

    $('#btn-innerWidth').click(function() {
        var innerWidth = $('#box').innerWidth();
        $('#output').text('Inner Width: ' + innerWidth);
    });

    $('#btn-offset').click(function() {
        var offset = $('#box').offset({top: 200, left : 300}); // both get and set
        // $('#output').text('Offset - Top: ' + offset.top + ', Left: ' + offset.left);
    });

    $('#btn-outerHeight').click(function() {
        var outerHeight = $('#box').outerHeight();
        $('#output').text('Outer Height: ' + outerHeight);
    });

    $('#btn-outerWidth').click(function() {
        var outerWidth = $('#box').outerWidth();
        $('#output').text('Outer Width: ' + outerWidth);
    });

    $('#btn-position').click(function() {
        var position = $('#box').position();
        $('#output').text('Position - Top: ' + position.top + ', Left: ' + position.left);
    });

    $('#btn-scrollLeft').click(function() {
        var scrollLeft = $(window).scrollLeft();
        $('#output').text('Scroll Left: ' + scrollLeft);
    });

    $('#btn-scrollTop').click(function() {
        var scrollTop = $(window).scrollTop();
        $('#output').text('Scroll Top: ' + scrollTop);
    });

    $('#btn-width').click(function() {
        var width = $('#box').width();
        $('#output').text('Width: ' + width);
    });
});