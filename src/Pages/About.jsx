import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-10">
        <h1 className="text-3xl font-bold text-green-800 mb-4 text-center">Our Story</h1>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed text-center">
          Founded in 2015 by visionary entrepreneur <span className="font-semibold text-green-700">Naa Tsoo Banks</span>, <span className="font-semibold">BGG Classics</span> began its journey as an innovative fashion brand with a commitment to timeless style and quality craftsmanship.
        </p>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed text-center">
          Driven by a passion for wholesome living and premium nutrition, we expanded our horizons in 2016 with the launch of <span className="font-semibold text-green-700">A-La-Mode</span>, our specialized confectionery division. What started as a love for healthy snacking has evolved into something much greater.
        </p>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed text-center">
          Today, A-La-Mode stands as a trusted name in artisanal coconut processing, dedicated to bringing families across the region the finest coconut products nature has to offer. Our carefully curated selection includes:
        </p>
        <ul className="mb-6 text-gray-800 text-base list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-green-700">Premium Unrefined Coconut Oil</span> – Cold-pressed and pure, retaining all natural nutrients and flavor
          </li>
          <li>
            <span className="font-semibold text-green-700">Artisanal Desiccated Coconut</span> – Perfectly dried and processed for exceptional taste and texture
          </li>
          <li>
            <span className="font-semibold text-green-700">Nutrient-Rich Coconut Flour</span> – A wholesome, gluten-free alternative for health-conscious baking
          </li>
        </ul>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed text-center">
          At BGG Classics, we believe in the power of natural ingredients and traditional processing methods. Every product is crafted with meticulous attention to quality, ensuring that families can enjoy the authentic taste and nutritional benefits of premium coconut products.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed text-center font-semibold">
          From fashion to food, our commitment remains unchanged: <span className="text-green-700">delivering excellence that enhances your lifestyle, naturally.</span>
        </p>
      </div>
    </div>
  )
}

export default About