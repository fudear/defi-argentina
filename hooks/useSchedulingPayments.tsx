import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { ClockworkProvider, PAYER_PUBKEY } from "@clockwork-xyz/sdk";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Wallet } from "@coral-xyz/anchor";

const useSchedulingPayments = () => {
  const { connection } = useConnection()

  const { wallet, publicKey } = useWallet()
  const anchorWallet = useAnchorWallet();


  const schedulePayment = async () => {

    if (!publicKey) return;

    // Prepare clockworkProvider
    const provider = new anchor.AnchorProvider(
      connection,
      anchorWallet as Wallet,
      anchor.AnchorProvider.defaultOptions()
    );

    const clockworkProvider = ClockworkProvider.fromAnchorProvider(provider);

    const threadId = "sol_transferjs" + new Date().getTime();
    const [threadAddress] = clockworkProvider.getThreadPDA(
      publicKey,   // authority
      threadId
    )

    const DEFI_ARGENTINA_WALLET = 'Czg6VvevGUWgeEiwLZE8cnQdV8u4cuvAgJw9TcQ5HZ3g'

    const recipient = new PublicKey(DEFI_ARGENTINA_WALLET)
    console.log(`🫴  recipient: ${recipient.toString()}\n`);


    // 1️⃣  Prepare an instruction to be automated.
    const transferIx = SystemProgram.transfer({
      fromPubkey: PAYER_PUBKEY,
      toPubkey: recipient,
      lamports: LAMPORTS_PER_SOL / 25,
    });

    // 2️⃣  Define a trigger condition.
    const trigger = {
      cron: {
        schedule: "*/10 * * * * * *",
        skippable: true,
      },
    };

    // 3️⃣ Create the thread.
    const ix = await clockworkProvider.threadCreate(
      publicKey,           // authority
      threadId,                  // id
      [transferIx],              // instructions
      trigger,                   // trigger
      LAMPORTS_PER_SOL,      // amount to fund the thread with
    );
    const tx = new Transaction().add(ix);

    console.log(tx)
    const sig = await clockworkProvider.anchorProvider.sendAndConfirm(tx);
    console.log(`Thread created: ${sig}`);


    console.log(`🗺️  explorer: https://app.clockwork.xyz/threads/${threadAddress}?cluster=custom&customUrl=${connection.rpcEndpoint}\n`);

    // // Check balance of recipient address
    // await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
    // let balance = await connection?.getBalance(recipient) / LAMPORTS_PER_SOL;
    // console.log(`✅ recipient balance: ${balance} SOL\n`);
  }

  return { schedulePayment }

}

export default useSchedulingPayments;