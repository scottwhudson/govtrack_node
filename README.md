# [GovTrack API](https://www.govtrack.us/) Replica
Replica of GovTrack's open data JSON API built with Node, Hapi, and Mongo.

### Installation & Usage
1. Install Node and MongoDB if you do not already have them & `git clone` the repository.

1. Install dependencies using `npm install`.

1. Import the database using `mongorestore --archive=govtrack.archive --db govtrack`.

1. Run the API using `npm start` and navigate to `http://localhost:8000/` with your desired endpoint. 
