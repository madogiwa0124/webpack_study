import { Comment } from '../types/types'

const sleep = (msec:number) => new Promise(resolve => setTimeout(resolve, msec));
let commentId:number = 5

let comments:Comment[] = [
  {id: 1, parent_id: null, body: "foo", repries: []},
  {id: 2, parent_id: null, body: "bar", repries: [
    { id: 3, parent_id: 2, body: "baz", repries: [] },
    { id: 4, parent_id: 2, body: "faz", repries: [] },
  ]},
]

export async function commentGet() {
  await sleep(1000)
  return comments
}

export async function commentPost(comment:Comment) : Promise<boolean> {
  await sleep(1000)
  comments.push({
    id: commentId++,
    parent_id: comment.parent_id,
    body: comment.body,
    repries: []
  })
  return true
}

export async function replyPost(reply:Comment) : Promise<boolean> {
  await sleep(1000)
  reply.id = commentId++;
  comments.find(
    comment => comment.id === reply.parent_id
  )?.repries.push(reply)

  return true
}
