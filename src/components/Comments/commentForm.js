import React, { useState } from "react"
import { useDispatch } from "react-redux"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"

import { addNewComment } from "../../store/home/actions"

export default function CommentForm(props) {
  const [content, setContent] = useState("")
  const postId = props.postId
  const dispatch = useDispatch()

  function addComment(event) {
    event.preventDefault()
    dispatch(addNewComment(content, postId))

    setContent("")
  }
  return (
    <Form as={Col} className="mt-3 px-0 " md={{ span: 12 }}>
      <Form.Group className="d-flex ">
        <Form.Control
          type="text"
          placeholder="Add your comment..."
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
          className="flex-grow mr-2"
        />
        <Button variant="info" type="submit" onClick={addComment}>
          Post
        </Button>
      </Form.Group>
    </Form>
  )
}
