'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJs = require('video.js');

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
 * A video.js plugin.
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
liveCard.VERSION = '__VERSION__';

exports['default'] = liveCard;
module.exports = exports['default'];