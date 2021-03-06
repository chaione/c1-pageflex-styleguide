// JAVASCRIPT CUSTOM

//toggle plus,minus icons for sidebar accordion headers
$('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
})
.on('hidden.bs.collapse', function(){
    $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});
//toggle class for special image links - this is a placeholder,need better solution
$('.primary-links').hover(function() {
$('.primary-links1>h3>span').toggleClass('hover-effect')
});
$('.primary-links2').hover(function() {
$('.primary-links2>h3>span').toggleClass('hover-effect')
});

//display popover when notifications icon clicked
$(function () {
    $('[data-toggle="popover"]').popover()
});

//load json data and parse for live search functionality
$(window).load(function(){
$('#search-sidebar').keyup(function(){
    var searchField = $('#search-sidebar').val();
    var regex = new RegExp(searchField, "i");
    var output = '<div class="row">';
    var count = 1;
    $.getJSON('data.json', function(data) {
        $.each(data, function(key, val){
        if ((val.name.search(regex) != -1) || (val.location.search(regex) != -1)) {
            output += '<a href=""><h5>' + val.name + '</h5></a>';
            if(count%8 == 0){
            output += '</div><div class="row">'
            }
            count++;
        }
        });
        output += '</div>';
        $('#results').html(output);
    });
    if (searchField == "") {

        $("#results").css("display", "none");
        $(".search").css("padding-bottom",7);
    }
    else {
        $("#results").css("display", "block");
        $(".search").css("padding-bottom",0);
    }
});
});

$(document).ready(function(){
$('.product-slider').slick({

    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="glyphicon glyphicon-chevron-left"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="glyphicon glyphicon-chevron-right"></i></button>',
    autoplay: false,
    infinite:true,
    //slide:$('.slide'),
    variableWidth:true,
    slidesToShow: 3,
    slidesToScroll:3,
    slidesPerRow: 3,
    centerMode: false,
    centerPadding: '50px',
    appendArrows: $('.pager'),
    speed:200,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
        }
    },
    {
        breakpoint: 992,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1
        }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
    },
    {
        breakpoint: 414,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    },
    {
        breakpoint: 375,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
})
})
$(".selectpicker").on('changed.bs.select', function (e, clickedIndex, newValue, oldValue) {
  var val = e.target[clickedIndex].text;
  if (newValue == true) {
    var htm = '<li id="items-selected-' + clickedIndex + '"><label class="alert alert-warning alert-dismissible fade in" data-id="' + val + '" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>' + val + '</strong></label></li>';
    $('.selectpicker-items-selected').append(htm);
    $('.selectpicker-items-selected').selectpicker('render');
  } else {
    $('#items-selected-' + clickedIndex).remove();
  }
});

$('.selectpicker-items-selected').on('close.bs.alert', 'label', function () {
  var val = $(this).data('id');
  var items = $(".selectpicker").selectpicker('val');
  $(".selectpicker").selectpicker('val', items.filter(function (e) {
    return e != val;
  }));
  $(this).parent().remove();
});

$(document).ready(function() {
    $(".panel-1").addClass("panel-active");
    

  
  $('.panel-group').on('click', '.panel-inactive', function(e) {
   if( $(this).hasClass( "panel-active" )) {
           e.preventDefault();
       }
       else {
           $(this).removeClass('panel-inactive');
            $('.panel-active')
                .removeClass('panel-active')
                .addClass('panel-inactive');
            $(this).addClass('panel-active');
       }
    })
});