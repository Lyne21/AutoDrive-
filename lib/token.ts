import {v4 as uuidv4} from "uuid";
import {db} from "@/lib/db";

export const generatePasswordResetToken = async (email:string) => {
     const token= uuidv4();
    const existingToken = await db.passwordResetToken.findFirst({
        where: {email}
    });

    return{

    }
}