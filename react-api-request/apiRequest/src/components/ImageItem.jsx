function ImageItem({image}){

    return <div>
        <img className="imageList" src={image.urls.small} alt={image.alt_description} />
    </div>

}

export default ImageItem