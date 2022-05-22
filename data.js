db.collection.insertMany([
        { title: 'Spaghetti',  type: 'Essen'},
        { title: 'Tomate',  type: 'Essen'},
        { title: 'Joghurt',  type: 'Essen'},
        { title: 'Gurke',  type: 'Essen'},
        { title: 'Sellerie',  type: 'Essen'},
        { title: 'Schokolade',  type: 'Essen'},
        { title: 'Hummus',  type: 'Essen'},
        { title: 'Birne',  type: 'Essen'},
        { title: 'Melone',  type: 'Essen'},
        { title: 'Kaffee',  type: 'Essen'},

        { title: 'Tischtennis',  type: 'Hobby'},
        { title: 'Schwimmen',  type: 'Hobby'},
        { title: 'Fussball',  type: 'Hobby'},
        { title: 'Basketball',  type: 'Hobby'},
        { title: 'Ballett',  type: 'Hobby'},
        { title: 'Handball',  type: 'Hobby'},
        { title: 'Rugby',  type: 'Hobby'},
        { title: 'Golf',  type: 'Hobby'},
        { title: 'Hürdenlauf',  type: 'Hobby'},
        { title: 'Stabhochsprung',  type: 'Hobby'},

        { title: 'Jonas',  type: 'Person'},
        { title: 'Yannik',  type: 'Person'},
        { title: 'Hans',  type: 'Person'},
        { title: 'Regine',  type: 'Person'},
        { title: 'Angelika',  type: 'Person'},
        { title: 'Tom',  type: 'Person'},
        { title: 'Tim',  type: 'Person'},
        { title: 'Sara',  type: 'Person'},
        { title: 'Natalie',  type: 'Person'},
        { title: 'Franziska',  type: 'Person'},
    ])


    db.collection.insertOne({ title: 'Apfel',  type: 'Essen'})
    db.collection.insertOne({ title: 'Tennis',  type: 'Hobby'})
    db.collection.insertOne({ title: 'Max',  type: 'Person'})