// import package
import { useState } from "react";

// import component

// import assets
import cssModules from "../../assets/css/ProductAdd.module.css";
import clip from "../../assets/img/clip.svg";

function ProductAdd() {
  const pic = () => {
    document.getElementById("pic").click();
  };

  // store data
  const [form, setForm] = useState({
    title: "",
    price: "",
    thumbnail: "",
  });

  // set preview image
  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  return (
    <>
      <div className={cssModules.bodyProduct}>
        <div className={cssModules.formContainer}>
          <h1>Add Product</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Product Name"
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
            />
            <input
              type="file"
              id="pic"
              name="thumbnail"
              placeholder="Photo Product"
              hidden
              onChange={handleChange}
            />
            <div className={cssModules.addPic} onClick={pic}>
              <p>Product Photo</p>
              <img src={clip} alt="Clip" />
            </div>
            <br />
            <button type="submit">Add Product</button>
          </form>
        </div>
        <div className={cssModules.imgPreview}>
          {preview && (
            <img
              src={preview}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50%",
              }}
              alt="preview"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductAdd;
