#!/bin/bash

#
# In general you'll be editing the files in ./public/md/codex/
#
# The configuration files for this are stored in ~/.csalabs-opencpes.com/config
#
# 1) You will need to use either your default SSH key or specify one in the
# configuration file
# SSHKEY=
#
# 2) You will need to use either your default AWS credentials or specify one in
# the configuration file
# AWS_ACCESS_KEY_ID="<id>"
# AWS_SECRET_ACCESS_KEY="<key>"
# no need for AWS_DEFAULT_REGION as S3 is global

# 3) You will need to specify the S3 bucket if doing updates
# S3_BUCKET_NAME="s3_bucket_name"
#
# 4) You will need to use either you default Cloudflare credentials or specify
# one in the configuration file
# 5) You will need to specify the domain name to update in the config file
# There is no good Cloudflare CLI docker image so we'll have to create one from scratch =(.

# STAGE 1
# Git pull and remove files that get blown away by the build
# we assume you have git installed and a key to pull/push from 
# https://github.com/opencpes/opencpes.com otherwise how did you even get here?
#
git pull

# remove the precache manifest since it gets blown away anyways
#git rm -rf build/precache-manifest.[0-9a-f]*.js
#git commit -m "removed precache-manifest" 
#git push

# STAGE 2
cd opencpes.com
npm run build

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
