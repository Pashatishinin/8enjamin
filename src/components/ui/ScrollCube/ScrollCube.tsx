const ScrollCube = () => {
  return (
    <div className="main-body">
      <div className="cube-container">
        <div className="cube">
          <div className="face front">
            <h4>SCROLL </h4>
          </div>
          <div className="face back">
            <h4> SCROLL</h4>
          </div>
          <div className="face left">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className="face right">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className="face top">
            <h4>DOWN</h4>
          </div>
          <div className="face bottom">
            <h4>DOWN</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCube;
