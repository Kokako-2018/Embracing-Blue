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
                    <div className='form-container'>

                        <div className='field-label is-normal'>
                            <label className="is-size-4">Image</label>
                            <input name='image1' type='text' value={newPage && newPage.image1} onChange={this.editPageDetails} />
                        </div>

                        <div className='field-label is-normal'>
                            <label className="is-size-4">First Line</label>
                            <input name='header' type='textarea' value={newPage.header} onChange={this.editPageDetails} />
                        </div>

                        <div className='field-label is-normal'>
                            <label className="is-size-4">Second Line</label>
                            <input name='subheader' type='textarea' value={newPage.subheader} onChange={this.editPageDetails} />
                        </div>


                        <div className='field-label is-normal'>
                            <label className="is-size-4">Title</label>
                            <input name='title' type='text' value={newPage.title} onChange={this.editPageDetails} />
                        </div>

                        <div className='field-label is-normal'>
                            <label className="is-size-4"> Line</label>
                            <input name='preblurb' type='textarea' value={newPage.preblurb} onChange={this.editPageDetails} />
                        </div>

                        <div className='field-label is-normal'>
                            <label className="is-size-4">Blurb</label>
                            <input name='blurb' type='textarea' value={newPage.blurb} onChange={this.editPageDetails} />
                        </div>


                        <div className='field-label is-normal'>
                            <label className="is-size-4">Second Line</label>
                            <input name='text_extra' type='textarea' value={newPage.text_extra} onChange={this.editPageDetails} />
                        </div>


                        <div className='field-label is-normal'>
                            <label className="is-size-4">Extra Info</label>
                            <input name='text_extra2' type='textarea' value={newPage.text_extra2} onChange={this.editPageDetails} />
                        </div>
                    </div>

                    <input className='button is-primary' type='submit' value='Submit' />

                </form>
            </div>
        )
    }
}



export default connect()(EditResourcesPages)