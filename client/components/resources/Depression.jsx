import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import EditResourcesPages from './EditResourcesPages'
import { apiGetResourcesPage, apiEditResourcesPage } from '../../actions/pages'


class Depression extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editPageTarget: null,
            resourcePage: props.resourcePage[0]
        }
    }

    componentDidMount() {
        this.props.dispatch(apiGetResourcesPage({ id: 2 }))
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.setState({ resourcePage: newProps.resourcePage[0] })
    }

    toggleEdit(resourcePage) {
        if (this.state.editPageTarget == resourcePage) resourcePage = null
        this.setState({ editPageTarget: resourcePage })
    }



    render() {
        let { auth } = this.props
        let resourcePage = this.state.resourcePage

        const showEdit = this.state.editPageTarget == resourcePage
        const canEdit =   auth.user ? auth.user.is_admin == true : false

        return (

            <div className="section">


                <div className="section">
                    {showEdit
                        ? <EditResourcesPages newPage={resourcePage} submit={() => this.toggleEdit(null)} />
                        : <div>
                            <figure className="image">
                                <img src={resourcePage && resourcePage.image1} />
                            </figure>
                            <div className='has-text-centered'>
                                <h1 className="title is-size-3">
                                    <span className='has-text-info'>{resourcePage && resourcePage.header}</span>
                                </h1>
                                <h3 className='subtitle is-size-4'>{resourcePage && resourcePage.subheader}</h3>
                            </div>
                            <p className='is-size-3'>{resourcePage && resourcePage.title}</p>
                            <p id='paras' className='is-size-4'>
                                {resourcePage && resourcePage.blurb}</p>
                        </div>
                    }

                    {canEdit == true && <button className='button has-background-info is-centered has-text-light' onClick={() => this.toggleEdit(resourcePage)}>{showEdit ? 'Cancel Edit' : 'Edit Page'}</button>}

                </div>
                <Link to='/'><button className='back button has-background-info is-centered has-text-light'>Back</button></Link>
            </div>

        )
    }
}

const mapStateToProps = ({ auth, resourcePage }) => ({ auth, resourcePage })


export default connect(mapStateToProps)(Depression)
