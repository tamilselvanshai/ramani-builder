function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold">
              RAMANI <span className="text-yellow-400">BUILDER</span>
            </h2>

            <p className="text-slate-400 mt-2 text-sm">
              Premium House Construction & Engineering Services in Salem
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} RAMANI BUILDER
            </p>

            <p className="text-slate-500 text-xs mt-1">
              All Rights Reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;