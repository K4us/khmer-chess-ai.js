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

_defineProperty(KhmerChessAI, "title", _package["default"].name);

_defineProperty(KhmerChessAI, "version", _package["default"].version);

console.log("".concat(_khmerChess.KhmerChess.title, ":").concat(_khmerChess.KhmerChess.version, " + ").concat(KhmerChessAI.title, ":").concat(KhmerChessAI.version));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9LaG1lckNoZXNzQUkudHMiXSwibmFtZXMiOlsiS2htZXJDaGVzc0FJIiwia2htZXJDaGVzcyIsInR1cm4iLCJhcnIiLCJsZW5ndGgiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGllY2VJbmRpY2VzIiwiZ2V0Q2FuTW92ZXMiLCJwaWNrSW5kZXgiLCJwaWNrUmFuZG9tSXRlbSIsInBpY2siLCJjYW5Nb3ZlUG9pbnRzIiwiZnJvbUluZGV4IiwicG9pbnQiLCJpbmRleCIsInRvSW5kZXgiLCJjb25maWciLCJuYW1lIiwidmVyc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJLaG1lckNoZXNzIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUEyQkE7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTtBQUtuQix3QkFBWUMsVUFBWixFQUFvQztBQUFBOztBQUFBOztBQUFBOztBQUNsQyxTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7O1dBQ0Qsa0JBQVNDLElBQVQsRUFBdUI7QUFDckIsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OztXQUNELHdCQUFrQkMsR0FBbEIsRUFBc0M7QUFDcEMsVUFBSSxDQUFDQSxHQUFHLENBQUNDLE1BQVQsRUFBaUI7QUFDZixlQUFPLElBQVA7QUFDRDs7QUFDRCxVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JMLEdBQUcsQ0FBQ0MsTUFBL0IsQ0FBYjtBQUNBLGFBQU9ELEdBQUcsQ0FBQ0UsSUFBRCxDQUFWO0FBQ0Q7OztXQUNELHVCQUE2RDtBQUMzRCxVQUFJLEtBQUtKLFVBQUwsQ0FBZ0JDLElBQWhCLEtBQXlCLEtBQUtBLElBQWxDLEVBQXdDO0FBQ3RDLFlBQU1PLFlBQVksR0FBRyxLQUFLUixVQUFMLENBQWdCUyxXQUFoQixFQUFyQjtBQUNBLFlBQU1DLFNBQVMsR0FBRyxLQUFLQyxjQUFMLENBQW9CSCxZQUFwQixDQUFsQjs7QUFDQSxZQUFJRSxTQUFKLEVBQWU7QUFDYixjQUFNRSxJQUFJLEdBQUcsS0FBS0QsY0FBTCxDQUFvQkQsU0FBUyxDQUFDRyxhQUE5QixDQUFiO0FBQ0EsaUJBQU87QUFDTEMsWUFBQUEsU0FBUyxFQUFFSixTQUFTLENBQUNLLEtBQVYsQ0FBZ0JDLEtBRHRCO0FBRUxDLFlBQUFBLE9BQU8sRUFBRUwsSUFBSSxDQUFDSTtBQUZULFdBQVA7QUFJRDtBQUNGOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7Ozs7OztnQkEvQmtCakIsWSxXQUNKbUIsb0JBQU9DLEk7O2dCQURIcEIsWSxhQUVGbUIsb0JBQU9FLE87O0FBZ0MxQkMsT0FBTyxDQUFDQyxHQUFSLFdBQWVDLHVCQUFXQyxLQUExQixjQUFtQ0QsdUJBQVdILE9BQTlDLGdCQUEyRHJCLFlBQVksQ0FBQ3lCLEtBQXhFLGNBQWlGekIsWUFBWSxDQUFDcUIsT0FBOUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDIxLCBLNHVzXG4gKiBBdXRob3I6IFJha3NhIEVuZyA8ZW5nLnJha3NhQGdtYWlsLmNvbT5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogICAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuICogICAgYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkVcbiAqIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiAqIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4gKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiAqIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4gKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuaW1wb3J0IHsgS2htZXJDaGVzcyB9IGZyb20gJ2tobWVyLWNoZXNzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2htZXJDaGVzc0FJIHtcbiAgc3RhdGljIHRpdGxlID0gY29uZmlnLm5hbWU7XG4gIHN0YXRpYyB2ZXJzaW9uID0gY29uZmlnLnZlcnNpb247XG4gIGtobWVyQ2hlc3M6IEtobWVyQ2hlc3M7XG4gIHR1cm46IHN0cmluZztcbiAgY29uc3RydWN0b3Ioa2htZXJDaGVzczogS2htZXJDaGVzcykge1xuICAgIHRoaXMua2htZXJDaGVzcyA9IGtobWVyQ2hlc3M7XG4gIH1cbiAgdGFrZVR1cm4odHVybjogc3RyaW5nKSB7XG4gICAgdGhpcy50dXJuID0gdHVybjtcbiAgfVxuICBwaWNrUmFuZG9tSXRlbTxUPihhcnI6IFRbXSk6IFQgfCBudWxsIHtcbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgcmV0dXJuIGFycltyYW5kXTtcbiAgfVxuICBhdHRlbXB0TW92ZSgpOiB7IGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIgfSB8IG51bGwge1xuICAgIGlmICh0aGlzLmtobWVyQ2hlc3MudHVybiA9PT0gdGhpcy50dXJuKSB7XG4gICAgICBjb25zdCBwaWVjZUluZGljZXMgPSB0aGlzLmtobWVyQ2hlc3MuZ2V0Q2FuTW92ZXMoKTtcbiAgICAgIGNvbnN0IHBpY2tJbmRleCA9IHRoaXMucGlja1JhbmRvbUl0ZW0ocGllY2VJbmRpY2VzKTtcbiAgICAgIGlmIChwaWNrSW5kZXgpIHtcbiAgICAgICAgY29uc3QgcGljayA9IHRoaXMucGlja1JhbmRvbUl0ZW0ocGlja0luZGV4LmNhbk1vdmVQb2ludHMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZyb21JbmRleDogcGlja0luZGV4LnBvaW50LmluZGV4LFxuICAgICAgICAgIHRvSW5kZXg6IHBpY2suaW5kZXgsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNvbnNvbGUubG9nKGAke0tobWVyQ2hlc3MudGl0bGV9OiR7S2htZXJDaGVzcy52ZXJzaW9ufSArICR7S2htZXJDaGVzc0FJLnRpdGxlfToke0tobWVyQ2hlc3NBSS52ZXJzaW9ufWApOyJdfQ==