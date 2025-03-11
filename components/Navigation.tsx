export function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-[#1E3E8F]">ElderlyConnect</a>
          <div className="space-x-4">
            <a href="/connect" className="text-gray-600 hover:text-[#1E3E8F]">Connect</a>
            <a href="/documentation" className="text-gray-600 hover:text-[#1E3E8F]">Documentation</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 