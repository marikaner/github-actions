import { getNewResult } from '../src/lotto';

describe('test lotto.ts ', () => {
    it('test length', async ()  => {
        expect(getNewResult()).toHaveLength(6);
    });

    it('test random', async ()  => {
        expect(getNewResult()).not.toEqual(getNewResult());
    });
});
