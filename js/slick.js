$(function(){
    var $slider = $('#continuous-slider--list');
    var sizeImage = 200;
    var items = $slider.children().length;
    var itemswidth = (items * sizeImage); // 140px width for each client item 
    $slider.css('width',itemswidth);
    
    var rotating = true;
    var sliderspeed = 0;
    var seeitems = setInterval(rotateSlider, sliderspeed);
    
    $(document).on({
      mouseenter: function(){
        rotating = false; // turn off rotation when hovering
      },
      mouseleave: function(){
        rotating = true;
      }
    }, '#continuous-slider');
    
    function rotateSlider() {
      if(rotating != false) {
        var $first = $('#continuous-slider--list li:first');
        $first.animate({ 'margin-left': '-'+sizeImage+'px' }, 3000, "linear", function() {
          $first.remove().css({ 'margin-left': '0px' });
          $('#continuous-slider--list li:last').after($first);
        });
      }
    }
  });
  
 