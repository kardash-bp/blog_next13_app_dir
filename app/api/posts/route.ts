import { NextResponse } from "next/server"
import data from '../../../data/posts.json'
export function GET(req: Request) {
  return NextResponse.json(data.posts)
}
