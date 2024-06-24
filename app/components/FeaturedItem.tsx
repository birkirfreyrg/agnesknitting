import Image from "next/image";
import Link from "next/link";

export default function FeaturedItem() {
  return (
    <div className="flex flex-wrap justify-between items-center h-full w-full gap-2 p-4">
      <div className=" flex flex-wrap md:flex-nowrap gap-2 w-full h-full">
        <div className="relative h-full w-full md:w-1/2 ">
          <Link
            href="/projects/sweaters"
            className="hover-parent h-full flex items-center"
          >
            <Image
              src="/knittedSweater.webp"
              alt="Knitted Sweater"
              width={150}
              height={150}
              className=" object-cover h-full w-full"
            ></Image>
            <div>
              <h3 className="hover-text absolute inset-0 text-white text-4xl font-bold flex items-center justify-center bg-black bg-opacity-25 lg:hover:text-7xl lg:hover:bg-opacity-10 duration-1000">
                Sweaters
              </h3>
            </div>
          </Link>
        </div>
        <div className=" relative h-full w-full md:w-1/2">
          <Link
            href="/projects/babyclothes"
            className="h-full flex items-center"
          >
            <Image
              src="/babyClothes.webp"
              alt="Baby Clothes"
              width={150}
              height={150}
              className=" object-cover h-full w-full"
            ></Image>
            <h3 className="hover-text absolute inset-0 text-white text-4xl font-bold flex items-center justify-center bg-black bg-opacity-25 lg:hover:text-7xl lg:hover:bg-opacity-10 duration-1000">
              Baby Clothes
            </h3>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap w-full h-full gap-2">
        <div className="relative h-full w-full md:w-1/2">
          <Link href="/projects/scarves" className="h-full flex items-center">
            <Image
              src="/knittedScarf.webp"
              alt="Knitted Scarf"
              width={150}
              height={150}
              className=" object-cover h-full w-full"
            ></Image>
            <h3 className="hover-text absolute inset-0 text-white text-4xl font-bold flex items-center justify-center bg-black bg-opacity-25 lg:hover:text-7xl lg:hover:bg-opacity-10 duration-1000">
              Scarves
            </h3>
          </Link>
        </div>
        <div className=" relative h-full w-full md:w-1/2">
          <Link href="/projects/hats" className="h-full flex items-center">
            <Image
              src="/knittedHat.webp"
              alt="Knitted Hat"
              width={150}
              height={150}
              className=" object-cover h-full w-full"
            ></Image>
            <h3 className="hover-text absolute inset-0 text-white text-4xl font-bold flex items-center justify-center bg-black bg-opacity-25 lg:hover:text-7xl lg:hover:bg-opacity-10 duration-1000">
              hats
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
