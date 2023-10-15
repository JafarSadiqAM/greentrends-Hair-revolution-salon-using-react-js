import React from 'react'
import bodymassage from "../Images/bodymassage.jpg";
import F_hairstylist from "../Images/F_hairstylist.jpg";
import fb from "../Images/face&body.jpg";
import facemassage from "../Images/facemassage.jpg";
import facial from "../Images/facial.jpg";
import haircoloring from "../Images/haircoloring.jpg";
import  makeup from "../Images/makeup.jpg";
// import haircut from "../Images/haircut.jpg";
// import hairtreat from "../Images/hairtreat.jpg";
// import hairtreatment from "../Images/hairtreatment.jpg";
// import hf from "../Images/hand&feets.jpg";
// import M_hairstylist from "../Images/M_hairstylist.jpg";
// import makeupartist from "../Images/makeupartist.jpg";
// import manicure from "../Images/manicure.jpg";
// import ourTeam1 from "../Images/ourTeam1.jpg";
// import ourTeam2 from "../Images/ourTeam2.jpg";
// import ourTeam3 from "../Images/ourTeam3.jpg";
// import ourTeam4 from "../Images/ourTeam4.jpg";
// import ourTeam5 from "../Images/ourTeam5.jpg";
// import ourTeam6 from "../Images/ourTeam6.jpg";
// import padicure from "../Images/padicure.jpg";
// import threading from "../Images/threading.jpg";



const Home = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Discover Your New Look: Salon Gallery Showcase
            </h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Cutting-Edge Creations: Discover the latest trends and timeless
              classics in our salon gallery
            </p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={bodymassage}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={F_hairstylist}
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={fb}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={facemassage}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={facial}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={haircoloring}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div class="flex justify-center">
              <a href="/about">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Explore more
                </button>
              </a>
              <a href="/contact">
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home