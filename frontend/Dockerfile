# Use Node 20 (or 22) instead of 18
FROM node:20-alpine

WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose port for Vite dev server
EXPOSE 5173

# Start dev server with host flag
CMD ["npm", "run", "dev", "--", "--host"]
