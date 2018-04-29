/* Import des differents packages */
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as express from 'express';
import * as https from 'https';
import * as fs from 'fs';

/* Definition des differentes variables */
let expressApp = express ();
let port = 8443;
let host = 'localhost';

/* Definition des differentes constantes */
const appOptions = {
	key: fs.readFileSync ('src/ssl/server.key'),
	cert: fs.readFileSync ('src/ssl/server.crt'),
	passphrase: 'ipx%825!',
};

/* Instanciation du serveur HTTPS */
let server = https.createServer(appOptions, expressApp);

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule,expressApp);
	app.init();
	server.listen(port,host);
}

bootstrap();
