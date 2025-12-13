import React from 'react';

const Background: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 bg-grid z-0 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
    </>
  );
};

export default Background;