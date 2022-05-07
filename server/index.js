const express = require("express");
const app = express();
const cors = require('cors')
const stytch = require('stytch')

app.use(cors())
app.use(express.json())

//stytch
const client = new stytch.Client({
    project_id: "project-test-61e2213b-1ac6-433d-951d-86f2c3b58008",
    secret: "secret-test-v4VluKKGLvthyPclIS_rBbHZrxHmip9_CAU=",
    env: stytch.envs.test           //change test -> live to deploy this project
})

app.post("/login", async (req, res) => {
    const email = req.body.email
    const params = {
        email: email,
        login_magic_link_url: "http://localhost:3000/auth",
        signup_magic_link_url: "http://localhost:3000/auth"
    }
    const response = await client.magicLinks.email.loginOrCreate(params)

    res.json(response)
})

app.post("/auth", async (req, res) => {
    try {
        const token = req.body.token
        const sessionToken = await client.magicLinks.authenticate(token, {
            session_duration_minutes: 30
        })
        console.log(sessionToken);
        res.json(sessionToken)
    } catch (error) {
        res.json(error)
    }
})




app.listen(3002, () => {
    console.log("Server is running at port 3002!");
});