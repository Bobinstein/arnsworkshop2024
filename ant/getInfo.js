const {ANT} = require("@ar.io/sdk")

const ant = ANT.init({
    processId: 'Pd1ZsBrv-AIbBHQIPfOAzabwcH0oB0zWNfzuLFP8aFg'
})

async function getInfo(){
    const info = await ant.getInfo()

    console.log(info)
}

getInfo()