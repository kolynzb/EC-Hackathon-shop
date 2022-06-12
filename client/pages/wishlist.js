import Socialsbar from "../components/Socialsbar";

const wishlist = () => {
  return (
    <div className="container">
      <h1 className="pgtitle">Wishlist</h1>
      {/* <div className="">
        <p className="subtitle">My Wishlist</p>
      </div> */}
      <div className="line"></div>
      <p className="empty">No products added to Wishlist</p>
      <div className="line"></div>
      <p>Share on:</p>
      <Socialsbar />
      <style jsx>{`
        .container {
          margin-top: 100px;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .line {
          background-color: #828282;
          height: 1px;
          width: 80%;
        }
        .empty {
          margin: 40px 0;
          color: black;
        }
        .subtitle {
          color: #8d8d8d;
          justify-self: flex-start;
        }
        .pgtitle {
          color: #2d2d2d;
          font-size: 40px;
        }
      `}</style>
    </div>
  );
};

export default wishlist;
