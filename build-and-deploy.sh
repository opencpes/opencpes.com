#!/bin/bash

# STAGE 1
# Git pull and remove files that get blown away by the build
# we assume you have git installed and a key to pull/push from 
# https://github.com/opencpes/opencpes.com otherwise how did you even get here?
#
git pull

# remove the precache manifest since it gets blown away anyways
git rm -rf build/precache-manifest.[0-9a-f]*.js
git commit -m "removed precache-manifest" 
git push

# STAGE 2
# Startup a Docker container with nodejs and manually cal it to use the build-script.sh
#
# Optional: first time you'll need to build the container:
# docker build . -t opencpes-build -f CURRENT_DIR/build-and-deploy/docker-node-build/Dockerfile

CURRENT_DIR=`pwd`
docker run -v $CURRENT_DIR:/opencpes.com -it  opencpes-build  /build-script.sh

# now that the build is done let's push the new files into git
git add -A build/*
git commit -m "npm run build 2019-06-25-13-00" build/*
git push

# STAGE 3 
# short term: we just update the S3 bucket and we're done
# long term: we create a new S3 bucket and update the Cloudflare DNS to point at it, 
# and create a new Cloudflare entry for the previous bucket, this allows us to easily roll
# back if the website gets broken (short term: we roll git back and rebuild)

# STAGE 4
# we run the website through WebsiteWatcher (WSW) running in AWS workspace, this is
# a manual task
