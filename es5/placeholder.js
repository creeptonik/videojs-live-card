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

var _videoJs = require('video.js');

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
    this.on(player, 'error', this.open);
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