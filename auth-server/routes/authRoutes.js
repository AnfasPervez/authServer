const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys')
const router = express.Router();
const User = mongoose.model('User');


router.post('/signup', async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = new User({ email, password });
        await user.save();
        const token = jwt.sign({ userId: user._id }, jwtkey)
        res.send({ token })

    } catch (err) {
        return res.status(422).send(err.message)
    }


})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).send({ error: "must 1provide email or password" })
    }

    const user = await User.findOne({ email });
    console.log({email});
    if (!user) {
        return res.status(422).send({ error: "must  2 provide email or password" })
    }
    const userpass = await User.findOne({ password });
    console.log({ userpass });
    if (!userpass) {
        return res.status(422).send({ error: "must  2 provide email or password" })
    }
    else{
        const token = jwt.sign({ userId: user._id }, jwtkey)
          res.send({ token })
    }
    // try {
    //     console.log({ user });
    //     console.log({ password });

    //      await user.comparePassword(password);
    //     console.log({ password });

    //     const token = jwt.sign({ userId: user._id }, jwtkey)
    //     res.send({ token })
    // } catch (err) {
    //     return res.status(422).send({ error: "must 3 provide email or password" })
    // }



})
module.exports=router