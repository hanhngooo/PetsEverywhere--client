import React from "react";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";

export default function MiniProfilePic(props) {
  return (
    <CloudinaryContext>
      <Image cloudName="hanhngo" publicId={props.profile_pic}>
        <Transformation
          gravity="face:auto"
          width="40"
          height="40"
          radius="max"
          zoom="0.6"
          crop="thumb"
          border="0.01px_solid_rgb:808080"
        />
      </Image>
    </CloudinaryContext>
  );
}
