import React from 'react'

const commentsData = [
  {
    name: "Vaibhav",
    text: "lorem ipsum",
    replies: [
      {
        name: "Vaibhav 1",
        text: "lorem ipsum",
        replies: [
          {
            name: "Vaibhav 2",
            text: "lorem ipsum",
            replies: [
              {
                name: "Vaibhav 3",
                text: "lorem ipsum",
                replies: [

                ]
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Vaibhav",
    text: "lorem ipsum",
    replies: [

    ]
  },
  {
    name: "Vaibhav",
    text: "lorem ipsum",
    replies: [

    ]
  },
]

const Comment = ({ info }) => {
  return (
    <div className="flex">
      <img className="h-12 w-12"
        alt="user" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" />
      <div>
        <h1>{info.name}</h1>
        <h2>{info.text}</h2>
      </div>

    </div>
  )
}

const CommentsList = ({ comments }) => {
  return comments.map(comment => {
    return (
      <div className="">
        <Comment info={comment} />
        <div className="text-red-950 ml-4 border-l-2 border-solid border-black">
          <CommentsList
            comments={comment.replies}
          />
        </div>
      </div>
    )
  })
}

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer