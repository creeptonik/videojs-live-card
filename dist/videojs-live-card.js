(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsLiveCard = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{"./placeholder.js":3}]},{},[4])(4)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcGx1Z2lucy92aWRlb2pzLWxpdmUtY2FyZC9zcmMvcGxhY2Vob2xkZXIuanMiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3BsdWdpbnMvdmlkZW9qcy1saXZlLWNhcmQvc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQ2ZxQixpQkFBaUI7Ozs7dUJBQ2xCLFVBQVU7Ozs7QUFFOUIsSUFBTSxXQUFXLEdBQUcscUJBQVEsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7Ozs7O0lBTWxELGFBQWE7WUFBYixhQUFhOzs7Ozs7Ozs7O0FBU04sV0FUUCxhQUFhLENBU0wsTUFBTSxFQUFFLE9BQU8sRUFBRTswQkFUekIsYUFBYTs7QUFVZiwrQkFWRSxhQUFhLDZDQVVULE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFDdkIsUUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVk7O0FBRW5DLFVBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDaEMsVUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2pDLFVBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQ25DLFlBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLGNBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDcEI7S0FDRixDQUFDLENBQUM7O0FBRUgsUUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxZQUFVLE9BQU8sQ0FBQyxRQUFRLE1BQUcsQ0FBQztBQUM1RCxRQUFJLGNBQWMsR0FBRyw0QkFBUyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckQsa0JBQWMsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7QUFDaEQsa0JBQWMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUM1QyxRQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztHQUN0Qzs7OztlQTFCRyxhQUFhOztXQTZCYixnQkFBRyxFQUVOOzs7Ozs7Ozs7QUFBQTs7O1dBUVkseUJBQUc7QUFDZCwyREF4Q0UsYUFBYSwrQ0F3Q2lDO0tBQ2pEOzs7U0F6Q0csYUFBYTtHQUFTLFdBQVc7O0FBNkN2QyxxQkFBUSxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7O3FCQUUzQyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7dUJDeERSLFVBQVU7Ozs7NkJBQ0osa0JBQWtCOzs7OztBQUc1QyxJQUFNLFFBQVEsR0FBRztBQUNmLFVBQVEsRUFBRSx3REFBd0Q7QUFDbEUsVUFBUSxFQUFFLG9CQUFvQjtDQUMvQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBYUYsSUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBYSxDQUFJLE1BQU0sRUFBRSxPQUFPLEVBQUs7QUFDekMsUUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFakMsTUFBSSxLQUFLLEdBQUcsK0JBQWtCLE1BQU0sRUFBRTtBQUNwQyxTQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxhQUFTLEVBQUUsS0FBSztBQUNoQixlQUFXLEVBQUUsSUFBSTtBQUNqQixZQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7QUFDMUIsWUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO0dBQzNCLENBQUMsQ0FBQzs7QUFFSCxRQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7QUFFN0IsUUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN4QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWNGLElBQU0sUUFBUSxHQUFHLFNBQVgsUUFBUSxDQUFZLE9BQU8sRUFBRTs7O0FBQ2pDLE1BQUksQ0FBQyxLQUFLLENBQUMsWUFBTTtBQUNmLGlCQUFhLFFBQU8scUJBQVEsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0dBQzlELENBQUMsQ0FBQztDQUNKLENBQUM7OztBQUdGLHFCQUFRLE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7OztBQUdyQyxRQUFRLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQzs7cUJBRWxCLFFBQVEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIiwidmFyIHRvcExldmVsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge31cbnZhciBtaW5Eb2MgPSByZXF1aXJlKCdtaW4tZG9jdW1lbnQnKTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50O1xufSBlbHNlIHtcbiAgICB2YXIgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddO1xuXG4gICAgaWYgKCFkb2NjeSkge1xuICAgICAgICBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J10gPSBtaW5Eb2M7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2NjeTtcbn1cbiIsImltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5jb25zdCBNb2RhbERpYWxvZyA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNb2RhbERpYWxvZycpO1xuXG4vKipcbiAqIEBjbGFzcyBFbmRDYXJkTW9kYWxcbiAqIEBleHRlbmRzIHtNb2RhbERpYWxvZ31cbiAqL1xuY2xhc3MgTGl2ZUNhcmRNb2RhbCBleHRlbmRzIE1vZGFsRGlhbG9nIHtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIEVuZENhcmRNb2RhbFxuICAgKlxuICAgKiBAbWV0aG9kIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge1BsYXllcn0gcGxheWVyXG4gICAqIEBwYXJhbSAge09iamVjdH0gW29wdGlvbnNdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuICAgIHRoaXMub24ocGxheWVyLCAnZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvL2Rpc3BsYXkgZXJyb3IgY2FyZCBpZiBubyBzdHJlYW0gZm91bmQgXG4gICAgICB2YXIgZXJyTm8gPSBwbGF5ZXIuZXJyb3IoKS5jb2RlO1xuICAgICAgdmFyIGR1cmF0aW9uID0gcGxheWVyLmR1cmF0aW9uKCk7XG4gICAgICBpZiAoZXJyTm8gPT0gJzQnICYmIGR1cmF0aW9uID09ICcwJykge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgcGxheWVyLmVycm9yKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5lbF8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke29wdGlvbnMuaW1hZ2VVcmx9KWA7XG4gICAgbGV0IHBsYWNlSG9sZGVyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwbGFjZUhvbGRlck1zZy5jbGFzc05hbWUgPSAndmpzLXBsYWNlSG9sZGVyTXNnJztcbiAgICBwbGFjZUhvbGRlck1zZy5pbm5lckhUTUwgPSBvcHRpb25zLmhvbGRUZXh0O1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHBsYWNlSG9sZGVyTXNnKTtcbiAgfVxuXG4gIC8vIEp1c3QgZG9uJ3QgZmlsbCBmb3Igbm93XG4gIGZpbGwoKSB7XG4gICAgLy9cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgbW9kYWwncyBDU1MgY2xhc3MuXG4gICAqXG4gICAqIEBtZXRob2QgYnVpbGRDU1NDbGFzc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBidWlsZENTU0NsYXNzKCkge1xuICAgIHJldHVybiBgdmpzLWxpdmUtY2FyZCAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuICB9XG5cbn1cblxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnTGl2ZUNhcmRNb2RhbCcsIExpdmVDYXJkTW9kYWwpO1xuXG5leHBvcnQgZGVmYXVsdCBMaXZlQ2FyZE1vZGFsOyIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCBMaXZlQ2FyZE1vZGFsIGZyb20gJy4vcGxhY2Vob2xkZXIuanMnO1xuXG4vLyBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBwbHVnaW4uXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgaW1hZ2VVcmw6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi8xLzFmL1RDRi5qcGcnLFxuICBob2xkVGV4dDogJ0xpdmUgbm90IHJlYWR5IHlldCdcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIHBsYXllciBpcyByZWFkeS5cbiAqXG4gKiBUaGlzIGlzIGEgZ3JlYXQgcGxhY2UgZm9yIHlvdXIgcGx1Z2luIHRvIGluaXRpYWxpemUgaXRzZWxmLiBXaGVuIHRoaXNcbiAqIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHBsYXllciB3aWxsIGhhdmUgaXRzIERPTSBhbmQgY2hpbGQgY29tcG9uZW50c1xuICogaW4gcGxhY2UuXG4gKlxuICogQGZ1bmN0aW9uIG9uUGxheWVyUmVhZHlcbiAqIEBwYXJhbSAgICB7UGxheWVyfSBwbGF5ZXJcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqL1xuY29uc3Qgb25QbGF5ZXJSZWFkeSA9IChwbGF5ZXIsIG9wdGlvbnMpID0+IHtcbiAgcGxheWVyLmFkZENsYXNzKCd2anMtbGl2ZS1jYXJkJyk7XG4gIFxuICBsZXQgbW9kYWwgPSBuZXcgTGl2ZUNhcmRNb2RhbChwbGF5ZXIsIHtcbiAgICBsYWJlbDogcGxheWVyLmxvY2FsaXplKCdMaXZlIEVycm9yIENhcmQnKSxcbiAgICB0ZW1wb3Jhcnk6IGZhbHNlLFxuICAgIHVuY2xvc2VhYmxlOiB0cnVlLFxuICAgIGltYWdlVXJsOiBvcHRpb25zLmltYWdlVXJsLFxuICAgIGhvbGRUZXh0OiBvcHRpb25zLmhvbGRUZXh0XG4gIH0pO1xuICBcbiAgcGxheWVyLmxpdmVDYXJkTW9kYWwgPSBtb2RhbDtcblxuICBwbGF5ZXIuYWRkQ2hpbGQobW9kYWwpO1xufTtcblxuLyoqXG4gKiBBIHZpZGVvLmpzIHBsdWdpblxuICpcbiAqIEluIHRoZSBwbHVnaW4gZnVuY3Rpb24sIHRoZSB2YWx1ZSBvZiBgdGhpc2AgaXMgYSB2aWRlby5qcyBgUGxheWVyYFxuICogaW5zdGFuY2UuIFlvdSBjYW5ub3QgcmVseSBvbiB0aGUgcGxheWVyIGJlaW5nIGluIGEgXCJyZWFkeVwiIHN0YXRlIGhlcmUsXG4gKiBkZXBlbmRpbmcgb24gaG93IHRoZSBwbHVnaW4gaXMgaW52b2tlZC4gVGhpcyBtYXkgb3IgbWF5IG5vdCBiZSBpbXBvcnRhbnRcbiAqIHRvIHlvdTsgaWYgbm90LCByZW1vdmUgdGhlIHdhaXQgZm9yIFwicmVhZHlcIiFcbiAqXG4gKiBAZnVuY3Rpb24gbGl2ZUNhcmRcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqICAgICAgICAgICBBbiBvYmplY3Qgb2Ygb3B0aW9ucyBsZWZ0IHRvIHRoZSBwbHVnaW4gYXV0aG9yIHRvIGRlZmluZS5cbiAqL1xuY29uc3QgbGl2ZUNhcmQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHRoaXMucmVhZHkoKCkgPT4ge1xuICAgIG9uUGxheWVyUmVhZHkodGhpcywgdmlkZW9qcy5tZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpKTtcbiAgfSk7XG59O1xuXG4vLyBSZWdpc3RlciB0aGUgcGx1Z2luIHdpdGggdmlkZW8uanMuXG52aWRlb2pzLnBsdWdpbignbGl2ZUNhcmQnLCBsaXZlQ2FyZCk7XG5cbi8vIEluY2x1ZGUgdGhlIHZlcnNpb24gbnVtYmVyLlxubGl2ZUNhcmQuVkVSU0lPTiA9ICdfX1ZFUlNJT05fXyc7XG5cbmV4cG9ydCBkZWZhdWx0IGxpdmVDYXJkO1xuIl19
