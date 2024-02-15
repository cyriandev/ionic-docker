# Use a specific version of Node.js
FROM node:20.10.0

# Set working directory
WORKDIR /opt/dockerized-ionic-app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install Ionic CLI globally
RUN npm install -g @ionic/cli

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 8100
EXPOSE 8100

# Command to start Ionic server
CMD ["ionic", "serve", "--all", "--port", "8100", "--host", "0.0.0.0"]