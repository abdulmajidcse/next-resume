FROM node:22

# Set the working directory in the container
WORKDIR /var/www/html

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Start the development server
CMD ["npm", "run", "dev"]
