import React from 'react'

function Cardshell({ children }) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-zinc-200 p-6 sm:p-8">
      {children}
    </div>
  );
}

export default Cardshell
