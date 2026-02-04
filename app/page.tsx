import { aboutContent } from "@/content/about";

export default function QuemSouEuPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* HEADER */}
      <header className="flex items-center gap-3 border-b px-4 py-3">
        <div className="font-semibold">Taróloga Calil</div>

        <div className="ml-auto text-sm text-zinc-500">PT</div>
      </header>

      <section className="mx-auto max-w-md px-4 py-8">
        {/* TITLE */}
        <h1 className="mb-6 text-center text-2xl font-semibold text-violet-700">
          {aboutContent.title}
        </h1>

        <div className="mb-8 aspect-video overflow-hidden rounded-xl bg-black">
          <iframe
            src={aboutContent.videoUrl}
            title="Quem sou eu - Taróloga Calil"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* IMAGES */}
        <div className="mb-8 flex gap-3 overflow-x-auto">
          {aboutContent.images.map((img) => (
            <img
              key={img}
              src={img}
              alt="Taróloga Calil"
              className="h-24 w-24 rounded-lg object-cover"
            />
          ))}
        </div>

        {/* CONTACT */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-zinc-500">Entre em contato</p>

          <div className="flex justify-center gap-4">
            <a href={aboutContent.contacts.whatsapp}>WhatsApp</a>
            <a href={aboutContent.contacts.instagram}>Instagram</a>
            <a href={aboutContent.contacts.youtube}>YouTube</a>
          </div>
        </div>
      </section>
    </main>
  );
}
