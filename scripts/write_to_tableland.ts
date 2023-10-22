import {ethers} from 'ethers';
import { Database } from "@tableland/sdk";
import { Wallet, getDefaultProvider } from "ethers";
import {config} from 'dotenv';
config();

const randomInt = (min: number = 1, max: number = 100000000000) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

async function main() {
    console.log('start');
    //const provider = new ethers.providers.InfuraProvider(process.env.SEPOLIA_RPC_URL, process.env.INFURA_API_KEY);

    const privateKey = process.env.PRIVATE_KEY_FOR_TABLELAND!;
    const wallet = new Wallet(privateKey);
    // To avoid connecting to the browser wallet (locally, port 8545).
    // For example: "https://polygon-mumbai.g.alchemy.com/v2/YOUR_ALCHEMY_KEY"
    //const provider = getDefaultProvider(process.env.SEPOLIA_RPC_URL, {infura: process.env.INFURA_API_KEY});
    const provider = new ethers.providers.InfuraProvider(
        "sepolia",
        process.env.INFURA_API_KEY,
      );

    const signer = wallet.connect(provider);
    // Connect to the database
    const db = new Database({ signer });

    // Insert a row into the table
    const tableName = 'campaigns_11155111_301';
    
    // ToDo - Note that the command below might throw a ReferenceError. Note however that row gets added to DB ()
    // Catch that on the fr
    const { meta: insert } = await db
        .prepare(`INSERT INTO ${tableName} (id, campaign_name, amount_dai, start_date, end_date) 
        VALUES (?,?,?,?,? );`)
        .bind(randomInt(), "test_campaign","10_000_000_000_000_000_000",new Date().toISOString(),"2024-01-02 00:00:00" )
        .run();

    // Wait for transaction finality
    await insert.txn?.wait();

    console.log('end');
}

main();