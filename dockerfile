# Imagen base
FROM node:18

# Directorio en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe)
COPY backend/package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el código de la aplicación
COPY backend/ .

# Expone el puerto que tu aplicación utilizará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "node", "index.js" ]
