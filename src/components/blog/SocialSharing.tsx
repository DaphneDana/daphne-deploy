
// src/components/blog/SocialSharing.tsx
import React from 'react';
import { Share2, Twitter, Linkedin, Facebook, Link, Mail } from 'lucide-react';

interface SocialSharingProps {
  url: string;
  title: string;
  description?: string;
}

const SocialSharing: React.FC<SocialSharingProps> = ({ 
  url, 
  title, 
  description 
}) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const shareData = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-500/20 text-gray-400 hover:text-white rounded-lg transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      {showDropdown && (
        <div 
          className="absolute right-0 top-full mt-2 w-48 rounded-lg border shadow-lg z-10"
          style={{
            background: 'rgba(26, 35, 50, 0.95)',
            borderColor: 'rgba(64, 150, 255, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="p-2 space-y-1">
            <a
              href={shareData.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-500/20 rounded-lg transition-colors"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
            <a
              href={shareData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-500/20 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={shareData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-500/20 rounded-lg transition-colors"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
            <a
              href={shareData.email}
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-500/20 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-500/20 rounded-lg transition-colors"
            >
              <Link className="w-4 h-4" />
              Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialSharing;