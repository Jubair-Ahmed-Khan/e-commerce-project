import bcrypt from 'bcryptjs'

export default async (req, res) => {
    const { phone, password } = req.body;

    // ------ demo user----------

    const users = [
        { "phone": "01786324531", "password": "asdf1234" },
        { "phone": "01686324531", "password": "qwer1234" },
        { "phone": "01586324531", "password": "zxcv1234" }
    ];



    //-----------------------------

    try {

        //check if any input field is empty
        if (!phone || !password) {
            return res.status(422).json({ error: "please add all the fields" })
        }

        //check if user already exists
        const user = users.find(user => user.phone == phone);

        if (user) {
            res.status(422).json({ error: "user already exists with this phone" })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = {};

        newUser.phone = phone;
        newUser.password = hashedPassword;

        //add new user to users
        users.push(newUser);


        console.log("new user  ==== ", newUser);
        console.log("users  ==== ", users);

        res.status(201).json({ message: "signup successful" })

    } catch (err) {
        console.log(err)
    }
}