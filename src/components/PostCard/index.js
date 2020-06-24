import React from "react";
import { Link } from "react-router-dom";
import { Image, CloudinaryContext } from "cloudinary-react";
import { useDispatch } from "react-redux";

import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import MiniProfilePic from "../PersonalCard/miniProfilePic";
import { likeAPost, unlikeAPost } from "../../store/user/actions";

export default function PostCard(props) {
  const dispatch = useDispatch();

  function checkLikedPost() {
    if (
      props.user.likes &&
      props.user.likes.find((like) => like.postId === props.post.id)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function onClickLikePost(postId) {
    dispatch(likeAPost(postId));
  }
  function onClickUnLikePost(postId) {
    dispatch(unlikeAPost(postId));
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
      );
    } else {
      return (
        <button
          style={{ border: "none", background: "none" }}
          name="undo like"
          onClick={() => onClickLikePost(props.post.id)}
        >
          <FaRegHeart />
        </button>
      );
    }
  }

  return (
    <Card style={{ width: "40.03rem", margin: "5rem" }}>
      <CloudinaryContext key={props.post.id}>
        <Link
          to={`/user/${props.post.userId}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MiniProfilePic profile_pic={props.post.user.profile_pic} />

          <Card.Text style={{ fontWeight: "bold" }}>
            {props.post.user.name}
          </Card.Text>
        </Link>
        {props.post.images &&
          props.post.images.map((image) => {
            return (
              <Image
                cloudName="hanhngo"
                publicId={image.public_Id}
                width="637"
                crop="scale"
                key={image.id}
              />
            );
          })}
        {likeButton()}
        <Card.Text>{props.post.likes_num} likes</Card.Text>
        <Card.Text>{props.post.comments_num} comments</Card.Text>
      </CloudinaryContext>
    </Card>
  );
}
