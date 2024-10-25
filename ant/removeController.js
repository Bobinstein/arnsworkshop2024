const { ANT, ArweaveSigner } = require("@ar.io/sdk");
const fs = require("fs");

const jwk = JSON.parse(fs.readFileSync("../KeyFile.json"));

const ant = ANT.init({
  processId: "Pd1ZsBrv-AIbBHQIPfOAzabwcH0oB0zWNfzuLFP8aFg",
  signer: new ArweaveSigner(jwk),
});

async function removeController() {
  const result = await ant.removeController({
    controller: "pZkvXGaicIvbxLRM7PiiO3AV-F3dQbas-Vp7sH71xOE",
  });
  console.log(result)
}


removeController()