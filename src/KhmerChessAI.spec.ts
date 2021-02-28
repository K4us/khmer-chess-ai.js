import { KhmerChess } from 'khmer-chess';
import KhmerChessAI from './KhmerChessAI';

describe('Greeter', () => {
    it('should greet', () => {
        spyOn(console, 'log');
        new KhmerChessAI(new KhmerChess());
        expect(console.log).toHaveBeenCalled();
    });
});
