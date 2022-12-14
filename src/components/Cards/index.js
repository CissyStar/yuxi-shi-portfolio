const PhotoSlides = (props) => {
    return (
      <div className="card" style={{ backgroundImage: `url(${props.source})` }}>
        <div className="content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button onClick={()=> window.open(props.buttonTo)}>View More</button>
        </div>
      </div>
    );
  };
  
  export default PhotoSlides;