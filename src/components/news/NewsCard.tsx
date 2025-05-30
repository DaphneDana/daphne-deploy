// src/components/NewsCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { NewsItem } from '../../types/news';
import { CalendarDays, Tag, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  const formattedDate = new Date(item.publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="group bg-card-dark-bg rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 flex flex-col">
      {item.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3 flex items-center justify-between text-xs text-text-muted-dark">
          <span className="flex items-center">
            <CalendarDays size={14} className="mr-1.5 text-primary/80" />
            {formattedDate}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
             <Tag size={12} className="mr-1" />
            {item.contentType}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-text-main-dark mb-2 leading-snug group-hover:text-primary transition-colors">
          <Link to={`/latest-news/${item.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true"></span>
            {item.title}
          </Link>
        </h3>
        <p className="text-sm text-text-muted-dark leading-relaxed mb-4 line-clamp-3 flex-grow">
          {item.summary}
        </p>
        <div className="mt-auto pt-2 border-t border-slate-700/50">
           <span className="inline-flex items-center text-xs font-medium text-primary group-hover:underline">
              Read article
              <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;