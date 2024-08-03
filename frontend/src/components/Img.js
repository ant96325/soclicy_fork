const Img = (props) => {
  return (
    <span style={{
      boxSizing: "border-box",
      display: "inline-block",
      overflow: "hidden",
      width: "initial",
      height: "initial",
      background: "none",
      opacity: "1",
      border: "0px",
      margin: "0px",
      padding: "0px",
      position: "relative",
      maxWidth: "100%",
    }}>
      <span style={{
        boxSizing: "border-box",
        display: "block",
        width: "initial",
        height: "initial",
        background: "none",
        opacity: "1",
        border: "0px",
        margin: "0px",
        padding: "0px",
        maxWidth: "100%",
      }}>
        <img style={{
          position: "absolute",
          inset: "0px",
          boxSizing: "border-box",
          padding: "0px",
          border: "none",
          margin: "0px",
          display: "block",
          width: "100%",
          height: "100%",
          minWidth: "100%",
          minHeight: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          visibility: "visible",
        }}
          src={props.src} alt={props.alt}></img>
      </span>
    </span >
  );
}

export default Img;