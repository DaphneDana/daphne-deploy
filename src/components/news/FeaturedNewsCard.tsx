// src/components/FeaturedNewsCard.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use react-router-dom
import type { NewsItem } from '../../types/news';
import { ArrowRight, CalendarDays, Tag } from 'lucide-react';

interface FeaturedNewsCardProps {
  item: NewsItem;
}

const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ item }) => {
  const formattedDate = new Date(item.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group relative overflow-hidden rounded-xl shadow-2xl bg-card-dark-bg transition-all duration-500 ease-in-out hover:shadow-primary/30">
      <div className="md:flex">
        {item.imageUrl && (
          <div className="md:w-1/2 relative">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 md:bg-gradient-to-r md:from-black/0 md:via-black/0 md:to-card-dark-bg/50"></div>
          </div>
        )}
        <div className={`p-6 md:p-8 flex flex-col justify-between ${item.imageUrl ? 'md:w-1/2' : 'w-full'}`}>
          <div>
            <div className="flex items-center text-xs text-text-muted-dark mb-3 space-x-4">
              <span className="flex items-center">
                <CalendarDays size={14} className="mr-1.5 text-primary" />
                {formattedDate}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                <Tag size={12} className="mr-1" />
                {item.contentType}
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-main-dark mb-3 leading-tight group-hover:text-primary transition-colors">
              <Link to={`/latest-news/${item.slug}`} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                {item.title}
              </Link>
            </h2>
            <p className="text-text-muted-dark text-sm leading-relaxed mb-4 line-clamp-3 md:line-clamp-4">
              {item.summary}
            </p>
          </div>
          <div className="mt-auto">
            <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
              Read More
              <ArrowRight size={16} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedNewsCard;