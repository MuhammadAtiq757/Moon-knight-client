import { useForm } from "react-hook-form";

const AddBlog = () =>  {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

      const imageStorageKey = '809333cd2653b2fe985b53469c60e38c' 

      const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
          if(result.success){
            const img = result.data.url;
            const blog = {  
                name: data.name,
                description: data.description,
                img: img
            }
            // send to your database 
            fetch('', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(blog)
            })
            .then(res =>res.json())
            .then(inserted =>{
              if(inserted.insertedId){
                 alert('Blog added successfully')
                  reset();
              }
              else{
                alert.error('Failed to add the blog');
              }
          })
    
      }
        })
      };
    return (
        <div className="pl-48">
        <h2 className="text-xl text-blue-600 py-4 max-w-2xl capitalize">create a new BLog</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-2xl">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter your Name"
              className="input input-bordered w-full max-w-2xl"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-2xl">
            <textarea
               id="textarea"
               name="textarea"
               rows="4" 
              placeholder="Type your text here"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              {...register("description", {
                required: {
                  value: true,
                  message: "description is Required",
                },
              })}
            ></textarea>
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="file" className="file-input w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn btn-primary w-full max-w-2xl text-white text-xl mb-4"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    );
};

export default AddBlog;