// src/components/home/InsightSnippetCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays,  } from 'lucide-react';
// Assuming a simplified Insight type for homepage
interface InsightSnippet {
  slug: string; // e.g., /latest-news/my-slug or /blog/my-slug
  title: string;
  imageUrl: string;
  excerpt: string;
  date: string;
  category?: string; // e.g., "News", "Blog Post", "Research"
}

interface InsightSnippetCardProps {
  insight: InsightSnippet;
  index: number;
}

const InsightSnippetCard: React.FC<InsightSnippetCardProps> = ({ insight, index }) => {
  const formattedDate = new Date(insight.date).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });

  return (
    <motion.article
      className="group bg-card-dark-bg rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-primary/25"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={insight.slug} className="block">
        <div className="relative h-52 w-full overflow-hidden">
          <img
            src={insight.imageUrl}
            alt={insight.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {insight.category && (
            <span className="absolute top-3 right-3 bg-primary/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
              {insight.category}
            </span>
          )}
        </div>
      </Link>
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="mb-2 text-xs text-text-muted-dark flex items-center">
          <CalendarDays size={14} className="mr-1.5 text-primary/80" />
          {formattedDate}
        </div>
        <h3 className="text-lg font-semibold text-text-main-dark mb-2 leading-snug">
          <Link to={insight.slug} className="hover:text-primary transition-colors line-clamp-2">
            {insight.title}
          </Link>
        </h3>
        <p className="text-sm text-text-muted-dark leading-relaxed mb-4 line-clamp-3 flex-grow">
          {insight.excerpt}
        </p>
        <div className="mt-auto pt-3 border-t border-slate-700/50">
          <Link to={insight.slug} className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
            Read More <ArrowRight size={16} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default InsightSnippetCard;