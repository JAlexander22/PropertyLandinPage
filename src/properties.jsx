import image1 from "../src/assets/img1.jpg";
import image2 from "../src/assets/img2.jpg";
import image3 from "../src/assets/img3.jpg";
import image4 from "../src/assets/img4.jpg";
import image5 from "../src/assets/img5.jpg";
import image6 from "../src/assets/img6.jpg";
import image7 from "../src/assets/img7.jpg";
import image8 from "../src/assets/img8.jpg";
import image9 from "../src/assets/img9.jpg";
import image10 from "../src/assets/img10.jpg";
import image11 from "../src/assets/img11.jpg";
import image12 from "../src/assets/img12.jpg";

const properties = [
  {
    id: 1,
    image: image1,
    price: "£950,000",
    title: "Elegant Coastal Villa",
    location: "75 Beaumont Park Drive, Wolverhampton",
    monthlyRent: "£1,250 pcm",
    annualROI: "5.1%",
    description:
      "An elegant coastal villa with panoramic ocean views, featuring a spacious terrace and luxurious interiors.",
    beds: 4,
    baths: 3,
    sqft: 2800,
    images: [image3, image4, image5, image6],
  },
  {
    id: 2,
    image: image2,
    price: "£1,450,000",
    title: "12 Silver Birch Lane, Hagley",
    location: "456 Beach Drive, Malibu",
    monthlyRent: "£1,450 pcm",
    annualROI: "5.8%",
    description:
      "A stunning beachfront property with direct access to the sand, perfect for sunbathing and water sports.",
    beds: 5,
    baths: 4,
    sqft: 3500,
    images: [image5, image1, image9, image7],
  },
  {
    id: 3,
    image: image3,
    price: "£850,000",
    title: "Modern Urban Loft",
    location: "19 Wychwood Close, Four Oaks",
    monthlyRent: "£1,800 pcm",
    annualROI: "6.3%",
    description:
      "A modern loft in the heart of the city, featuring high ceilings and an open floor plan with stylish finishes.",
    beds: 3,
    baths: 2,
    sqft: 2000,
    images: [image3, image6, image5, image1],
  },
  {
    id: 4,
    image: image4,
    price: "£1,100,000",
    title: "Charming Mountain Retreat",
    location: "321 Highland Road, Hollywood Hills",
    monthlyRent: "£2,100 pcm",
    annualROI: "6.9%",
    description:
      "A charming retreat nestled in the mountains, offering breathtaking views and a cozy fireplace for winter nights.",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    images: [image2, image4, image5, image12],
  },
  {
    id: 5,
    image: image5,
    price: "£1,800,000",
    title: "Smart Luxury Home",
    location: "52 Maple Grove, Harborne, Birmingham",
    monthlyRent: "£2,400 pcm",
    annualROI: "7.2%",
    description:
      "A state-of-the-art smart home with cutting-edge technology and eco-friendly features, designed for modern living.",
    beds: 6,
    baths: 5,
    sqft: 4500,
    images: [image8, image4, image5, image10],
  },
  {
    id: 6,
    image: image6,
    price: "£700,000",
    title: "Family-Friendly Haven",
    location: "14 Willowbrook Drive, Edgbaston, Birmingham",
    monthlyRent: "£2,750 pcm",
    annualROI: "7.8%",
    description:
      "A family-friendly haven with a large backyard, perfect for kids and pets, located in a quiet neighborhood.",
    beds: 3,
    baths: 2,
    sqft: 2550,
    images: [image10, image4, image5, image8],
  },
  {
    id: 7,
    image: image7,
    price: "£720,000",
    title: "Cozy Cottage Retreat",
    location: "27 Ashcroft Avenue, Solihull",
    monthlyRent: "£3,000 pcm",
    annualROI: "8.1%",
    description:
      "A cozy cottage retreat with a charming garden, ideal for relaxing weekends and family gatherings.",
    beds: 3,
    baths: 2,
    sqft: 2500,
    images: [image5, image7, image12, image1],
  },
  {
    id: 8,
    image: image8,
    price: "£740,000",
    title: "Stylish Family Home",
    location: "35 Willowbrook Drive, Edgbaston, Birmingham",
    monthlyRent: "£3,250 pcm",
    annualROI: "8.4%",
    description:
      "A stylish family home with modern amenities and a spacious layout, perfect for entertaining guests.",
    beds: 3,
    baths: 2,
    sqft: 2400,
    images: [image3, image4, image5, image9],
  },
  {
    id: 9,
    image: image9,
    price: "£760,000",
    title: "Chic Suburban Retreat",
    location: "41 Oakmere Gardens, Walsall",
    monthlyRent: "£3,600 pcm",
    annualROI: "8.9%",
    description:
      "A chic suburban retreat with a contemporary design, featuring a large deck for outdoor entertaining.",
    beds: 3,
    baths: 2,
    sqft: 2150,
    images: [image4, image7, image5, image11],
  },
  {
    id: 10,
    image: image10,
    price: "£780,000",
    title: "Elegant Family Residence",
    location: "6 The Paddocks, Streetly",
    monthlyRent: "£4,100 pcm",
    annualROI: "9.3%",
    description:
      "An elegant family residence with spacious living areas and a beautifully landscaped yard, perfect for family life.",
    beds: 3,
    baths: 2,
    sqft: 2850,
    images: [image2, image4, image5, image12],
  },
  {
    id: 11,
    image: image11,
    price: "£800,000",
    title: "Charming Craftsman Home",
    location: "33 Kingsley Manor Road, Knowle",
    monthlyRent: "£4,500 pcm",
    annualROI: "9.8%",
    description:
      "A charming craftsman home with original woodwork and a welcoming front porch, ideal for family gatherings.",
    beds: 3,
    baths: 2,
    sqft: 2200,
    images: [image1, image4, image5, image7],
  },
  {
    id: 12,
    image: image12,
    price: "£820,000",
    title: "Spacious Family Retreat",
    location: "55 Maple Grove, Harborne, Birmingham",
    monthlyRent: "£5,200 pcm",
    annualROI: "10.4%",
    description:
      "A spacious family retreat with ample room for everyone, featuring a large backyard and a cozy atmosphere.",
    beds: 3,
    baths: 2,
    sqft: 2600,
    images: [image5, image4, image5, image8],
  },
];
export default properties;