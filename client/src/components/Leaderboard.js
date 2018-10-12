import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getParticipants, toggleLeaderboardLoading } from '../actions/leaderboardActions';

class Leaderboard extends Component {
  componentDidMount() {
    this.props.getParticipants();
  }

  render() {
    const participants = this.props.participants;

    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>GitHub</th>
            <th>Pull Requests</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) =>(
            <tr key={index}>
              <th scope="row">{index + 1}</th>
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

export default connect(
  mapStateToProps,
  {
    getParticipants,
    toggleLeaderboardLoading
  }
)(Leaderboard);