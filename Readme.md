# QDSP-frontend

## Running dependencies

To run the dependencies (the BE), you'll have to:

- Have permissions on the GCloud project
- Have docker and docker-compose installed
- [Configure](https://cloud.google.com/artifact-registry/docs/docker/authentication?hl=es-419#gcloud-helper) the gcloud CLI
- Create the backend env vars file `cp backend.env.sample backend.env`
- Fill in the blanks in `backend.env` with the OpenAI credentials
- Run `docker-compose up`

## Running FE

Just run `npm install` and `npm start` and you're good to go. We are using a proxy to the BE, so you don't have to worry about CORS, the config is on setupProxy.js
