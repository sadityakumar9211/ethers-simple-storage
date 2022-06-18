//this module contains script which is used to encrypt key and then store it locally.

const ethers = require("ethers")
const fse = require("fs-extra")
require("dotenv").config()

;(async () => {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD,
        process.env.PRIVATE_KEY
    )
    fse.writeFileSync("./.encryptedKey.json", encryptedJsonKey) //writing the encrypted key to a newly created file .encryptedKey.json
})()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
    })
