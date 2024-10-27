# Dijiktra’s Algorithm Calculator

Discovering Optimal Routes Through Nodes Using Dijkstra's Method

## Design Mockup

See following UI [Reference](https://www.figma.com/design/VOlrHyAO7hscTdhoUdQG6o/Coding-Challenge-V1?node-id=0-1&node-type=canvas&t=VZjDM0tgFbEFqokB-0).

## Coding Standards

- [Vuejs Guide](https://vuejs.org/guide/introduction.html)
- [CSS and Sass Style Guide](https://getbem.com/introduction/)

## Package Module

## Project Setup

### Install the **Node** environment

`npm install`

### Compile and Hot-Reload for Development

`npm run dev`

### Compile and Minify for Production

`npm run build`

### Install the **Docker**(Option)

1. Build a image for running on development environment

`docker build -t kasungihan/algorithm-calendar:dev -f Dockerfile.dev .`

2. Up the container to preview the demo on browser: http://loocalhost:3000

`docker run -it -p 3000:5173 -v ./:/app --name algorithm-calendar-app kasungihan/algorithm-calendar:dev`

1. Build a image for running on production environment

`docker build -t kasungihan/algorithm-calendar:latest -f Dockerfile.prod .`

2. Up the container to load on browser: http://ec2-3-108-235-202.ap-south-1.compute.amazonaws.com/

`docker run -it -p 80:80 --name algorithm-calendar-app kasungihan/algorithm-calendar:latest`

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## API Documentation

- List Nodes
- Calculate a Nodes

Follow the documentation: [Swagger hub](https://app.swaggerhub.com/apis-docs/KASUNGIHANDEV/algorithm-calendar/1.0.0#/)

## Testing

run a test command to ensure the application content

`npm run test`

## Deployment

1. generate latest tag and changelog file

`npm generate`

2. push to the main repository

`git push --follow-tags origin main`

3. automatically deploy to the live server
