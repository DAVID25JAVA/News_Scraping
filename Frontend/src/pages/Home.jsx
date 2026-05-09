import Wrapper from "../components/Wrapper";
import StoryCard from "../components/StoryCard";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Home() {
  return (
    <div className="bg-[#f5f7fb] min-h-screen">
      <Wrapper>
        <section className="py-14">
          <div className="relative overflow-hidden rounded-[40px] bg-black px-8 py-16 lg:px-16">
            <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300 mb-6">
                Trending Developer News Everyday
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white">
                Discover the
                <span className="text-yellow-400"> Best Tech Stories</span>
              </h1>

              <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
                Read trending startup news, AI breakthroughs, developer
                discussions, programming insights, and Hacker News stories in
                one modern platform.
              </p>

              {/* SEARCH */}

              <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl">
                <Input
                  placeholder="Search stories, startups, AI..."
                  className="bg-white text-black border-none h-14"
                />

                <Button className="h-14 px-8 bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
                  Explore
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-10">
                <div>
                  <h3 className="text-4xl font-bold text-white">10K+</h3>

                  <p className="text-gray-400 mt-1">Stories Read</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-white">2K+</h3>

                  <p className="text-gray-400 mt-1">Active Readers</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-white">500+</h3>

                  <p className="text-gray-400 mt-1">Daily Bookmarks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FILTER SECTION */}

        <section className="pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Top Stories</h2>

              <p className="text-gray-500 mt-2">
                Latest stories scraped from Hacker News.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-14">
          <div className="grid grid-cols-1 gap-7">
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
          </div>
        </section>

        <section className="pb-16">
          <div className="bg-linear-to-r from-black to-gray-900 rounded-[35px] p-10 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Stay Updated With
                <span className="text-yellow-400"> Developer Trends</span>
              </h2>

              <p className="mt-5 text-gray-300 text-lg leading-relaxed">
                Join thousands of developers reading trending Hacker News
                stories daily.
              </p>

              <div className="mt-8 flex flex-col md:flex-row gap-4 max-w-xl">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-black border-none h-14"
                />

                <Button className="h-14 px-8 bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
}

export default Home;
