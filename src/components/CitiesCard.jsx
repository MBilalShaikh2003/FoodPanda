import Image from 'next/image';

const CitiesCard = ({ src, alt, cityName }) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
      <Image 
        src={src} 
        alt={alt} 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center">
        <span>{cityName}</span>
      </div>
    </div>
  );
};

export default CitiesCard;
