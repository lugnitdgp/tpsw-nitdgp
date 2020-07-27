$('#about_section').children().hide()
document.addEventListener('click', event => {
const elem = event.target
    if (elem.className == 'toggle') {
        $('.home').children().hide()
        const cont = elem.getAttribute("data-show")
        $('#about_section').children().hide()
        $('#' + cont).show()
    }
})
$('.home_btn').click(function(e){
    $('.home').children().show()
    $('#about_section').children().hide()
})
