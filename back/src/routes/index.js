const {Router} = require("express")
const router = Router();
const {route}= require("./movieRouter")


router.use("/movies",route );

module.exports = router;