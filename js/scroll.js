$(document).ready(function(){
    $('#content').pushpin({
      top: $('#content').offset().top
    });
    $('.scrollspy').scrollSpy({
      scrollOfffset: 0
    });
  });