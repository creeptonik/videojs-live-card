(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"min-document":1}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _globalDocument = require('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var ModalDialog = _videoJs2['default'].getComponent('ModalDialog');

/**
 * @class EndCardModal
 * @extends {ModalDialog}
 */

var LiveCardModal = (function (_ModalDialog) {
  _inherits(LiveCardModal, _ModalDialog);

  /**
   * Constructor for EndCardModal
   *
   * @method constructor
   * @param  {Player} player
   * @param  {Object} [options]
   */

  function LiveCardModal(player, options) {
    _classCallCheck(this, LiveCardModal);

    _get(Object.getPrototypeOf(LiveCardModal.prototype), 'constructor', this).call(this, player, options);
    this.on(player, 'error', function () {
      //display error card if no stream found
      var errNo = player.error().code;
      var duration = player.duration();
      if (errNo == '4' && duration == '0') {
        this.open();
        player.error(null);
      }
    });

    this.el_.style.backgroundImage = 'url(' + options.imageUrl + ')';
    var placeHolderMsg = _globalDocument2['default'].createElement('label');
    placeHolderMsg.className = 'vjs-placeHolderMsg';
    placeHolderMsg.innerHTML = options.holdText;
    this.el_.appendChild(placeHolderMsg);
  }

  // Just don't fill for now

  _createClass(LiveCardModal, [{
    key: 'fill',
    value: function fill() {}
    //

    /**
     * Build the modal's CSS class.
     *
     * @method buildCSSClass
     * @return {String}
     */

  }, {
    key: 'buildCSSClass',
    value: function buildCSSClass() {
      return 'vjs-live-card ' + _get(Object.getPrototypeOf(LiveCardModal.prototype), 'buildCSSClass', this).call(this);
    }
  }]);

  return LiveCardModal;
})(ModalDialog);

_videoJs2['default'].registerComponent('LiveCardModal', LiveCardModal);

exports['default'] = LiveCardModal;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"global/document":2}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _placeholderJs = require('./placeholder.js');

var _placeholderJs2 = _interopRequireDefault(_placeholderJs);

// Default options for the plugin.
var defaults = {
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/TCF.jpg',
  holdText: 'Live not ready yet'
};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
var onPlayerReady = function onPlayerReady(player, options) {
  player.addClass('vjs-live-card');

  var modal = new _placeholderJs2['default'](player, {
    label: player.localize('Live Error Card'),
    temporary: false,
    uncloseable: true,
    imageUrl: options.imageUrl,
    holdText: options.holdText
  });

  player.liveCardModal = modal;

  player.addChild(modal);
};

/**
 * A video.js plugin
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function liveCard
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var liveCard = function liveCard(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, _videoJs2['default'].mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
_videoJs2['default'].plugin('liveCard', liveCard);

// Include the version number.
liveCard.VERSION = '0.0.0';

exports['default'] = liveCard;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./placeholder.js":3}],5:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalDocument = require('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _qunit = (typeof window !== "undefined" ? window['QUnit'] : typeof global !== "undefined" ? global['QUnit'] : null);

var _qunit2 = _interopRequireDefault(_qunit);

var _sinon = (typeof window !== "undefined" ? window['sinon'] : typeof global !== "undefined" ? global['sinon'] : null);

var _sinon2 = _interopRequireDefault(_sinon);

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _srcPlugin = require('../src/plugin');

var _srcPlugin2 = _interopRequireDefault(_srcPlugin);

var Player = _videoJs2['default'].getComponent('Player');

_qunit2['default'].test('the environment is sane', function (assert) {
  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
  assert.strictEqual(typeof _sinon2['default'], 'object', 'sinon exists');
  assert.strictEqual(typeof _videoJs2['default'], 'function', 'videojs exists');
  assert.strictEqual(typeof _srcPlugin2['default'], 'function', 'plugin is a function');
});

_qunit2['default'].module('videojs-live-card', {

  beforeEach: function beforeEach() {

    // Mock the environment's timers because certain things - particularly
    // player readiness - are asynchronous in video.js 5. This MUST come
    // before any player is created; otherwise, timers could get created
    // with the actual timer methods!
    this.clock = _sinon2['default'].useFakeTimers();

    this.fixture = _globalDocument2['default'].getElementById('qunit-fixture');
    this.video = _globalDocument2['default'].createElement('video');
    this.fixture.appendChild(this.video);
    this.player = (0, _videoJs2['default'])(this.video);
  },

  afterEach: function afterEach() {
    this.player.dispose();
    this.clock.restore();
  }
});

_qunit2['default'].test('registers itself with video.js', function (assert) {
  assert.expect(2);

  assert.strictEqual(Player.prototype.liveCard, _srcPlugin2['default'], 'videojs-live-card plugin was registered');

  this.player.liveCard();

  // Tick the clock forward enough to trigger the player to be "ready".
  this.clock.tick(1);

  assert.ok(this.player.hasClass('vjs-live-card'), 'the plugin adds a class to the player');
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../src/plugin":4,"global/document":2}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcGx1Z2lucy92aWRlb2pzLWxpdmUtY2FyZC9zcmMvcGxhY2Vob2xkZXIuanMiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3BsdWdpbnMvdmlkZW9qcy1saXZlLWNhcmQvc3JjL3BsdWdpbi5qcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcGx1Z2lucy92aWRlb2pzLWxpdmUtY2FyZC90ZXN0L3BsdWdpbi50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJDZnFCLGlCQUFpQjs7Ozt1QkFDbEIsVUFBVTs7OztBQUU5QixJQUFNLFdBQVcsR0FBRyxxQkFBUSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7Ozs7SUFNbEQsYUFBYTtZQUFiLGFBQWE7Ozs7Ozs7Ozs7QUFTTixXQVRQLGFBQWEsQ0FTTCxNQUFNLEVBQUUsT0FBTyxFQUFFOzBCQVR6QixhQUFhOztBQVVmLCtCQVZFLGFBQWEsNkNBVVQsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUN2QixRQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWTs7QUFFbkMsVUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztBQUNoQyxVQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFF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QUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiIsInZhciB0b3BMZXZlbCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9XG52YXIgbWluRG9jID0gcmVxdWlyZSgnbWluLWRvY3VtZW50Jyk7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudDtcbn0gZWxzZSB7XG4gICAgdmFyIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXTtcblxuICAgIGlmICghZG9jY3kpIHtcbiAgICAgICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddID0gbWluRG9jO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jY3k7XG59XG4iLCJpbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuY29uc3QgTW9kYWxEaWFsb2cgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTW9kYWxEaWFsb2cnKTtcblxuLyoqXG4gKiBAY2xhc3MgRW5kQ2FyZE1vZGFsXG4gKiBAZXh0ZW5kcyB7TW9kYWxEaWFsb2d9XG4gKi9cbmNsYXNzIExpdmVDYXJkTW9kYWwgZXh0ZW5kcyBNb2RhbERpYWxvZyB7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBFbmRDYXJkTW9kYWxcbiAgICpcbiAgICogQG1ldGhvZCBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtQbGF5ZXJ9IHBsYXllclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcbiAgICB0aGlzLm9uKHBsYXllciwgJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy9kaXNwbGF5IGVycm9yIGNhcmQgaWYgbm8gc3RyZWFtIGZvdW5kIFxuICAgICAgdmFyIGVyck5vID0gcGxheWVyLmVycm9yKCkuY29kZTtcbiAgICAgIHZhciBkdXJhdGlvbiA9IHBsYXllci5kdXJhdGlvbigpO1xuICAgICAgaWYgKGVyck5vID09ICc0JyAmJiBkdXJhdGlvbiA9PSAnMCcpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHBsYXllci5lcnJvcihudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZWxfLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtvcHRpb25zLmltYWdlVXJsfSlgO1xuICAgIGxldCBwbGFjZUhvbGRlck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcGxhY2VIb2xkZXJNc2cuY2xhc3NOYW1lID0gJ3Zqcy1wbGFjZUhvbGRlck1zZyc7XG4gICAgcGxhY2VIb2xkZXJNc2cuaW5uZXJIVE1MID0gb3B0aW9ucy5ob2xkVGV4dDtcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZChwbGFjZUhvbGRlck1zZyk7XG4gIH1cblxuICAvLyBKdXN0IGRvbid0IGZpbGwgZm9yIG5vd1xuICBmaWxsKCkge1xuICAgIC8vXG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIG1vZGFsJ3MgQ1NTIGNsYXNzLlxuICAgKlxuICAgKiBAbWV0aG9kIGJ1aWxkQ1NTQ2xhc3NcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgYnVpbGRDU1NDbGFzcygpIHtcbiAgICByZXR1cm4gYHZqcy1saXZlLWNhcmQgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcbiAgfVxuXG59XG5cbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0xpdmVDYXJkTW9kYWwnLCBMaXZlQ2FyZE1vZGFsKTtcblxuZXhwb3J0IGRlZmF1bHQgTGl2ZUNhcmRNb2RhbDsiLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQgTGl2ZUNhcmRNb2RhbCBmcm9tICcuL3BsYWNlaG9sZGVyLmpzJztcblxuLy8gRGVmYXVsdCBvcHRpb25zIGZvciB0aGUgcGx1Z2luLlxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGltYWdlVXJsOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vMS8xZi9UQ0YuanBnJyxcbiAgaG9sZFRleHQ6ICdMaXZlIG5vdCByZWFkeSB5ZXQnXG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGludm9rZSB3aGVuIHRoZSBwbGF5ZXIgaXMgcmVhZHkuXG4gKlxuICogVGhpcyBpcyBhIGdyZWF0IHBsYWNlIGZvciB5b3VyIHBsdWdpbiB0byBpbml0aWFsaXplIGl0c2VsZi4gV2hlbiB0aGlzXG4gKiBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSBwbGF5ZXIgd2lsbCBoYXZlIGl0cyBET00gYW5kIGNoaWxkIGNvbXBvbmVudHNcbiAqIGluIHBsYWNlLlxuICpcbiAqIEBmdW5jdGlvbiBvblBsYXllclJlYWR5XG4gKiBAcGFyYW0gICAge1BsYXllcn0gcGxheWVyXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKi9cbmNvbnN0IG9uUGxheWVyUmVhZHkgPSAocGxheWVyLCBvcHRpb25zKSA9PiB7XG4gIHBsYXllci5hZGRDbGFzcygndmpzLWxpdmUtY2FyZCcpO1xuICBcbiAgbGV0IG1vZGFsID0gbmV3IExpdmVDYXJkTW9kYWwocGxheWVyLCB7XG4gICAgbGFiZWw6IHBsYXllci5sb2NhbGl6ZSgnTGl2ZSBFcnJvciBDYXJkJyksXG4gICAgdGVtcG9yYXJ5OiBmYWxzZSxcbiAgICB1bmNsb3NlYWJsZTogdHJ1ZSxcbiAgICBpbWFnZVVybDogb3B0aW9ucy5pbWFnZVVybCxcbiAgICBob2xkVGV4dDogb3B0aW9ucy5ob2xkVGV4dFxuICB9KTtcbiAgXG4gIHBsYXllci5saXZlQ2FyZE1vZGFsID0gbW9kYWw7XG5cbiAgcGxheWVyLmFkZENoaWxkKG1vZGFsKTtcbn07XG5cbi8qKlxuICogQSB2aWRlby5qcyBwbHVnaW5cbiAqXG4gKiBJbiB0aGUgcGx1Z2luIGZ1bmN0aW9uLCB0aGUgdmFsdWUgb2YgYHRoaXNgIGlzIGEgdmlkZW8uanMgYFBsYXllcmBcbiAqIGluc3RhbmNlLiBZb3UgY2Fubm90IHJlbHkgb24gdGhlIHBsYXllciBiZWluZyBpbiBhIFwicmVhZHlcIiBzdGF0ZSBoZXJlLFxuICogZGVwZW5kaW5nIG9uIGhvdyB0aGUgcGx1Z2luIGlzIGludm9rZWQuIFRoaXMgbWF5IG9yIG1heSBub3QgYmUgaW1wb3J0YW50XG4gKiB0byB5b3U7IGlmIG5vdCwgcmVtb3ZlIHRoZSB3YWl0IGZvciBcInJlYWR5XCIhXG4gKlxuICogQGZ1bmN0aW9uIGxpdmVDYXJkXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKiAgICAgICAgICAgQW4gb2JqZWN0IG9mIG9wdGlvbnMgbGVmdCB0byB0aGUgcGx1Z2luIGF1dGhvciB0byBkZWZpbmUuXG4gKi9cbmNvbnN0IGxpdmVDYXJkID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB0aGlzLnJlYWR5KCgpID0+IHtcbiAgICBvblBsYXllclJlYWR5KHRoaXMsIHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBvcHRpb25zKSk7XG4gIH0pO1xufTtcblxuLy8gUmVnaXN0ZXIgdGhlIHBsdWdpbiB3aXRoIHZpZGVvLmpzLlxudmlkZW9qcy5wbHVnaW4oJ2xpdmVDYXJkJywgbGl2ZUNhcmQpO1xuXG4vLyBJbmNsdWRlIHRoZSB2ZXJzaW9uIG51bWJlci5cbmxpdmVDYXJkLlZFUlNJT04gPSAnX19WRVJTSU9OX18nO1xuXG5leHBvcnQgZGVmYXVsdCBsaXZlQ2FyZDtcbiIsImltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG5pbXBvcnQgUVVuaXQgZnJvbSAncXVuaXQnO1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuaW1wb3J0IHBsdWdpbiBmcm9tICcuLi9zcmMvcGx1Z2luJztcblxuY29uc3QgUGxheWVyID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1BsYXllcicpO1xuXG5RVW5pdC50ZXN0KCd0aGUgZW52aXJvbm1lbnQgaXMgc2FuZScsIGZ1bmN0aW9uKGFzc2VydCkge1xuICBhc3NlcnQuc3RyaWN0RXF1YWwodHlwZW9mIEFycmF5LmlzQXJyYXksICdmdW5jdGlvbicsICdlczUgZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2Ygc2lub24sICdvYmplY3QnLCAnc2lub24gZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgdmlkZW9qcywgJ2Z1bmN0aW9uJywgJ3ZpZGVvanMgZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgcGx1Z2luLCAnZnVuY3Rpb24nLCAncGx1Z2luIGlzIGEgZnVuY3Rpb24nKTtcbn0pO1xuXG5RVW5pdC5tb2R1bGUoJ3ZpZGVvanMtbGl2ZS1jYXJkJywge1xuXG4gIGJlZm9yZUVhY2goKSB7XG5cbiAgICAvLyBNb2NrIHRoZSBlbnZpcm9ubWVudCdzIHRpbWVycyBiZWNhdXNlIGNlcnRhaW4gdGhpbmdzIC0gcGFydGljdWxhcmx5XG4gICAgLy8gcGxheWVyIHJlYWRpbmVzcyAtIGFyZSBhc3luY2hyb25vdXMgaW4gdmlkZW8uanMgNS4gVGhpcyBNVVNUIGNvbWVcbiAgICAvLyBiZWZvcmUgYW55IHBsYXllciBpcyBjcmVhdGVkOyBvdGhlcndpc2UsIHRpbWVycyBjb3VsZCBnZXQgY3JlYXRlZFxuICAgIC8vIHdpdGggdGhlIGFjdHVhbCB0aW1lciBtZXRob2RzIVxuICAgIHRoaXMuY2xvY2sgPSBzaW5vbi51c2VGYWtlVGltZXJzKCk7XG5cbiAgICB0aGlzLmZpeHR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVuaXQtZml4dHVyZScpO1xuICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHRoaXMuZml4dHVyZS5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvKTtcbiAgICB0aGlzLnBsYXllciA9IHZpZGVvanModGhpcy52aWRlbyk7XG4gIH0sXG5cbiAgYWZ0ZXJFYWNoKCkge1xuICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcbiAgICB0aGlzLmNsb2NrLnJlc3RvcmUoKTtcbiAgfVxufSk7XG5cblFVbml0LnRlc3QoJ3JlZ2lzdGVycyBpdHNlbGYgd2l0aCB2aWRlby5qcycsIGZ1bmN0aW9uKGFzc2VydCkge1xuICBhc3NlcnQuZXhwZWN0KDIpO1xuXG4gIGFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBQbGF5ZXIucHJvdG90eXBlLmxpdmVDYXJkLFxuICAgIHBsdWdpbixcbiAgICAndmlkZW9qcy1saXZlLWNhcmQgcGx1Z2luIHdhcyByZWdpc3RlcmVkJ1xuICApO1xuXG4gIHRoaXMucGxheWVyLmxpdmVDYXJkKCk7XG5cbiAgLy8gVGljayB0aGUgY2xvY2sgZm9yd2FyZCBlbm91Z2ggdG8gdHJpZ2dlciB0aGUgcGxheWVyIHRvIGJlIFwicmVhZHlcIi5cbiAgdGhpcy5jbG9jay50aWNrKDEpO1xuXG4gIGFzc2VydC5vayhcbiAgICB0aGlzLnBsYXllci5oYXNDbGFzcygndmpzLWxpdmUtY2FyZCcpLFxuICAgICd0aGUgcGx1Z2luIGFkZHMgYSBjbGFzcyB0byB0aGUgcGxheWVyJ1xuICApO1xufSk7XG4iXX0=
