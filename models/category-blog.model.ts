import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    name: String,
    parent: String,
    description: String
  },
  {
    timestamps: true
  }
)

const CategoryBlog = mongoose.model('CategoryBlog', schema, 'categories-blog')

export default CategoryBlog
