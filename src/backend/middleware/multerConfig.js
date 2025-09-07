import multer from "multer";

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'upload/')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() +'-'+ filename.originalname)
    }
})

const upload =  multer({storage:storage})

export default upload