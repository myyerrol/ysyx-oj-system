const path = require("path");

const rootDir = path.join(process.cwd());

module.exports = {
    port: 10140,
    rootDir: rootDir,
    uploadDir: path.join(rootDir, "uploads/"),
    dbDir: path.join(rootDir, "db/"),
    logDir: path.join(rootDir, "logs/"),
    logLoginPath: path.join(rootDir, "logs/", "login.log")
}
