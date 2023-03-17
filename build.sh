!#/bin/bash

docker build -t jurrewolff/database ./BackEnd/DataBase

docker build -t jurrewolff/gameservice ./BackEnd/Services/GameService

docker build -t jurrewolff/wordlistservice ./BackEnd/Services/WordlistService

