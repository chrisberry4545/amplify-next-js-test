export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

const Post = ({ post }) => {
  return <p>Post id: {post.id}</p>
}

export default Post;