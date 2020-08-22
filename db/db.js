const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'employee-management',
    password: 'root',
    port: 5432,
});

client.connect();
const queryCreateDb = `
CREATE TABLE employees (
    email varchar,
    firstname varchar,
    mobile varchar,
    city varchar
);
`;
queryInsertDb=`INSERT INTO employees (email, firstname,mobile,city)
VALUES ('jerry@example.com','Jerry','0768759898','Lyon'), ( 'george@example.com','George','06987097','Paris');`;
client
    .query(queryCreateDb)
    .then(res => {
        console.log('Table is successfully created');
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
       // client.end();
       client.query(queryInsertDb).catch(err => {
        console.error(err);
    });
    });