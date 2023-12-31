// Importaciones de terceros (npm)

// Esta bibioteca permite generar jwt para el usuario
const jwt = require("jsonwebtoken");

// Este es el metodo que se encargara de generar los JWT, recibe como 
// parametro el id del usuario
const generateJWT = (id = "") => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "4h" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generateJWT,
};
