class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance
        }
        Database.instance = this
        Database.exists = data
        this.data = data
    }

    getData() {
        return this.data
    }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mySQL = new Database('MySQL')
console.log(mongo.getData())