$('#button1').click(function() {
  $('.cercle, .losange, .carre').each(function() {
  	$(this).addClass("active");
  });
});

$('#button2').click(function() {
  $('.cercle, .losange, .carre').each(function() {
  	$(this).removeClass("active");
  });
});
$(".cercle").click(function(){

    if ($(this).hasClass("active"))
    {
      $(this).removeClass("active");
    }
    else
    {
      $(this).addClass("active");
    }
  });



$('#carré1').click(function() {
  $('#carré1, #cercle11, #cercle12, #cercle13, #cercle14').each(function() {
  	$(this).toggleClass("active");
  });
});
$('#carré2').click(function() {
  $('#carré2, #cercle1, #cercle23, #cercle24, #cercle22').each(function() {
  	$(this).toggleClass("active");
  });
});
$('#carré3').click(function() {
  $('#carré3, #cercle3, #cercle31, #cercle32, #cercle44').each(function() {
  	$(this).toggleClass("active");
  });
});

$('#carré4').click(function() {
  $('#carré4, #cercle4, #cercle41, #cercle42, #cercle43').each(function() {
  	$(this).toggleClass("active");
  });
});
$('.losange').click(function() {
  $('#losange, #cercle2, #cercle21, #cercle33, #cercle42, #cercle32, #cercle12, #cercle22, #cercle34').each(function() {
  	$(this).toggleClass("active");
  });
});