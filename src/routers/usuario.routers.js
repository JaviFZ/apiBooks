const {Router} = require ("express")
const router = Router();
const usuarioCtrl = require("../controller/usuario.controller")




router.post("/registro", usuarioCtrl.postUsuario);







module.exports = router;