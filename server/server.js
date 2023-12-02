import app from './app.js';
import { connectDatabase } from './config/db.js';

connectDatabase()

app.listen(process.env.PORT, () => console.log(process.env.PORT))