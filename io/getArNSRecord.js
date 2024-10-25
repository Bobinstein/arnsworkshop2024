const {IO} = require("@ar.io/sdk")

async function getRecord(){

    const io = IO.init()

    const record = await io.getArNSRecord({name: "bobinstein"})
    console.log(record)

}

getRecord()