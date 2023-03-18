!#/bin/bash

# Backend services
docker build -t jurrewolff/database ./BackEnd/DataBase
docker build -t jurrewolff/gameservice ./BackEnd/Services/GameService
docker build -t jurrewolff/wordlistservice ./BackEnd/Services/WordlistService

# Envoy proxies
docker build -f ./Envoys/Dockerfile-wordlist-envoy -t jurrewolff/wordlist-envoy ./Envoys
docker build -f ./Envoys/Dockerfile-gameservice-envoy -t jurrewolff/gameservice-envoy ./Envoys
