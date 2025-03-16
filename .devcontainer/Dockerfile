FROM mcr.microsoft.com/devcontainers/typescript-node

# Update the OS
RUN apt-get update 
RUN export DEBIAN_FRONTEND=noninteractive && apt-get -y upgrade
RUN export DEBIAN_FRONTEND=noninteractive && apt-get -y install gh

USER node

# Install Bun
RUN npm install -g bun@latest

# Install additional tools
RUN bun install -g turbo@latest typescript@latest prettier@latest

# Add Bun to PATH
ENV PATH="/home/node/.bun/bin:$PATH"

