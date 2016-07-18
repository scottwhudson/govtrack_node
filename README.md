# [GovTrack API](https://www.govtrack.us/) Replica
Replica of GovTrack's open data JSON API built with Node, Hapi, and Mongo.  The included archive file is a partial dataset with up to 1k records of each type.

### Installation & Usage
1. Install Node and MongoDB if you do not already have them & `git clone` the repository.

1. Install dependencies using `npm install`.

1. Import the database using `mongorestore --archive=govtrack.archive --db govtrack`.

1. Run the API using `npm start` and navigate to `http://localhost:8000/` with your desired endpoint.

### Querying The API
The replica supports all 8 endpoints specified in the original API:

-  [`/bill`](https://www.govtrack.us/developers/api#endpoint_bill)

- [`/committee_member`]()

- [`/committee`]()

- [`/cosponsorship`](https://www.govtrack.us/developers/api#endpoint_cosponsorship)

- [`/person`](https://www.govtrack.us/developers/api#endpoint_person)

- [`/role`]()

- [`/vote_voter`]()

- [`/vote`]()
