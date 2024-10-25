const {IO} = require("@ar.io/sdk")

async function getInfo(){

    const io = IO.init()
    const info = await io.getInfo()

    console.log(info)
}

getInfo()