"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaQuoteLeft,
  FaQuoteRight,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";




const Compo = () => {



  const [selected, setSelected] = useState('');

  const handleClick = (option) => {
    setSelected(option); // Update the selected state
  };

  return (
    <>
      <section className="p-0 relative mt-[-1.5rem]">
        <div className="">
          <img
            src="/Images/banner-7.webp"
            className="w-full h-80 object-cover"
            alt="Banner Image"
          />
        </div>

        <div className="relative -mt-20 mx-auto max-w-6xl rounded-2xl bg-white shadow-lg rounded-4 p-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-11 lg:col-span-10 mx-auto">
              <div className="inline-flex mb-2">
                <span className="text-green-600 bg-green-100 text-[10px] font-bold px-2 py-1 rounded">
                  Software &amp; Tools
                </span>
              </div>
              <h1 className="text-[26px]  font-bold">
                Top 20 AI Tools To Make Your Website More Attractive
              </h1>
              <p className="my-3 text-gray-600">
                Commercial publishing platforms and content. Lorem ipsum is Link
                pseudo-Latin text used in web design, typography, layout, and
                printing in place of English to emphasize design elements over
                content. It's also called Link placeholder.
              </p>
              <ul className="flex items-center gap-2 p-0">
                <li className="flex items-center gap-2">
                  <div className="avatar w-12 h-12">
                    <img
                      className="rounded-full"
                      src="/Images/team-1.webp"
                      alt="avatar"
                    />
                  </div>
                  <div className="ml-2">
                    <h6 className="mb-0">
                      <Link href="#" className=" font-bold hover:underline">
                        Adam Wisdom
                      </Link>
                    </h6>
                    <p className="mb-0 text-gray-500">
                      <span>10 Sep 2023</span>
                      <span className="mx-2">.</span>
                      <span>2 min read</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-20">
        <p>
          <span className="py-2 px-5 rounded-lg text-2xl bg-blue-100 inline-flex items-center justify-center mr-2 font-bold">
            I
          </span>
          n Link professional context it often happens that private or corporate
          clients corder Link publication to be made and presented with the
          actual content still not being ready. Think of Link news blog that's
          filled with content hourly on the day of going live. However,
          reviewers tend to be distracted by comprehensible content, say, Link
          random text copied from Link newspaper or the internet. The are likely
          to focus on the text
        </p>

        <h5 className="my-6 text-xl font-bold">
          There are some important tools for AI
        </h5>

        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <p className="text-gray-600">
              Cicero famously orated against his political opponent Lucius
              Sergius Catilina. Occasionally the first Oration against Catiline
              is taken for type specimens: Quo usque tandem abutere, Catilina,
              patientia nostra? Quam diu etiam furor iste tuus nos eludet? How
              long, O Catiline, will you abuse our patience? And for how long
              will that madness
            </p>
            <ul className="list-decimal my-5 ml-6">
              <li className="my-2 text-[#293137]">
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              </li>
              <li className="my-2 text-[#293137]">
                The Latin scholar H. Rackham translated the above in 1914
              </li>
              <li className="my-2 text-[#293137]">
                But I must explain to you how all this mistaken idea of
                denouncing
              </li>
              <li className="my-2 text-[#293137]">
                Pleasure and praising pain was born and I will give you Link
                complete
              </li>
              <li className="my-2 text-[#293137]">
                Pain was born and I will give you Link complete
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-3">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain.
        </p>

        <blockquote className="bg-[#ecf5fe] rounded text-center  p-8 my-6">
          <h6 className="font-normal flex text-center mb-5">
            <FaQuoteLeft /> Asking the client to pay no attention Lorem Ipsum
            isn't hard as it doesn’t make sense in the first place, that will
            limit any initial interest soon enough. Try telling a client to
            ignore draft copy however, and you're up to something you can't win.
            <FaQuoteRight />
          </h6>
          <i className=" text-blue-600 font-medium">- Rouze M. Alhatri</i>
        </blockquote>

        <p className="pt-3 text-md">
          In a free hour, when our power of choice is untrammelled and when
          nothing prevents our being able to do what we like best, every
          pleasure is to be welcomed and every pain avoided. But in certain
          circumstances and owing to the claims of duty or the obligations of
          business it will frequently occur that pleasures have to be repudiated
          and annoyances accepted. The wise man therefore always holds in these
          matters to this principle of selection.
        </p>

        <p className="pt-3 text-md">
          The toppings you may chose for that TV dinner pizza slice when you
          forgot to shop for foods, the paint you may slap on your face to
          impress the new boss is your business. But what about your daily
          bread? Design comps, layouts, wireframes—will your clients accept that
          you go about things the facile way? Authorities in our business will
          tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
          to forswear forever.
        </p>

        <div className="bg-mode bg-white border rounded-md p-6 my-8">
          <div className="flex items-center">
            <Link href="#">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src="/Images/team-1.webp" alt="avatar" />
              </div>
            </Link>
            <div>
              <h4 className="m-0">
                <Link href="#" className="font-bold text-lg">
                  Adam Wisdom
                </Link>
              </h4>
              <small>GeoTrip Senior Writer</small>
            </div>
          </div>

          <p className="my-4">
            Using dummy content or fake elegant design can quickly begin to
            bloat with unexpected content information in the Web design process
            can result in products with unrealistic assumptions and potentially
            serious design flaws. A seemingly.
          </p>

          <div className="flex justify-between items-center">
            <ul className="flex space-x-4">
              <li>
                <Link className="text-lg" href="#">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link className="text-lg" href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link className="text-lg" href="#">
                  <FaGooglePlus />
                </Link>
              </li>
              <li>
                <Link className="text-lg" href="#">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
            <Link
              href="#"
              className="bg-blue-600 text-white text-md font-semibold px-3 py-2 rounded-md"
            >
              Contact Author
            </Link>
          </div>
        </div>

        <div className="bg-[#f8f9fa] rounded flex justify-between items-center text-center p-4 mt-6">
          <h6 className="font-bold">Was this article helpful?</h6>
          <small className="font-semibold">
            40 out of 84 found this helpful
          </small>
          <div className="flex border border-black rounded-md">
            <div
              onClick={() => handleClick("yes")}
              className={`border-r rounded-l-md  flex gap-1 items-center border-black p-2 cursor-pointer ${
                selected === "yes" ? "bg-gray-800 text-white" : ""
              }`}
            >
              <input type="radio" id="yes" name="helpful" className="hidden" />
              <Image
                src="/Images/like.webp"
                width={20}
                height={100}
                alt=""
               style={{ filter: selected === 'yes' ? 'brightness(1) invert(1)' : 'none' }}
              />
              <label htmlFor="yes" className="text-sm btn-outline-secondary">
                Yes
              </label>
            </div>

            <div
              onClick={() => handleClick("no")}
              className={`p-2 py-1  flex items-center gap-1 rounded-r-md cursor-pointer ${
                selected === "no" ? "bg-gray-800 text-white" : ""
              }`}
            >
              <input type="radio" id="no" name="helpful" className="hidden" />
              <label htmlFor="no" className="text-sm btn-outline-secondary">
                No
              </label>
              <Image
                src="/Images/dislike.webp"
                width={20}
                height={100}
                alt=""
               style={{ filter: selected === 'no' ? 'brightness(1) invert(1)' : 'none' }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <div>
            <h6 className="inline-block mr-4 font-bold">Share This:</h6>
            <ul className="flex gap-4 mt-3">
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <FaFacebook /> Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <FaInstagram /> Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <FaTwitter /> Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="inline-block mr-4 font-bold">Popular Tags:</h6>
            <ul className="flex space-x-2 mt-3">
              <li>
                <Link href="#" className="bg-[#f8f9fa] text-sm p-2 rounded-md">
                  Article
                </Link>
              </li>
              <li>
                <Link href="#" className="bg-[#f8f9fa] text-sm p-2 rounded-md">
                  Holiday
                </Link>
              </li>
              <li>
                <Link href="#" className="bg-[#f8f9fa] text-sm p-2 rounded-md">
                  Destination
                </Link>
              </li>
              <li>
                <Link href="#" className="bg-[#f8f9fa] text-sm p-2 rounded-md">
                  GeoTrip
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compo;
