module.exports = {
    entry: "./scripts/index.js",
    output:{//archivo de salida(salida donde lo guarda)
        path: __dirname + "/public",
        filename: "bundle.js"
    }
};