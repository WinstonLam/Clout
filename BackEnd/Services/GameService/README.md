# GameService

The GameService microservice provides the game logic for a web application based on the popular Dutch television game show Lingo. This microservice is responsible for managing the game state, resolving words for the player to guess, and checking the player's guesses for correctness. The service supports multiple concurrent game sessions and provides a simple gRPC interface for creating and updating said game states.

# Usage

The service is recommended to be used as a docker container. The following steps can be used for setting up a working image:

1. Install docker and docker-compose, refer to their documentation for instructions.
2. Build the image: `docker build -t gameservice .`
3. Create a docker-compose.yaml like shown below.  
4. Spin up the compose file: `docker-compose up` 

docker-compose.yaml:
```markdown
version: "2"
services:
  node:
    image: "gameservice"
    environment:
      - NODE_ENV="production"
      - NODE_OPTIONS="--max-old-space-size=4096"
    ports:
      - "45287:45287"
    command: "npm start"
```
