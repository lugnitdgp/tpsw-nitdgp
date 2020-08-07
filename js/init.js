(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); 

  $('.carousel').carousel({
    fullWidth: true,
    indicators: true,
});
autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
     

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });


    // Or with jQuery
$('#dropdowner').dropdown({
  hover: true, 
  constrainWidth: false ,
  inDuration: 300,
  outDuration: 225,
  coverTrigger: false, // Displays dropdown below the button
   alignment: 'left' // Displays dropdown with edge aligned to the left of button
});;
})(jQuery); // end of jQuery name space

$('#dropdowner1').dropdown({
  hover: true, 
  constrainWidth: false ,
  inDuration: 300,
  outDuration: 225,
  coverTrigger: false, // Displays dropdown below the button
   alignment: 'left' // Displays dropdown with edge aligned to the left of button
});;(jQuery); // end of jQuery name space
$('#dropdowner2').dropdown({
  inDuration: 300,
  outDuration: 225,
  constrain_width: false, // Does not change width of dropdown to that of the activator
  hover: true, // Activate on hover
  gutter: 0, // Spacing from edge
  coverTrigger: false, // Displays dropdown below the button
  alignment: 'left' // Displays dropdown with edge aligned to the left of button
});;(jQuery); // end of jQuery name space
$('#dropdowner4').dropdown({
  hover: true, 
  constrainWidth: false ,
  inDuration: 300,
  outDuration: 225,
  coverTrigger: false, // Displays dropdown below the button
   alignment: 'left' // Displays dropdown with edge aligned to the left of button
});;(jQuery); // end of jQuery name space

$('#dropdowner3').dropdown({
   hover: true, 
   constrainWidth: false ,
   inDuration: 300,
   outDuration: 225,
   coverTrigger: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
   });

   $(document).ready(function(){
    $('.tabs').tabs();
  });


  (function($){
    $(function(){
  
      $('.sidenav').sidenav();
  
    }); // end of document ready
  
  
  
    $(document).ready(function(){
      $('.slider').slider({
        fullWidth: true,
       indicators: false,
      });
    });
  
  
  })(jQuery); // end of jQuery name space
  
