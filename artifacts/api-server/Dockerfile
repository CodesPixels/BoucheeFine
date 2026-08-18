# artifacts/api-server/Dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --prod

FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY . .
RUN pnpm --filter @workspace/api-server run build

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=build /app/artifacts/api-server/dist ./dist
COPY --from=deps /root/.pnpm-store /root/.pnpm-store
COPY package.json ./
EXPOSE 8080
CMD ["node", "--enable-source-maps", "dist/index.mjs"]