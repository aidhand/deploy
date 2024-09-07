FROM node:bookworm-slim as base
ENV NODE_ENV="production"

RUN npm install -g bun
RUN bun add -g turbo

FROM base as build
WORKDIR /src

COPY ./package.json ./bun.lockb /src/
RUN bun install

COPY . /src
RUN bun install
RUN bun run turbo build --filter=next

# Final stage for app image
FROM base as prod
WORKDIR /dist

COPY --from=build /src/apps/next/.next/standalone /dist
COPY --from=build /src/turbo.json /dist

# Start the server by default
EXPOSE 3000
CMD [ "bun", "x", "turbo", "start" ]
