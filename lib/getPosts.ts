export const getPosts = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json()
    return data.slice(0, 5)
  } catch (err: any) {
    console.log(err)
  }
}
