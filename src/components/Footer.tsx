import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl">AI Wave Agency</span>
            </div>
            <p className="text-sm text-gray-600">
              Streamline workflows for medical spas, law firms, and service businesses with AI automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
              <li><Link href="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-600">AI Phone Automation</span></li>
              <li><span className="text-gray-600">Workflow Optimization</span></li>
              <li><span className="text-gray-600">Business Process Automation</span></li>
              <li><span className="text-gray-600">Custom AI Solutions</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">sofoniyastekaelgn@gmail.com</p>
              <p className="text-gray-600">joel@aiwaveagency.com</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} AI Wave Agency. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 mt-2 md:mt-0">
            Powered by Next.js & Supabase
          </p>
        </div>
      </div>
    </footer>
  );
}
