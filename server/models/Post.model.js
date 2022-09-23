const { Schema, model, SchemaTypes } = require('mongoose')

const postSchema = new Schema(
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
    },
    password: String,
  },
  {
    timestamps: true,
  }
)

const Post = model('Post', postSchema)

module.exports = Post
