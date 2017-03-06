$(document).on('click', 'a', function(event){
    if (this.toString().indexOf('#') > -1){
        event.preventDefault();
    }
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});