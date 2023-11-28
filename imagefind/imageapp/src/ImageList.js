import ImageItem from './ImageItem'

function ImageList({ imagesPlaceholder }) {
  console.log(imagesPlaceholder );
  return (
    
    <div className="imgItems">
      
      {imagesPlaceholder.map((objeler, index) => {
        const data = objeler.urls.small;
        return <ImageItem image={data} key={index} />;
      })}
    </div>
   
  );
}

export default ImageList;