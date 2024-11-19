import "./map.css";

const Map = () => {
  return (
    <section id="map">
      <iframe
        className="iframe-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14485.530602219978!2d46.6660411!3d24.8165845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efcd040ef459b%3A0xfc72438b83cec0f1!2zSElHSExJTkUg2YfYp9mKINmE2KfZitmGINin2YTZitin2LPZhdmK2YY!5e0!3m2!1sen!2seg!4v1731253998376!5m2!1sen!2seg"
        width="100%"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Map;
