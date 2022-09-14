require('dotenv').config();
const express = require('express');
const cors = require("cors")
const cookieParser = require('cookie-parser')

const authRoute = require('./routes/authRoute')
const profileRoute = require('./routes/profileRoute')
const forumRoute = require('./routes/forumRoute')

const connectDB = require('./config/db');
const startServer = require('./config/startserver');
const errorHandler = require('./middlewares/errorMiddleware');
const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:4444"],
    credentials: true,
}));
app.use(cookieParser());

//route
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/profile', profileRoute)
app.use('/api/v1/forum', forumRoute)

// Error Handler
app.use(errorHandler)

connectDB()
startServer(app);