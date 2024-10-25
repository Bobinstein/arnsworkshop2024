const { ANT, ArweaveSigner } = require("@ar.io/sdk");
const fs = require("fs");

const jwk = JSON.parse(fs.readFileSync("../KeyFile.json"));

const ant = ANT.init({
  processId: "Pd1ZsBrv-AIbBHQIPfOAzabwcH0oB0zWNfzuLFP8aFg",
  signer: new ArweaveSigner(jwk),
});

console.log(ant);

//import {ANT, ArConnectSigner} from "@ar.io/sdk/web"

// async function InitAuthWeb() {
//   await window.arweaveWallet.connect([
//     "ACCESS_ADDRESS",
//     "SIGN_TRANSACTION",
//     "ACCESS_PUBLIC_KEY",
//     "SIGNATURE",
//   ]);

//   const ant = ANT.init({
//     processId: 'Pd1ZsBrv-AIbBHQIPfOAzabwcH0oB0zWNfzuLFP8aFg',
//     signer: new ArconnectSigner(window.arweaveWallet),
//   });

//   console.log(ant);
// }
