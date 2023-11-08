

const PostARent = () => {
    const submit = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const city = form.city.value;
        const region = form.region.value;
        const area = form.area.value;
        const rooms = form.rooms.value;
        const beds = form.beds.value;
        const bathroom = form.bathroom.value;
        const garage = form.garage.value;
        const floor = form.floor.value;
        const maxPeople = form.maxpepol.value;
        const description = form.description.value;
        const space = form.space.value
        console.log(title, price, city, region, area, rooms, beds, bathroom, garage, floor, description,space)

        const uploadHome = {
            title: title,
            price: price,
            city: city,
            region: region,
            area: area,
            rooms: rooms,
            beds: beds,
            bathroom: bathroom,
            garage: garage || 'not provided',
            floor: floor || 'not provided',
            maxPeople: maxPeople,
            description: description,
            space: space,
        }
        fetch("http://localhost:3000/host/postHouse", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(uploadHome)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className='w-full lg:w-5/6 mx-auto p-2 mt-10'>
            <section className='bg-white  rounded px-8 pt-6 pb-8 mb-4 lg:w-[550px] '>
                <div className='pb-5'>
                    <h1 className='text-indigo-500 font-semibold text-xl pb-2 lg:text-3xl  capitalize'> Rent House Add</h1>
                    <span className="w-14 h-1.5 bg-indigo-600 inline-block rounded-2xl mr-1.5"></span>
                    <span className="w-40 h-1.5 bg-indigo-600 inline-block rounded-2xl"></span>
                </div>
                <form onSubmit={submit}>
                    <div className='flex flex-col gap-3 ' >
                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>Title</label>
                                <input type="text" required name='title' placeholder="Title" className="input input-bordered bg-slate-100 input-info max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>Price</label>
                                <input type="number" required name='price' placeholder="Price" className="input input-bordered bg-slate-100 input-info max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>

                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>City</label>
                                <input type="text" required name='city' placeholder="City" className="input input-bordered bg-slate-100 input-info max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>Region</label>
                                <input type="text" required name='region' placeholder="Region" className="input input-bordered bg-slate-100 input-info max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Area </label>
                            <input type="text" name='area' placeholder="Area" className="input input-bordered bg-slate-100 input-info w-full lg:w-[490px] md:w-[490px] block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>

                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>Total Rooms</label>
                                <input type="number" required name='rooms' placeholder="Rooms" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>Beds Room</label>
                                <input type="number" required name='beds' placeholder="Beds" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>
                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>Bathroom</label>
                                <input type="number" required name='bathroom' placeholder="Bathroom" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>Garage</label>
                                <input type="text" name='garage' placeholder="Garage" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>

                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>Which Floor ?</label>
                                <input type="number" name='floor' placeholder="Floor" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label className='font-semibold text-xl'>Max People</label>
                                <input type="number" name='maxpepol' placeholder="MaxPeople" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Space ( sqft )</label>
                            <input type="number" name='space' placeholder="ex 2000 sqft" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Description</label>
                            <textarea name='description' required className="textarea textarea-info input input-bordered bg-slate-100 input-info w-full lg:w-[490px] h-20 block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" placeholder="Enter Description"></textarea>
                            <p className='text-sm text-red-500'></p>
                        </fieldset>

                        <input type='submit' className="btn  bg-indigo-600 text-white hover:btn glass" value="Submit" />
                    </div>

                </form>
            </section>
        </div>
    );
};

export default PostARent;