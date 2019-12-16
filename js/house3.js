$(document).ready(function() {
    $('.overlay').mouseout(function() {
    $('#testvideo').get(0).currentTime = 0;
    });
});
