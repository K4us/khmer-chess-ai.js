import { KhmerChess } from 'khmer-chess';
export default class KhmerChessAI {
    static title: string;
    static version: string;
    khmerChess: KhmerChess;
    turn: string;
    constructor(khmerChess: KhmerChess);
    takeTurn(turn: string): void;
    pickRandomItem<T>(arr: T[]): T | null;
    attemptMove(): {
        fromIndex: number;
        toIndex: number;
    } | null;
}
