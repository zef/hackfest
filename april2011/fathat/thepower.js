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

/*function getParameterByName( name ) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}*/

//A bunch of globals! YEAH!
ticker = 0;
var skho = $('#hipster_octopus');
var skzw = $('#zombie_whale');
var sksf = $('#star_starfish');
var skbs = $('#big_squid');
function clock() {
  var hoskew = Math.sin(ticker) * 25;
  var zwskew = Math.sin(ticker+1) * 25;
  var sfskew = Math.sin(ticker+2) * 25;
  var bsskew = Math.sin(ticker*0.5) * 25;
  skho.css('-moz-transform', 'skew(' + hoskew + 'deg)');
  skho.css('-webkit-transform', 'skew(' + hoskew + 'deg)');
  
  skzw.css('-moz-transform', 'skew(' + zwskew + 'deg)');
  skzw.css('-webkit-transform', 'skew(' + zwskew + 'deg)');
  
  sksf.css('-moz-transform', 'skew(' + sfskew + 'deg)');
  sksf.css('-webkit-transform', 'skew(' + sfskew + 'deg)');
  
  skbs.css('-moz-transform', 'skew(' + bsskew + 'deg)');
  skbs.css('-webkit-transform', 'skew(' + bsskew + 'deg)');
  
  ticker += .033;
}



(function( window, undefined ){

  var HACKFEST = {

    init: function () {
      //var target = "#" + getParameterByName('to');
      //var message = getParameterByName('message');
      
      //if(target == "#") {
      //  target = "#hipster_octopus";
      //}
      
      var interval=self.setInterval("clock()",33);

      var zw = $('#zombie_whale');
      var hoPosition = $('#hipster_octopus').position();
      hoPosition.left += 100;
      
      function makeWhaleClassy() {
        zw.css('background-position', '0 -380px' );  
      }
      
      function makeWhaleMessenger() {
        zw.css('background-position', '0 -490px' );  
      }
      
      function makeWhaleAngry() {
        zw.css('background-position', '0 -590px' );  
      }
      
      makeWhaleClassy();
      
      var showForm = function() {
        makeWhaleAngry();
        $('#message_form').show()
      }
      
      var moveScTo = function(sc, dest, whenThere) {
        $(sc).animate($(dest).position(), 2000, whenThere)
      };
      
      var moveScToP = function(sc, dest, whenThere) {
        $(sc).animate(dest, 2000, whenThere)
      };
      
      moveScToP('#zombie_whale', hoPosition, showForm)
      
      
      function showMessageAt(msg, p) {
          $('#message_text').text(msg);
          $('#message_display').css('top', p.top + 'px');
          $('#message_display').css('left', p.left + 'px');
          $('#message_display').show('fast');
      }
      
      window.sendWhaleMessage = function() {
        var mytarget = "#" + $('#to').val();
        
        makeWhaleMessenger();
        
        function deliverMessage() {
          var sendTo = $('#to').val();
          console.log($('#to').val());
          var targetPosition = $(mytarget).position();
          targetPosition.top = targetPosition.top - 50;

          showMessageAt('#hipster_octopus says: ' + $('#message').val(), targetPosition)

          t=setTimeout("hateOnHO()",5000);

        }
        
        function responseToHipster() {
          var msgs = ['THAT IS SO LAST WEEK HIPSTER OCTOPUS',
                      'YOU SUCK HIPSTER OCTOPUS',
                      'NOT COOL HIPSTER OCTOPUS']
          var randomIndex = Math.floor(Math.random() * msgs.length)
          return msgs[randomIndex];
        }
        
        window.hateOnHO = function() {
          $('#message_display').hide('slow');
          makeWhaleAngry();
          
          moveScToP('#zombie_whale', hoPosition, function() {
            var hoTop = $('#hipster_octopus').position();
            hoTop.top -= 50;
            showMessageAt('#' + $('#to').val() + ' says: ' + responseToHipster() , hoTop)
            t=setTimeout("allowHipsterRetort()",3000);
          });
        }
        
        window.allowHipsterRetort = function() {
          $('#message_display').hide('fast');
          $('#message_form').show('fast');
        }
        
        
        var moveTo = $(mytarget).position();
        moveTo.left -= 200;
        moveScToP('#zombie_whale', moveTo, deliverMessage);
        
        $('#message_display').hide('fast');
        $('#message_form').hide('fast');
      }
    }

  };

  $( document ).ready( HACKFEST.init );

})( this );
