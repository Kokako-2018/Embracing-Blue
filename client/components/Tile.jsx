import React from 'react'


class Tile extends React.Component {

    render() {
        return (

            <div className="column">
            
                <div id='card' className="card">
                    <a href="" >
                        <div className="card-image card-shadow img">
                            <img src={this.props.src} />
                        </div>
                        <div className="card-content has-background-info">
                            {this.props.linkText}
                        </div>
                    </a>
                </div>
            </div>

        )
    }
}

export default Tile
