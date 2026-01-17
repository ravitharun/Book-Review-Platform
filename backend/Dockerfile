FROM node:18-alpine

WORKDIR /app

# Copy only package files first to leverage caching
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

EXPOSE 3000

# Use CMD to start backend
CMD ["npm", "start"]
