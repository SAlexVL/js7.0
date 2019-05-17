$(document).ready(function() {
  //show modal
  function showModal(btn) {
    $(btn).on('click', function() {
      $('.modal').slideDown('1200');
      $('.overlay').fadeIn('1200');
    });
  }

  showModal('.main_btna');
  showModal('.main_btn');
  showModal('.list-item:eq(1)');

  //close modal
  function closeOverlay() {
    $('.close').on('click', function() {
      $('.modal').slideUp('1200');
      $('.overlay').fadeOut('1200');
    });
  }
  closeOverlay();
});