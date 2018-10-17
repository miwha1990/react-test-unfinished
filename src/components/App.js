import React from 'react';
import { getUsers } from "../apis";
import UserCard from './UserCard';

export default class App extends React.Component {
    state = {
        applied: [],
        interviewing: [],
        hired: []
    };
    componentDidMount() {
        getUsers('/?nat=gb&results=10').then(response => this.setState({applied: response.results}))
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h3 className="text-center">Applied</h3>
                        {this.state.applied.map(user => (<UserCard user={user} state={'applied'} />))}
                    </div>
                    <div className="col-sm">
                        <h3 className="text-center">Interviewing</h3>
                        {this.state.interviewing.map(user => (<UserCard user={user} state={'interviewing'} />))}
                    </div>
                    <div className="col-sm">
                        <h3 className="text-center">Hired</h3>
                        {this.state.hired.map(user => (<UserCard user={user} state={'hired'} />))}
                    </div>
                </div>
            </div>
        );
    }
}
