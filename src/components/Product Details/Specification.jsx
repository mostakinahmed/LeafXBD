import React from "react";

export default function ProductSpecTable({data}) {
  const productSpecs = data.specifications;
  
  return (
    <div className=" p-4  bg-white rounded-lg shadow lg:h-[57rem]  overflow-y-auto">
      <h2 className="lg:text-2xl text-xl font-bold text-gray-700 mb-4">Product Specifications</h2>
      <table className="w-full border border-gray-200 divide-y divide-gray-200">
        <tbody>
          {Object.entries(productSpecs).map(([section, items]) => (
            <React.Fragment key={section}>
              {/* Section Header */}
              <tr className="bg-gray-100">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-gray-700 lg:text-lg"
                >
                  {section}
                </td>
              </tr>
              {/* Section Items */}
              {items.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-2 font-medium text-gray-600 w-1/3">
                    {item.key}
                  </td>
                  <td className="px-4 py-2 text-gray-800">{item.value}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
