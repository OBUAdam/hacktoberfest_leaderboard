import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

import trophy from '../assets/trophy.ico';
import { getParticipants } from '../actions/leaderboardActions';

class Leaderboard extends Component {
  componentDidMount() {
    this.props.getParticipants();
  }

  sortParticipants = participants => {
    return participants.sort((a, b) => b.numPullReq - a.numPullReq);
  };

  rankParticipants = participants => {
    // If there are no participants, return an empty array
    if (participants.length === 0) { return []; }

    let rank = 0;

    for (let i = 0; i < participants.length; i++) {
      if (participants[i].numPullReq >= 5) {
        participants[i].rank = rank;
      }
      else if (i === 0) {
        rank++;
        participants[i].rank = rank;
      }
      else if (participants[i].numPullReq === participants[i - 1].numPullReq) {
        participants[i].rank = rank;
      }
      else {
        rank++;
        participants[i].rank = rank;
      }
    };

    return participants;
  };

  getRank = rank => {
    if (rank === 0) {
      return <img src={trophy} alt={rank}/>;
    }
    return rank;
  };

  render() {
    const participants = this.props.participants;
    const sorted = this.sortParticipants(participants);
    const ranked = this.rankParticipants(sorted);

    return (
      <Table responsive={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>GitHub</th>
            <th>Pull Requests</th>
          </tr>
        </thead>
        <tbody>
          {ranked.map((participant) =>(
            <tr key={participant.githubUserName}>
              <th scope="row">{this.getRank(participant.rank)}</th>
              <td>{participant.displayName}</td>
              <td>
                <a href={`https://github.com/${participant.githubUserName}`}>
                  {participant.githubUserName}
                </a>
              </td>
              <td>{participant.numPullReq}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => ({
  participants: state.leaderboard.participants,
  isLoading: state.leaderboard.isloading
})

export default connect(mapStateToProps, { getParticipants })(Leaderboard);