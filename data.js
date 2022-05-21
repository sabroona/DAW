db.collection.insertMany([
        { title: 'Spaghetti',  type: 'Nahrung'},
        { title: 'Tomate',  type: 'Nahrung'},
        { title: 'Joghurt',  type: 'Nahrung'},
        { title: 'Gurke',  type: 'Nahrung'},
        { title: 'Sellerie',  type: 'Nahrung'},
        { title: 'Schokolade',  type: 'Nahrung'},
        { title: 'Hummus',  type: 'Nahrung'},
        { title: 'Birne',  type: 'Nahrung'},
        { title: 'Melone',  type: 'Nahrung'},
        { title: 'Kaffee',  type: 'Nahrung'},

        { title: 'Tischtennis',  type: 'Sport'},
        { title: 'Schwimmen',  type: 'Sport'},
        { title: 'Fussball',  type: 'Sport'},
        { title: 'Basketball',  type: 'Sport'},
        { title: 'Ballett',  type: 'Sport'},
        { title: 'Handball',  type: 'Sport'},
        { title: 'Rugby',  type: 'Sport'},
        { title: 'Golf',  type: 'Sport'},
        { title: 'Hürdenlauf',  type: 'Sport'},
        { title: 'Stabhochsprung',  type: 'Sport'},

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


    db.collection.insertOne({ title: 'Apfel',  type: 'Nahrung'})
    db.collection.insertOne({ title: 'Tennis',  type: 'Sport'})
    db.collection.insertOne({ title: 'Max',  type: 'Person'})