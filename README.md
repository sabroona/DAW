Mongo Sharded Cluster with Docker
=========================================

### Mongo Components

* Config Server: `configsvr`
* 3 Shards (each a 3 member `PSS` replica set):
	* `shard-01-rs-a`,`shard-01-rs-b`, `shard-01-rs-c`
	* `shard-02-rs-a`,`shard-02-rs-b`, `shard-02-rs-c`
	* `shard-03-rs-a`,`shard-03-rs-b`, `shard-03-rs-c`
* Router (mongos): `router01`

<img src="" style="width: 100%;" />

### Setup
- **Step 1: Start all of the containers**

```bash
docker-compose up -d
```

- **Step 2: Initialize the replica sets (config server and shards) and router**

```bash
docker exec mongo-config-server sh -c "mongo < /scripts/init-configserver.js"

docker exec shard-01-rs-a sh -c "mongo < /scripts/init-shard01.js"
docker exec shard-02-rs-a sh -c "mongo < /scripts/init-shard02.js"
docker exec shard-03-rs-a sh -c "mongo < /scripts/init-shard03.js"
```

- **Step 3: Initializing the router**

```bash
docker exec router-01 sh -c "mongo < /scripts/init-router.js"
```

- **Step 4: Enable sharding and setup sharding-key**
```bash
docker exec -it router-01 bash
mongo
use database

// Enable sharding for database `database`
sh.enableSharding("database")

// Setup shardingKey for collection `collection`**
db.adminCommand( { shardCollection: "database.collection", key: { type: "hashed" } } )

```

### Verify

- **Verify the status of the sharded cluster**

```bash
docker exec -it router-01 bash
mongo
use database
sh.status()
```

- **Verify status of replica set for each shard**
> see 1 PRIMARY, 2 SECONDARY

```bash
docker exec -it shard-01-rs-a bash -c "echo 'rs.status()' | mongo --port 27017" 
docker exec -it shard-02-rs-a bash -c "echo 'rs.status()' | mongo --port 27017" 
docker exec -it shard-03-rs-a bash -c "echo 'rs.status()' | mongo --port 27017" 
```

- **Check database status**
```bash
docker exec -it router-01 bash
mongo
use database
db.stats()
db.collection.getShardDistribution()
```

### More commands

```bash
docker exec -it mongo-config-server bash -c "echo 'rs.status()' | mongo --port 27017"


docker exec -it shard-01-rs-a bash -c "echo 'rs.help()' | mongo --port 27017"
docker exec -it shard-01-rs-a bash -c "echo 'rs.status()' | mongo --port 27017" 
docker exec -it shard-01-rs-a bash -c "echo 'rs.printReplicationInfo()' | mongo --port 27017" 
docker exec -it shard-01-rs-a bash -c "echo 'rs.printSlaveReplicationInfo()' | mongo --port 27017"
```

---
