
FROM node:8

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /app
ADD . /usr/src/app

# Install any needed packages specified in requirements.txt
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 3001

# Run app.py when the container launches
CMD ["npm", "start"]
