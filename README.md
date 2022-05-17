Demo Mongo Sharded Cluster with Docker Compose
=========================================

### Mongo Components

* Config Server (3 member replica set): `configsvr01`,`configsvr02`,`configsvr03`
* 3 Shards (each a 3 member `PSS` replica set):
	* `shard01-a`,`shard01-b`, `shard01-c`
	* `shard02-a`,`shard02-b`, `shard02-c`
	* `shard03-a`,`shard03-b`, `shard03-c`
* 2 Routers (mongos): `router01`, `router02`

<img src="https://raw.githubusercontent.com/minhhungit/mongodb-cluster-docker-compose/master/images/sharding-and-replica-sets.png" style="width: 100%;" />

### Setup
- **Step 1: Start all of the containers**

```bash
docker-compose up -d
```

- **Step 2: Initialize the replica sets (config servers and shards) and routers**

```bash
docker-compose exec configsvr01 sh -c "mongo < /scripts/init-configserver.js"

docker-compose exec shard01-a sh -c "mongo < /scripts/init-shard01.js"
docker-compose exec shard02-a sh -c "mongo < /scripts/init-shard02.js"
docker-compose exec shard03-a sh -c "mongo < /scripts/init-shard03.js"
```

- **Step 3: Initializing the router**

```bash
docker-compose exec router01 sh -c "mongo < /scripts/init-router.js"
```

- **Step 4: Enable sharding and setup sharding-key**
```bash
docker-compose exec router01 mongo --port 27017

// Enable sharding for database `MyDatabase`
sh.enableSharding("MyDatabase")

// Setup shardingKey for collection `MyCollection`**
db.adminCommand( { shardCollection: "MyDatabase.MyCollection", key: { supplierId: "hashed" } } )

```

>Done! but before you start inserting data you should verify them first

### Verify

- **Verify the status of the sharded cluster**

```bash
docker-compose exec router01 mongo --port 27017
sh.status()
```

- **Verify status of replica set for each shard**
> You should see 1 PRIMARY, 2 SECONDARY

```bash
docker exec -it rydell-shard-01-node-a bash -c "echo 'rs.status()' | mongo --port 27017" 
docker exec -it rydell-shard-02-node-a bash -c "echo 'rs.status()' | mongo --port 27017" 
docker exec -it rydell-shard-03-node-a bash -c "echo 'rs.status()' | mongo --port 27017" 
```

- **Check database status**
```bash
docker-compose exec router01 mongo --port 27017
use MyDatabase
db.stats()
db.MyCollection.getShardDistribution()
```

### More commands

```bash
docker exec -it rydell-mongo-config-01 bash -c "echo 'rs.status()' | mongo --port 27017"


docker exec -it rydell-shard-01-node-a bash -c "echo 'rs.help()' | mongo --port 27017"
docker exec -it rydell-shard-01-node-a bash -c "echo 'rs.status()' | mongo --port 27017" 
docker exec -it rydell-shard-01-node-a bash -c "echo 'rs.printReplicationInfo()' | mongo --port 27017" 
docker exec -it rydell-shard-01-node-a bash -c "echo 'rs.printSlaveReplicationInfo()' | mongo --port 27017"
```

---

### Normal Startup
The cluster only has to be initialized on the first run. Subsequent startup can be achieved simply with `docker-compose up` or `docker-compose up -d`

### Resetting the Cluster
To remove all data and re-initialize the cluster, make sure the containers are stopped and then:

```bash
docker-compose rm
```

### Clean up docker-compose
```bash
docker-compose down -v --rmi all --remove-orphans
```

Execute the **First Run** instructions again.