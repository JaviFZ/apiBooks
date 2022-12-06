const {Router} = require ("express")
const router = Router();
const libroCtrl = require("../controller/libro.controller")




router.get("/libro", libroCtrl.getLibros);

router.get("/libro?id_usuario=", libroCtrl.getLibros);

router.post("/libro", libroCtrl.postLibro);

router.put("/libro", libroCtrl.putLibro);

router.delete("/libro", libroCtrl.deleteLibro);





module.exports = router;