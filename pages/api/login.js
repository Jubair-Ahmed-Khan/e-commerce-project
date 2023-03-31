import jwt from 'jsonwebtoken';

export default (req, res) => {

    const { phone, password } = req.body;

    //------------ demo user -------//

    const users = [
        { _id: "1", phone: "01786324531", password: "asdf1234", role: "admin" },
        { _id: "2", phone: "01686324531", password: "qwer1234", role: "user" },
        { _id: "3", phone: "01586324531", password: "zxcv1234", role: "user" }
    ];

    //----------------------------------


    try {

        //check if any input field is empty
        if (!phone || !password) {
            return res.status(422).json({ error: "please add all the fields" })
        }

        //find from demo users
        const user = users.find(user => user.phone == phone);

        //check if user exist
        if (!user) {
            res.status(404).json({ error: "user don't exist with this phone" })
        }

        // const doMatch = await bcrypt.compare(password, user.password);
        const doMatch = password == user.password

        //generate jwt token for login
        if (doMatch) {
            const token = jwt.sign({ userid: user._id }, process.env.JWT_SECRET, {
                expiresIn: "7d"
            })

            const { phone, role } = user;
            res.status(201).json({ token: token, user: { phone: phone, role: role } })
        }
        else {
            return res.status(401).json({ error: "phone number or password doesn't match" })
        }

    } catch (err) {
        console.log(err)
    }
}