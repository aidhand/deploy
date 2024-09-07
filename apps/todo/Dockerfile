FROM docker.io/oven/bun:alpine as base
ENV NODE_ENV="production"

FROM base as build
WORKDIR /src

COPY ./package.json ./bun.lockb /src/
RUN bun install

COPY . /src
RUN bun install
RUN bun run build

# Final stage for app image
FROM base as prod
WORKDIR /dist

COPY --from=build /src/apps/todo/.output /dist

# Bundle it all into a single file
RUN bun build server/index.mjs --target=bun --minify --outfile server.mjs
RUN rm -rf server && mkdir server
RUN mv server.mjs server/index.mjs

# Start the server by default
EXPOSE 3000
CMD [ "bun", "run", "server/index.mjs" ]
