// Update with your config settings.
//const {password} = require('./.env')

module.exports = {
    client: 'mysql',
    connection: {
      database: 'graphql',
      user:     'root',
      //password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
};

/*
      A combination of knex and OracleDB works fine. Here are packages from package.json:  
      "knex": "0.13.0", "oracledb": "1.13.1"
    
      var conn = knex({
      client: 'oracledb',
      connection: {
        host: config.oracle.host,
        user: config.oracle.user,
        password: config.oracle.password,
        database: config.oracle.database,
      }
    });*/
