# Use Node 20 (or 22) instead of 18
FROM node:20-alpine

WORKDIR /app

# Copy package.json first to cache installs
COPY package*.json ./
RUN npm install

# Copy all code
COPY . .

# Expose Vite port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
