# Set the base image
FROM node:8.3.0

# Define working directory
WORKDIR /var/www/nytimes

# Install yarn
RUN apt-get update && apt-get install -y apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

# Install node_modules with yarn
ADD package.json yarn.lock /tmp/
RUN cd /tmp && yarn
RUN mkdir -p /var/www/nytimes && cd /var/www/nytimes && ln -s /tmp/node_modules

# Copy app
COPY . /var/www/nytimes

# Expose port
EXPOSE 3000

# Run app
CMD ["npm","start"]