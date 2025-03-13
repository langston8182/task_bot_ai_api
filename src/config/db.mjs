import mongoose from 'mongoose';

const env = process.env.ENVIRONMENT || "preprod";
const dbUri = env === "prod" ? process.env.MONGODB_URI_PROD : process.env.MONGODB_URI_PREPROD;

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connecté"))
    .catch(err => console.error("Erreur de connexion MongoDB :", err));
