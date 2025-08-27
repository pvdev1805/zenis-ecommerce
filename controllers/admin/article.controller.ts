import { Request, Response } from 'express'
import CategoryBlog from '../../models/category-blog.model'

export const category = (req: Request, res: Response) => {
  res.render('admin/pages/article-category', {
    pageTitle: 'Article Category'
  })
}

export const createCategory = async (req: Request, res: Response) => {
  const categoryList = await CategoryBlog.find({})

  res.render('admin/pages/article-create-category', {
    pageTitle: 'Create Article Category',
    categoryList: categoryList
  })
}

export const createCategoryPost = async (req: Request, res: Response) => {
  console.log(req.body)
  const newRecord = new CategoryBlog(req.body)

  await newRecord.save()

  res.status(201).json({
    code: 'success',
    message: 'Category created successfully!'
  })
}
