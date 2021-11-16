import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BlankPage = () => {
  const location = useLocation();
  const [dimension, setDimension] = useState();
  const [creativeLink, setCreativeLink] = useState();

  useEffect(() => {
    const arr = location.pathname.split("/");
    setCreativeLink("https://viralads.github.io/" + arr.at(-2));
    setDimension(arr.at(-4));
  }, [location]);

  console.log(creativeLink);
  return (
    <div className={`_${dimension}frame`}>
      <iframe src={creativeLink} title="Amd_merc_q2_2021"></iframe>
    </div>
  );
};

export default BlankPage;
