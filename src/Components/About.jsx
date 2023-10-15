import React from 'react'
// import bodymassage from "../Images/bodymassage.jpg";
// import F_hairstylist from "../Images/F_hairstylist.jpg";
// import fb from "../Images/face&body.jpg";
// import facemassage from "../Images/facemassage.jpg";
// import facial from "../Images/facial.jpg";
// import haircoloring from "../Images/haircoloring.jpg";
import padicure from "../Images/padicure.jpg";
import threading from "../Images/threading.jpg";

// import haircut from "../Images/haircut.jpg";
// import hairtreat from "../Images/hairtreat.jpg";
// import hairtreatment from "../Images/hairtreatment.jpg";
// import hf from "../Images/hand&feets.jpg";
// import M_hairstylist from "../Images/M_hairstylist.jpg";
// import makeupartist from "../Images/makeupartist.jpg";
import makeup from "../Images/makeup.jpg";
import manicure from "../Images/manicure.jpg";
import ourTeam1 from "../Images/ourTeam1.jpg";
import ourTeam2 from "../Images/ourTeam2.jpg";
import ourTeam3 from "../Images/ourTeam3.jpg";
import ourTeam4 from "../Images/ourTeam4.jpg";
import ourTeam5 from "../Images/ourTeam5.jpg";
import ourTeam6 from "../Images/ourTeam6.jpg";

const About = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={makeup}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Salon:
              <br />
              Where Beauty Meets Expertise
            </h1>
            <p class="mb-8 leading-relaxed">
              Welcome to the heart and soul of our salon, where beauty, style,
              and self-expression come together in perfect harmony. Our About
              section is your gateway to understanding the essence of who we are
              and what we stand for. With a legacy of excellence in the art of
              hair and beauty, we have created a sanctuary for self-care,
              confidence, and transformation. Here, you'll get to know our
              passionate team of stylists and professionals, dedicated to making
              your beauty dreams a reality. Beyond the scissors and brushes, we
              are committed to empowering you with not just a new look but a
              renewed sense of self-assuredness. Our mission is to be more than
              just a salon; we are your partner in embracing your unique beauty
              and radiating it with pride. Join us on this journey of beauty,
              innovation, and inspiration – because it all begins with you.
            </p>
            {/* <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Explore more
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contact us
              </button>
            </div> */}
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Expertise, Artistry, and Your Desires – Our Team Delivers It All
            </p>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={ourTeam1}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">Hairstylist</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={ourTeam2}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Henry Letham
                  </h2>
                  <p class="text-gray-500">Colorist</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={ourTeam3}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p class="text-gray-500">Manicurist</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={ourTeam4}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
                  <p class="text-gray-500">Makeup Artist</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={ourTeam5}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Martin Eden
                  </h2>
                  <p class="text-gray-500">Eyelash Technician</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={ourTeam6}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p class="text-gray-500">Skin Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Milestone Moments: Celebrating 2.7K Subscribers
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Celebrating Beauty Enthusiasts and Counting!
            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p class="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  1.3K
                </h2>
                <p class="leading-relaxed">Users</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  74
                </h2>
                <p class="leading-relaxed">Files</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  46
                </h2>
                <p class="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About