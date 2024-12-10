const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2ZKqSBT8lYl6lTuyKIgRHTGICgiyCNrqxH0ooFiUzSpAscN/n6CX6H6Ye6eHp4qqIk9WZp7zAooyJUhHHZi+gAqnLaxRv6y7CoEpmDVRhDCgQAhrCKbgauQ+lFi6ONe8tedXOT/eiavGGt+ZoaWXjYXIfiV3Frenn8CDAlXjZ2nwG0BkJpqZb/hIxO0oXDei4ox38xkbn9LhpaXLg6IEHV+q1ql8Ao8eEaY4LeJFlaAcYZjpqLNhir9Hn7d0wzlLbHdmc5fhW/FqHqOqm7uVtbpYz3M2Fr3n9L4Omfh79A8DP/CxA80ET2j94mkFfQ0kSb+Z3pJtZNlUuo5expYYa2/0SRoXKNRCVNRp3X1bd0melMzKEDCdk/CE9ni08DJzU+4IphdjwbIwf57oRBw+X79HXLK2PhMI0vB5weNKW6jqXDOS7SwU+cxJzwlRZL1uac5xDl+J2/gjK+f/o3upcKNYZyW8yueyTkYzgxn6VblaI6vRNXo82ysu9qJwq26/R1/YP3d3RdOTknEu26IOBtd8ncxWJFdN1vUv8Y5sd8ROD1/pw7rBv2Mpng7+rHG3jmaSBMENcdRnb2sIN171dnw4wkpOtskG197yNA6uib0vfVtLA651V7JeLfKB3STwfmu9jTFpsnnmoeU8fnp90Rl1WgimzIMCGMUpqTGs07Lo91iaoQAMWxcFGNWv8gLOhshg162QrcPTfjeS7M4/upcBUu3x8eLyMVMhvRqNlkP6CVCgwmWACEGhmpK6xN0aEQJjRMD0758UKNCtfjOuL8cxFIhSTOpt0VRZCcMPVz8OYRCUTVG7XRHI/QJhMKU/t1Fdp0VMeh2bAuIgSVskJ7AmYBrBjKAHBULUpgHq8QA+XoL5UaBd+uKYnO2KZnrLnZ5yUhZvV3w+4gWO536MGIH5MRKF8Mdk5PM/RiwXQMSOfYFHgALpe8/0//w6F6FwDBKcq/RA7dgDP1g0vLDXGe9cvtrwpj3CKATTGjeIAj4Mzk3llWdU/AbXsXeN47nd88A4yea20Y/cvGpYQ9LIF9w3T8H05XNOyWXY47Fr1/SOqgkokL9GMO1fLjIiLYzGPMOK4nQs/kX+vPZCwqr6s0A1oEAB+9tgU8R/bIq4L/TuQg8RohqmGQFTIK/s+Wl9nS1WRsvhUlEkJ5bkWAKfrn3E/y1eTplVEo8ugXoXGrI8XcSLEETSnh477vm2oNWBwNnlbiF3o6d/AQFTYA7dVXGTlWzZTLpzqdxK2vLYCVG6zoqsq+UpLXtYHRwrP9eizbHm0GIr9sR6wWps++zdp7nqaAxmx9siMHaOwymaP78+9dXe0vO12CbR5/7mFsyL42WiG85O2IyZm2EbfHY4a/IkmtHyPdJIdWWQwCZhoEdr0TF8+lZ0ArrmbkeIVjvtKEjLQj/fj64XvRb7GAzZ+0BOX1vm5T1rUYpe59u7C//p1mfs6Qf1BeN9Yv4iWrOtvoKOVVyK2WQg4NmBb2HDqdelaG0X1XpjzoaNeOeXG4k04PH4SYEqg3VU4hxMAcl9CCiQQVJLn23rpTkiNcwrMGUEjpvQzGQiUiDvpKpya1h/dDuQ+m+h0uDxD6wMttYJCAAA',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

