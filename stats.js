
document.clicks = 0;            
$('body').on('click', function(event){
  document.clicks++
});

document.totalDistance = 0;
var lastSeenAt = {x: null, y: null};

$(document).mousemove(function(event) {
    if(lastSeenAt.x) {
        document.totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - event.clientY, 2) + Math.pow(lastSeenAt.x - event.clientX, 2));
    }
    lastSeenAt.x = event.clientX;
    lastSeenAt.y = event.clientY;
});

document.stats = function(){
    console.log(document.clicks);
    console.log(document.totalDistance);
};