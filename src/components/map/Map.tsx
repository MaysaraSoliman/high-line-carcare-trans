import "./map.css";

const Map = () => {
  return (
    <section id="map">
      <iframe
        className="iframe-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13820.41444054195!2d31.4744839!3d30.0051812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458231ca5ac1dd1%3A0x705661a73ed23b4f!2sDentolize%20Inc!5e0!3m2!1sen!2seg!4v1727361084598!5m2!1sen!2seg"
        width="100%"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Map;
