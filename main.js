$(document).ready(function(){
  $('#tab-list a[href="#home"]').tab('show');
  $("#tab-list a").click(function(){
    $(this).tab('show');
  });
});