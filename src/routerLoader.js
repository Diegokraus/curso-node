import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const routerLoader = (app) => {
	const modulesPath = path.join(__dirname, 'modules');

	fs.readdirSync(modulesPath).forEach(async (dir) => {
		const modulePath = path.join(modulesPath, dir);
		// console.log('modulePath', modulePath);
		
		if (fs.statSync(modulePath).isDirectory()) {
			const controllerPath = path.join(modulePath, `${dir}.controller.js`);

			// console.log('controllerPath', controllerPath);
			if(fs.existsSync(controllerPath)){
				const controller = await import(controllerPath);

				if(controller.default && typeof controller.default === 'function'){
					app.use(controller.default);
				}
			}
		}
	})




}
