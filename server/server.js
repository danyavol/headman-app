require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3080;  

// Запросы на сервер разрешены только с этого домена
const cors = require('cors');
app.use( cors({origin: 'http://localhost:4200'}) );


// Парсер входящих запросов
app.use( express.urlencoded({extended: true}) );
app.use( express.json() );


app.listen(PORT, () => {
    console.log(`Server listening on the port ${PORT}`);
});