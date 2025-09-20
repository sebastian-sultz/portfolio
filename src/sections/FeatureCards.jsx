import { abilities } from "../constants";
import SpotlightCard from "../components/SpotlightCard";


const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
        >
          <SpotlightCard className="" spotlightColor="rgba(212, 212, 212, 0.2)">

            <div className="size-14 flex items-center just
          ify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </SpotlightCard>
        </div>
      ))}

    </div>


  </div>


);

export default FeatureCards;