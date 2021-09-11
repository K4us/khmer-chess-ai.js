/*
 * Copyright (c) 2021, K4us
 * Author: Raksa Eng <eng.raksa@gmail.com>
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
import {
  KhmerChess,
  PIECE_COLOR_BLACK,
  PIECE_COLOR_WHITE,
  PieceIndex,
} from 'khmer-chess';
import config from '../package.json';

export type MoveProp = {
  fromIndex: number,
  toIndex: number
};

export default class KhmerChessAI {
  static turnColors = {
    black: PIECE_COLOR_BLACK,
    white: PIECE_COLOR_WHITE,
  }
  static title = config.name;
  static version = config.version;
  khmerChess: KhmerChess;
  turn: string;
  constructor(khmerChess: KhmerChess, turn: string) {
    this.khmerChess = khmerChess;
    this.turn = turn;
  }
  get isAITurn() {
    return this.khmerChess.turn === this.turn;
  }
  pickRandomItem<T>(arr: T[]): T | null {
    if (!arr.length) {
      return null;
    }
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  attemptMove(): MoveProp | null {
    if (this.khmerChess.turn === this.turn) {
      const pieceIndices = this.khmerChess.getCanMoves();
      const pickIndex = this.pickRandomItem<PieceIndex>(pieceIndices);
      if (pickIndex) {
        const pick = this.pickRandomItem(pickIndex.canMovePoints);
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
  }
}

console.log(`${KhmerChess.title}:${KhmerChess.version} + ${KhmerChessAI.title}:${KhmerChessAI.version}`);