FROM node:alpine
COPY . /app
CMD ["node", "/app/app.js"]
EXPOSE 3000