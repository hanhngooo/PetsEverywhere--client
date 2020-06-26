import React from "react";
import "./style.css";
import { Image, CloudinaryContext } from "cloudinary-react";
import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";
import { MdComment } from "react-icons/md";

export default function ShortPostCard(props) {
  return (
    <MDBContainer key={props.post.id} style={{ width: "20rem" }}>
      <MDBRow>
        {props.post.images &&
          props.post.images.map((image) => {
            return (
              <MDBCol md="4" style={{ padding: "1rem" }}>
                <MDBView>
                  <CloudinaryContext key={image.id}>
                    <Image
                      cloudName="hanhngo"
                      publicId={image.public_Id}
                      width="320"
                      height="320"
                      crop="fill"
                    />
                    <MDBMask className="subtitle">
                      <span></span> {props.post.likes_num}❤{" "}
                      {props.post.comments_num} <MdComment />
                    </MDBMask>
                  </CloudinaryContext>
                </MDBView>
              </MDBCol>
            );
          })}
      </MDBRow>
    </MDBContainer>
  );
}
