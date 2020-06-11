import React from 'react'

// functional component
const CommentDetail = props => {
  return (
    <div className="ui list">
      <div className="item">
        <img className="ui avatar image" alt="avatar" src={props.avatar} />
        <div className="content">
          <a className="header" href="/">{props.author}</a>
          <div className="description">{props.comment}</div>
        </div>
      </div>
    </div>
  )
}

export default CommentDetail