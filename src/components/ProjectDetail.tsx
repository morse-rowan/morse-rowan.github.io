import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const ProjectDetail: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        // Try to load the markdown file for the specified project
        const response = await fetch(`/projects/${projectId}.md`);
        if (!response.ok) {
          throw new Error(`Failed to load project details: ${response.status}`);
        }
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error('Error loading markdown:', error);
        setMarkdown('# Project Not Found\n\nSorry, the project details could not be loaded.');
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchMarkdown();
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Link 
              to="/portfolio" 
              className="flex items-center text-[hsl(251,84.6%,74.5%)] hover:text-[hsl(251,40.2%,54.1%)] transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span>See all projects</span>
            </Link>
          </div>
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-3"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-3"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link 
            to="/portfolio" 
            className="flex items-center text-[hsl(251,84.6%,74.5%)] hover:text-[hsl(251,40.2%,54.1%)] transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span>See all projects</span>
          </Link>
        </div>
        
        <article className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
      >
          {markdown}
        </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default ProjectDetail;