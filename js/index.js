var lastScroll = 0;
var curScroll =0 ;
var didScroll;

$(document).on('ready',function(){
  // google.maps.event.addDomListener(window, 'load', initialize);
  $("#appointment,#appointment2").click(function(){
    $("#form").show();
    $("#page").hide();
  });
  $("#submission").click(function(){a
    $("#form").hide();
    $("#page").show();
  });
  $("#logo,#service,#dir,#about,#service2,#dir2,#about2").click(function(){
    $("#form").hide();
    resetForm($("#form"));
    $("#page").show();
  });

  $(window).scroll(function(event){
    didScroll = true;
  });
  setInterval(function(){
    if(didScroll){
      scrollNavbar();
      didScroll = false;
    }
  },250);

});


function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected');
}

function scrollNavbar(){
  curScroll = $(this).scrollTop();
  if(curScroll > lastScroll && curScroll>50){
    $("#nav").fadeOut();
  }else if(curScroll<lastScroll){
    $("#nav").fadeIn();
  }

  lastScroll=curScroll;
}


/*old google map api*/
// function initialize() {
//   var myLatLng = {lat: 40.5153870, lng: -74.3785820};
//
//   var mapProp = new google.maps.Map(document.getElementById('googleMap'), {
//     center: myLatLng,
//     scrollwheel: true,
//     zoom: 18
//   });
//
//   var marker = new google.maps.Marker({
//     map: mapProp,
//     position: myLatLng,
//     title: 'Great Wall Massage'
//   });
// }
