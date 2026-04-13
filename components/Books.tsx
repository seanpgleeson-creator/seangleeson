import { books } from "@/lib/data";

export default function Books() {
  return (
    <section
      id="books"
      aria-labelledby="books-heading"
      className="py-14 md:py-20"
    >
      <h2
        id="books-heading"
        className="font-fraunces font-medium text-ink text-[1.375rem] leading-[1.3] mb-10 md:mb-12"
        style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
      >
        Books That Have Stuck With Me
      </h2>

      <div className="space-y-6">
        {books.map((book) => (
          <div key={book.title}>
            <h3
              className="font-fraunces font-medium text-ink text-[1.0625rem] leading-[1.4]"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
            >
              {book.title}
            </h3>
            <p className="font-sans text-[0.9375rem] leading-[1.6] text-ink-secondary">
              {book.author}
            </p>
            {book.note && book.note !== "TODO" && (
              <p className="font-sans text-[0.9375rem] leading-[1.6] text-ink-secondary italic mt-1">
                {book.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
