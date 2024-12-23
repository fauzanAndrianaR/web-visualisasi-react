
const LookerEmbed = () => {
  const iframeStyles = {
    width: "100%",
    aspectRatio: "4 / 3",
    border: "0",
  };

  return (
    <div style={{ width: "100%", aspectRatio: "4 / 3" , marginTop: "80px"}}>
      <iframe
        src="https://lookerstudio.google.com/embed/reporting/8971df84-61f1-4654-968d-5c013d13c763/page/p_4d0jtvnfmd"
        frameBorder="0"
        style={iframeStyles}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
};

export default LookerEmbed;
