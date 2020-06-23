import React from "react";
import Card from "react-bootstrap/Card";
import { Image, CloudinaryContext } from "cloudinary-react";
import MiniProfilePic from "../PersonalCard/miniProfilePic";

export default function PostCard(props) {
  return (
    <Card style={{ width: "40.03rem", margin: "5rem" }}>
      <CloudinaryContext key={props.post.id}>
        <MiniProfilePic profile_pic={props.post.user.profile_pic} />

        <Card.Text>{props.post.user.name}</Card.Text>

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

        <Card.Text>{props.post.likes_num} likes</Card.Text>
        <Card.Text>{props.post.comments_num} comments</Card.Text>
      </CloudinaryContext>
    </Card>
  );
}
