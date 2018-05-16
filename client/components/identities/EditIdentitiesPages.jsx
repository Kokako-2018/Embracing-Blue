import React from 'react'
import { connect } from 'react-redux'

import { apiGetIdentitiesPage, apiEditIdentitiesPage } from '../../actions/pages'

class EditIdentitiesPages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            oldPage: { ...props.page },
            newPage: { ...props.page }
        }
        this.editPageDetails = this.editPageDetails.bind(this)
        this.submitEdit = this.submitEdit.bind(this)
    }

    editPageDetails(e) {
        let { newPage } = this.state
        newPage[e.target.name] = e.target.value
        this.setState({ newPage })
    }

    submitEdit(e) {
        e.preventDefault()
        this.props.dispatch(apiEditIdentitiesPage(this.state.oldPage.id, this.state.newPage))
        this.props.submit()
    }


    render() {

        let { newPage } = this.state

        return (
            <div classname='field'>
                <form onSubmit={this.submitEdit}>
                    <div className='field'>
                    <input name='image1' type='text' value={newPage.image1} />
                    <input name='header' type='text' value={newPage.header}/>
                    <input name='subheader' type='text' value={newPage.subheader} />
                    <input name='preblurb' type='text' value={newPage.preblurb} />
                    <input name='title' type='text' value={newPage.title} />
                    <input name='blurb' type='text' value={newPage.blurb} />
                    <input name='text_extra' type='text' value={newPage.text_extra} />
                    <input name='text_extra2' type='text' value={newPage.text_extra2} />
                </div>

                <input className='button is-primary' type='submit' value='Submit' />

                </form>
            </div>

        )
    }
}



export default connect()(EditIdentitiesPages)