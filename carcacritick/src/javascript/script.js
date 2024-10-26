$(document).ready(function() {
  $('#mobile_btn').on('click', () => {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x fa-bars');
  });
});