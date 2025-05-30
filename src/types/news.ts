// src/types/news.ts

export type NewsContentType = 'Update' | 'Press Release' | 'Activity Report' | 'Event';

export interface NewsItem {
  id: string;
  title: string;
  slug: string; // For URL generation
  summary: string;
  fullContent?: string; // For the detail page
  imageUrl?: string; // Optional image for the card/detail
  publishedDate: string; // ISO date string (e.g., "2023-10-26T10:00:00Z")
  contentType: NewsContentType;
  author?: string; // Optional
  tags?: string[]; // Optional
  isFeatured?: boolean; // To identify featured news
  eventDetails?: { // Specific to 'Event' type
    date: string; // Could be a range
    location: string;
    agendaLink?: string;
    registrationLink?: string;
  };
}