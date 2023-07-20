// require('dotenv').config();

// const Sequelize = require('sequelize');

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

// module.exports = sequelize;

const { createPool } = require("mysql")

const Pool = createPool({
  port:process.env.DB_PORT,
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASS,
  database:process.env.MYSQL_DB,
  connectionLimit:15 //maximum number of connections to the pool
});

// con.query("select * from category", (err,result)=>{
//   console.log("result",result);
// })
module.exports = Pool;
