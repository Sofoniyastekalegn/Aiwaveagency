import Image from "next/image";


import { getPageBySlug } from "../lib/wordpress";

import parse from "hmtl-react-parser";

export default aysnc function LandingPage() {
  const page = await getPageBySlug("landing page");

  if (!page) {
    return <div className="p-8 text-center text-red-500">Page not found plz  create a landinge page</div>;
  }


  return (
    <main className="container mx-auto px-4 py-12">
      <div className="prose prose-lg mx-auto dark:prose-invert">
        <h1 className="text-5xl font-bold mb-5">{page.title.rendered}</h1>
        {parse(page.content.rendered)}
      </div>
    </main>
  )










  }


}