"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _khmerChess = require("khmer-chess");

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KhmerChessAI = /*#__PURE__*/function () {
  function KhmerChessAI(khmerChess) {
    _classCallCheck(this, KhmerChessAI);

    _defineProperty(this, "khmerChess", void 0);

    _defineProperty(this, "turn", void 0);

    this.khmerChess = khmerChess;
  }

  _createClass(KhmerChessAI, [{
    key: "takeTurn",
    value: function takeTurn(turn) {
      this.turn = turn;
    }
  }, {
    key: "pickRandomItem",
    value: function pickRandomItem(arr) {
      if (!arr.length) {
        return null;
      }

      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    }
  }, {
    key: "attemptMove",
    value: function attemptMove() {
      if (this.khmerChess.turn === this.turn) {
        var pieceIndices = this.khmerChess.getCanMoves();
        var pickIndex = this.pickRandomItem(pieceIndices);

        if (pickIndex) {
          var pick = this.pickRandomItem(pickIndex.canMovePoints);
          return {
            fromIndex: pickIndex.point.index,
            toIndex: pick.index
          };
        }
      }

      return null;
    }
  }]);

  return KhmerChessAI;
}();

exports["default"] = KhmerChessAI;

_defineProperty(KhmerChessAI, "turnColors", {
  black: _khmerChess.PIECE_COLOR_BLACK,
  white: _khmerChess.PIECE_COLOR_WHITE
});

_defineProperty(KhmerChessAI, "title", _package["default"].name);

_defineProperty(KhmerChessAI, "version", _package["default"].version);

console.log("".concat(_khmerChess.KhmerChess.title, ":").concat(_khmerChess.KhmerChess.version, " + ").concat(KhmerChessAI.title, ":").concat(KhmerChessAI.version));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9LaG1lckNoZXNzQUkudHMiXSwibmFtZXMiOlsiS2htZXJDaGVzc0FJIiwia2htZXJDaGVzcyIsInR1cm4iLCJhcnIiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGllY2VJbmRpY2VzIiwiZ2V0Q2FuTW92ZXMiLCJwaWNrSW5kZXgiLCJwaWNrUmFuZG9tSXRlbSIsInBpY2siLCJjYW5Nb3ZlUG9pbnRzIiwiZnJvbUluZGV4IiwicG9pbnQiLCJpbmRleCIsInRvSW5kZXgiLCJibGFjayIsIlBJRUNFX0NPTE9SX0JMQUNLIiwid2hpdGUiLCJQSUVDRV9DT0xPUl9XSElURSIsImNvbmZpZyIsIm5hbWUiLCJ2ZXJzaW9uIiwiY29uc29sZSIsImxvZyIsIktobWVyQ2hlc3MiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQTJCQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZO0FBU25CLHdCQUFZQyxVQUFaLEVBQW9DO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2xDLFNBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7Ozs7V0FDRCxrQkFBU0MsSUFBVCxFQUF1QjtBQUNyQixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7O1dBQ0Qsd0JBQWtCQyxHQUFsQixFQUFzQztBQUNwQyxVQUFJLENBQUNBLEdBQUcsQ0FBQ0MsTUFBVCxFQUFpQjtBQUNmLGVBQU8sSUFBUDtBQUNEOztBQUNELFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsR0FBRyxDQUFDQyxNQUEvQixDQUFiO0FBQ0EsYUFBT0QsR0FBRyxDQUFDRSxJQUFELENBQVY7QUFDRDs7O1dBQ0QsdUJBQTZEO0FBQzNELFVBQUksS0FBS0osVUFBTCxDQUFnQkMsSUFBaEIsS0FBeUIsS0FBS0EsSUFBbEMsRUFBd0M7QUFDdEMsWUFBTU8sWUFBWSxHQUFHLEtBQUtSLFVBQUwsQ0FBZ0JTLFdBQWhCLEVBQXJCO0FBQ0EsWUFBTUMsU0FBUyxHQUFHLEtBQUtDLGNBQUwsQ0FBb0JILFlBQXBCLENBQWxCOztBQUNBLFlBQUlFLFNBQUosRUFBZTtBQUNiLGNBQU1FLElBQUksR0FBRyxLQUFLRCxjQUFMLENBQW9CRCxTQUFTLENBQUNHLGFBQTlCLENBQWI7QUFDQSxpQkFBTztBQUNMQyxZQUFBQSxTQUFTLEVBQUVKLFNBQVMsQ0FBQ0ssS0FBVixDQUFnQkMsS0FEdEI7QUFFTEMsWUFBQUEsT0FBTyxFQUFFTCxJQUFJLENBQUNJO0FBRlQsV0FBUDtBQUlEO0FBQ0Y7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7Ozs7O2dCQW5Da0JqQixZLGdCQUNDO0FBQ2xCbUIsRUFBQUEsS0FBSyxFQUFFQyw2QkFEVztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFQztBQUZXLEM7O2dCQUREdEIsWSxXQUtKdUIsb0JBQU9DLEk7O2dCQUxIeEIsWSxhQU1GdUIsb0JBQU9FLE87O0FBZ0MxQkMsT0FBTyxDQUFDQyxHQUFSLFdBQWVDLHVCQUFXQyxLQUExQixjQUFtQ0QsdUJBQVdILE9BQTlDLGdCQUEyRHpCLFlBQVksQ0FBQzZCLEtBQXhFLGNBQWlGN0IsWUFBWSxDQUFDeUIsT0FBOUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDIxLCBLNHVzXG4gKiBBdXRob3I6IFJha3NhIEVuZyA8ZW5nLnJha3NhQGdtYWlsLmNvbT5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogICAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuICogICAgYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkVcbiAqIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiAqIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4gKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiAqIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4gKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuaW1wb3J0IHsgS2htZXJDaGVzcywgUElFQ0VfQ09MT1JfQkxBQ0ssIFBJRUNFX0NPTE9SX1dISVRFIH0gZnJvbSAna2htZXItY2hlc3MnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaG1lckNoZXNzQUkge1xuICBzdGF0aWMgdHVybkNvbG9ycyA9IHtcbiAgICBibGFjazogUElFQ0VfQ09MT1JfQkxBQ0ssXG4gICAgd2hpdGU6IFBJRUNFX0NPTE9SX1dISVRFLFxuICB9XG4gIHN0YXRpYyB0aXRsZSA9IGNvbmZpZy5uYW1lO1xuICBzdGF0aWMgdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uO1xuICBraG1lckNoZXNzOiBLaG1lckNoZXNzO1xuICB0dXJuOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGtobWVyQ2hlc3M6IEtobWVyQ2hlc3MpIHtcbiAgICB0aGlzLmtobWVyQ2hlc3MgPSBraG1lckNoZXNzO1xuICB9XG4gIHRha2VUdXJuKHR1cm46IHN0cmluZykge1xuICAgIHRoaXMudHVybiA9IHR1cm47XG4gIH1cbiAgcGlja1JhbmRvbUl0ZW08VD4oYXJyOiBUW10pOiBUIHwgbnVsbCB7XG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpO1xuICAgIHJldHVybiBhcnJbcmFuZF07XG4gIH1cbiAgYXR0ZW1wdE1vdmUoKTogeyBmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyIH0gfCBudWxsIHtcbiAgICBpZiAodGhpcy5raG1lckNoZXNzLnR1cm4gPT09IHRoaXMudHVybikge1xuICAgICAgY29uc3QgcGllY2VJbmRpY2VzID0gdGhpcy5raG1lckNoZXNzLmdldENhbk1vdmVzKCk7XG4gICAgICBjb25zdCBwaWNrSW5kZXggPSB0aGlzLnBpY2tSYW5kb21JdGVtKHBpZWNlSW5kaWNlcyk7XG4gICAgICBpZiAocGlja0luZGV4KSB7XG4gICAgICAgIGNvbnN0IHBpY2sgPSB0aGlzLnBpY2tSYW5kb21JdGVtKHBpY2tJbmRleC5jYW5Nb3ZlUG9pbnRzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmcm9tSW5kZXg6IHBpY2tJbmRleC5wb2ludC5pbmRleCxcbiAgICAgICAgICB0b0luZGV4OiBwaWNrLmluZGV4LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5jb25zb2xlLmxvZyhgJHtLaG1lckNoZXNzLnRpdGxlfToke0tobWVyQ2hlc3MudmVyc2lvbn0gKyAke0tobWVyQ2hlc3NBSS50aXRsZX06JHtLaG1lckNoZXNzQUkudmVyc2lvbn1gKTsiXX0=