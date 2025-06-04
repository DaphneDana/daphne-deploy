// src/components/blog/BlogDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {  ArrowLeft, Bookmark, ThumbsUp, MessageCircle } from 'lucide-react';
import type { DetailedBlogPost, BlogComment } from '../../types/blog';
import { blogData } from '../../assets/data/blogData';
import { mockBlogContent } from '../../assets/data/mockBlogContent';
import {mockComments} from '../../assets/data/mockComments';
import BlogDetailHeader from './BlogDetailHeader';
import BlogDetailContent from './BlogDetailContent';
import BlogDetailSidebar from './BlogDetailSidebar';
import RelatedPosts from './RelatedPosts';
import CommentSection from './CommentSection';
import SocialSharing from './SocialSharing';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<DetailedBlogPost | null>(null);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    // Simulate API call to get detailed post
    const foundPost = blogData.find(p => p.id === id);
    if (foundPost) {
      const detailedPost: DetailedBlogPost = {
        ...foundPost,
        content: mockBlogContent[foundPost.id] || mockBlogContent.default,
        lastUpdated: foundPost.publishedDate,
        tableOfContents: [],
        relatedPosts: [],
        seoMeta: {
          description: foundPost.excerpt,
          keywords: foundPost.tags,
        },
        wordCount: mockBlogContent[foundPost.id]?.split(' ').length || 1500,
        difficulty: foundPost.category === 'blog-posts' ? 'intermediate' : 'beginner'
      };
      setPost(detailedPost);
      setComments(mockComments);
    }
    setLoading(false);
  }, [id]);

  // Reading progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBack = () => {
    navigate('/blog');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-600 rounded w-1/4 mb-8"></div>
            <div className="h-12 bg-gray-600 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-600 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-600 rounded mb-8"></div>
            <div className="space-y-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-600 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}>
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold text-blue-300 mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
    }}>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </button>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <BlogDetailHeader post={post} />
            
            {/* Article Actions */}
            <div className="flex items-center justify-between mb-8 p-4 rounded-xl border" style={{
              background: 'rgba(26, 35, 50, 0.6)',
              borderColor: 'rgba(64, 150, 255, 0.2)'
            }}>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isLiked ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400 hover:text-white'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  {post.views ? Math.floor(post.views * 0.1) : 42}
                </button>
                
                <button
                  onClick={handleBookmark}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isBookmarked ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-500/20 text-gray-400 hover:text-white'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  Bookmark
                </button>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <MessageCircle className="w-4 h-4" />
                  {comments.length} comments
                </div>
              </div>
              
              <SocialSharing 
                url={`${window.location.origin}/blog/${post.id}`}
                title={post.title}
                description={post.excerpt}
              />
            </div>

            <BlogDetailContent post={post} />
            
            {/* Author Bio */}
            <div className="mt-12 p-6 rounded-xl border" style={{
              background: 'rgba(26, 35, 50, 0.6)',
              borderColor: 'rgba(64, 150, 255, 0.2)'
            }}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  {post.author.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-300 mb-1">{post.author.name}</h3>
                  <p className="text-gray-400 mb-3">{post.author.role}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {post.author.bio || `${post.author.name} is a dedicated researcher and writer at our AI lab, passionate about sharing insights and discoveries with the community.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <CommentSection 
              postId={post.id}
              comments={comments}
              onAddComment={(comment) => {
                const newComment: BlogComment = {
                  ...comment,
                  id: `comment-${Date.now()}`,
                  publishedDate: new Date().toISOString()
                };
                setComments([...comments, newComment]);
              }}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogDetailSidebar post={post} />
          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts 
          currentId={post.id}
          category={post.category}
          maxPosts={3}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;



