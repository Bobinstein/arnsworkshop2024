const {IO} = require("@ar.io/sdk")

  const io = IO.init()

async function getRecords(){

    const records = await io.getArNSRecords({
        limit: 25,
        sortBy: "startTimestamp",
        sortOrder: "asc"
    })
    console.log(records)
    getNextPage(records.nextCursor)
}

async function getNextPage(cursor){

    const nextPage = await io.getArNSRecords({
        cursor: cursor,
        limit: 5,
        sortBy: "endTimestamp",
        sortOrder: "desc"
    })
    console.log(nextPage)
}

getRecords()