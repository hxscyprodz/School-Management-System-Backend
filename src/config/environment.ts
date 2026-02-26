import dotenv from "dotenv";
import path from "path";
import logger from "../services/logger";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const mandatoryVariables = [
    "PORT",
    "APP_ENV"
];

const missingVariables = mandatoryVariables.filter(variable => !process.env[variable]);

if(missingVariables.length > 0) {
    const variableString = JSON.stringify(missingVariables);

    logger.error(`Environmental variables ${variableString.substring(1, variableString.length - 1)} required. If running on 
    local server create a .env file in your root directory and define them like:
    
    PORT: PORT
    APP_ENV: APP ENV`);

    process.exit(1);
};

const config = {
    PORT: process.env.PORT,
    APP_ENV: process.env.APP_ENV
};


export default config;