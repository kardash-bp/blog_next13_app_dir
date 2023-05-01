import { NextResponse } from "next/server"
import data from '../../../data/posts.json'
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const searchTerm = searchParams.get('q')
  const filtered = data.posts.filter(p => (p.title.toLowerCase()).includes(searchTerm?.toLowerCase() ?? '') || (p.body.toLowerCase()).includes(searchTerm?.toLowerCase() ?? ''))
  return NextResponse.json(filtered)
}
