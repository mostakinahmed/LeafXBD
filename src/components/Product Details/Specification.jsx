import React from "react";

// const productSpecs = {
//   Hardware: [
//     { key: "RAM", value: "16GB" },
//     { key: "Storage", value: "512GB SSD" },
//   ],
//   CPU: [
//     { key: "Model", value: "Intel i7-12700H" },
//     { key: "Cores", value: "8 cores" },
//   ],
//   Network: [
//     { key: "Wi-Fi", value: "802.11ax" },
//     { key: "Ethernet", value: "Gigabit" },
//   ],
//   GPU: [
//     { key: "Model", value: "NVIDIA RTX 3070" },
//     { key: "VRAM", value: "8GB" },
//   ],
//   Display: [
//     { key: "Size", value: "15.6 inch" },
//     { key: "Resolution", value: "1920x1080" },
//   ],
//   Battery: [
//     { key: "Capacity", value: "6000 mAh" },
//     { key: "Type", value: "Li-ion" },
//   ],
//   Software: [
//     { key: "OS", value: "Windows 11 Pro" },
//     { key: "Pre-installed", value: "Microsoft Office" },
//   ],
//   Ports: [
//     { key: "USB-C", value: "2 Ports" },
//     { key: "HDMI", value: "1 Port" },
//   ],
//   Audio: [
//     { key: "Speakers", value: "Stereo" },
//     { key: "Mic", value: "Built-in" },
//   ],
//   Dimensions: [
//     { key: "Weight", value: "1.8kg" },
//     { key: "Size", value: "35x24x2cm" },
//   ],
// };

export default function ProductSpecTable({data}) {
  const productSpecs = data.specifications;
  
  return (
    <div className=" p-4  bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Product Specifications</h2>
      <table className="w-full border border-gray-200 divide-y divide-gray-200">
        <tbody>
          {Object.entries(productSpecs).map(([section, items]) => (
            <React.Fragment key={section}>
              {/* Section Header */}
              <tr className="bg-gray-100">
                <td
                  colSpan={2}
                  className="px-4 py-2 font-semibold text-gray-700 text-lg"
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
