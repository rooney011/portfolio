import { Navigation, Sparkle } from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      
      {/* Header */}
      <header className="flex justify-between items-start mb-16 md:mb-20">
        <h2 className="font-light text-xl md:text-2xl">Aneesh's</h2>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto">

        {/* Sparkle */}
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <Sparkle className="mr-4 md:mr-8 scale-75 md:scale-100" />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="mb-3 font-light tracking-wide text-lg md:text-2xl">
            Welcome to my
          </p>

          <h1 className="
            font-bold leading-none
            text-6xl          /* mobile */
            sm:text-7xl       
            md:text-8xl       /* tablet */
            lg:text-9xl       /* laptop */
            mb-10 md:mb-12
          ">
            Portfolio
          </h1>
        </div>

        {/* Navigation */}
        <Navigation />
      </main>
    </div>
  );
};

export default Home;
