import { errorHandler } from "../UtilityCode/error.js";
import bcryptjs from 'bcryptjs'
import User from '../Model/user.model.js'

export const test = (req, res) => {
    res.json({ message: 'Api is working fine' })
}


export const UserUpdate = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, "You are not allowed to Updated User Details"))
    }
    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(errorHandler(400, "Password must be at least 6 charectors"))
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
        if (req.body.username.includes(' ')) {
            return next(errorHandler(400, "Username can not contain space"))
        }
        if (req.body.username !== req.body.username.toLowerCase()) {
            return next(errorHandler(400, "Username must be in lower case"))
        }
    }
    try {
        console.log(req.params.userId);
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                profileImage: req.body.profileImage,
                password: req.body.password,
            }
        }, { new: true });

        const { password, ...rest } = updatedUser._doc;
        console.log(updatedUser._doc);
        res.status(200).json(rest);

    } catch (error) {
        next(error);
    }
}