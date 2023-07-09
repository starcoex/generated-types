import bcrypt from "bcrypt";

bcrypt.hashSync;

const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";

// Technique 1 (generate a salt and hash on separate function calls):
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
// Store hash in your password DB.

// Technique 2 (auto-gen a salt and hash):
const hash2 = bcrypt.hashSync(myPlaintextPassword, saltRounds);
// Store hash in your password DB.
bcrypt.compareSync(Buffer.from("password"), "encrypted"); // $ExpectType boolean
