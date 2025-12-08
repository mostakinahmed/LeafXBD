"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export function HomeBuy({ data }) {
  const [divList, setDiv] = useState([]);
  const [disList, setDis] = useState([]);
  const [upazilaList, setUpazila] = useState([]);
  const [finalDisList, setFinalDis] = useState([]);
  const [finalUpaList, setFinalUpaList] = useState([]);
  const [wardList, setWardList] = useState([]);

  // Customer Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    division: "",
    district: "",
    upazila: "",
    postal: "",
  });

  //api for division and district
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [divisionRes, districtRes, upazilaRes] = await Promise.all([
          axios.get("https://bdopenapi.vercel.app/api/geo/divisions"),
          axios.get("https://bdopenapi.vercel.app/api/geo/districts"),
          axios.get("https://bdopenapi.vercel.app/api/geo/upazilas"),
        ]);

        setDiv(divisionRes.data.data);
        setDis(districtRes.data.data);
        setUpazila(upazilaRes.data.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };

    fetchData();
  }, []); // run once on mount

  //ward list
  useEffect(() => {
    if (!form.upazila) return; // skip if empty

    const fetchDataWard = async () => {
      try {
        const WardRes = await axios.get(
          `https://bdopenapi.vercel.app/api/geo/unions/${form.upazila}`
        );
        setWardList(WardRes.data.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };

    fetchDataWard();
  }, [form.upazila]);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Order placed!\n\nCustomer: ${form.name}\nProducts: ${data.length} items`
    );
  };

  //handleDistrict
  const handleDistrict = (divID) => {
    const district = disList.filter((dis) => dis.division_id === divID);
    setFinalDis(district);
  };

  const handleUpazila = (disID) => {
    const upazila = upazilaList.filter((upa) => upa.district_id === disID);
    setFinalUpaList(upazila);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items- px-2 lg:px-4">
      {/* ===========================
           MULTIPLE PRODUCTS HEADER
      ============================ */}
      <div className="bg-white w-full  rounded shadow lg:p-4 p-2 mb-3">
        <h2 className="lg:text-lg font-semibold border-b mb-3">
          Your Products
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-2 border rounded hover:bg-gray-50"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-18 h-18 p-1 object-contain rounded shadow "
              />

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.name}
                </h3>
                {/* <p className="text-gray-500 text-sm">{item.description}</p> */}
                <p className="text-blue-600 text-sm font-bold mt-1">
                  ${item.price.selling}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===========================
           CUSTOMER FORM
      ============================ */}
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full  rounded shadow lg:p-4 p-2 space-y-4"
      >
        <h2 className="lg:text-lg font-semibold mb-2">Customer Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded p-2 w-full"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border rounded p-2 w-full"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <input
          type="tel"
          placeholder="Phone Number"
          className="border rounded p-2 w-full"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          placeholder="Full Delivery Address"
          className="border rounded p-2 w-full h-20"
          required
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4">
          {/* Division */}
          <select
            className="border rounded p-2 w-full"
            required
            value={form.division}
            onChange={(e) => {
              setWardList([]);
              const divId = e.target.value;
              handleDistrict(divId);
              setForm({ ...form, division: divId, district: "", upazila: "" });
            }}
          >
            <option value="">Select Division</option>
            {divList.map((div) => (
              <option key={div.id} value={div.id}>
                {div.name} - {div.bn_name}
              </option>
            ))}
          </select>

          {/* District */}
          <select
            className="border rounded p-2 w-full"
            required
            value={form.district}
            onChange={(e) => {
              setWardList([]);
              const disId = e.target.value;
              handleUpazila(disId);
              setForm({ ...form, district: disId, upazila: "" });
            }}
            disabled={!form.division}
          >
            <option value="">Select District</option>
            {finalDisList.map((dis) => (
              <option key={dis.id} value={dis.id}>
                {dis.name} - {dis.bn_name}
              </option>
            ))}
          </select>

          {/* Upazila */}
          <select
            className="border rounded p-2 w-full"
            required
            value={form.upazila}
            onChange={(e) => {
              setWardList([]);
              setForm({ ...form, upazila: e.target.value });
            }}
            disabled={!form.district}
          >
            <option value="">Select Upazila</option>
            {finalUpaList.map((upa) => (
              <option key={upa.id} value={upa.id}>
                {upa.name} - {upa.bn_name}
              </option>
            ))}
          </select>
        </div>
        {wardList?.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {wardList.map((item) => (
              <div
                key={item.id}
                className="group bg-slate-100 border cursor-pointer border-slate-300 rounded-sm p-1 text-center transition-all hover:bg-slate-200 hover:border-slate-300"
              >
                <p className="lg:text-lg text-sm">{item.name}</p>
                <p className="lg:text-lg text-sm">{item.bn_name}</p>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded mt-4 font-semibold transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
