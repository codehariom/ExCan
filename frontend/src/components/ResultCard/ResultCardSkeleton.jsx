import React from "react";

export const ResultCardSkeleton = () => {
  return (
    <div className="bg-slate-50 rounded basis-[280px] flex-grow flex flex-col p-5 gap-y-1 border">
      <div className="h-5 w-40 bg-slate-500 animate-skeleton"></div>
      <div className="h-5 w-40 bg-slate-500 animate-skeleton"></div>
      <div className="h-5 w-40 bg-slate-500 animate-skeleton"></div>

      <div className="space-x-2 mt-5 flex">
        <div className="h-8 w-24 bg-slate-500 rounded animate-skeleton"></div>
        <div className="h-8 w-24 bg-slate-500 rounded animate-skeleton"></div>
      </div>
    </div>
  );
};
