const express = require("express");
const cors = require("cors");

const db = require("./app/models");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "API REST funcionando correctamente"
    });
});

require("./app/routes/cliente.routes.js")(app);

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en el puerto ${PORT}`);
        });

    } catch (error) {
        console.error(error);
    }
}

iniciarServidor();