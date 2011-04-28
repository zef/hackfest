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

      // Begin your mad JavaScript in here!
      HACKFEST.moveWhale($('#hipster_octopus'), function() {
        HACKFEST.sayWhale('Yo, gimme your message!')
        $('#message_form').show()
      })
    },

    anotherFunction: function () {


    },

    sayWhale: function(text) {
      var whale = $('#zombie_whale')
      var pos = whale.position()
      console.log(pos)
      var msgBox = $('<div>')
      msgBox.addClass('message_box').text(text).css({top: -parseInt(whale.css('height')), left: pos.left})
      $('#zombie_whale').html(msgBox)
    },

    moveWhale: function(dest, callback) {
      $('#zombie_whale').animate({top: dest.css('top'), left: dest.css('left')}, 1000, 'swing', callback)
    }

  };

  $( document ).ready( HACKFEST.init );

})( this );
