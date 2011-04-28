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

$(caterwaul.clone('std seq continuation')(function () {
  $.fn.speech_bubble(text) = this /se[$('#speech-bubble').text(text) /se.bubble[setTimeout(_, 0)     /cps.e[bubble.css({left: _.position().left, top: _.position().top - bubble.height()})],
                                                                                setTimeout(_, 0)     /cps.e[bubble.fadeIn()],
                                                                                setTimeout(_, delay) /cps.e[bubble.fadeOut()],
                                                                                where[delay = 40 * text.length]]],

  $.fn.radius() = this.width() + this.height() >> 1,
  $.fn.center() = l[p = $(this).real_position(), w = $(this).width(), h = $(this).height()] in {x: p.left + (w >> 1), y: p.top + (h >> 1)},

  $.fn.distance_from(e) = l*[cartesian_distance(dx, dy) = Math.sqrt(dx * dx + dy * dy), p1 = this.center(), p2 = e.center()] in cartesian_distance(p1.x - p2.x, p1.y - p2.y),
  $.fn.collides_with(e) = this.distance_from(e) <= (this.radius() + e.radius()) >> 1,

  $.fn.hit_count()         = this.data('hit-count', this.data('hit-count') /re[_ === undefined ? 1 : _] - 1).data('hit-count'),

  $.fn.speed()             = this.velocity() /re[Math.sqrt(_.x * _.x + _.y * _.y)],
  $.fn.bounce(e)           = this /se[e.velocity() /se[this.remove(), when[this.hit_count() <= 0], unless[this.hasClass('invincible')],
                                                       _.x += 2.5 * energy * (c2.x - c1.x) / factor, _.y += 2.5 * energy * (c2.y - c1.y) / factor,
                                                       when[_.x * (c2.x - c1.x) + _.y * (c2.y - c1.y) < 0],
                                                       where*[c1 = this.center(), c2 = e.center(), factor = this.distance_from(e), energy = e.speed()]]],

  $.fn.remove_energy(dt)   = this /se[_.velocity().x *= 1.0 - friction, _.velocity().y *= 1.0 - friction, where[friction = 0.0003 * _.speed() /re[_ * _]]],

  $.fn.bound_to_body()     = this /se[y < 0                                             && (v.y = -v.y, $(this).real_position($(this).real_position().left, 0)),
                                      x < $('body').position().left                     && (v.x = -v.x, $(this).real_position($('body').position().left, $(this).real_position().top)),
                                      x > $('body').position().left + $('body').width() && (v.x = -v.x, $(this).real_position($('body').position().left + $('body').width(),
                                                                                                                              $(this).real_position().top)),
                                      where[x = $(this).position().left, y = $(this).position().top, v = $(this).velocity()]],

  $.fn.real_position(x, y) = arguments.length ? this.data('real-position', {left: x, top: y}).css({left: x, top: y}) :
                                                this.data('real-position') || this.data('real-position', this.position()).data('real-position'),
  $.fn.velocity()          = this.data('velocity') || this.data('velocity', {x: 0, y: 0}).data('velocity'),

  $.fn.move_timestep(dt)   = this.each(_) /cps[l[p = $(this).real_position(), v = $(this).velocity()] in $(this).real_position(p.left + v.x * dt, p.top + v.y * dt)],
  $.fn.apply_gravity(dt)   = this.each(_) /cps[$(this).velocity().y += dt * gravitational_constant, where[gravitational_constant = 300]],
  $.fn.handle_collisions() = this.each(_) /cps[l[that = this] in seq[~$('.bumper:visible') *+$ %[_.collides_with($(that))] *![_.bounce($(that))]]],

  setInterval(_, 1000) /cps[$('.bumper').length < 10 &&
                            $('.appear') /re[$(_[_.length * Math.random() >>> 0]).clone().removeClass('appear').appendTo('#ocean').css({left: Math.random() * 800, top: Math.random() * 200})]],

  $(document).mousemove(_) /cps.e[$('#paddle').real_position(e.pageX - ($('#paddle').width() >> 1) + $('body').position().left, $('#paddle').position().top)],

  l[last_timestep = +new Date()] in
  setInterval(_, 50) /cps[$('#zombie-whale').move_timestep(dt).apply_gravity(dt).remove_energy(dt).handle_collisions().bound_to_body(), where[dt = (+new Date() - last_timestep) / 1000],
                          last_timestep = +new Date()]}));
