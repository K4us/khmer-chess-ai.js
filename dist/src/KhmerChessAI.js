"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2021, K4us
 * Author: Raksa Eng <eng.raksa@gmail.com>, K4us Net k4us.net@gmail.com
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *---------------------------------------------------------------------------- */
var khmer_chess_1 = require("khmer-chess");
var package_json_1 = __importDefault(require("../package.json"));
var KhmerChessAI = /** @class */ (function () {
    function KhmerChessAI(_a) {
        var khmerChess = _a.khmerChess, turn = _a.turn;
        this.khmerChess = khmerChess ? khmerChess : new khmer_chess_1.KhmerChess();
        this.turn = turn;
    }
    Object.defineProperty(KhmerChessAI.prototype, "isAITurn", {
        get: function () {
            return this.khmerChess.turn === this.turn;
        },
        enumerable: false,
        configurable: true
    });
    KhmerChessAI.prototype.pickRandomItem = function (arr) {
        if (!arr.length) {
            return null;
        }
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    };
    KhmerChessAI.prototype.attemptMove = function () {
        if (this.khmerChess.turn === this.turn) {
            var pieceIndices = this.khmerChess.getCanMoves();
            var pickIndex = this.pickRandomItem(pieceIndices);
            if (pickIndex) {
                var pick = this.pickRandomItem(pickIndex.canMovePoints);
                if (!pick) {
                    return null;
                }
                return {
                    fromIndex: pickIndex.point.index,
                    toIndex: pick.index,
                };
            }
        }
        return null;
    };
    KhmerChessAI.turnColors = {
        black: khmer_chess_1.PIECE_COLOR_BLACK,
        white: khmer_chess_1.PIECE_COLOR_WHITE,
    };
    KhmerChessAI.title = package_json_1.default.name;
    KhmerChessAI.version = package_json_1.default.version;
    return KhmerChessAI;
}());
exports.default = KhmerChessAI;
console.log(khmer_chess_1.KhmerChess.title + ":" + khmer_chess_1.KhmerChess.version + " + " + KhmerChessAI.title + ":" + KhmerChessAI.version);
//# sourceMappingURL=KhmerChessAI.js.map