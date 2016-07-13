var bill = require('./routes/bill')
    committeeMember = require('./routes/committee_member')
    committee = require('./routes/committee')
    cosponsorship = require('./routes/cosponsorship')
    person = require('./routes/person')
    role = require('./routes/role')
    voteVoter = require('./routes/vote_voter')
    vote = require('./routes/vote')

module.exports = [].concat( bill, committeeMember, committee,
                            cosponsorship, person, role,
                            voteVoter, vote );
