import React from "react";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";

export default function ProfilePic(props) {
  return (
    <CloudinaryContext>
      <Image cloudName="hanhngo" publicId={props.profile_pic}>
        <Transformation
          gravity="face:auto"
          width="200"
          height="200"
          radius="max"
          zoom="0.6"
          crop="thumb"
          border="2px_solid_grey"
        />{" "}
      </Image>
    </CloudinaryContext>
  );
}
