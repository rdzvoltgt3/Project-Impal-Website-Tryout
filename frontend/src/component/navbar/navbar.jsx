import { NavLink } from "react-router-dom";
const directToLogin = () => {
    window.location.href = '/login';
};

const directToRegister = () => {
    window.location.href = '/register';
};

const directToLanding = () => {
    window.location.href = '/';
}

const activeStyle = "border-b-2 border-white pb-1 text-white";
const inactiveStyle = "text-blue-100 hover:text-white transition pb-1";

export const Navbar = () => {
    if (window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/')
        return (
            <nav className="bg-[#3b41e3] px-6 py-4 flex items-center justify-between text-white">
                <div onClick={directToLanding} className="text-2xl font-bold tracking-tight cursor-pointer">TryoutKu</div>
                {/* Auth Buttons */}
                <div className="hidden md:flex space-x-4 text-sm font-medium">
                    <button onClick={directToLogin} className="px-5 py-2 rounded-md border border-white/20 hover:bg-white/10 transition cursor-pointer">
                        Masuk
                    </button>
                    <button onClick={directToRegister} className="px-5 py-2 rounded-md border border-white/60 hover:bg-white hover:text-[#3240e5] transition cursor-pointer">
                        Daftar
                    </button>
                </div>
            </nav>
        );

    return (
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-white/10">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-tight cursor-pointer">
                TryoutKu
            </div>
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
                <NavLink
                    to="/Dashboard"
                    className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                >
                    Beranda
                </NavLink>

                <NavLink
                    to="/status-pembayaran"
                    className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                >
                    Status Pembayaran
                </NavLink>

                <NavLink
                    to="/hasil-tryout"
                    className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                >
                    Hasil Tryout
                </NavLink>
            </div>

            {/* User Profile (Modified Header) */}
            <div className="flex items-center space-x-3">
                {/* Profile Icon (SVG) */}
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                    <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
                {/* Username & Phone */}
                <div className="flex flex-col hidden sm:flex">
                    <span className="text-sm font-semibold text-white">Budi Santoso</span>
                    <span className="text-xs text-blue-200">081234567890</span>
                </div>
            </div>
        </nav>
    );
}