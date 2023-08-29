import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';

const app = express();

const dbUri = 'mongodb+srv://torrenomark1999:<dhenmark2019>@mini-ecommerce.jdrdml9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

app.use(cors({
    origin: 'https://mern-ecommerce-fe-af286ecaf8c7.herokuapp.com/',  // Allow only this origin to make requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization']  // Allow these headers
}));


app.use(express.json());

// Use your routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
// Start the server
// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
