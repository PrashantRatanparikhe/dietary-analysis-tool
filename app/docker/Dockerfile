FROM node:14-alpine

# Creating a project DIR
RUN mkdir -p /app

WORKDIR /app

# Installing dependency
COPY package*.json ./

RUN npm i -f
RUN npm i -g @vue/cli

# Expose port
EXPOSE 8080

# Run
CMD ["npm", "run", "serve"]
