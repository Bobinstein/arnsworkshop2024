const {ANT} = require("@ar.io/sdk")

const ant = ANT.init({
    processId: 'Pd1ZsBrv-AIbBHQIPfOAzabwcH0oB0zWNfzuLFP8aFg'
})

async function getOwner(){
    const info = await ant.getOwner()

    console.log(info)
}

getOwner()