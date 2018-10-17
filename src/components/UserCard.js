import React from 'react';

export default class UserCard extends React.Component {
    renderButtons() {
        const { state } = this.props;
        if (state === 'applied') {
            return (
                <div className="btn-toolbar justify-content-end" role="toolbar"
                     aria-label="Toolbar with button groups">
                    <button type="button" className="btn btn-secondary">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>

            )
        }
        if (state === 'hired') {
            return (
                <div className="btn-toolbar  justify-content-start" role="toolbar"
                     aria-label="Toolbar with button groups">
                    <button type="button" className="btn btn-secondary">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                </div>

            )
        }
        return (
            <div className="btn-toolbar justify-content-between" role="toolbar"
                 aria-label="Toolbar with button groups">
                <button type="button" className="btn btn-secondary">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-secondary">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
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
                            {/*<p className="card-text">*/}
                            {/*<ul className="list-group list-group-flush">*/}
                            {/*<li className="list-group-item">City - {user.location.state}</li>*/}
                            {/*<li className="list-group-item">State - {user.location.state}</li>*/}
                            {/*<li className="list-group-item">Postcode - {user.location.postcode}</li>*/}
                            {/*<li className="list-group-item">Email - {user.email}</li>*/}
                            {/*<li className="list-group-item">Phone - {user.phone}</li>*/}
                            {/*</ul>*/}
                            {/*</p>*/}
                        </div>
                    </div>
                    {this.renderButtons()}
                </div>
            </div>
        );
    }
}
