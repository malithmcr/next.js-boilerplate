
<div align="center"><strong>Start your next.js project in seconds</strong></div>
<div align="center">This project is based on Next.js 9.2.1 (Server side rendering react framwork). react-int (multilanguage) ready.</div>


Live: https://app.malithpriyashandev.vercel.app/

## Running the project locally (Without Docker)

Make sure you have npm installed.

1. `git clone git@github.com:malithmcr/next.js-boilerplate.git & cd app`
2. Run `npm i`
3. Start the dev server using `npm run dev`

Visit http://localhost:3000 on your browser


## Running the project locally without Docker compose

```bash
docker-compose up
```

NGINX listens on port 80, which is the default HTTP port, so you can just visit **http://localhost/**


## Without Docker Compose

```bash
# Build images
docker build --tag nextjs-image .
docker build --tag nginx-image ./nginx

# Create shared network
docker network create my-network

# Run containers
docker run --network my-network --name nextjs-container nextjs-image
docker run --network my-network --link nextjs-container:nextjs --publish 80:80 nginx-image
```

_Next.js container is referenced inside NGINX container as `nextjs`._

## Available npm Commands 

- `npm run dev` - start the dev server
- `npm run build` - create a production ready build
- `npm start` - start production server
- `npm staging` - start staging server


## PM2 commands (For production)

PM2 commands can still be used inside a container with the `docker exec` command:

```
docker exec -it <container-id> pm2 monit          # Monitoring CPU/Usage of each process
```
```
docker exec -it <container-id> pm2 list           # Listing managed processes
```
```
docker exec -it <container-id> pm2 show           # Get more information about a process
```
```
docker exec -it <container-id> pm2 reload all     # 0sec downtime reload all applications
```


####Running tests 
> npm run test:watch

<div align="center">
<img alt="tests" src="/docs/tests.png?raw=true" width="80%">
</div>

####Deploying the app

> npm run build

> npm install -g now

> cd app && now

<div align="center">
<img alt="build" src="/docs/build.png?raw=true" width="80%">
</div>

