FROM node:14.9-alpine3.10
RUN apk add bash
WORKDIR /node

CMD tail -f /dev/null