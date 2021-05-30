import React from "react"
import { Link } from "react-router-dom"
import { Image, CloudinaryContext } from "cloudinary-react"
import { useDispatch, useSelector } from "react-redux"

import moment from "moment"
import "./style.css"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { MdComment } from "react-icons/md"
import UserNameCard from "../UserNameCard/userNameCard"
import Comments from "../Comments/index"
import CommentForm from "../Comments/commentForm"
import { selectUser } from "../../store/user/selectors"
import { likeAPost, unlikeAPost } from "../../store/user/actions"

export default function PostCard(props) {
  const dispatch = useDispatch()
  const loggedInUserId = useSelector(selectUser).id

  function checkLikedPost() {
    if (
      props.user.likes &&
      props.user.likes.find((like) => like.postId === props.post.id)
    ) {
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
          onClick={() => onClickUnLikePost(props.post.id)}
        >
          <FaHeart />
        </button>
      )
    } else {
      return (
        <button
          className="p-0"
          style={{ border: "none", background: "none" }}
          name="undo like"
          onClick={() => onClickLikePost(props.post.id)}
        >
          <FaRegHeart />
        </button>
      )
    }
  }

  return (
    <div className=" border mx-auto my-4 px-3" style={{ maxWidth: "600px" }}>
      <div className="d-flex align-items-center  justify-content-between py-3">
        <Link
          to={
            loggedInUserId !== props.post.userId
              ? `/user/${props.post.userId}`
              : `/profile`
          }
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div className="username-card">
            <UserNameCard
              profile_pic={props.post.user.profile_pic}
              name={props.post.user.name}
            />
          </div>
        </Link>
        {moment(props.post.createdAt).format("MMMM Do YYYY")}
      </div>

      <Image
        className="post-image"
        cloudName="hanhngo"
        publicId={props.post.images[0].public_Id}
        width="auto"
        crop="scale"
        key={props.post.images[0].id}
        responsive
      />

      <div className="d-flex py-3">
        <div className="mr-3">
          {likeButton()} {props.post.likes_num} likes
        </div>
        <div>
          <MdComment /> {props.post.comments_num} comments
        </div>
      </div>
      <div className="pb-3 font-weight-bolder">{props.post.caption}</div>
      <Comments comments={props.post.comments} />
      <CommentForm postId={props.post.id} />
    </div>
  )
}
