import express from 'express'
import { connection } from './database/config';
import routes from './routes';
import cors from 'cors';


const port = 300;
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, async () => {
    const connectionResult = await connection;
    console.log(`Status da conexão com banco de dados: ${connectionResult.isConnected ? 'Online' : 'Offline'}`);
    console.log(`A Aplicação esta rodando na porta: ${port}`);
});

