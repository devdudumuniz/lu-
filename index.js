//função ready geral todos
$(document).ready(function() {
//menu hamburger
 $("#cont--menuh").click(function() {
        $("#lista").toggle(400);
});
$("#fechar-hamb").click(function() {
        $("#lista").toggle(400);
});

//slide auto container 1
(function(){
$("#slide-cont1 > div:gt(0)").hide();
setInterval(function() {
$('#slide-cont1 > div:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#slide-cont1');
}, 5000);
}());

//header fixo com scroll
(function(){
$(window).on("scroll" ,function(){
  if($(this).scrollTop() >= 650){
    function subir(){
      $('header').removeClass('header-scroll');
    }
    subir()
  }
  if($(this).scrollTop() <= 650){
    $('header').addClass('header-scroll');
  }
});
}())

//cont2-tipos de acompanhamentos
$('#tipos-acomp').slick({
  autoplay: true,
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 1,
  speed: 2000,
  stop:3000,
  responsive: [
  {
    breakpoint: 1000,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 1
    }
  },
  {
    breakpoint: 700,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 1
    }
  }
]
});
(function(){

//fotos e videos
$('#mais--fotos').click(function() {
        $("#line2, #line3").toggle('slow');
        alert()
});

$('#mais--videos').click(function() {
        $("#line2--videos").toggle('slow');
});

}())

//slide do feed back
$('.carrossel-feedback').slick({
    autoplay: true,
    centerMode: true,
    arrows: false,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 2000,
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
//slide album de fotos dentro do feedback
$('.carrossel-album').slick({
    autoplay: true,
    centerMode: true,
    arrows: false,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 2000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});
//feedbacks
//abrir e fechar resultados do feedback 1

$("#abrir-resultado1").click(function(){
  $("#album-resultado1").toggle('slow');
});
$("#fechar-album-feedback1").click( function(){
  $("#album-resultado1").toggle(400);
});


(function(){
//abrir e fechar resultados do feedback 2
$("#abrir-resultado2").on('click', function() {
  $("#album-resultado2").toggle(400);
});
}());

(function(){
$("#fechar-album-feedback2").on('click', function() {
  $("#album-resultado2").toggle(400);
});
}());

(function(){
//abrir e fechar resultados do feedback 3
$("#abrir-resultado3").on('click', function() {
  $("#album-resultado3").toggle(400);
  });
}());

(function(){
$("#fechar-album-feedback3").on('click', function() {
  $("#album-resultado3").toggle(400);
  });
}());

//abrir e fechar resultados do feedback 4
(function(){
$("#abrir-resultado4").on('click',function() {
  $("#album-resultado4").toggle(400);
});
}());

(function(){
$("#fechar-album-feedback4").on('click',function() {
  $("#album-resultado4").toggle(400);
});
}());

//função para botão quero esse
$('#plano1C').hover(function(){
            $('#quero1, #iconeMaromba1').css({
              'color' : '#fff', 
              'background-color' : 'var(--cor-principal)'
            })
          },
          function(){
            $('#quero1, #iconeMaromba1').css({
              'color' : '',
             'background-color' : '',
              'border' : ''
            })
});
//plano2
$('#plano2C').hover(function(){
            $('#quero2, #iconeMaromba2').css({
              'color' : '#fff', 'background-color' : 'var(--cor-principal)'
            })
          },
          function(){
            $('#quero2, #iconeMaromba2').css({
              'color' : '', 'background-color' : '', 'border' : ''
            })
});
//plano3
$('#plano3C').hover(function(){
            $('#quero3, #iconeMaromba3').css({
              'color' : '#fff', 'background-color' : 'var(--cor-principal)'
            })
          },
          function(){
            $('#quero3, #iconeMaromba3').css({
              'color' : '', 'background-color' : '', 'border' : ''
            })
});
//plano4
$('#plano4C').hover(function(){
            $('#quero4, #iconeMaromba4').css({
              'color' : '#fff', 'background-color' : 'var(--cor-principal)'
            })
          },
          function(){
            $('#quero4, #iconeMaromba4').css({
              'color' : '', 'background-color' : '', 'border' : ''
            })
});
//carrossel planos
  //slide dos planos
  $('.cont--planos-1').slick({
    autoplay: true,
    arrows: false,
    centerMode: true,
    cssEase: 'linear',
    centerPadding: '10px',
    slidesToShow: 2,
    speed: 3000,
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        rtl: false,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
//container 6, dúvidas frequentes
//estilo do icone
 //duvida 1
 $('#duvida1').hover(function(){
  $('#icone1D').css({
    'color' : 'var(--cor-secundaria)'
  })
},
function(){
  $('#icone1D').css({
    'color' : '', 'background-color' : '', 'border' : ''
  })
});
//duvida 2
$('#duvida2').hover(function(){
  $('#icone2D').css({
    'color' : 'var(--cor-secundaria)'
  })
},
  function (){
    $('#icone2D').css({
      'color' : ''
    })
  }
)
//duvida 3
$('#duvida3').hover(function(){
    $('#icone3D').css({
      'color' : 'var(--cor-secundaria)'
    })
  },
    function (){
      $('#icone3D').css({
        'color' : ''
      })
    }
  )
//duvida 4
$('#duvida4').hover(function(){
      $('#icone4D').css({
        'color' : 'var(--cor-secundaria)'
      })
    },
      function (){
        $('#icone4D').css({
          'color' : ''
        })
      }
    )
//duvida 5
$('#duvida5').hover(function(){
  $('#icone5D').css({
    'color' : 'var(--cor-secundaria)'
  })
},
  function (){
    $('#icone5D').css({
      'color' : ''
    })
  }
)
//duvidas frequentes
//duvida 1
$("#questao1").click(function() {
  $("#resposta1").toggle(400);
});
//duvida 2
$("#questao2").click(function() {
  $("#resposta2").toggle(400);
});
//duvida 3
$("#questao3").click(function() {
  $("#resposta3").toggle(400);
});
//duvida 4
$("#questao4").click(function() {
      $("#resposta4").toggle(400);
});
//duvida 5
  $("#questao5").click(function() {
      $("#resposta5").toggle(400);
  });
//botão voltar ao topo
$(".btn-top").hide();
$(window).scroll(function(){
     if($(this).scrollTop()>500){
         $(".btn-top").fadeIn(80);
     }
     if($(this).scrollTop()<60){
         $(".btn-top").fadeOut(80);
     }
})
  $(".btn-top").click(function(){
       $("html,body").animate({scrollTop:0},1900);
  })
  $(function(){
    $("a[href^='#']").click(function(event){
    event.preventDefault();
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"vh"},1900);
    return false;
    });
    });

  });
