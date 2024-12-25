import User from '../models/user.model.js'

export const signup = async(req, res)=>{
    //console.log(req.body) ; 
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === ''){
        return res.status(400).json({message: 'All fields required'}); 
    } 

    const newUser = new User({
        username,
        email,
        password,
    });

    try {
        await newUser.save();
        res.json('SignUp success');
    } catch (error) {
        res.status(500).json({message: error.message}) ; 
    } 
}; 