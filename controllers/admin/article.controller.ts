import { Request, Response } from 'express'

export const category = (req: Request, res: Response) => {
  res.render('admin/pages/article-category', {
    pageTitle: 'Article Category'
  })
}

export const createCategory = (req: Request, res: Response) => {
  res.render('admin/pages/article-create-category', {
    pageTitle: 'Create Article Category'
  })
}

export const createCategoryPost = (req: Request, res: Response) => {
  console.log(req.body)

  res.status(201).json({
    code: 'success',
    message: 'Category created successfully!'
  })
}
