ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and pnpm-lock.yaml files to the container
COPY package.json pnpm-lock.yaml ./

# Step 4: Install pnpm globally
RUN npm install -g pnpm

# Step 5: Install the dependencies
RUN pnpm install

# Step 6: Copy the rest of the application code to the container
COPY . .

# Step 7: Expose port 3000 (default React dev server port)
EXPOSE 3000

# Step 8: Run the React development server
CMD ["pnpm", "start"]