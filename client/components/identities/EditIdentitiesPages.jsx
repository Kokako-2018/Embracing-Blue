import React from 'react'
import { connect } from 'react-redux'

import { apiGetIdentitiesPage, apiEditIdentitiesPage } from '../../actions/pages'

class EditIdentitiesPages extends React.Component {
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
        this.props.dispatch(apiEditIdentitiesPage(this.state.oldPage.id, this.state.newPage))
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
                            <textarea className='textarea' rows='4' cols='130' name='image1' type='text' value={newPage && newPage.image1} onChange={this.editPageDetails} />
                        </div>

                        <div className='field-label is-normal'>
                            <label className="is-size-4">First Line</label>
                            <textarea className='textarea' rows='4' cols='130' name='header' type='textarea' value={newPage.header} onChange={this.editPageDetails} />
                        </div>

                        <div className='field-label is-normal'>
                            <label className="is-size-4">Second Line</label>
                            <textarea className='textarea' rows='4' cols='130' name='subheader' type='textarea' value={newPage.subheader} onChange={this.editPageDetails} />
                        </div>


                        <div className='field-label is-normal'>
                            <label className="is-size-4">Title</label>
                            <textarea className='textarea' rows='4' cols='130' name='title' type='text' value={newPage.title} onChange={this.editPageDetails} />
                        </div>

                        <div className='field-label is-normal'>
                            <label className="is-size-4"> Line</label>
                            <textarea className='textarea' rows='4' cols='130' name='preblurb' type='textarea' value={newPage.preblurb} onChange={this.editPageDetails} />
                        </div>

                        <div className='field-label is-normal'>
                            <label className="is-size-4">Blurb</label>
                            <textarea className='textarea' rows='4' cols='130' name='blurb' type='textarea' value={newPage.blurb} onChange={this.editPageDetails} />
                        </div>


                        <div className='field-label is-normal'>
                            <label className="is-size-4">Second Line</label>
                            <textarea className='textarea' rows='4' cols='130' name='text_extra' type='textarea' value={newPage.text_extra} onChange={this.editPageDetails} />
                        </div>


                        <div className='field-label is-normal'>
                            <label className="is-size-4">Extra Info</label>
                            <textarea className='textarea' rows='4' cols='130' name='text_extra2' type='textarea' value={newPage.text_extra2} onChange={this.editPageDetails} />
                        </div>
                    </div>

                    <input className='button has-background-info is-centered' type='submit' value='Submit' />

                </form>
            </div>

        )
    }
}



export default connect()(EditIdentitiesPages)