rs.initiate(
    { 
        _id: "shard-02-rs", 
        version: 1, 
        members: [
            { 
                _id: 0, 
                host: "shard02-a:27017" 
            }, { 
                _id: 1, 
                host: "shard02-b:27017" 
            }, { 
                _id: 2, 
                host: "shard02-c:27017" 
            },
        ] 
    }
)
