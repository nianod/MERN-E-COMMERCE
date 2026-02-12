import User from "../Models/User";

const findUser = async (request, response) => {
    try{
        const user = await User.find({})
        response.status(200).json(user)
    } catch(error){
        response.status(500).json(error.message)
    }
}