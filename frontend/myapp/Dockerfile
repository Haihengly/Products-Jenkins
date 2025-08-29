# Use Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose React dev server port
EXPOSE 3000

# Run React dev server
CMD ["npm", "start"]
