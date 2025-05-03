import {User} from "../models/User.js"

export const register = async(req ,res) =>{
    const {email, username, password} = req.body;
    const user = new User({email, username, password});
    await user.save();
    res.json({ message: "User registered", user });
}

export const login = async (req, res) =>{
    const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  res.json({ message: "Login successful", user });

}