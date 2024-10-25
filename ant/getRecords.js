const {ANT} = require("@ar.io/sdk")

const ant = ANT.init({
    processId: 'Pd1ZsBrv-AIbBHQIPfOAzabwcH0oB0zWNfzuLFP8aFg'
})

async function getRecords(){
    const info = await ant.getRecords()

    console.log(info)
}

getRecords()