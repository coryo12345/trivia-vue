#!/bin/sh
docker build -t trivia .
docker run -d --name trivia --restart always trivia
