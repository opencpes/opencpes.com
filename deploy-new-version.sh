#!/bin/bash
# ensure we have latest opencpes.com
git pull

# remove the precache manifest since it gets blown away anyways
git rm -rf build/precache-manifest.[0-9a-f]*.js
git commit -m "removed precache-manifest" 
git push

CURRENT_DIR=`pwd`
#docker build . -t opencpes-build -f CURRENT_DIR/Dockerfile
docker run -v $CURRENT_DIR:/opencpes.com -it  opencpes-build  /build-script.sh

# update git build dir #
git add -A build/*
git commit -m "npm run build 2019-06-25-13-00" build/*

### create a new S3 bucket
# s3 synch /build to the S3 bucket
# set permissions to public on the s3 bucket
### update Cloudflare DNS for opencpes.com to the new bucket DNS (CNAME)
# open in browser and test - Website Watcher?
