export interface Comment {
  id:number | null
  parent_id:number | null
  body:string
  repries: Comment[]
}
