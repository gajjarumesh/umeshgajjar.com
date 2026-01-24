import clientPromise from './mongodb';

const DB_NAME = 'umeshgajjar_db';

export async function getDb() {
  const client = await clientPromise;
  return client.db(DB_NAME);
}

export async function getCollection(collectionName) {
  const db = await getDb();
  return db.collection(collectionName);
}

// Collection names
export const COLLECTIONS = {
  ADMINS: 'admins',
  BLOGS: 'blogs',
  COMMENTS: 'comments',
  BLOG_VIEWS: 'blog_views',
  CASE_STUDIES: 'case_studies',
  CONTACT_MESSAGES: 'contact_messages',
};
