export default function About() {
  return (
    <main className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About AI Wave Agency
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're revolutionizing business automation with cutting-edge AI solutions designed specifically for modern service industries.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              At AI Wave Agency, we leverage advanced automation solutions to streamline workflows for medical spas, 
              law firms, and service-oriented businesses.
            </p>
            <p className="text-lg text-gray-600">
              We believe that every business deserves access to enterprise-grade automation tools that can transform 
              their operations and drive unprecedented growth.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Businesses Automated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We stay at the forefront of AI technology to deliver the most advanced automation solutions.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Partnership</h3>
            <p className="text-gray-600">
              We work closely with our clients to understand their unique needs and deliver tailored solutions.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We're committed to delivering exceptional results that exceed our clients' expectations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how AI Wave Agency can help automate your workflows and drive growth.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 hover:bg-gray-50 h-12 px-8 py-3"
        >
          Get Started Today
        </a>
      </section>
    </main>
  );
}


