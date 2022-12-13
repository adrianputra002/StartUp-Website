import React from "react";

function Contact() {
  return (
    <div className="flex min-w-cust justify-center  px-6 sm:px-24 items-center about-main">
      <div className="sm:mx-6 sm:p-10 ">
        <div className="title  ">
          <div className="lines count">
            <span>03</span>
          </div>
          <h1 className="font-semibold text-2xl">Contact Us</h1>
        </div>
        <div className="lines sm:mb-5">
          <span>"</span>
        </div>
        <div className="location-container  px-6  py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-7 ">
            <div className="location-kiri my-12 sm:mb-0 mb-12 text-center sm:text-left   ">
              <p className="location-intro mb-5 text-xl font-bold">Jakarta</p>
              <p className="location-desc leading-relaxed mb-4 opacity-60">
                Jakarta, Indonesia's massive capital, sits on the northwest
                coast of the island of Java. A historic mix of cultures –
                Javanese, Malay, Chinese, Arab, Indian and European – has
                influenced its architecture, language and cuisine. The old town,
                Kota Tua, is home to Dutch colonial buildings, Glodok (Jakarta’s
                Chinatown) and the old port of Sunda Kelapa, where traditional
                wooden schooners dock.
              </p>
              <a
                href="tel:+85351748536"
                target="_blank"
                className=" btn-primary"
              > 
             Call Us
              </a>
            </div>
            <div className="location-kanan">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0" width={"600"} height="400"
                    src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sibolga lotus&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                  ></iframe>
                  <a href="https://piratebay-proxys.com/">Pirate bay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
