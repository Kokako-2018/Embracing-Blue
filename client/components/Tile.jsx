import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

class Tile extends React.Component {

    render() {
        return (
            <div className="tile">
                <a href="" >
                    <div >
                        <img className="tileImage" src={this.props.src}/>
                    </div>
                    <div className="linkText">
                        {this.props.linkText}
                    </div>
                </a> 
            </div>   
        )
    }
}

export default Tile