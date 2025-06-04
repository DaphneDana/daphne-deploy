// src/components/blog/CommentSection.tsx
import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Reply, Send } from 'lucide-react';
import type { BlogComment } from '../../types/blog';

interface CommentSectionProps {
  postId: string;
  comments: BlogComment[];
  onAddComment: (comment: Omit<BlogComment, 'id' | 'publishedDate'>) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  postId,
  comments,
  onAddComment
}) => {
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    onAddComment({
      postId,
      authorName,
      authorEmail,
      content: newComment,
      parentId: replyingTo || undefined,
      likes: 0
    });

    setNewComment('');
    if (!replyingTo) {
      setAuthorName('');
      setAuthorEmail('');
    }
    setReplyingTo(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const topLevelComments = comments.filter(comment => !comment.parentId);

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-blue-300 mb-8 flex items-center gap-2">
        <MessageCircle className="w-6 h-6" />
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <div 
        className="rounded-xl p-6 border mb-8"
        style={{
          background: 'rgba(26, 35, 50, 0.6)',
          borderColor: 'rgba(64, 150, 255, 0.2)'
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="px-4 py-2 rounded-lg border text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: 'rgba(51, 65, 85, 0.8)',
                borderColor: 'rgba(64, 150, 255, 0.3)'
              }}
              required
            />
            <input
              type="email"
              placeholder="Your email (optional)"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              className="px-4 py-2 rounded-lg border text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: 'rgba(51, 65, 85, 0.8)',
                borderColor: 'rgba(64, 150, 255, 0.3)'
              }}
            />
          </div>
          <textarea
            placeholder={replyingTo ? "Write your reply..." : "Share your thoughts..."}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            style={{
              background: 'rgba(51, 65, 85, 0.8)',
              borderColor: 'rgba(64, 150, 255, 0.3)'
            }}
            required
          />
          <div className="flex justify-between items-center">
            {replyingTo && (
              <button
                type="button"
                onClick={() => setReplyingTo(null)}
                className="text-gray-400 hover:text-white text-sm"
              >
                Cancel reply
              </button>
            )}
            <button
              type="submit"
              className="ml-auto flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
              {replyingTo ? 'Reply' : 'Comment'}
            </button>
          </div>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {topLevelComments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            replies={comments.filter(c => c.parentId === comment.id)}
            onReply={(id) => setReplyingTo(id)}
            formatDate={formatDate}
          />
        ))}
        
        {comments.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface CommentCardProps {
  comment: BlogComment;
  replies: BlogComment[];
  onReply: (id: string) => void;
  formatDate: (date: string) => string;
}

const CommentCard: React.FC<CommentCardProps> = ({ 
  comment, 
  replies, 
  onReply, 
  formatDate 
}) => {
  return (
    <div 
      className={`rounded-xl p-6 border ${comment.isHighlighted ? 'ring-2 ring-blue-500/50' : ''}`}
      style={{
        background: comment.isHighlighted 
          ? 'rgba(64, 150, 255, 0.1)' 
          : 'rgba(26, 35, 50, 0.4)',
        borderColor: comment.isHighlighted 
          ? 'rgba(64, 150, 255, 0.5)' 
          : 'rgba(64, 150, 255, 0.2)'
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
          {comment.authorName.charAt(0).toUpperCase()}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-blue-300">
              {comment.authorName}
              {comment.isHighlighted && (
                <span className="ml-2 px-2 py-1 text-xs bg-blue-500/30 text-blue-300 rounded-full">
                  Author
                </span>
              )}
            </span>
            <span className="text-gray-400 text-sm">
              {formatDate(comment.publishedDate)}
            </span>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            {comment.content}
          </p>
          
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
              <ThumbsUp className="w-4 h-4" />
              {comment.likes}
            </button>
            <button 
              onClick={() => onReply(comment.id)}
              className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Reply className="w-4 h-4" />
              Reply
            </button>
          </div>
        </div>
      </div>
      
      {/* Replies */}
      {replies.length > 0 && (
        <div className="ml-14 mt-6 space-y-4">
          {replies.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              replies={[]}
              onReply={onReply}
              formatDate={formatDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;