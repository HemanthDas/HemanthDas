import jdata from "../assets/journeyData.json";
import Set from "../components/set";
const Journey = () => {
  const data = JSON.parse(JSON.stringify(jdata));

  return (
    <div className="journey">
      <div className="up-spike">
        {data.map(
          (item) =>
            item.id < 5 && (
              <Set key={item.id} tag={item.id} txt={item.txt} type={"up"} title={item.year}/>
            )
        )}
      </div>
      <div className="full-line"></div>
      <div className="down-spike">
        {data.map(
          (item) =>
            item.id > 4 && <Set key={item.id} tag={item.id} txt={item.txt} title={item.year}/>
        )}
      </div>
    </div>
  );
};

export default Journey;
