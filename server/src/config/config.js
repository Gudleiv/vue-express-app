module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'vuexp',
        user: process.env.DB_USER || 'vuexp',
        password: process.env.DB_PASS || 'vuexp',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './vuexp.sqlite'
        }
    }
}
