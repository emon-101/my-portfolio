import React from "react";

const GlassCard = ({ children }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
      {children}
    </div>
  );
};

export default GlassCard;
