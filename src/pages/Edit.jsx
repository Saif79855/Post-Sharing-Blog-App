import React, { useState } from 'react'
import appwriteService from "../appwrite/majorConfig"
import { Container } from '../components'
import { useNavigate,useParams } from 'react-router-dom'

function Edit() {
  const[posts,setPosts] = useState(null)
  const{slug}= useParams()
  const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

   return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default Edit