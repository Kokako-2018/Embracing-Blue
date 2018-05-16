import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import EditIdentitiesPages from './EditIdentitiesPages'
import { apiGetIdentitiesPage, apiEditIdentitiesPage } from '../../actions/pages'



class Young extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          editPageTarget: null,
        }
      }
    
      componentDidMount() {
        this.props.dispatch(apiGetIdentitiesPage({ id: 2 }))
      }
    
      toggleEdit(identityPage) {
        if (this.state.editPageTarget == identityPage) identityPage = null
        this.setState({ editPageTarget: identityPage })
      }
    
    
    
      render() {
        let { auth } = this.props
        let identityPage = this.props.identitiesPage[0]
    
        const showEdit = this.state.editPageTarget == identityPage
        const canEdit = auth.user.is_admin == true
    
        return (
    
          <div className="section">
            <div className="section">
              {showEdit
                ? <EditIdentitiesPages identityPage={identityPage} submit={() => this.toggleEdit(null)} />
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
                   <p id='page-title' className="is-size-3"><b>{identityPage && identityPage.title}</b></p>
                    <p id='paras' className="is-size-4">{identityPage && identityPage.blurb}</p>
                </div>

              <div className="has-text-centered">
                    <h3 className="subtitle is-size-3">{identityPage && identityPage.text_extra}</h3>
                    <h1 className="title is-size-1">
                        <span className="has-text-info">{identityPage && identityPage.text_extra2}</span> 
                    </h1>
                </div>
                </div>}
                {canEdit == true && <button className='button is-primary' onClick={() => this.toggleEdit(identityPage)}>{showEdit ? 'Cancel Edit' : 'Edit Page'}</button>}
                </div>
                
        
                <Link to='/'><button className='button has-background-info is-centered'>Back</button></Link>


            </div>
        )
    }
}


const mapStateToProps = ({auth, identitiesPage}) => ({auth, identitiesPage})


export default connect(mapStateToProps)(Young)
