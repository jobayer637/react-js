import React from 'react'

class Content extends React.Component {

    state = {
        value : 1
    }

    handleClick = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    render(){
        return (
            <div className="content my-2">
                <div className="card rounded-0">
                    <div className="card-body">
                        <button 
                            className="btn btn-outline-primary rounded-0"
                            onClick={this.handleClick}
                        >
                            Click Me {this.state.value}
                        </button>
                    </div>
                </div>
            </div>
          )
    }
}

export default Content;