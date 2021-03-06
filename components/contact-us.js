import Image from "next/image";
import ContactSvg from "../public/svg/contact.svg";
import MailBtn from "./mail-btn";

export default function ContactUs() {
  return (
    <>
      <div className="bg-gray-50 mt-9 mb-12 py-10 px-6 grid grid-cols-12 justify-center items-center">
        <div className="col-span-12 max-w-sm md:max-w-lg justify-self-center md:col-start-2 md:col-end-7 md:pl-5">
          <Image
            src={ContactSvg}
            alt="illustration for contact section of the page"
          />
        </div>
        <div className="col-span-12 md:col-start-8 md:col-end-12 xl:pr-5 flex flex-col items-center md:items-start mt-12">
          <h1 className="font-rubik text-2xl lg:text-4xl">
            Have Any Questions?
          </h1>
          <p className="font-poppins text-gray-500 mt-3 text-center md:text-left md:w-full max-w-xl">
            “We would be very happy to answer your questions regarding product
            details, product introduction of yours and prospective
            collaboration. We are available in Whatsapp, Viber and Telegram. You
            can also get your queries thorough mails to us.“
          </p>
          <MailBtn />
        </div>
      </div>
    </>
  );
}
