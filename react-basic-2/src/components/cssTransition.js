import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

class CssTransition extends Component {
    state = {
        show: true
    }
    showDiv = () => {
        this.setState({show: !this.state.show});
    }
    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={500}
                    className='cssSq'
                >
                    <div className='cssSq'>
                        hello
                    </div>
                </CSSTransition>
                 <button onClick={this.showDiv}>Toggle it</button> 
            </div>
        )
    }
}

export default CssTransition


