FROM node:12.13.1

# Set working directory
WORKDIR /usr/src/app

#Set Environment variables
ARG NODE_ENV=staging
ENV NODE_ENV=${NODE_ENV}
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy all files
COPY ./app /usr/src/app

# Install dependencies
RUN npm install --production

# Build the app
RUN npm run build

ENTRYPOINT ["node", "/usr/src/app/server.js"]