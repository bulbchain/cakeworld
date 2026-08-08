export function Footer() {
  return (
    <footer id="contact" className="mt-10 gradient-primary px-5 py-12 text-primary-foreground md:px-10">
      <div className="flex flex-wrap items-start justify-between gap-8">
        <div>
          <p className="font-display text-2xl font-black">Cakes bakery.</p>
          <p className="mt-2 max-w-xs text-sm opacity-80">
            Freshly baked happiness, delivered across the city every single day.
          </p>
        </div>
        <div className="text-sm opacity-90">
          <p className="mb-2 font-semibold">Visit us</p>
          <p>12 Baker Street, Bandra West</p>
          <p>Open daily · 8am – 10pm</p>
        </div>
        <div className="text-sm opacity-90">
          <p className="mb-2 font-semibold">Order on call</p>
          <p>+91 98765 43210</p>
          <p>hello@cakesbakery.com</p>
        </div>
      </div>
      <p className="mt-10 text-xs opacity-70">© {new Date().getFullYear()} Cakes bakery. All rights reserved.</p>
    </footer>
  );
}