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
        const { id } = response.params
        const user = await User.findById(id)
        response.status(200).json(user)
    } catch(err) {
        response.status(500).json({message: err.message})
    }
}

 