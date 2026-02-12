import User from "../Models/User.js";

export const findUser = async (request, response) => {
    try{
        const user = await User.find({})
        response.status(200).json(user)
    } catch(err){
        response.status(500).json({message: err.message})
    }
}

export const findSpecificUser = async (request, response) => {
    try{
        const { id } = request.params
        const user = await User.findById(id)

        if(!user) {
            return response.status(400).json({message: "User not found"})
        }
        response.status(200).json(user)
    } catch(err) {
        response.status(500).json({message: err.message})
    }
}

 