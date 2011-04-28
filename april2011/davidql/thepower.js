/**
 *  _   _    _    ____ _  _______ _____ ____ _____ 
 * | | | |  / \  / ___| |/ /  ___| ____/ ___|_   _|
 * | |_| | / _ \| |   | ' /| |_  |  _| \___ \ | |  
 * |  _  |/ ___ \ |___| . \|  _| | |___ ___) || |  
 * |_| |_/_/   \_\____|_|\_\_|   |_____|____/ |_|  
 *
 * QuickLeft Hackfest
 * April 27 2011
 *
 * JavaScript
 * Written by, Nico Valencia
 *
 * @module HACKFEST
 */


(function( window, undefined ){

  var HACKFEST = {

    init: function () {
      
      $(".fakediv").getTwitter({
      		userName: "twitter",
      		numTweets: 1,
      		loaderText: "Loading tweets...",
      		slideIn: false,
      		showHeading: false,
      		headingText: "Latest Tweets",
      		showProfileLink: false
      });
      
      $('.choices span').click(function() {
        window.recipient = $(this).attr('class');
        $('.choices').hide(500);
        $('#speech').text('Yo, '+window.recipient+', come over hrr. I gotsa tweet 4 u.');
        $('#star_starfish, #drunk_clam, #big_squid').each(function() {
          if ($(this).attr('id').indexOf(window.recipient) >= 0) {
            $recipient = $(this);
          }
        });
        $recipient.animate({ 
          top: '-=200px',
          opacity:0
        },1200,function() {
          $recipient.css('right','auto').css('left','264px').css('top','250px').animate({
            opacity:1
          },800);
          $('#hipster_octopus').hide(500,function() {
            $('#speech').text('Here\'s a tweet!');
            setTimeout(function() {
              $('#speech').text($('#zombie_whale').data('tweet'));
              $('#speech').animate({
                top:'68px',
                left:'144px'
              },500,function() {
                setTimeout(function() {
                  $('#speech').text('ZOMG thanks!!');
                  setTimeout(function() {
                    $('#container h1').text('THE END').animate({marginTop:'600px'},2000,function() {
                      $('body').animate({opacity:0});
                    });
                  },1500);
                },1500);
              });
            },1500);
          });
        });
      });

      
      $('#zombie_whale').animate({
        top:'218px'
      },1000,function() {
        $('#speech').text('MOOOVE').show(function() {
          $('#hipster_octopus').animate({
            left: '250px'
          },800,function() {
            $('#zombie_whale').animate({
              top:'313px'
            },200);
            $('#speech').animate({
              top: '180px'
            },function() {
              $('#speech').text('I\'ve been told to ask you for a message??');
              setTimeout(function() {
                $('#speech').text('Aight, retard. Fill out this form.');
                $('#speech').animate({
                  left:'144px'
                },function() {
                  $('#hipster_octopus').addClass('shake');
                  setTimeout(function() {
                    $('#speech').hide().text('I haz a bettr idea!11');
                    $('#message_form').show(300);
                    $('#hipster_octopus').removeClass('shake');
                    setTimeout(function() {
                      $('#speech').show().animate({
                        left: '31px'
                      },1000,function() {
                        $('#message_form').hide(300);
                        $('#speech').text('Get twitterzz!1');
                        setTimeout(function() {
                          $('#bird').show().animate({
                            width:'1600px',
                            opacity:0
                          },1000,function() {
                            $('#bird').hide();
                            $('#speech').text($('.fakediv ul li span').text());
                            $('#zombie_whale').addClass('shake');
                            setTimeout(function() {
                              $('#zombie_whale').removeClass('shake');
                              $('#zombie_whale')
                                .addClass('fancy')
                                .data('tweet',$('#speech').text());
                              $('#speech').text('I got a new attitude! And a top hat!');
                              setTimeout(function() {
                                $('#speech').text('To whom shall I deliver this message?');
                                setTimeout(function() {
                                  $('.choices').show(500);
                                },1000);
                              },1500);
                            },2000);

                          });
                        },1000);
                      });
                    },1000);

                  },1000);
                });
              },1000);
            });
          });
        });

      });

    },

    anotherFunction: function () {


    }

  };

  $( document ).ready( HACKFEST.init );

})( this );
