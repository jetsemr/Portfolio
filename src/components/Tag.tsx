import React from 'react';

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <span className="inline-block bg-[#e2e8f0] hover:bg-[#cbd5e1] transition-colors rounded-full px-4 py-2 text-sm font-medium text-gray-900 mr-2 mb-2 shadow-sm">
      {text}
    </span>
  );
};

export default Tag; 