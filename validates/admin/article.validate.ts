import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

export const createCategoryPost = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'Name is required'
    }),
    parent: Joi.string().allow(''),
    description: Joi.string().allow('')
  })

  const { error } = schema.validate(req.body)

  if (error) {
    const errorMessage = error.details[0].message
    res.status(400).json({
      code: 'error',
      message: errorMessage
    })
    return
  }

  next()
}
