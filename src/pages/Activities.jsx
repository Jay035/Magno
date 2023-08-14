import { items } from "../data/data";
import Transition from "../components/Transition";

export default function Activities() {
  return (
    <main className="text-center mt-10 pb-20 px-6 md:px-12 w-full">
      <Transition />
      <h2 className="text-2xl capitalize mb-8 font-medium">
        Our activities{" "}
        <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
      </h2>
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {items?.map((item) => (
          <div key={item.id} className="relative max-w-sm mx-auto">
            <img
              className="max-h-[240px] mx-auto min-w-[340px] object-center object-cover w-full"
              src={item.imgUrl}
              alt={item.title}
            />
            <div className="mt-4 text-white">
              <h1 className="text-2xl">{item.title}</h1>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
