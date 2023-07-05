import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNav]);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 400) {
      setShowNav(true);
    }
    if (position < 401) {
      setShowNav(false);
    }
  };

  return (
    <nav
      className={
        showNav ? "bg-neutral-900 fixed w-full z-20 top-0 left-0" : "hidden"
      }
    >
      <div class="w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src="../src/assets/Logo.png"
          class="h-8 mr-3 cursor-pointer"
          alt="Thushi Logo"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <div class="flex md:order-2 ">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            type="button"
            class="text-white bg-teal-400 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-400 "
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
