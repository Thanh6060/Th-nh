import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [hospitalTitle, setHospitalTitle] = useState("Bệnh Viện");

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.username.trim())
      newErrors.username = "Vui lòng nhập tên đăng nhập";
    if (!formData.password.trim())
      newErrors.password = "Vui lòng nhập mật khẩu";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSuccess(false);
      return;
    }

    setErrors({});
    setIsSuccess(true);

    console.log("Logging in with:", formData);

    setTimeout(() => {}, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-6 font-sans text-[#1a2332]">
      <div className="bg-white border-2 border-[#e0e5eb] rounded-2xl p-8 md:p-12 w-full max-w-[420px] shadow-2xl">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-14 h-14 text-[#080606] mb-4"></div>
          <h1 className="text-[28px] font-bold mb-2">{hospitalTitle}</h1>
          <p className="text-[#7a8a99] text-sm">
            Hệ thống quản lý sắp xếp giường bệnh
          </p>
        </div>
        {isSuccess && (
          <div className="mb-6 bg-green-50 text-[#27ae60] text-sm p-4 rounded-xl border-l-4 border-[#27ae60] animate-pulse">
            Đăng nhập thành công! Đang chuyển hướng...
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Tên đăng nhập */}
          <div className="mb-6">
            <label
              className="block font-semibold text-sm mb-2.5"
              htmlFor="username"
            >
              Tên đăng nhập
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`w-full p-3.5 bg-[#f5f7fa] border-2 rounded-xl text-sm transition-all focus:outline-none 
                ${errors.username ? "border-[#110b0b]" : "border-[#e0e5eb] focus:border-[#e0e5eb] focus:ring-4 focus:ring-white-500/10"}`}
              placeholder="Nhập tên đăng nhập"
            />
            {errors.username && (
              <p className="mt-2 text-[#0d0405] text-xs font-medium">
                {errors.username}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block font-semibold text-sm mb-2.5"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full p-3.5 bg-[#f5f7fa] border-2 rounded-xl text-sm transition-all focus:outline-none 
                ${errors.password ? "border-[#110b0b]" : "border-[#e0e5eb] focus:border-[#e0e5eb] focus:ring-4 focus:ring-white-500/10"}`}
              placeholder="Nhập mật khẩu"
            />
            {errors.password && (
              <p className="mt-2 text-[#0d0405] text-xs font-medium">
                {errors.password}
              </p>
            )}
          </div>

          {/* Tiện ích */}
          <div className="flex justify-between items-center mb-8 text-xs">
            <label className="flex items-center gap-2 text-[#7a8a99] cursor-pointer group">
              <input
                type="checkbox"
                id="remember"
                checked={formData.remember}
                onChange={handleInputChange}
                className="w-4 h-4 cursor-pointer border-[#e0e5eb] accent-[#0d0405]"
              />
              <span className="group-hover:text-[#1a2332] transition-colors">
                Ghi nhớ đăng nhập
              </span>
            </label>
            <a href="#" className="text-[#0d0405] hover:underline font-medium">
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            disabled={isSuccess}
            className="w-full p-3.5 bg-slate-700 hover:bg-slate-800 text-white rounded-xl text-[15px] font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Đăng nhập
          </button>
        </form>

        <div className="mt-8 text-center text-[#7a8a99] text-[13px]">
          Không có tài khoản?{" "}
          <a
            href="#"
            className="text-[#1a2332] font-bold hover:text-[#070203] transition-colors"
          >
            Liên hệ quản trị viên
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
