import React from 'react';

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <span className="inline-block bg-[#e6dfd3] hover:bg-[#d8cfc1] transition-colors rounded-full px-4 py-2 text-sm font-medium text-gray-900 mr-2 mb-2 shadow-sm border border-[#d8cfc1]">
      {text}
    </span>
  );
};

export default Tag; 