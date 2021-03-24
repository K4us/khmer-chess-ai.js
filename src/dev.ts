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

import KhmerChessAI from './KhmerChessAI';
import KhmerChessBoard from 'khmer-chess-board';
import { BoardEvent, PIECE_COLOR_BLACK } from 'khmer-chess';

const container = document.getElementById('board-container');

const kcb = new KhmerChessBoard();
kcb.setOptions({
    width: 600,
    container: container,
});
kcb.soundManager.enable();

const khmerChessAI = new KhmerChessAI(kcb.khmerChess);
khmerChessAI.takeTurn(PIECE_COLOR_BLACK);

kcb.boardManager.addOnChangeTurnEventListener(() => {
    const result = khmerChessAI.attemptMove();
    if (result) {
        kcb.move(result.fromIndex, result.toIndex);
    }
});

kcb.khmerChess.addBoardEventListener((boardEvent: BoardEvent) => {
    if (boardEvent.isWin) {
        const cell = kcb.boardManager.get(boardEvent.actorPieceIndex.point.index);
        const king = kcb.boardManager.getKing(cell.piece.color);
        alert(`${king.piece.title} wins`);
    }
});

kcb.start();

const toFullScreen = () => {
    const fullscreen = document.createElement('button');
    fullscreen.innerText = 'Full Screen';
    document.body.appendChild(fullscreen);
    fullscreen.onclick = () => {
        document.documentElement.requestFullscreen().then(() => {
            kcb.setFullScreen(true);
        });
    };

    document.addEventListener('fullscreenchange', (event) => {
        if (!document.fullscreenElement) {
            kcb.setFullScreen(false);
        }
    });

};
toFullScreen();

(window as any).kcb = kcb;
