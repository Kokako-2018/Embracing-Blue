import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import EditIdentitiesPages from './EditIdentitiesPages'
import { apiGetIdentitiesPage, apiEditIdentitiesPage } from '../../actions/pages'



class Men extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editPageTarget: null,
            identityPage: props.identitiesPage[0]
        }
    }

    componentDidMount() {
        this.props.dispatch(apiGetIdentitiesPage({ id: 6 }))
    }

    componentWillReceiveProps(newProps) {
        this.setState({ identityPage: newProps.identitiesPage[0] })
    }

    toggleEdit(identityPage) {
        if (this.state.editPageTarget == identityPage) identityPage = null
        this.setState({ editPageTarget: identityPage })
    }


    render() {
        let { auth } = this.props
        let identityPage = this.state.identityPage

        const showEdit = this.state.editPageTarget == identityPage
        const canEdit = auth.user ? auth.user.is_admin == true : false

        return (
            <div className="section">
                <div className="section">
                    {showEdit
                        ? <EditIdentitiesPages newPage={identityPage} submit={() => this.toggleEdit(null)} />
                        : <div>
                            <figure className="image">
                                <img src={identityPage && identityPage.image1} />
                            </figure>

                            <div className="has-text-centered">
                                <h3 className="subtitle is-size-3">{identityPage && identityPage.header}</h3>
                                <h1 className="title is-size-1">
                                    <span className="has-text-info">{identityPage && identityPage.subheader}</span>
                                </h1>
                            </div>
                            <div className="section">
                                <p id='paras' className="is-size-3"><b>{identityPage && identityPage.title}</b></p>
                                <p id='paras' className="is-size-4">{identityPage && identityPage.blurb}</p>
                            </div>
                        </div>}
                    {canEdit == true && <button className='button is-primary' onClick={() => this.toggleEdit(identityPage)}>{showEdit ? 'Cancel Edit' : 'Edit Page'}</button>}
                </div>
                <Link to='/'><button className='button has-background-info is-centered has-text-light'>Back</button></Link>

            </div>
        )
    }
}



const mapStateToProps = ({ auth, identitiesPage }) => ({ auth, identitiesPage })


export default connect(mapStateToProps)(Men)