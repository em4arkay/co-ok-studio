import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img alt="logo" src={Logo} /> */}
          <h1 className="text-xl font-bold">C<span className="text-primary-500">O</span>_OK</h1>
          <h1 className="text-xl font-bold text-primary-500">STUDIO</h1>
          <p className="my-5">
            We aspire to provide a friendly and relaxed environment 
            for you to experience a joyful cooking or baking activity with friends.
          </p>
          <p>Copyright © 2022 CO_OK studio All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Partners</p>
          <p className="my-5">Member Privileges</p>
          <p className="my-5">Privacy & Policy</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Bangkok, Thailand 10110</p>
          <p>(+66)123-456-789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
