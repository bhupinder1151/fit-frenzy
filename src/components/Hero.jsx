export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 text-center max-w-[800px] mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h2 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">normous</span>
        </h2>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledgement that I may become 
        <span className="text-blue-400"> unbelievably swolenormous</span> and accept all risks of becoming
        the local <span className="text-blue-400">mass montrosity</span>, afflicted with severe body
        dismorphia, unable to fit through doors.
      </p>

      <button className="bg-slate-950 px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid duration-200 blueSahdow">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
