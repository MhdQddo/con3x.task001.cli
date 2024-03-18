import { ethers } from 'ethers';

// Function to fetch the last block number of the Ethereum mainnet
export async function getLastBlockNumber(): Promise<number> {
    const provider = new ethers.InfuraProvider('mainnet');
    const blockNumber = await provider.getBlockNumber();
    return blockNumber;
}

// Function to fetch USDT balance of a provided Ethereum address
export async function getUSDTBalance(address: string): Promise<number> {
    const contractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7'; // USDT contract address
    const abi = ['function balanceOf(address) view returns (uint)'];
    const provider = new ethers.InfuraProvider('mainnet');
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const balance = await contract.balanceOf(address);
    return Number(balance);
}

// Main function to execute the command-line app
async function main() {
    try {
        // Get the last block number
        const lastBlockNumber = await getLastBlockNumber();
        console.log('Last Ethereum mainnet block number:', lastBlockNumber);

        // Example address for USDT balance
        // const address = '0x69a64bC34820899AFABa140Bfb6721A922818A7F';
        const address = process.argv[2];
        if (!address) {
            console.error('Please provide an Ethereum address as a command-line argument.');
            return;
        }
        const usdtBalance = await getUSDTBalance(address);
        console.log('USDT Balance of', address, ':', usdtBalance);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Execute the main function if the script is executed directly
if (require.main === module) {
    main();
}
