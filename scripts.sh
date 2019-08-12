# -------------------------- Server Dev -------------------------- #
docker build --rm -t re-server-dev -f ./server/Dockerfile.dev ./server

docker run -it -p 5000:5000 -v ${PWD}/server/src:/server/src re-server-dev

# -------------------------- Client Dev -------------------------- #
docker build --rm -t re-client-dev -f ./client/Dockerfile.dev ./client

docker run -it -p 3000:3000 -v ${PWD}/client/src:/client/src re-client-dev

# -------------------------- Docker compose Dev -------------------------- #

docker-compose -f docker-compose.dev.yml up --build


# -------------------------- Server Prod -------------------------- #
docker build --rm -t re-server-prod -f ./server/Dockerfile ./server

docker run -it -p 5000:5000 re-server-prod

# -------------------------- Client Prod -------------------------- #
docker build --rm -t re-client-prod -f ./client/Dockerfile ./client

docker run -it -p 3000:3000 re-client-prod

# -------------------------- Docker compose Prod -------------------------- #

docker-compose up --build


