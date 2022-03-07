const Zandu = () => {
  return (
    <div className="_320x480frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/zandu320x480/index.html"
        title="zandu Advertisement"
      ></iframe>
    </div>
  );
};

export const ZanduParallax = () => {
  return (
    <div className="_320x480frame">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9602911244724790"
        crossorigin="anonymous"
      ></script>
      <ins
        class="adsbygoogle"
        style={{ display: "inline-block", width: "360px", height: "640px" }}
        data-ad-client="ca-pub-9602911244724790"
        data-ad-slot="2877036084"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
};

export default Zandu;
