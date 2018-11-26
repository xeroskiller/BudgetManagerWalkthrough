FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies, grabbing package.json AND package_lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle the app source
COPY . .

EXPOSE 8080
CMD ["cd", "application"]
CMD ["node", "run", "dev"]
