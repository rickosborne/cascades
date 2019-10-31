FROM node:lts-slim AS remark-cli-builder
WORKDIR /opt/remark
COPY package*.json ./
RUN npm install --no-audit --loglevel=error
ENV PATH="/opt/remark/node_modules/.bin:$PATH"
WORKDIR /data
ENTRYPOINT ["remark"]
