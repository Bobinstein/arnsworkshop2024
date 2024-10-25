const { ANT, ArweaveSigner } = require("@ar.io/sdk");
const fs = require("fs");

const jwk = JSON.parse(fs.readFileSync("../KeyFile.json"));

const ant = ANT.init({
  processId: "Pd1ZsBrv-AIbBHQIPfOAzabwcH0oB0zWNfzuLFP8aFg",
  signer: new ArweaveSigner(jwk),
});

async function setRecord(){
    const newRecord = await ant.setRecord({
        undername: 'new-record',
        transactionId: "MoamLpM81d_4-tfGmibmEBS7ObkNvfCwDyraOyb7SAE",
        ttlSeconds: 900
    })

    console.log(newRecord)
}

setRecord()