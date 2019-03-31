$( document ).ready(function(){
    var date = new Date();
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('#copyright').html(date.getFullYear());
    
    /**
     * This function is to get the current age from element with id 'age'
     * and increment it to new age for ever september month.
     */
    function setNewAge() {
      var age = date.getFullYear() - 1995;
      if ((date.getMonth() >= 8) && (date.getDate() >= 8)){
        $('#age').html(age);
      } else {
        $('#age').html(--age);
      }
    }
    setNewAge();



})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});
