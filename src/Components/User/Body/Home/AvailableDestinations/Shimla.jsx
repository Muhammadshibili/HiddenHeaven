import React from "react";
import "./Availabledestinations.css";
import image from "../../../../Images/shimla-destination.jpg";

const Shimla = () => {
  return (
    <div>
      <div id="shimla-all">
        <img className="shimla-img-destination " src={image} />
        <h3 className="shimla-img-title">Shimla</h3>
      </div>
      <div id="shimla-p">
        <p>
          Nestled within the heart of Himachal Pradesh, Shimla stands as a
          hidden gem, waiting to be discovered by avid travelers seeking the
          perfect blend of history, natural beauty, and mountain serenity. Far
          beyond its touristy façade lies a Shimla that whispers tales of
          colonial charm, lush landscapes, and secret nooks that unveil the true
          essence of this popular hill destination.
          <br />
          <br />
          As you ascend the winding roads that lead to Shimla, the air becomes
          crisper, and the panoramic views become increasingly enchanting.
          Beyond the bustling markets and well-trodden paths, Shimla reveals its
          hidden treasures, inviting you to explore its lesser-known corners.
          <br /> <br />
          Step into the heart of the town, where colonial architecture
          gracefully tells the story of a bygone era. The Gaiety Theatre,
          Viceregal Lodge, and Christ Church stand as silent witnesses to
          Shimla's rich history, offering a glimpse into the cultural tapestry
          that defines this hill retreat
          <br />
          <br /> Venture beyond the typical tourist spots, and you'll find quiet
          trails leading to scenic viewpoints and serene forests. Jakhoo Temple,
          perched atop the highest peak in Shimla, promises not only spiritual
          solace but also breathtaking vistas of the surrounding mountains.
          <br />
          <br /> Shimla's charm extends beyond the day into the enchanting
          nights. Mall Road, illuminated by the soft glow of streetlights,
          invites you to stroll and discover local shops and eateries tucked
          away in hidden corners, serving delectable Himachali cuisine.
          <br />
          <br /> Embrace the tranquility of Annandale, a lush meadow hidden
          amidst the hills, perfect for a leisurely picnic or a quiet escape.
          For the adventure seeker, Shimla offers opportunities for trekking to
          the nearby Shali Tibba, providing an adrenaline rush amid the serene
          mountain backdrop.
          <br />
          <br />
          <br />
        </p>
      </div>
      <div>
        <ul>
          <li>
            <button className="button-getmap">
              <a href="#">GET MAP</a>
            </button>
          </li>
          <li>
            <button className="button-home">
              <a href="#">HOME</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shimla;
