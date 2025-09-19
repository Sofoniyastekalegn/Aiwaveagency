export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Automate Your Business</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Streamline workflows for medical spas, law firms, and service businesses.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-md bg-black text-white hover:opacity-90"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}


