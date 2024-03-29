const Note = require("../model/note.model");

class NoteController {

    static getAll = async (req, res) => {
        try {
            const data = await Note.find({});
            res.status(200).json(data);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static getOne = async (req, res) => {
        const { id } = req.params;
        try {
            const data = await Note.findById(id);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static create = async (req, res) => {
        try {
            const data = await Note.create(req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static update = async (req, res) => {
        const {id} = req.params;
        try {
            const data = await Note.findByIdAndUpdate(id, req.body);

            if (!data) {
                return res.status(404).json({ message: "Note not found" });
            }

            res.status(200).json({ message: "Note updated successfully" });
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static delete = async (req, res) => {
        const {id} = req.params;

        try {
            const data = await Note.findByIdAndDelete(id);

            if (!data) {
                return res.status(404).json({ message: "Note not found" });
            }

            res.status(200).json({ message: "Note deleted successfully" });
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
}


module.exports = NoteController;