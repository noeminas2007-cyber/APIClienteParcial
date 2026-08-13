const db = require("../models");
const Cliente = db.clientes;

// Crear cliente
exports.create = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Listar clientes
exports.findAll = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar cliente por ID
exports.findOne = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);

        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar cliente
exports.update = async (req, res) => {
    try {
        const [resultado] = await Cliente.update(req.body, {
            where: { id: req.params.id }
        });

        if (resultado === 0) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        res.json({ message: "Cliente actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar cliente
exports.delete = async (req, res) => {
    try {
        const resultado = await Cliente.destroy({
            where: { id: req.params.id }
        });

        if (resultado === 0) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        res.json({ message: "Cliente eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};