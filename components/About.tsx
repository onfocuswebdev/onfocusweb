import Image from "next/image";
import React from "react";

const imageStyle = {
  borderTopLeftRadius: "2%",
  border: "1px solid #fff",
};

const About = () => {
  return (
    <div className="pt-10 border-b border-neutral-300" id="about">
      <div className="flex justify-center my-5">
        <h1 className="font-raleway leading-[0.8] font-black text-5xl">
          About us
        </h1>
      </div>
      <div className="flex w-full text-lg">
        <p className="text-card">
          We are onFocusWeb, a creative team committed to exploring, analyzing
          and interpreting the digital landscape and competitors. Our creativity
          permeates every aspect of our approach to the digital environment,
          defining the quintessence of our work.
        </p>
        <p className="text-card">
          onFocusWeb is your partner in digital transformation, committed to
          revitalizing your online presence with dedication, expertise and
          authenticity. We highlight your aspirations and your latent potential
          through innovative projects and services, offering a range of
          tailor-made solutions to revive your business.
        </p>
      </div>
      <div className="flex w-full text-lg">
        <p className="text-card">
          Creativity is our hallmark, permeating every aspect of our approach to
          the digital environment and defining the quintessence of our work.
          Every nuance of this creative spirit is reflected in the way we
          explore, analyze and interpret the digital landscape and competitors,
          ensuring professional and meticulous assistance in every facet of our
          service.
        </p>
        <p className="text-card">
          We are more than just an agency – we are your partner in innovation,
          guiding you through the ever-changing world of technology and online
          marketing. With onFocusWeb, you will not only find competent experts,
          but also passionate individuals, ready to share your enthusiasm and
          transform your visions into engaging digital realities.
        </p>
      </div>

      <div className="flex justify-center my-5">
        <h1 className="font-raleway leading-[0.8] font-black text-5xl">
          Founder
        </h1>
      </div>
      <div className="flex">
        <div className="flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <Image
            src="/static/3x4.JPG"
            width={300}
            height={400}
            style={imageStyle}
            alt="founder of the onfocusweb website Bruno Diego da Silva"
          />
        </div>
        <div className="font-raleway font-extralight border rounded overflow-hidden shadow-lg px-6 py-4">
          <div className="mb-8">
            <div className="text-gray-100 font-bold text-xl mb-2 flex justify-end">
              Bruno is one of our founders
            </div>
            <p className="text-gray text-xl flex text-right">
              We proudly introduce you to Bruno, our passionate CTO at
              onFocusWeb. Bruno embodies the perfect fusion of creativity and
              technology, leading our team in developing stunning and engaging
              websites. Bruno is the technological backbone and creative soul of
              onFocusWeb. His dedication, collaborative spirit, and desire to
              constantly push boundaries all inspire us to create extraordinary
              results for our clients.
            </p>
          </div>
        </div>
      </div>

      <div className="p-10"></div>
    </div>
  );
};

export default About;
