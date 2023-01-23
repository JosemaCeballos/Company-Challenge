import React, { useState } from "react";

const UploadImages = ({ catchImage }) => {
  const [loading, setLoading] = useState(false);

  const upImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "chillydevs");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dy95d00op/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    catchImage(file.secure_url);
    setLoading(false);
  };

  return (
    <>
      <label>Image Upload:</label>
      <input
        type="file"
        name="image"
        placeholder="Upload your image here"
        onChange={upImage}
      />
    </>
  );
};

export default UploadImages;
