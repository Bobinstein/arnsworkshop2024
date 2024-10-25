const {ANT} = require("@ar.io/sdk")

const ant = ANT.init({
    processId: 'Pd1ZsBrv-AIbBHQIPfOAzabwcH0oB0zWNfzuLFP8aFg'
})

async function getControllers(){
    const info = await ant.getControllers()

    console.log(info)
}

getControllers()