import React from "react";
import { Link } from "react-router-dom";
import { Image, CloudinaryContext } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdComment } from "react-icons/md";
import UserNameCard from "../UserNameCard/userNameCard";
import Comments from "../Comments/index";
import CommentForm from "../Comments/commentForm";
import { selectUser } from "../../store/user/selectors";
import { likeAPost, unlikeAPost } from "../../store/user/actions";

export default function PostCard(props) {
  const dispatch = useDispatch();
  const loggedInUserId = useSelector(selectUser).id;

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
    <Card className="mx-auto" style={{ width: "40.03rem", margin: "3rem" }}>
      <CloudinaryContext key={props.post.id}>
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
          <Container>
            <Row>
              <Col xs={0} md={4}>
                <div className="usernamecard">
                  <UserNameCard
                    profile_pic={props.post.user.profile_pic}
                    name={props.post.user.name}
                  />
                </div>
              </Col>
              <Col xs={7} className="commentdate">
                {moment(props.post.createdAt).format("MMMM Do YYYY")}
              </Col>
            </Row>
          </Container>
        </Link>
        <div className="post-image">
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
        </div>
        <Container>
          <Row style={{ paddingTop: "1rem" }}>
            <Col xs={0} md={4}>
              {likeButton()} {props.post.likes_num} likes
            </Col>
            <Col>
              <MdComment /> {props.post.comments_num} comments
            </Col>
          </Row>
        </Container>
        <Card.Text style={{ padding: "0.5rem 0.5rem ", margin: "0.5rem" }}>
          {props.post.caption}
        </Card.Text>
        <Comments comments={props.post.comments} />
        <CommentForm postId={props.post.id} />
      </CloudinaryContext>
    </Card>
  );
}
