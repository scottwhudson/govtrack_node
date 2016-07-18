# [GovTrack API](https://www.govtrack.us/) Replica
Replica of GovTrack's open Government data JSON API built with Node, Hapi, and Mongo.  The included archive file is a partial dataset with up to 1k records of each type.

### Installation & Usage
1. Install Node and MongoDB if you do not already have them & `git clone` the repository.

1. Install dependencies using `npm install`.

1. Import the database using `mongorestore --archive=govtrack.archive --db govtrack`.

1. Run the API using `npm start` and navigate to `http://localhost:8000/` with your desired endpoint.

### Querying The API
The replica supports all 8 endpoints specified in the original API:

-  [`/bill`](https://www.govtrack.us/developers/api#endpoint_bill)

- [`/committee_member`](https://www.govtrack.us/developers/api#endpoint_committee_member)

- [`/committee`](https://www.govtrack.us/developers/api#endpoint_committee)

- [`/cosponsorship`](https://www.govtrack.us/developers/api#endpoint_cosponsorship)

- [`/person`](https://www.govtrack.us/developers/api#endpoint_person)

- [`/role`](https://www.govtrack.us/developers/api#endpoint_role)

- [`/vote_voter`](https://www.govtrack.us/developers/api#endpoint_vote_voter)

- [`/vote`](https://www.govtrack.us/developers/api#endpoint_vote)

#### Query Examples

- Query by object id: `/person/400782`

- Query by object properties: `/person?gender=female`

- Modify the results limit: `/person?limit=500`

- Order by object properties: `/person?order_by=birthday`

- Return only specified properties: `/person?fields=name,birthday`

### Todos
* Improve query failure errors to be more specific
* Add testing
* Add CSV and XML support
* Implement full text search feature
