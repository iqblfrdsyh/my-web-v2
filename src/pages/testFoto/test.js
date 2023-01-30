import React, { useState } from "react";

const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const handleChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };
    console.log('ini linknya' + image);
    return (
        <div>
            <input type="file" onChange={handleChange} />
            {image && <img src={image} alt="Uploaded Image" />}
        </div>
    );
};

export default ImageUpload;