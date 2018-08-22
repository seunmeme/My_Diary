import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

const connectionString = process.env.ConnectionString;
const client = new Client({ connectionString });

client.connect();


export default client;
