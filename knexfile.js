module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/upsells',
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds'
        }
    },
    production: {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized },
        },
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds'
        }
    }
};


