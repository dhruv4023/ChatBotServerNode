# Use the official Node.js 18 Alpine image as base
FROM node:18-alpine

# Set working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application directory into the container
COPY . .

# Expose the port on which your Express server listens
EXPOSE 5001

# Define the command to run your Express server
CMD ["npm", "run", "start"]
