import React, { Component } from 'react';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Hello Component</div>

                            <div className="panel-body">
                                I'm an hello example component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
