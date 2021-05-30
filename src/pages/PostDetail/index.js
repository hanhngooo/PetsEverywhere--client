import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, Link } from "react-router-dom"
import { Image, CloudinaryContext } from "cloudinary-react"
import { Row, Col, Container, Modal } from "react-bootstrap"
import "./style.css"
import moment from "moment"
import { AiOutlineClose } from "react-icons/ai"
import { MdComment } from "react-icons/md"
import { FaHeart, FaRegHeart } from "react-icons/fa"

import UserNameCard from "../../components/UserNameCard/userNameCard"
import CommentForm from "../../components/Comments/commentForm"
import { fetchAPost } from "../../store/postDetail/actions"
import { selectPostById } from "../../store/postDetail/selectors"
import { likeAPost, unlikeAPost } from "../../store/user/actions"
import { selectUser } from "../../store/user/selectors"

export default function PostDetail() {
  let history = useHistory()
  const postId = useParams().id
  const [showModal, setShowModal] = useState(true)
  const dispatch = useDispatch()
  const post = useSelector(selectPostById)
  const user = useSelector(selectUser)

  useEffect(() => {
    dispatch(fetchAPost(postId))
  }, [dispatch, postId])

  let back = (event) => {
    event.stopPropagation()
    history.goBack()
  }

  function checkLikedPost() {
    if (user.likes && user.likes.find((like) => like.postId === post.id)) {
      return true
    } else {
      return false
    }
  }

  function onClickLikePost(postId) {
    dispatch(likeAPost(postId))
  }
  function onClickUnLikePost(postId) {
    dispatch(unlikeAPost(postId))
  }

  function likeButton() {
    if (checkLikedPost()) {
      return (
        <button
          style={{ border: "none", background: "none" }}
          name="undo like"
          onClick={() => onClickUnLikePost(postId)}
        >
          <FaHeart />
        </button>
      )
    } else {
      return (
        <button
          style={{ border: "none", background: "none" }}
          name="undo like"
          onClick={() => onClickLikePost(postId)}
        >
          <FaRegHeart />
        </button>
      )
    }
  }
  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="custom-modal"
        backdrop="static"
      >
        <Modal.Body className="modal-body">
          <Link
            to={user.id !== post.userId ? `/user/${post.userId}` : `/profile`}
          >
            <AiOutlineClose
              style={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
              onClick={back}
            />
          </Link>
          <Container>
            <Row>
              <Col md={12} lg={8} className="pt-2 px-0 mx-auto">
                <CloudinaryContext>
                  <Image
                    cloudName="hanhngo"
                    publicId={post.images?.[0].public_Id}
                    key={post.images?.[0].id}
                    width="550"
                    crop="fill"
                  />
                </CloudinaryContext>
              </Col>
              <Col md={12} lg={4} className="post-detail pl-0  pt-2">
                <div
                  className="post-info d-flex flex-column overflow-hidden"
                  style={{ height: "100%" }}
                >
                  <div className="d-flex align-items-center  justify-content-between px-1">
                    <UserNameCard
                      profile_pic={post.user && post.user.profile_pic}
                      name={post.user && post.user.name}
                    />
                    <i>{moment(post.updatedAt).format("MMMM Do YYYY")}</i>
                  </div>

                  <p className="pt-4 px-1">{post.caption}</p>

                  <div className="d-flex py-3">
                    <div className="mr-3">
                      {likeButton()} {post.likes_num} likes
                    </div>
                    <div>
                      <MdComment /> {post.comments_num} comments
                    </div>
                  </div>
                  <div className="comment-all">
                    {post.comments &&
                      post.comments.map((comment) => {
                        return (
                          <div className="border-bottom py-3" key={comment.id}>
                            <div className="d-flex justify-content-between align-items-center px-1">
                              <UserNameCard
                                profile_pic={
                                  comment.user && comment.user.profile_pic
                                }
                                name={comment.user && comment.user.name}
                              />
                              <i>
                                {moment(post.updatedAt).format("MMMM Do YYYY")}
                              </i>
                            </div>

                            <p className="pl-5  mb-0">{comment.content}</p>
                          </div>
                        )
                      })}
                  </div>
                  <div className="comment-form">
                    <CommentForm postId={post.id} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  )
}
