'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface ArticleItem {
  slug: string;
  title: string;
  category: string;
}

export default function SearchBar({ articles }: { articles: ArticleItem[] }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredArticles = query.length >= 2 
    ? articles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) || 
        article.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-md" ref={wrapperRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm transition duration-150 ease-in-out"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && query.length >= 2 && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-100 overflow-hidden">
          {filteredArticles.length > 0 ? (
            <ul className="max-h-60 overflow-auto py-1 text-base sm:text-sm">
              {filteredArticles.map((article) => (
                <li key={article.slug}>
                  <Link 
                    href={`/${article.slug}`}
                    className="block px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-sm font-medium text-gray-900 truncate">{article.title}</div>
                    <div className="text-xs text-gray-500">{article.category}</div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              No results found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
