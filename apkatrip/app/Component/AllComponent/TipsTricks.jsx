import Link from "next/link";

// components/BlogSection.js
const BlogSection = () => {
  return (
    <>
      <section className="bg-gray-100 py-10 ">
        <div className="w-full ">
          <div className="text-center mb-0 lg:mb-6">
            <h2 className="text-2xl font-bold text-black _hdrtxt py-0 lg:py-5">
              Enjoy Fresh Travel Blogs
            </h2>
          </div>
          <div className="event-box-main flex flex-wrap   items-center justify-center gap-3">
            <div className="event-box">
              <img src="/Images/Routes/new1.webp" />
              <div>
                <h2>
                  Discover new and exciting places to visit, to popular
                  hotspots.
                </h2>
                <Link href="/blogView/aboutblog">
                
                  <span>Enjoy Fresh Travel Blogs</span>
                </Link>
              </div>
            </div>
            <div className="event-box">
              <img src="/Images/Routes/new2.webp" />
              <div>
                <h2>
                  Receive valuable advice and tips from seasoned travel experts.{" "}
                </h2>
                <Link href="/blogView">   <span>Expert Insights</span> </Link>
              </div>
            </div>
            <div className="event-box">
              <img src="/Images/Routes/new3.webp" />
              <div>
                <h2>
                  Stay informed about the latest travel trends and innovations
                  to enhance your journey.
                </h2>
                <Link href="/blogView/aboutblog">       <span>Travel Trends</span> </Link>
              </div>
            </div>
            <div className="event-box">
              <img src="/Images/Routes/new4.webp" />
              <div>
                <h2>
                  {" "}
                  Read engaging travel stories and experiences from fellow
                  travelers.
                </h2>
                <Link href="/blogView/aboutblog"> <span>Personal Stories</span></Link> 
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blogView"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              View All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
