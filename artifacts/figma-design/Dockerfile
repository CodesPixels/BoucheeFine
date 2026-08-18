FROM node:20-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable

# Copy package files first for better Docker caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Vite port
EXPOSE 5173

# Vite must listen on all interfaces inside Docker
CMD ["pnpm", "dev", "--host", "0.0.0.0"]