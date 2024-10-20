FROM oven/bun:alpine as base
ENV NODE_ENV="production"

ARG APP_NAME="template"
ARG APP_DIR="/src/apps/${APP_NAME}"

FROM base as build
WORKDIR /src

RUN bun add -g turbo

COPY ./package.json ./bun.lockb /src/
RUN bun install

COPY . /src
RUN bun install
RUN bun run turbo build --filter=${APP_NAME}

# Final stage for app image
FROM base as prod
WORKDIR /dist

COPY --from=build ${APP_DIR}/.output /dist

# Bundle it all into a single file
RUN bun build server/index.mjs --target=bun --minify --outfile server.mjs
RUN rm -rf server && mkdir server
RUN mv server.mjs server/index.mjs

# Start the server by default
EXPOSE 3000
ENTRYPOINT [ "/usr/local/bin/bun", "run", "server/index.mjs" ]
