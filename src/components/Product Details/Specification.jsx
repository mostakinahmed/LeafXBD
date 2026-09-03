import React from "react";
import { FiList } from "react-icons/fi";

export default function ProductSpecTable({ data }) {
  const productSpecs = data?.specifications || {};

  if (Object.keys(productSpecs).length === 0) return null;

  return (
    <div className="font-sans bg-white rounded border border-slate-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="relative overflow-hidden px-6 md:py-5 py-2 mt-1 md:-mb-2.5 ">
        <h2 className="text-lg lg:text-xl font-bold text-black">
          Product Specifications
        </h2>
      </div>

      {/* Specifications */}
      <div className="flex flex-col  p-2">
        {Object.entries(productSpecs).map(([section, items]) => (
          <div key={section} className="flex flex-col">
            {/* Category Header */}
            <div className="bg-blue-50 px-6 py-3 border-y border-blue-100 first:border-t-0">
              <h3 className="text-xs lg:text-sm font-bold uppercase tracking-wider text-[#1976d2]">
                {section}
              </h3>
            </div>

            {/* Specification Rows */}
            <dl className="divide-y divide-slate-200/60">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6 px-6 md:py-3 py-1.5 hover:bg-blue-50/40 transition-colors duration-200"
                >
                  {/* Key */}
                  <dt className="text-sm md:text-[15px] font-medium text-slate-500 lg:col-span-1">
                    {item.key}
                  </dt>

                  {/* Value */}
                  <dd className="text-sm md:text-[15px] font-semibold text-slate-800 lg:col-span-2">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* Bottom Brand Accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#1976d2] via-[#64b5f6] to-[#1976d2]"></div>
    </div>
  );
}
