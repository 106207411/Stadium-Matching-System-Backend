# Use the official Node.js image as the base image
FROM node:20.9-bullseye

# Set the working directory
WORKDIR /app

# Copy the application code to the container working directory
COPY . .

# Install dependencies
#RUN npm install pm2 -g
RUN npm install
RUN npm install qrcode

# Start the application using PM2
CMD ["sh", "-c", "node index.js"]

# Expose port 3000
EXPOSE 3000