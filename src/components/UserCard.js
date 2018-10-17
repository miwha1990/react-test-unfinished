import React from 'react';
import PropTypes from 'prop-types';


export default class UserCard extends React.Component {
    static propTypes = {
        state: PropTypes.string,
        user: PropTypes.object,
        onPrevClick: PropTypes.func,
        onNextClick: PropTypes.func,
    };
    handleNextClick = () => {
        const { state, user, onNextClick } = this.props;
        onNextClick({state, user});
    };
    handlePrevClick = () => {
        const { state, user, onPrevClick } = this.props;
        onPrevClick({state, user});
    };
    renderButtons() {
        const { state } = this.props;
        if (state === 'applied') {
            return (
                <div className="btn-toolbar justify-content-end" role="toolbar"
                     aria-label="Toolbar with button groups">
                    <button type="button" className="btn btn-secondary" onClick={this.handleNextClick}>
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                    </button>
                </div>

            )
        }
        if (state === 'hired') {
            return (
                <div className="btn-toolbar  justify-content-start" role="toolbar"
                     aria-label="Toolbar with button groups">
                    <button type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>
                        <i className="fa fa-chevron-left" aria-hidden="true" />
                    </button>
                </div>

            )
        }
        return (
            <div className="btn-toolbar justify-content-between" role="toolbar"
                 aria-label="Toolbar with button groups">
                <button type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>
                    <i className="fa fa-chevron-left" aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-secondary" onClick={this.handleNextClick}>
                    <i className="fa fa-chevron-right" aria-hidden="true" />
                </button>
            </div>
        )
    }
    render() {
        const { user } = this.props;
        return (
            <div className="card mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <img src={user.picture.thumbnail} className="rounded" />
                        </div>
                        <div className="col-8">
                            <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{user.gender} {user.registered.age} y.o.</h6>
                            <p className="card-text">
                                <div><b>City</b> - {user.location.city}</div>
                                <div><b>State</b> - {user.location.state}</div>
                            </p>
                        </div>
                    </div>
                    {this.renderButtons()}
                </div>
            </div>
        );
    }
}
