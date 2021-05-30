import React from "react"
import { Image, CloudinaryContext, Transformation } from "cloudinary-react"

export default function ProfilePic(props) {
  return (
    <div>
      <CloudinaryContext cloudName="hanhngo">
        <Image publicId={props.profile_pic} style={{ padding: "1rem" }}>
          <Transformation
            gravity="face:auto"
            width="150"
            height="150"
            radius="max"
            zoom="0.6"
            crop="thumb"
            border="2px_solid_grey"
            dpr="auto"
            responsive_placeholder="blank"
          />{" "}
        </Image>
      </CloudinaryContext>
    </div>
  )
}
