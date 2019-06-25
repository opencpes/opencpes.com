FROM node

RUN npm install -g create-react-app ; npm install -g react-scripts ; npm install -g react-dom

COPY build-script.sh /

# NO ENTRYPOINT/RUN/CMD, we use the command line:
# docker run -v $CURRENT_DIR:/opencpes.com -it  opencpes-build  /build-script.sh
