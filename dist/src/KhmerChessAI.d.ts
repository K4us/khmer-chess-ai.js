import { KhmerChess } from 'khmer-chess';
export declare type MoveProp = {
    fromIndex: number;
    toIndex: number;
};
export declare type Option = {
    khmerChess?: KhmerChess;
    turn: string;
};
export default class KhmerChessAI {
    static turnColors: {
        black: string;
        white: string;
    };
    static title: string;
    static version: string;
    khmerChess: KhmerChess;
    turn: string;
    constructor({ khmerChess, turn }: Option);
    get isAITurn(): boolean;
    pickRandomItem<T>(arr: T[]): T | null;
    attemptMove(): MoveProp | null;
}
