import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './Config/mongoose.config.js';
import newDrinkRoutes from './routes/newDrinkRoutes.js'


const app = express();
app.use(express.json(), cors());//This sets up express with json data and cors.
app.use('/api/newDrink', newDrinkRoutes) //<--- //dont forget your routes name here 
dotenv.config();//This will load any environmental variables stored inside your .env file. This is where you will find both secret keys for connecting to Atlas, but also configuration information for development, such as your Port.


const PORT = process.env.PORT || 8000 //Now that your enviromental variables are loaded, you can pull them out and store them in variables within Node. process.env is the prefix that we always use, and then PORT refers to the name of your variable. Try to make your environmental variables unique, as a lot of keywords like USER are already defined and holding data!

dbConnect();//This runs your database connection. In the previous import, you only brought the function into this file, but this is where it gets run for the first time.



app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);