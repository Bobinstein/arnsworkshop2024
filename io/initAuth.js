const { IO, ArweaveSigner } = require("@ar.io/sdk");
const fs = require("fs");

const jwk = JSON.parse(fs.readFileSync("../KeyFile.json"));

const io = IO.init({
  signer: new ArweaveSigner(jwk),
});
console.log(io);

//import {IO, ArConnectSigner} from "@ar.io/sdk/web"

// async function InitAuthWeb() {
//   await window.arweaveWallet.connect([
//     "ACCESS_ADDRESS",
//     "SIGN_TRANSACTION",
//     "ACCESS_PUBLIC_KEY",
//     "SIGNATURE",
//   ]);

//   const io = IO.init({
//     signer: new ArconnectSigner(window.arweaveWallet),
//   });

//   console.log(io);
// }
