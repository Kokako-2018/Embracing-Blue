import React from 'react'


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