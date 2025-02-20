FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the current directory contents into the container
COPY . .

EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
