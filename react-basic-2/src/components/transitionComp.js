import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

export class transitionComp extends Component {
    state = {
        show: true
    }
    showDiv = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <>
                {/* <Transition in={this.state.show} timeout={2000}>
                    { state => (<p style={{background: 'red', height:'100px', transition: 'all 2s ease', opacity: state==='exited' || state ==='exiting' ? 0 : 1}}>
                        {state}
                    </p>)}
                </Transition> */}
                {/* enter and exit = false means no existing, entering */}
                <Transition in={this.state.show} timeout={{
                    enter: 2000,
                    exit: 50
                }} 
                // enter={false} exit={false}
                >

                    { state => (<p className={`square square-${state}`}>
                        {state}
                    </p>)}
                </Transition>
                {/* { this.state.show ? <div style={{background: 'red', height:'100px'}}></div> : null } */}
                <button onClick={this.showDiv}>Toggle it</button> 
            </>
            
        )
    }
}

export default transitionComp
