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

    init: function () {$('#zombie_whale').css({position:'absolute', top:'20px', left:'20px'}).animate({top:$('#hipster_octopus').position().top, left:$('#hipster_octopus').position().left-144}, 1000, function(){ $('#message_form').fadeIn(function(){$('#to').val('Drunk Clam').nextAll('#message').val('I want you').parents('#message_form').delay(1000).fadeOut().parents('#ocean').find('#zombie_whale').data('message', { to: $('#to').val(), message: $('#message').val()}).css({'background-position': '0 -491px'}).delay(1000).animate({ top: $( '#' + $('#zombie_whale').data('message').to.toLowerCase().replace(' ','_') ).position().top, left: $( '#' + $('#zombie_whale').data('message').to.toLowerCase().replace(' ','_') ).position().left - $('#zombie_whale').width() }, 2000, function(){$('#' + $('#zombie_whale').data('message').to.toLowerCase().replace(' ','_')).data('message', $('#zombie_whale').data('message')).siblings('#zombie_whale').delay(500).css({'background-position': '0 -377px', height: '107px'})})})})}

  };

  $( document ).ready( HACKFEST.init );
  
  window.HF = HACKFEST;

})( this );
