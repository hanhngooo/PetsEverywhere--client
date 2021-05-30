import React from "react"
import "./style.css"
import MiniProfilePic from "./miniProfilePic"

export default function UserNameCard(props) {
  return (
    <div className="user-name-card d-flex align-items-center">
      <MiniProfilePic profile_pic={props.profile_pic} />
      <div className="font-weight-bold px-2">{props.name}</div>
    </div>
  )
}
