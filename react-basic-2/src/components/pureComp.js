import React, {PureComponent } from 'react';

class PureComp extends PureComponent {
    state = {
        name: 'Francis'
    }   

    render() {
        return(
            <>
                <h3>{this.state.name}</h3>
                <button onClick={
                    () => this.setState({name: 'Lisa'})
                }>Click to change</button>
            </>
        )
    }
}

export default PureComp;