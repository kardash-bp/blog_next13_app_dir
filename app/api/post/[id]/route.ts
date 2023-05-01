import { NextResponse } from "next/server"
import data from '../../../../data/posts.json'
export async function GET(req: Request, { params: { id } }: { params: { id: string } }) {
  const filtered = data.posts.find(p => p.id === +id)
  console.log(filtered);
  return NextResponse.json(filtered)
}
