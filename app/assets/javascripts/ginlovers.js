//= require rails-ujs
//= require activestorage

//= require jquery
//= require jquery_ujs

//= require_tree

//= require 'greensock/jquery.gsap.js'



$(function() {
  $("#menu").click(function() {
    $('.new_menu').addClass('new_menu-active');
  });

  $(".new_menu").click(function() {
    $('.new_menu').removeClass('new_menu-active');
  });


  $("#circle").hover(function() {


    $("#play_button").show(); //Show tooltip
  }, function() {
    $("#play_button").hide(); //Hide tooltip
  })

  $("#video1").click(function() {
    $('.transform').toggleClass('transform-active');
    $('.hide').toggleClass('hide-active');
    $('.hidden').toggleClass('not-hidden');
    setTimeout(function() {
      $('#box').html('<iframe class="grid-video grid-video--hide" src="https://www.youtube.com/embed/g3Ed4SXiqzs?rel=0&autoplay=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    }, 1000);

    setTimeout(function() {
      $('.grid-video').removeClass('grid-video--hide');
    }, 1000);

  });

  $(".junipertext").click(function() {
    $('.junipertext').addClass('text-active');
    $('.juniperimage').addClass('image-active');

    $('.cinnamonimage').removeClass('image-active');
      $('.cinnamontext').removeClass('text-active');

      $('.corianderimage').removeClass('image-active');
        $('.coriandertext').removeClass('text-active');

        $('.angelicaimage').removeClass('image-active');
          $('.angelicatext').removeClass('text-active');

          $('.lemonimage').removeClass('image-active');
            $('.lemontext').removeClass('text-active');

            $('.orrisimage').removeClass('image-active');
              $('.orristext').removeClass('text-active');

              $('.cardamomimage').removeClass('image-active');
                $('.cardamomtext').removeClass('text-active');

                $('.licoriceimage').removeClass('image-active');
                  $('.licoricetext').removeClass('text-active');

                  $('.cassaiimage').removeClass('image-active');
                    $('.cassaitext').removeClass('text-active');

                    $('.orangeimage').removeClass('image-active');
                      $('.orangetext').removeClass('text-active');
  });

  $(".cinnamontext").click(function() {
    $('.cinnamontext').addClass('text-active');
    $('.cinnamonimage').addClass('image-active');
    $('.juniperimage').removeClass('image-active');
      $('.junipertext').removeClass('text-active');
      $('.corianderimage').removeClass('image-active');
        $('.coriandertext').removeClass('text-active');

        $('.angelicaimage').removeClass('image-active');
          $('.angelicatext').removeClass('text-active');

          $('.lemonimage').removeClass('image-active');
            $('.lemontext').removeClass('text-active');

            $('.orrisimage').removeClass('image-active');
              $('.orristext').removeClass('text-active');

              $('.cardamomimage').removeClass('image-active');
                $('.cardamomtext').removeClass('text-active');

                $('.licoriceimage').removeClass('image-active');
                  $('.licoricetext').removeClass('text-active');

                  $('.cassaiimage').removeClass('image-active');
                    $('.cassaitext').removeClass('text-active');

                    $('.orangeimage').removeClass('image-active');
                      $('.orangetext').removeClass('text-active');
  });

  $(".coriandertext").click(function() {
    $('.coriandertext').addClass('text-active');
    $('.corianderimage').addClass('image-active');
    $('.juniperimage').removeClass('image-active');
      $('.junipertext').removeClass('text-active');
      $('.cinnamonimage').removeClass('image-active');
        $('.cinnamontext').removeClass('text-active');

        $('.angelicaimage').removeClass('image-active');
          $('.angelicatext').removeClass('text-active');

          $('.lemonimage').removeClass('image-active');
            $('.lemontext').removeClass('text-active');

            $('.orrisimage').removeClass('image-active');
              $('.orristext').removeClass('text-active');

              $('.cardamomimage').removeClass('image-active');
                $('.cardamomtext').removeClass('text-active');

                $('.licoriceimage').removeClass('image-active');
                  $('.licoricetext').removeClass('text-active');

                  $('.cassaiimage').removeClass('image-active');
                    $('.cassaitext').removeClass('text-active');

                    $('.orangeimage').removeClass('image-active');
                      $('.orangetext').removeClass('text-active');
  });

  $(".angelicatext").click(function() {
    $('.angelicatext').addClass('text-active');
    $('.angelicaimage').addClass('image-active');
    $('.juniperimage').removeClass('image-active');
      $('.junipertext').removeClass('text-active');
      $('.cinnamonimage').removeClass('image-active');
        $('.cinnamontext').removeClass('text-active');

        $('.corianderimage').removeClass('image-active');
          $('.coriandertext').removeClass('text-active');

          $('.lemonimage').removeClass('image-active');
            $('.lemontext').removeClass('text-active');

            $('.orrisimage').removeClass('image-active');
              $('.orristext').removeClass('text-active');

              $('.cardamomimage').removeClass('image-active');
                $('.cardamomtext').removeClass('text-active');

                $('.licoriceimage').removeClass('image-active');
                  $('.licoricetext').removeClass('text-active');

                  $('.cassaiimage').removeClass('image-active');
                    $('.cassaitext').removeClass('text-active');

                    $('.orangeimage').removeClass('image-active');
                      $('.orangetext').removeClass('text-active');
  });

  $(".lemontext").click(function() {
    $('.lemontext').addClass('text-active');
    $('.lemonimage').addClass('image-active');
    $('.juniperimage').removeClass('image-active');
      $('.junipertext').removeClass('text-active');
      $('.cinnamonimage').removeClass('image-active');
        $('.cinnamontext').removeClass('text-active');

        $('.corianderimage').removeClass('image-active');
          $('.coriandertext').removeClass('text-active');

          $('.angelicaimage').removeClass('image-active');
            $('.angelicatext').removeClass('text-active');

            $('.orrisimage').removeClass('image-active');
              $('.orristext').removeClass('text-active');

              $('.cardamomimage').removeClass('image-active');
                $('.cardamomtext').removeClass('text-active');

                $('.licoriceimage').removeClass('image-active');
                  $('.licoricetext').removeClass('text-active');

                  $('.cassaiimage').removeClass('image-active');
                    $('.cassaitext').removeClass('text-active');

                    $('.orangeimage').removeClass('image-active');
                      $('.orangetext').removeClass('text-active');
  });

  $(".orristext").click(function() {
    $('.orristext').addClass('text-active');
    $('.orrisimage').addClass('image-active');
    $('.juniperimage').removeClass('image-active');
      $('.junipertext').removeClass('text-active');
      $('.cinnamonimage').removeClass('image-active');
        $('.cinnamontext').removeClass('text-active');

        $('.corianderimage').removeClass('image-active');
          $('.coriandertext').removeClass('text-active');

          $('.angelicaimage').removeClass('image-active');
            $('.angelicatext').removeClass('text-active');

            $('.lemonimage').removeClass('image-active');
              $('.lemontext').removeClass('text-active');

              $('.cardamomimage').removeClass('image-active');
                $('.cardamomtext').removeClass('text-active');

                $('.licoriceimage').removeClass('image-active');
                  $('.licoricetext').removeClass('text-active');

                  $('.cassaiimage').removeClass('image-active');
                    $('.cassaitext').removeClass('text-active');

                    $('.orangeimage').removeClass('image-active');
                      $('.orangetext').removeClass('text-active');
  });

  $(".cardamomtext").click(function() {
    $('.cardamomtext').addClass('text-active');
    $('.cardamomimage').addClass('image-active');
    $('.juniperimage').removeClass('image-active');
      $('.junipertext').removeClass('text-active');
      $('.cinnamonimage').removeClass('image-active');
        $('.cinnamontext').removeClass('text-active');

        $('.corianderimage').removeClass('image-active');
          $('.coriandertext').removeClass('text-active');

          $('.angelicaimage').removeClass('image-active');
            $('.angelicatext').removeClass('text-active');

            $('.lemonimage').removeClass('image-active');
              $('.lemontext').removeClass('text-active');

              $('.orrisimage').removeClass('image-active');
                $('.orristext').removeClass('text-active');

                $('.licoriceimage').removeClass('image-active');
                  $('.licoricetext').removeClass('text-active');

                  $('.cassaiimage').removeClass('image-active');
                    $('.cassaitext').removeClass('text-active');

                    $('.orangeimage').removeClass('image-active');
                      $('.orangetext').removeClass('text-active');
  });

  $(".licoricetext").click(function() {
    $('.licoricetext').addClass('text-active');
    $('.licoriceimage').addClass('image-active');
    $('.juniperimage').removeClass('image-active');
      $('.junipertext').removeClass('text-active');
      $('.cinnamonimage').removeClass('image-active');
        $('.cinnamontext').removeClass('text-active');

        $('.corianderimage').removeClass('image-active');
          $('.coriandertext').removeClass('text-active');

          $('.angelicaimage').removeClass('image-active');
            $('.angelicatext').removeClass('text-active');

            $('.lemonimage').removeClass('image-active');
              $('.lemontext').removeClass('text-active');

              $('.orrisimage').removeClass('image-active');
                $('.orristext').removeClass('text-active');

                $('.cardamomimage').removeClass('image-active');
                  $('.cardamomtext').removeClass('text-active');

                  $('.cassaiimage').removeClass('image-active');
                    $('.cassaitext').removeClass('text-active');

                    $('.orangeimage').removeClass('image-active');
                      $('.orangetext').removeClass('text-active');
  });

  $(".cassaitext").click(function() {
    $('.cassaitext').addClass('text-active');
    $('.cassaiimage').addClass('image-active');

    $('.juniperimage').removeClass('image-active');
      $('.junipertext').removeClass('text-active');

      $('.cinnamonimage').removeClass('image-active');
        $('.cinnamontext').removeClass('text-active');

        $('.corianderimage').removeClass('image-active');
          $('.coriandertext').removeClass('text-active');

          $('.angelicaimage').removeClass('image-active');
            $('.angelicatext').removeClass('text-active');

            $('.lemonimage').removeClass('image-active');
              $('.lemontext').removeClass('text-active');

              $('.orrisimage').removeClass('image-active');
                $('.orristext').removeClass('text-active');

                $('.cardamomimage').removeClass('image-active');
                  $('.cardamomtext').removeClass('text-active');

                  $('.licoriceimage').removeClass('image-active');
                    $('.licoricetext').removeClass('text-active');

                    $('.orangeimage').removeClass('image-active');
                      $('.orangetext').removeClass('text-active');
  });

  $(".orangetext").click(function() {
    $('.orangetext').addClass('text-active');
    $('.orangeimage').addClass('image-active');
    $('.juniperimage').removeClass('image-active');
      $('.junipertext').removeClass('text-active');
      $('.cinnamonimage').removeClass('image-active');
        $('.cinnamontext').removeClass('text-active');

        $('.corianderimage').removeClass('image-active');
          $('.coriandertext').removeClass('text-active');

          $('.angelicaimage').removeClass('image-active');
            $('.angelicatext').removeClass('text-active');

            $('.lemonimage').removeClass('image-active');
              $('.lemontext').removeClass('text-active');

              $('.orrisimage').removeClass('image-active');
                $('.orristext').removeClass('text-active');

                $('.cardamomimage').removeClass('image-active');
                  $('.cardamomtext').removeClass('text-active');

                  $('.licoriceimage').removeClass('image-active');
                    $('.licoricetext').removeClass('text-active');

                    $('.cassiaeimage').removeClass('image-active');
                      $('.cassiaetext').removeClass('text-active');
  });


  $("#close").click(function() {
    $('.transform').removeClass('transform-active');
    $('.hide').removeClass('hide-active');
    $('.hidden').removeClass('not-hidden');
    $('.grid-video').remove();
  });

  $(".france_hover").click(function() {
  $('.info').toggleClass('info-active');
  });


  var tl = new TimelineLite({onUpdate:updateSlider});
  tl.set("#content", {visibility:"visible"})
    .from("h1", 0.5, {left:100, autoAlpha:0}) // autoAlpha handles both css properties visibility and opacity.
  .from("h2", 0.5, {left:-100, autoAlpha:0}, "-=0.25") //add tween 0.25 seconds before previous tween ends
  .from("#feature", 0.5, {scale:0.5, autoAlpha:0}, "feature") // add feature label at start position of this tween
  .from("#description", 0.5, {left:100, autoAlpha:0}, "feature+=0.25") // add tween 0.25 seconds after the feature label
  .staggerFrom("#nav img", 0.5, {scale:0, rotation:-180, autoAlpha:0}, 0.2, "stagger");

  $("#play").click(function() {
    //play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
    //if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

    if(tl.progress() != 1){
      //carl just changed this again
          tl.play();
    } else {
      tl.restart();
    }
  });

  $("#pause").click(function() {
          tl.pause();
  });

  $("#reverse").click(function() {
          tl.reverse();
  });

  $("#resume").click(function() {
          tl.resume();
  });

  $("#restart").click(function() {
          tl.restart();
  });

  $("#slider").slider({
    range: false,
    min: 0,
    max: 100,
    step:.1,
    slide: function ( event, ui ) {
      tl.pause();
      //adjust the timeline's progress() based on slider value
      tl.progress( ui.value/100 );
      }
  });

  function updateSlider() {
    $("#slider").slider("value", tl.progress() *100);
  }

});
