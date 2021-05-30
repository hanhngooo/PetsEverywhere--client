import { CloudinaryContext } from "cloudinary-react"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import PostCard from "../../components/PostCard"
import { fetchAllPosts } from "../../store/home/actions"
import { selectAllPosts } from "../../store/home/selectors"
import { selectUser } from "../../store/user/selectors"
import { getAllUsers } from "../../store/users/actions"
export default function Home() {
  const dispatch = useDispatch()
  const allPosts = useSelector(selectAllPosts)
  const user = useSelector(selectUser)
  const history = useHistory()

  useEffect(() => {
    if (user.token === null) {
      history.push("/login")
    }
    dispatch(fetchAllPosts())
    dispatch(getAllUsers())
  }, [user.token, history, dispatch])

  return (
    <div className="App-body">
      <CloudinaryContext cloudName="hanhngo">
        {allPosts &&
          allPosts.map((post, index) => {
            return <PostCard key={index} post={post} user={user} />
          })}
      </CloudinaryContext>
    </div>
  )
}
