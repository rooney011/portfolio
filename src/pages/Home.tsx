import { Navigation, Sparkle } from "@/components/Navigation";
const Home = () => {
  return <div className="min-h-screen bg-background p-8 md:p-12">
      {/* Header */}
      <header className="flex justify-between items-start mb-20">
        <h2 className="font-light mx-0 text-2xl">Aneesh's</h2>
        
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Sparkle className="mr-8" />
        </div>

        <div className="text-center mb-16">
          <p className="mb-4 font-light tracking-wide text-2xl text-center">Welcome to my</p>
          <h1 className="text-8xl md:text-9xl font-bold mb-12 leading-none">
            Portfolio
          </h1>
        </div>

        <Navigation />
      </main>
    </div>;
};
export default Home;