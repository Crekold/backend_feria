import mysql from "mysql2";

// create the connection to database
const db = mysql.createConnection({
  host: "10.51.240.3",
  user: "root",
  password: "12345678",
  database: "feria_del_empleo_ucb",
});

export default db;
