$(document).on('click', 'a', function(event){
    //This function looks weird I know. The 'SmoothScroll' is basically just a 
    // unique identifier, any anchor tags with that in their ID will smoothscroll instead of what
    //usually happens. This solution was not elegant but alas, I am lazy.
    if (this.toString().indexOf('#SmoothScroll') > -1){
        event.preventDefault();
        $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 80
    }, 500);
} else {
    //If the anchor tag doesnt have the tag in it, dont smoothscroll it.
        return true;
    }
});