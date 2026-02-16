import mongoose, { Schema, model, models } from 'mongoose';

// Comment Interface and Schema
export interface IComment {
  _id?: string;
  name: string;
  email: string;
  content: string;
  createdAt: Date;
  isApproved: boolean;
}

const CommentSchema = new Schema<IComment>({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

// Blog Interface and Schema
export interface IBlog {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  tags: string[];
  categories: string[];
  author: string;
  status: 'draft' | 'published' | 'archived';
  views: number;
  likes: number;
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

const BlogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500,
  },
  featuredImage: {
    type: String,
    trim: true,
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true,
  }],
  categories: [{
    type: String,
    trim: true,
    lowercase: true,
  }],
  author: {
    type: String,
    required: true,
    trim: true,
    default: 'Umesh Gajjar',
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [CommentSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  publishedAt: {
    type: Date,
  },
  seoTitle: {
    type: String,
    trim: true,
    maxlength: 200, // Increased from 60
  },
  seoDescription: {
    type: String,
    trim: true,
    maxlength: 300, // Increased from 160
  },
  seoKeywords: {
    type: String,
    trim: true,
  },
});

// Admin User Schema (for simple admin authentication)
export interface IAdmin {
  _id?: string;
  username: string;
  password: string;
  email: string;
  role: string;
  createdAt: Date;
}

const AdminSchema = new Schema<IAdmin>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    default: 'admin',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Models - Clear any existing models from cache
if (models.Blog) {
  delete models.Blog;
}
if (models.Admin) {
  delete models.Admin;
}

export const Blog = model<IBlog>('Blog', BlogSchema);
export const Admin = model<IAdmin>('Admin', AdminSchema);