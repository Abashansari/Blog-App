import moongoose, { Schema } from 'mongoose'

const blogSchema = new moongoose.Schema ({
    title :{
        type :String,
        required :true
    } ,
    summary :{
        type : String,
        required : true
    },
    // image : {
    //     url : String,
    //     required : true
    // },
    conclusion : {
        type : String,
        required : true
    }
})

const blogs = moongoose.model('blog',blogSchema)
export default blogs
