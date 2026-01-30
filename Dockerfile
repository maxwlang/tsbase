# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

# Production stage
FROM node:24-alpine

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs

COPY --from=builder /app/dist ./dist
COPY package*.json ./

RUN npm ci --omit=dev && \
    chown -R nodejs:nodejs /app

USER nodejs

CMD ["npm", "start"]
