import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ArticleImage } from '@/types';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: ArticleImage;
  category: string;
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  featuredImage,
  category
}: ArticleCardProps) {
  return (
    <Link href={`/${slug}`} className="group block h-full">
      <article className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
          {featuredImage ? (
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1e3a5f] bg-blue-50 rounded-full">
              {category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
            {excerpt}
          </p>
          
          <div className="mt-auto flex items-center text-[#2563eb] font-semibold text-sm">
            Read More
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
