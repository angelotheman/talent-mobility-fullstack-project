FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --production=false

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/dist ./dist

RUN npm install -g serve

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]