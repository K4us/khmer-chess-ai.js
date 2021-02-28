"use strict";

var _khmerChess = require("khmer-chess");

var _KhmerChessAI = _interopRequireDefault(require("./KhmerChessAI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Greeter', function () {
  it('should greet', function () {
    spyOn(console, 'log');
    new _KhmerChessAI["default"](new _khmerChess.KhmerChess());
    expect(console.log).toHaveBeenCalled();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9LaG1lckNoZXNzQUkuc3BlYy50cyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0Iiwic3B5T24iLCJjb25zb2xlIiwiS2htZXJDaGVzc0FJIiwiS2htZXJDaGVzcyIsImV4cGVjdCIsImxvZyIsInRvSGF2ZUJlZW5DYWxsZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFFQUEsUUFBUSxDQUFDLFNBQUQsRUFBWSxZQUFNO0FBQ3RCQyxFQUFBQSxFQUFFLENBQUMsY0FBRCxFQUFpQixZQUFNO0FBQ3JCQyxJQUFBQSxLQUFLLENBQUNDLE9BQUQsRUFBVSxLQUFWLENBQUw7QUFDQSxRQUFJQyx3QkFBSixDQUFpQixJQUFJQyxzQkFBSixFQUFqQjtBQUNBQyxJQUFBQSxNQUFNLENBQUNILE9BQU8sQ0FBQ0ksR0FBVCxDQUFOLENBQW9CQyxnQkFBcEI7QUFDSCxHQUpDLENBQUY7QUFLSCxDQU5PLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLaG1lckNoZXNzIH0gZnJvbSAna2htZXItY2hlc3MnO1xuaW1wb3J0IEtobWVyQ2hlc3NBSSBmcm9tICcuL0tobWVyQ2hlc3NBSSc7XG5cbmRlc2NyaWJlKCdHcmVldGVyJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgZ3JlZXQnLCAoKSA9PiB7XG4gICAgICAgIHNweU9uKGNvbnNvbGUsICdsb2cnKTtcbiAgICAgICAgbmV3IEtobWVyQ2hlc3NBSShuZXcgS2htZXJDaGVzcygpKTtcbiAgICAgICAgZXhwZWN0KGNvbnNvbGUubG9nKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG59KTtcbiJdfQ==