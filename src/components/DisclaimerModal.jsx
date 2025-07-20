const DisclaimerModal = ({
  handleCloseModal,
  acceptedInfo,
  setAcceptedInfo,
}) => {
  return (
    <div
      className={`fixed bg-clip-padding  top-0 left-0 h-full flex text-center items-center w-full justify-center  z-[99] backdrop-blur-sm bg-[rgba(8,11,31,0.80)] ease-in-out duration-200
            opacity-100 visible `}
    >
      <div className="flex flex-col relative px-8 -mt-10 items-center text-start w-full bg-base-100 p-2 rounded-2xl max-w-[500px] lg:max-w-[50vw] xl:max-w-[40vw]">
        <h2 className="text-base-content my-4 font-bold text-xl uppercase">
          Important
        </h2>
        <p className="text-base-content font-normal">
          <strong>
            eCommerce is a student project currently in development for testing
            purposes and intended for invited users only:{" "}
          </strong>
          please avoid entering personal data, as I am still working toward full
          GDPR (DSGVO) compliance. The platform is hosted on Neon.com and does
          not use analytics tools to track user data.
        </p>
        <strong className="mt-4">
          FakeStoreAPI is used for product data, and it is not connected to any
          real inventory or stock management. Its images appear to support
          limited calls a day, so if you start seeing the no image available
          error handling you know you may have hit the limit.
        </strong>
        <strong className="mt-4">
          Stripe is implemented for payment processing, and it is set to test
          mode. Please use Stripe's card numbers (a link to the list will be
          provided) to make mock purchases.
        </strong>
        <p className="text-base-content font-normal bg-error rounded-2xl p-2 mt-4">
          Neon's free tier goes to sleep after 5 minutes of inactivity, so you
          may experience hiccups in server response when not interacting over
          that time. I am working on retry and ping calls to mitigate this, but
          please be patient if you encounter any issues.
        </p>
        <form className="flex flex-col justify-center mt-4">
          <label className="flex justify-center items-center space-x-4">
            <input
              type="checkbox"
              onChange={(e) => setAcceptedInfo(e.target.checked)}
              className="h-5 w-5 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              style={{ accentColor: "#1F46E5" }}
            />
            <p className="font-semibold">I understand and accept</p>
          </label>

          <button
            onClick={() => handleCloseModal()}
            disabled={!acceptedInfo}
            className={`btn my-5 ${
              acceptedInfo ? "" : "opacity-50 cursor-not-allowed"
            }`}
          >
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default DisclaimerModal;
