rs.initiate(
    { 
        _id: "shard-03-rs", 
        version: 1, 
        members: [
            { 
                _id: 0, 
                host: "shard03-a:27017" 
            }, { 
                _id: 1, 
                host: "shard03-b:27017" 
            }, { 
                _id: 2, 
                host: "shard03-c:27017" 
            },
        ] 
    }
)