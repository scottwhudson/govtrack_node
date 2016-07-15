'use strict';

const bill = require('./routes/bill')
const committeeMember = require('./routes/committee_member')
const committee = require('./routes/committee')
const cosponsorship = require('./routes/cosponsorship')
const person = require('./routes/person')
const role = require('./routes/role')
const voteVoter = require('./routes/vote_voter')
const vote = require('./routes/vote')

module.exports = [].concat( bill, committeeMember, committee,
                            cosponsorship, person, role,
                            voteVoter, vote );
