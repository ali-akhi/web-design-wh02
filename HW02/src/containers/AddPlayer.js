import React from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../actions'
// import './../files/app.css'

const AddPlayer = ({ dispatch }) => {
  let name
  let number
  let national
  let post

  return (
    <div>
      <form
          id={'formm'}
          onSubmit={e => {
        e.preventDefault()
        if (!name.value.trim() || !number.value.trim() || !national.value.trim() || !post.value.trim()) {
          return
        }
        dispatch(addPlayer(name.value,number.value,national.value,post.value))
        name.value = ''
        number.value = ''
        national.value = ''
        post.value = ''
      }}>
        <div className={'bd-example'} >
          <div className={'input-group mb-3'}>
            <div className={'input-group-prepend'}>
              <span className={'input-group-text'} id="basic-addon3">Name:</span>
            </div>
            <input type="text" className={'form-control'} id="basic-url" aria-describedby="basic-addon3" ref={node => name = node} />
          </div>
          <div className={'input-group mb-3'}>
            <div className={'input-group-prepend'}>
              <span className={'input-group-text'} id="basic-addon3">Number:</span>
            </div>
            <input type="text" className={'form-control'} id="basic-url" aria-describedby="basic-addon3" ref={node => number = node} />
          </div>
          <div className={'input-group mb-3'}>
            <div className={'input-group-prepend'}>
              <span className={'input-group-text'} id="basic-addon3">Nationality:</span>
            </div>
            <input type="text" className={'form-control'} id="basic-url" aria-describedby="basic-addon3" ref={node => national = node} />
          </div>
          <div className={'input-group mb-3'}>
            <div className={'input-group-prepend'}>
              <span className={'input-group-text'} id="basic-addon3">Post:</span>
            </div>
            <input type="text" className={'form-control'} id="basic-url" aria-describedby="basic-addon3" ref={node => post = node} />
          </div>
          <button type="submit" className="btn btn-success">Add</button>

        </div>
      </form>
    </div>
  )
}

export default connect()(AddPlayer)

