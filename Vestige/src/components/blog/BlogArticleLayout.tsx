import React from 'react';
import { Link } from 'react-router-dom';

interface BlogArticleLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const BlogArticleLayout: React.FC<BlogArticleLayoutProps> = ({ title, description, children }) => (
  <main className="min-h-screen bg-[#050a16] text-[#eaf1ff]">
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/blog/" className="text-sm text-[color:var(--cyan)] hover:underline">
        ← Back to blog
      </Link>
      <header className="mt-6 mb-10">
        <h1 className="font-display text-4xl leading-tight tracking-tight">{title}</h1>
        {description ? <p className="mt-4 text-lg text-[color:var(--ink-2)]">{description}</p> : null}
      </header>
      {children}
    </article>
  </main>
);

export default BlogArticleLayout;
