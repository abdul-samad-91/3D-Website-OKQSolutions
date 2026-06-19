FROM node:24

WORKDIR /3d_website

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]