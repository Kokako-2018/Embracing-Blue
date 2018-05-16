import React from 'react'
import { connect } from 'react-redux'

import { apiGetResourcesPage, apiEditResourcesPage } from '../../actions/pages'

class EditResourcesPages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            oldPage: { ...props.newPage },
            newPage: { ...props.newPage }
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
        this.props.dispatch(apiEditResourcesPage(this.state.oldPage.id, this.state.newPage))
        this.props.submit()
    }


    render() {

        let { newPage } = this.state

        return (
            <div classname='field'>
                <form onSubmit={this.submitEdit}>
                    <div className='field'>
                        <input name='image1' type='text' value={newPage.image1} onChange={this.editPageDetails} />
                        <input name='header' type='text' value={newPage.header} onChange={this.editPageDetails} />
                        <input name='subheader' type='text' value={newPage.subheader} onChange={this.editPageDetails} />
                        <input name='preblurb' type='text' value={newPage.preblurb} onChange={this.editPageDetails} />
                        <input name='title' type='text' value={newPage.title} onChange={this.editPageDetails} />
                        <input name='blurb' type='text' value={newPage.blurb} onChange={this.editPageDetails} />
                        <input name='text_extra' type='text' value={newPage.text_extra} onChange={this.editPageDetails} />
                        <input name='text_extra2' type='text' value={newPage.text_extra2} onChange={this.editPageDetails} />

                    </div>

                    <input className='button is-primary' type='submit' value='Submit' />

                </form>
            </div>

        )
    }
}



export default connect()(EditResourcesPages)