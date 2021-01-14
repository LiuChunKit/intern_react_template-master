import React from 'react';
import TOS from './../assets/TOS.png';
import { format } from 'date-fns';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: null,
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: format(new Date(), 'MM/dd/yyyy hh:mm:ss a')
            })
        }, 1000)
    }
    render() {
        return (
            <>
                <div className="float-right">{this.state.curTime} (GMT+8)</div>
                <div className="relative mb-3">
                    <img src={TOS} alt={TOS} style={{ height: "60px" }} />
                    <span className="pg-icon-title" style={{ fontFamily: "unset" }}>TOS Chat</span>
                </div>
            </>
        )
    }
}