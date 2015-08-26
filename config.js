var connectionString = process.env.DATABASE_URL || 'postgres://username:password@localhost:port/database';

module.exports = connectionString;
