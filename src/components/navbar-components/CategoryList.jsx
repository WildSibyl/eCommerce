import { Link, useLocation } from "react-router";

const CategoryList = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Md screens */}
      <div className="hidden md:flex lg:hidden flex-wrap w-full sm:justify-evenly items-center">
        <Link to="/category/appliances">
          <button
            className={`btn m-0 px-0 w-[60px] ${
              isActive("/category/appliances") ? "bg-blue-400" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Electric-Cord-3--Streamline-Core"
              height={24}
              width={24}
            >
              <desc>Appliances</desc>
              <g id="electric-cord-3--electricity-electronic-appliances-device-cord-cable-plug-connection">
                <path
                  id="Union"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  d="M1.5 7.03348c0 -3.03757 2.46243 -5.5 5.5 -5.5 3.0376 0 5.5 2.46243 5.5 5.5 0 2.73852 -2.0022 5.01082 -4.62252 5.43052 -0.01727 0.0027 -0.02673 0.0007 -0.03284 -0.0013 -0.00752 -0.0025 -0.01963 -0.0084 -0.03401 -0.0221 -0.03063 -0.0291 -0.06063 -0.0842 -0.06063 -0.1571v-1.4526c1.64368 -0.3454 2.8778 -1.8036 2.8778 -3.55001V5.73141c0 -0.41421 -0.3358 -0.75 -0.75003 -0.75H9.3125V3.7709c0 -0.41421 -0.33579 -0.75 -0.75 -0.75s-0.75 0.33579 -0.75 0.75v1.21051h-1.625V3.7709c0 -0.41421 -0.33579 -0.75 -0.75 -0.75s-0.75 0.33579 -0.75 0.75v1.21051h-0.56494c-0.41422 0 -0.75 0.33579 -0.75 0.75v1.54948c0 1.74629 1.23392 3.20441 2.87744 3.54991v1.4527c0 0.9275 0.78231 1.835 1.86469 1.6616C11.4511 13.4108 14 10.5205 14 7.03348c0 -3.866 -3.134 -7.0000022 -7 -7.0000022 -3.86599 0 -7 3.1340022 -7 7.0000022 0 2.59193 1.40911 4.85382 3.49946 6.06302 0.35854 0.2075 0.81734 0.0849 1.02474 -0.2736 0.20741 -0.3586 0.08489 -0.8174 -0.27366 -1.0248C2.60463 10.846 1.5 9.06831 1.5 7.03348Z"
                  clipRule="evenodd"
                  strokeWidth={1}
                />
              </g>
            </svg>
          </button>
        </Link>
        <Link to="/category/tv">
          <button
            className={`btn m-0 px-0 w-[60px] ${
              isActive("/category/tv") ? "bg-blue-400" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="Vintage-Tv-4--Streamline-Ultimate"
              height={24}
              width={24}
            >
              <desc>Tv</desc>
              <path
                d="M22.7558 7.6263c0 -0.8101 -0.6566 -1.4668 -1.4667 -1.4667h-6.8446c-0.0975 0.0003 -0.1859 -0.0573 -0.2249 -0.1467 -0.0395 -0.0929 -0.0203 -0.2003 0.0489 -0.2738l3.7841 -3.7743c0.575 -0.4857 0.4086 -1.4118 -0.2996 -1.6669 -0.3797 -0.1368 -0.8045 -0.0262 -1.0693 0.2784L12.176 5.0938c-0.0961 0.0997 -0.2559 0.0997 -0.352 0L7.3163 0.5763c-0.5344 -0.5344 -1.4469 -0.2899 -1.6426 0.4402 -0.0907 0.3388 0.0061 0.7003 0.2542 0.9483l3.784 3.7743c0.0692 0.0735 0.0884 0.1809 0.0489 0.2738 -0.039 0.0894 -0.1274 0.147 -0.2249 0.1467H2.6913c-0.8024 0.0107 -1.4472 0.6642 -1.4471 1.4667v12.7114c0 0.8101 0.6566 1.4667 1.4667 1.4667h0.2444c0.135 0 0.2445 0.1094 0.2445 0.2445v0.7333c0 0.7527 0.8148 1.2232 1.4667 0.8468 0.3025 -0.1747 0.4889 -0.4975 0.4889 -0.8468v-0.7333c0 -0.1351 0.1094 -0.2445 0.2444 -0.2445h13.2004c0.135 0 0.2444 0.1094 0.2444 0.2445v0.7333c0 0.7527 0.8148 1.2232 1.4667 0.8468 0.3025 -0.1747 0.4889 -0.4975 0.4889 -0.8468v-0.7333c0 -0.1351 0.1094 -0.2445 0.2445 -0.2445h0.2444c0.81 0 1.4667 -0.6567 1.4667 -1.4667ZM7.111 18.871c-1.6201 0.0001 -2.9334 -1.3133 -2.9334 -2.9334v-3.9112c0 -1.6201 1.3133 -2.9335 2.9334 -2.9334h9.778c1.62 0.0001 2.9334 1.3134 2.9334 2.9334v3.9112c0 1.62 -1.3134 2.9333 -2.9334 2.9334Z"
                fill="#FFFFFF"
                strokeWidth={1}
              />
            </svg>
          </button>
        </Link>
        <Link to="/category/audio">
          <button
            className={`btn m-0 px-0 w-[60px] ${
              isActive("/category/audio") ? "bg-blue-400" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="Headphones-1--Streamline-Ultimate"
              height={22}
              width={22}
            >
              <desc>Audio</desc>
              <g id="Headphones-1--Streamline-Ultimate.svg">
                <path
                  d="M6.69 13.69c-0.29 -0.18 -0.59 -0.37 -0.89 -0.59a0.5 0.5 0 0 0 -0.8 0.4v10a0.5 0.5 0 0 0 0.85 0.35c0.43 -0.43 0.82 -0.76 1.16 -1.05 0.83 -0.7 1.49 -1.25 1.49 -2.3V16c0 -1.17 -0.92 -1.75 -1.81 -2.31Z"
                  fill="#FFFFFF"
                  strokeWidth={1}
                />
                <path
                  d="M22.18 13.09a0.25 0.25 0 0 1 -0.18 -0.24V10a10 10 0 0 0 -20 0v2.85a0.25 0.25 0 0 1 -0.18 0.24A2.51 2.51 0 0 0 0 15.5v6A2.5 2.5 0 0 0 2.5 24h1a0.5 0.5 0 0 0 0.5 -0.5V10a8 8 0 0 1 16 0v13.5a0.5 0.5 0 0 0 0.5 0.5h1a2.5 2.5 0 0 0 2.5 -2.5v-6a2.51 2.51 0 0 0 -1.82 -2.41Z"
                  fill="#FFFFFF"
                  strokeWidth={1}
                />
                <path
                  d="M18.2 13.1c-0.3 0.22 -0.6 0.41 -0.89 0.59 -0.89 0.56 -1.81 1.14 -1.81 2.31v4.5c0 1.05 0.66 1.6 1.49 2.3 0.34 0.29 0.73 0.62 1.16 1.05a0.5 0.5 0 0 0 0.85 -0.35v-10a0.5 0.5 0 0 0 -0.8 -0.4Z"
                  fill="#FFFFFF"
                  strokeWidth={1}
                />
              </g>
            </svg>
          </button>
        </Link>
        <Link to="/category/mobile">
          <button
            className={`btn m-0 px-0 w-[60px] ${
              isActive("/category/mobile") ? "bg-blue-400" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="Phone-Mobile-Device-Iphone-X-2--Streamline-Ultimate"
              height={24}
              width={24}
            >
              <desc>Mobile</desc>
              <g id="Phone-Mobile-Device-Iphone-X-2--Streamline-Ultimate.svg">
                <g>
                  <path
                    d="M8.5 3.52A1.5 1.5 0 1 0 10 5a1.5 1.5 0 0 0 -1.5 -1.48Z"
                    fill="#FFFFFF"
                    strokeWidth={1}
                  />
                  <path
                    d="M12.5 5.52A1.5 1.5 0 1 0 14 7a1.5 1.5 0 0 0 -1.5 -1.48Z"
                    fill="#FFFFFF"
                    strokeWidth={1}
                  />
                  <path
                    d="M8.5 7.52A1.5 1.5 0 1 0 10 9a1.5 1.5 0 0 0 -1.5 -1.48Z"
                    fill="#FFFFFF"
                    strokeWidth={1}
                  />
                </g>
                <path
                  d="M17.54 0H6.46a3 3 0 0 0 -3 3v18a3 3 0 0 0 3 3h11.08a3 3 0 0 0 3 -3V3a3 3 0 0 0 -3 -3Zm1 21a1 1 0 0 1 -1 1H6.46a1 1 0 0 1 -1 -1V3a1 1 0 0 1 1 -1h11.08a1 1 0 0 1 1 1Z"
                  fill="#FFFFFF"
                  strokeWidth={1}
                />
              </g>
            </svg>
          </button>
        </Link>
        <Link to="/category/laptop">
          <button
            className={`btn m-0 px-0 w-[60px] ${
              isActive("/category/laptop") ? "bg-blue-400" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="Laptop--Streamline-Ultimate"
              height={24}
              width={24}
            >
              <desc>Laptop</desc>
              <path
                d="m23.3 20.69 -2.11 -6.83a1.34 1.34 0 0 0 -0.34 -0.56 2.62 2.62 0 0 0 0.65 -1.72V2.92A2.68 2.68 0 0 0 18.83 0.25H5.16A2.67 2.67 0 0 0 2.5 2.92v8.66a2.66 2.66 0 0 0 0.64 1.72 1.46 1.46 0 0 0 -0.34 0.56L0.73 20.61a2.17 2.17 0 0 0 1.94 3.14h18.66a2.15 2.15 0 0 0 1.84 -1 2.11 2.11 0 0 0 0.13 -2.06Zm-7.8 0.46a0.49 0.49 0 0 1 -0.4 0.21H8.9a0.51 0.51 0 0 1 -0.41 -0.21 0.52 0.52 0 0 1 -0.07 -0.45L9 18.9a0.5 0.5 0 0 1 0.48 -0.35h5a0.5 0.5 0 0 1 0.47 0.35l0.6 1.8a0.49 0.49 0 0 1 -0.05 0.45ZM4.5 2.92a0.67 0.67 0 0 1 0.66 -0.67h13.67a0.67 0.67 0 0 1 0.67 0.67v8.66a0.67 0.67 0 0 1 -0.67 0.67H5.16a0.67 0.67 0 0 1 -0.66 -0.67Z"
                fill="#FFFFFF"
                strokeWidth={1}
              />
            </svg>
          </button>
        </Link>
        <Link to="/category/gaming">
          <button
            className={`btn m-0 px-0 w-[60px] ${
              isActive("/category/gaming") ? "bg-blue-400" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Controller-1--Streamline-Core-Remix"
              height={24}
              width={24}
            >
              <desc>Gaming</desc>
              <g id="Free Remix/Computer Devices/controller-1--remote-quadcopter-drones-flying-drone-control-controller-technology-fly">
                <path
                  id="Union"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  d="M1.7099 5.04533c0.12792 -1.20438 1.15538 -2.12712 2.39047 -2.12712h5.79948c1.23505 0 2.26255 0.92274 2.39045 2.12712l0.4506 4.24222c0.1012 0.95265 -0.6536 1.79415 -1.6372 1.79415 -0.6542 0 -1.24292 -0.3817 -1.50549 -0.9675l-0.40064 -0.89392c-0.10073 -0.22474 -0.32406 -0.36937 -0.57034 -0.36937H5.37299c-0.24628 0 -0.46961 0.14463 -0.57033 0.36937l-0.40065 0.89392c-0.26257 0.5858 -0.85133 0.9675 -1.50547 0.9675 -0.98357 0 -1.7384 -0.8415 -1.63722 -1.79415l0.45058 -4.24222Zm2.39047 -3.37712c-1.86486 0 -3.437046 1.39566 -3.633478 3.24509L0.0163159 9.15553C-0.164666 10.8595 1.1834 12.3317 2.89654 12.3317c1.14161 0 2.18004 -0.6663 2.64614 -1.7063l0.23509 -0.5245h2.44468l0.23509 0.5245c0.46611 1.04 1.50453 1.7063 2.64616 1.7063 1.7131 0 3.0612 -1.4722 2.8802 -3.17617l-0.4506 -4.24222c-0.1964 -1.84944 -1.7686 -3.2451 -3.63345 -3.2451H4.10037Zm0.30013 2.60108c0.34518 0 0.625 0.27982 0.625 0.625v0.53051h0.53027c0.34518 0 0.625 0.27983 0.625 0.625 0 0.34518 -0.27982 0.625 -0.625 0.625H5.0255v0.53038c0 0.34518 -0.27982 0.625 -0.625 0.625s-0.625 -0.27982 -0.625 -0.625V6.6748h-0.53062c-0.34518 0 -0.625 -0.27982 -0.625 -0.625 0 -0.34517 0.27982 -0.625 0.625 -0.625h0.53062v-0.53051c0 -0.34518 0.27982 -0.625 0.625 -0.625Zm5.19336 0.87259c0 0.48192 0.39068 0.8726 0.87264 0.8726 0.4819 0 0.8726 -0.39068 0.8726 -0.8726s-0.3907 -0.87259 -0.8726 -0.87259c-0.48196 0 -0.87264 0.39067 -0.87264 0.87259ZM8.10877 6.8981c-0.00022 -0.00685 -0.00034 -0.01372 -0.00034 -0.02062 0 -0.48192 0.39068 -0.8726 0.8726 -0.8726 0.47506 0 0.86145 0.37963 0.87236 0.85207 0.00022 0.00681 0.00033 0.01365 0.00033 0.02051 0 0.48192 -0.39067 0.8726 -0.8726 0.8726 -0.47502 0 -0.86139 -0.37958 -0.87235 -0.85196Z"
                  clipRule="evenodd"
                  strokeWidth={1}
                />
              </g>
            </svg>
          </button>
        </Link>
        <Link to="/deals">
          <button
            className={`btn m-0 px-0 w-[60px] ${
              isActive("/deals") ? "bg-blue-400" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="Tag-Dollar--Streamline-Ultimate"
              height={22}
              width={22}
            >
              <desc>Deals</desc>
              <path
                d="M22.5 0H14a2.89 2.89 0 0 0 -2.06 0.85L0.5 12.29a1.71 1.71 0 0 0 0 2.42l8.79 8.79a1.71 1.71 0 0 0 2.42 0l11.44 -11.44A2.89 2.89 0 0 0 24 10V1.5A1.5 1.5 0 0 0 22.5 0Zm-8.31 10.71c0.56 2.09 1.09 4.07 0 5.2a2.83 2.83 0 0 1 -4.06 0 0.24 0.24 0 0 0 -0.35 0l-0.78 0.78a1 1 0 0 1 -0.71 0.29 1 1 0 0 1 -0.71 -1.7l0.79 -0.79a0.24 0.24 0 0 0 0 -0.35L7 12.79a1 1 0 0 1 1.41 -1.41l3.12 3.12a0.86 0.86 0 0 0 1.24 0c0.32 -0.32 -0.24 -2.39 -0.47 -3.27 -0.56 -2.09 -1.09 -4.06 0 -5.19a2.72 2.72 0 0 1 4.07 0 0.24 0.24 0 0 0 0.35 0l0.78 -0.78a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.41l-0.78 0.78a0.24 0.24 0 0 0 0 0.36l1.33 1.34a1 1 0 0 1 0 1.41 1 1 0 0 1 -1.41 0L15 7.45a0.76 0.76 0 0 0 -1.24 0c-0.36 0.32 0.24 2.38 0.43 3.26Z"
                fill="#FFFFFF"
                strokeWidth={1}
              />
            </svg>
          </button>
        </Link>
        <Link to="/products">
          <button
            className={`btn m-0 px-0 w-[60px] ${
              isActive("/products") ? "bg-blue-400" : ""
            }`}
          >
            All
          </button>
        </Link>
      </div>

      {/* Lg screens */}
      <div className="hidden lg:flex flex-wrap w-full lg:justify-evenly items-center">
        <Link to="/category/appliances">
          <button
            className={`btn m-0 px-0 w-[100px] ${
              isActive("/category/appliances") ? "bg-blue-400" : ""
            }`}
          >
            Appliances
          </button>
        </Link>
        <Link to="/category/tv">
          <button
            className={`btn m-0 px-0 w-[100px] ${
              isActive("/category/tv") ? "bg-blue-400" : ""
            }`}
          >
            TV
          </button>
        </Link>
        <Link to="/category/audio">
          <button
            className={`btn m-0 px-0 w-[100px] ${
              isActive("/category/audio") ? "bg-blue-400" : ""
            }`}
          >
            Audio
          </button>
        </Link>
        <Link to="/category/mobile">
          <button
            className={`btn m-0 px-0 w-[100px] ${
              isActive("/category/mobile") ? "bg-blue-400" : ""
            }`}
          >
            Mobile
          </button>
        </Link>
        <Link to="/category/laptop">
          <button
            className={`btn m-0 px-0 w-[100px] ${
              isActive("/category/laptop") ? "bg-blue-400" : ""
            }`}
          >
            Laptop
          </button>
        </Link>
        <Link to="/category/gaming">
          <button
            className={`btn m-0 px-0 w-[100px] ${
              isActive("/category/gaming") ? "bg-blue-400" : ""
            }`}
          >
            Gaming
          </button>
        </Link>
        <Link to="/deals">
          <button
            className={`btn m-0 px-0 w-[100px] ${
              isActive("/deals") ? "bg-blue-400" : ""
            }`}
          >
            Our deals
          </button>
        </Link>
        <Link to="/products">
          <button
            className={`btn m-0 px-0 w-[100px] ${
              isActive("/products") ? "bg-blue-400" : ""
            }`}
          >
            All products
          </button>
        </Link>
      </div>
    </>
  );
};

export default CategoryList;
