import { object, string, mixed} from "yup";


let userSchema = object({
    username: string().required(),
    password: string().required(),
    email: string().email().required(),
})

// const validateForm = async (dataForm) => {
//     try {
//         await userSchema.validate(dataForm);
//         return {status:"success"}
//     }catch (error) {
//         return {status:"error", message: error.message}
//     }
// }

// export default validateForm