import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
// components
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

// functional react component
const App = () => {
  return (
    <div className="app">
      <ApprovalCard>
        <CommentDetail author="Bob" avatar={faker.image.avatar()} comment="You are so right" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam" avatar={faker.image.avatar()} comment="I love React!!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Rachel" avatar={faker.image.avatar()} comment="This is so cool" />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)