import {z} from "zod"

const voitureSchema = z.object ({

})

const reservationSchema = z.object({

})

const registerSchema = z.object({

})

const userSchema = z.object({
    pseudo : z.string().min(3, {message:"Ton pseudo est trop court champion"}),
    age : z.coerce.number(),
    bio : z.string().optional()
})