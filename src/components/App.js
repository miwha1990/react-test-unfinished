import React from 'react';
import { getUsers } from "../apis";
import UserCard from './UserCard';

export default class App extends React.Component {
    state = {
        applied: [],
        interviewing: [],
        hired: [],
        filters: '/?nat=gb&results=10',
        citySearch: '',
        stateSearch: '',
    };
    componentDidMount() {
        getUsers(this.state.filters).then(response => this.setState({applied: response.results}))
    }
    handleMovePrevClick = ({state, user}) => {
        if(state === 'hired') {
            this.setState({
                hired: this.state.hired.filter(u => u.login.uuid !== user.login.uuid),
                interviewing: [...this.state.interviewing, user],
            })
        } else {
            this.setState({
                interviewing: this.state.interviewing.filter(u => u.login.uuid !== user.login.uuid),
                applied: [...this.state.applied, user],
            })
        }
    };
    handleMoveNextClick = ({state, user}) => {
        if(state === 'applied') {
            this.setState({
                applied: this.state.applied.filter(u => u.login.uuid !== user.login.uuid),
                interviewing: [...this.state.interviewing, user],
            })
        } else {
            this.setState({
                interviewing: this.state.interviewing.filter(u => u.login.uuid !== user.login.uuid),
                hired: [...this.state.hired, user],
            })
        }
    };
    handleStateSearchFilter = ({location}) => {
        const { stateSearch, citySearch } = this.state;
        if(stateSearch || citySearch) {
            const stateRegex = new RegExp(stateSearch, 'gi');
            const cityRegex = new RegExp(citySearch, 'gi');
            if (stateSearch && citySearch) {
                return location.state.search(stateRegex) !== -1 && location.city.search(cityRegex) !== -1
            }
            if (stateSearch && !citySearch) {
                return location.state.search(stateRegex) !== -1
            }
            return location.city.search(cityRegex) !== -1
        } else {
            return true
        }
    };
    handleCityInputChange = e => this.setState({citySearch: e.target.value});
    handleStateInputChange = e => this.setState({stateSearch: e.target.value});

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="City"
                                   value={this.state.citySearch} onChange={this.handleCityInputChange} />
                            <span className="input-group-text search-icon" id="basic-addon2">
                                <i className="fa fa-search" aria-hidden="true" />
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="State"
                                   value={this.state.stateSearch} onChange={this.handleStateInputChange} />
                            <span className="input-group-text search-icon" id="basic-addon2">
                                <i className="fa fa-search" aria-hidden="true" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <h3 className="text-center">Applied</h3>
                        {this.state.applied.filter(this.handleStateSearchFilter).map(user => (
                            <UserCard user={user} state={'applied'} onNextClick={this.handleMoveNextClick} />
                        ))}
                    </div>
                    <div className="col-sm">
                        <h3 className="text-center">Interviewing</h3>
                        {this.state.interviewing.filter(this.handleStateSearchFilter).map(user => (
                            <UserCard
                                user={user}
                                state={'interviewing'}
                                onPrevClick={this.handleMovePrevClick}
                                onNextClick={this.handleMoveNextClick}
                            />
                        ))}
                    </div>
                    <div className="col-sm">
                        <h3 className="text-center">Hired</h3>
                        {this.state.hired.filter(this.handleStateSearchFilter).map(user => (
                            <UserCard user={user} state={'hired'} onPrevClick={this.handleMovePrevClick} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
