import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BlankPage = () => {
  const location = useLocation();
  const [dimension, setDimension] = useState();
  const [creativeLink, setCreativeLink] = useState(
    "https://viralads.github.io/"
  );

  useEffect(() => {
    const arr = location.pathname.split("/");
    let link = creativeLink + arr.at(-2);
    setCreativeLink(link);
    setDimension(arr.at(-4));
  }, [location, creativeLink]);

  
  return (
    <div className={`_${dimension}frame`}>
      <iframe src={link} title="Amd_merc_q2_2021"></iframe>
    </div>
  );
};

export default BlankPage;
