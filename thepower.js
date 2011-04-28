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
  var messageForm = $('#message_form')
    , whale = $('#zombie_whale')
    , octopus = $('#hipster_octopus')
    , squid = $('#big_squid')
    , starfish = $('#star_starfish')
    , clam = $('#drunk_clam')
    , msgBox

  var map = {
    '#zombie_whale': /zombie|whale/i,
    '#big_squid': /big|squid/i,
    '#star_starfish': /star|starfish/i,
    '#drunk_clam': /drunk|clam/i,
  }

  var HACKFEST = {

    init: function () {

      // Begin your mad JavaScript in here!
      HACKFEST.reset('Hey dude bro, got a message?')
      messageForm.submit(function(event) {
        try {
          whale.message = {
            to: $('#to').val(),
            message: $('#message').val()
          }

          var dest;
          Object.keys(map).forEach(function(name) {
            var regexp = map[name]
            if (regexp.test(whale.message.to)) {
              dest = $(name)
            }
          })

          messageForm.fadeOut()
          if (!dest) {
            HACKFEST.sayWhale("I pity the fool who can't type :(", function() {
              messageForm.fadeIn()
            })
          } else {
            $.get('http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=' + encodeURIComponent(whale.message.message), function(data) {
              whale.message.image = data.responseData.results[0].unescapedUrl
            }, 'jsonp')
            HACKFEST.whaleClass('message')
            HACKFEST.sayWhale("Thanks broski, I'm on it!", {fadeOut: 1000}, function() {
              HACKFEST.moveWhale(dest, function() {
                HACKFEST.sayWhale("Hey broseph, Hipstah octopus got the 411 for you", {fadeOut: 2000}, function() {
                  var img = $('<img>')
                  img.attr('src', whale.message.image)
                  img.css({"max-width": 400, "max-height": 400})
                  var imgDiv = $('<div>')
                  imgDiv.addClass('message_box')
                  imgDiv.css({right: 300})
                  $('#ocean').append(imgDiv.append(img))
                  imgDiv.fadeIn()
                  setTimeout(function() {
                    imgDiv.fadeOut(function() { imgDiv.remove() })
                    HACKFEST.reset('That was sweet bro, what next?')
                  }, 5000)
                }) 
              })
            })
          }
        } catch (err) {
          console.error(err)
        }
        return false;
      })
    },

    reset: function (msg) {
      HACKFEST.whaleClass('default')
      HACKFEST.moveWhale($('#hipster_octopus'), function() {
        HACKFEST.sayWhale(msg)
        messageForm.fadeIn()
      })
    },

    whaleClass: function(className) {
      whale.attr('class', 'whale_' + className)
    },

    sayWhale: function(text, options, callback) {
      if (arguments.length === 2) {
        callback = options
        options = {}
      } else if (arguments.length === 1) {
        callback = function() {}
        options = {}
      }

      var pos = whale.position()
      console.log(pos)
      if (!msgBox) {
        msgBox = $('<div>')
        msgBox.addClass('message_box')
        $('#ocean').append(msgBox)
        msgBox.fadeIn(function() {
          if (options.fadeOut) {
            setTimeout(function() {
              msgBox.fadeOut(callback)
            }, options.fadeOut)
          } else {
            callback()
          }
        })
        msgBox.text(text)
        msgBox.css({top: pos.top-(whale.height()/1.5), left: pos.left+(whale.width()/15)})
      } else {
        msgBox.fadeOut(function() {
          msgBox.remove()
          msgBox = null
          HACKFEST.sayWhale(text, options, callback)
        })
      }
    },

    moveWhale: function(dest, callback) {
      var pos = dest.position()
      if (pos.left > 100) {
        pos.left -= whale.width()
      } else {
        pos.left += 50
      }
      whale.animate({top: pos.top, left: pos.left}, 1000, 'swing', callback)
    }

  };

  $( document ).ready( HACKFEST.init );

})( this );
