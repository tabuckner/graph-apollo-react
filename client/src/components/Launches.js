import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY = gql`
query LaunchesQuery{
  launches {
    flight_number
    mission_name
    launch_date_local
    launch_success
  }
}
`;

export default class Launches extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>loading</h4>
              if (error) console.error(error)
              
              return <React.Fragment>
                {
                  data.launches.map((launch) => 
                    <LaunchItem key={launch.flight_number} launch={launch}></LaunchItem>
                  )
                }
              </React.Fragment>
            }
          }
        </Query>
      </React.Fragment>
    )
  }
}
