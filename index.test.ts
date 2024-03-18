import { getUSDTBalance } from './index';

describe('USDT Balance Retrieval', () => {
    it('should retrieve the USDT balance of a given address', async () => {
        const address = '0x69a64bC34820899AFABa140Bfb6721A922818A7F'; 
        const usdtBalance = await getUSDTBalance(address);
        expect(usdtBalance).toBeGreaterThanOrEqual(0);
    });

    // ... 
});
