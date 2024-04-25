import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const CardContact = ({ openModal, closeModal }) => {
  console.log(open);
  return openModal ? (
    <div
      className="w-full h-full bg-[#09090942] backdrop-blur-sm absolute z-50 flex justify-center items-center px-2"
      onClick={closeModal}
    >
      <div className="max-w-[600px] w-full h-[300px] bg-black rounded-lg flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-row gap-3">
          <a href="https://www.instagram.com/rezalnursyaifudincc/">
            <BiLogoInstagram className="text-white text-4xl" />
          </a>
          <a href="https://github.com/RezalMaksmi">
            <BiLogoGithub className="text-white text-4xl" />
          </a>
          <a href="https://facebook.com/syaifudin">
            <BiLogoFacebookCircle className="text-white text-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/rezal-nur-syaifudin-98b10b298/">
            <BiLogoLinkedin className="text-white text-4xl" />
          </a>
        </div>
        <button className="px-3 py-2 text-white border rounded-md">
          Download CV
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CardContact;
