import CustomError from "../classes/CustomError.class.js";
import NoticiasDAOFactory from "../classes/NoticiasDAOFactory.class.js"

const DAO = NoticiasDAOFactory.get();

class NoticiasController {
    obtenerNoticias = async (req, res) => {
        try {
            let docs = await DAO.listarAll();
            console.log('Controll ',docs);

            res.json({metodo: 'Metodo obtenerNoticias', data: docs});
        } catch (error) {
            console.log(error)
            // throw new CustomError(500, 'Error en Metodo obtenerNoticias', error);
        }
    }

    obtenerNoticia = async (req, res) => {
        try {
            res.send('Metodo obtenerNoticia')
        } catch (error) {
            
        }
    }

    guardarNoticia = async (req, res) => {
        try {
            let doc = await DAO.guardar(req.body);
            res.json({metodo: 'Metodo guardarNoticia', data: {...doc}})
        } catch (error) {
            throw new CustomError(500, 'Error en Metodo guardarNoticia', error);
        }
    }

    actualizarNoticia = async (req, res) => {
        try {
            res.send('Metodo actualizarNoticia')
        } catch (error) {
            
        }
    }

    borrarNoticia = async (req, res) => {
        try {
            res.send('Metodo borrarNoticia')
        } catch (error) {
            
        }
    }
}

export default NoticiasController;