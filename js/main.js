


const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear


const texts = [
    { h1: "Innovative Solutions for All", p: "PAULO SOLAR ENERGY SOLUTION takes a holistic approach to energy needs. Whether it’s powering individual homes, businesses, or large-scale industrial facilities, the company offers a range of products and services tailored to meet different energy demands. One of the company's standout innovations is its hybrid solar systems, which combine solar energy with traditional grid power or other renewable sources. It is lighting the path to a more sustainable and empowered world." },

    { h1: "Bridging the Energy Gap", p: "In many parts of the world, particularly in developing nations, access to reliable energy remains a challenge. We are actively working to bridge this energy gap by delivering affordable, reliable solar power solutiions to areas with little or no accces to electricity. We are bringing light where there was darkness. Children can now study after sunset, businesses can operate longer, and healthcare facilities can offer more reliable services. we are raising awareness about the long-term economic and environmental advantages of solar energy." },

    { h1: "Sustainability at the Core", p: "At the heart of PAULO SOLAR ENERGY SOLUTION’s mission is sustainability. Every project the company undertakes is designed with the environment in mind, reducing carbon footprints and contributing to the global fight against climate change. By promoting the adoption of solar power, PAULO SOLAR is helping to cut down on the use of fossil fuels, leading to cleaner air and a healthier planet for future generations.The company is also dedicated to educating the public on the benefits of renewable energy." },

    { h1: "SLighting the Path Forward", p: " PSES stands as a beacon of innovation, sustainability, and social impact. As the world moves toward a greener future, companies like PAULO SOLAR are leading the charge, proving that renewable energy is not just a viable alternative but the key to unlocking a brighter, more equitable future for all.Through its relentless commitment to powering communities, enhancing livelihoods, and protecting the environment,we are not just providing energy solutions." }
];

let currentIndex = 0;

function showText() {
    const h1 = document.querySelector('.text-container h1');
    const p = document.querySelector('.text-container p');

    h1.textContent = texts[currentIndex].h1;
    p.textContent = texts[currentIndex].p;

    h1.style.opacity = 1;
    p.style.opacity = 1;

    setTimeout(() => {
        h1.style.opacity = 0;
        p.style.opacity = 0;
    }, 10000);

    currentIndex = (currentIndex + 1) % texts.length;

    setTimeout(showText, 11000);

};
showText();


  