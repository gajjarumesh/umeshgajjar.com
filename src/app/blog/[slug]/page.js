import { notFound } from "next/navigation";
import Link from "next/link";
import { getCollection, COLLECTIONS } from "@/lib/db";
import BlogPostClient from "./BlogPostClient";

async function getBlogPost(slug) {
  try {
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    const blog = await blogs.findOne({ slug, published: true });
    
    if (!blog) {
      return null;
    }
    
    // Convert MongoDB _id to string
    return { ...blog, _id: blog._id.toString() };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

async function getRelatedBlogs(currentSlug, tags = []) {
  try {
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    
    // Find blogs with matching tags
    const related = await blogs
      .find({
        slug: { $ne: currentSlug },
        published: true,
        tags: { $in: tags },
      })
      .limit(3)
      .toArray();
    
    return related.map(blog => ({ ...blog, _id: blog._id.toString() }));
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}

async function getApprovedComments(slug) {
  try {
    const comments = await getCollection(COLLECTIONS.COMMENTS);
    const commentList = await comments
      .find({ blogSlug: slug, approved: true })
      .sort({ createdAt: -1 })
      .toArray();
    
    return commentList.map(c => ({ ...c, _id: c._id.toString() }));
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);
  
  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }
  
  return {
    title: blog.title,
    description: blog.excerpt || blog.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);
  
  if (!blog) {
    notFound();
  }
  
  const relatedBlogs = await getRelatedBlogs(slug, blog.tags || []);
  const comments = await getApprovedComments(slug);
  
  return (
    <BlogPostClient
      blog={blog}
      relatedBlogs={relatedBlogs}
      initialComments={comments}
    />
  );
}
