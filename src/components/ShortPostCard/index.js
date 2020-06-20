import React from "react";
import Card from "react-bootstrap/Card";
import { Image, CloudinaryContext } from "cloudinary-react";

export default function ShortPostCard(props) {
  return (
    <Card key={props.post.id} style={{ width: "20rem" }}>
      {props.post.images &&
        props.post.images.map((image) => {
          //   return <Card.Img key={image.id} variant="top" src={image.imageURL} />;
          return (
            <CloudinaryContext>
              <Image
                key={image.id}
                cloudName="hanhngo"
                publicId={image.public_Id}
                width="300"
                crop="scale"
              />
            </CloudinaryContext>
          );
        })}

      <Card.Text>{props.post.likes_num} ❤</Card.Text>
      <Card.Text>{props.post.comments_num} comments</Card.Text>
    </Card>
  );
}
