import React from 'react'
import fruits from "../assets/images/fruits.svg";
import grain from "../assets/images/grain.svg";
import others from "../assets/images/others.svg";
import tubers from "../assets/images/tubers.svg";
import vegetables from "../assets/images/vegetables.svg";


const Category = () => {

    const data = [
        {
            id:1,
            img: grain,
            name: "Grains & Rice",
        },
        {
            id:2,
            img: fruits,
            name: "Fresh Fruits",
        },
        {
            id:3,
            img: tubers,
            name: "Root Tubers",
        },
        {
            id:4,
            img:vegetables,
            name:"Vegetables",
        },
        {
            id:5,
            img:others,
            name:"Others"
        },
    ]

  return (
    <div className='m-5 text-center'>
        <section>
            <h3 className='fw-bold'>Shop by Category</h3>
            <p className='' style={{color:"gray"}}>Discover fresh, quality food items across categories. 
                Join bulk purchases and enjoy wholesale prices.
            </p>
            <div className='row justify-content-center g-4 mt-4'>
                {data.map(item=>(
                    <div key={item.id} className=' col-6 col-lg d-flex justify-content-center'>
                        <div className='p-3 rounded-4 shadow-sm d-flex  flex-column align-items-center p-3 shadow-sm'>
                            <img src={item.img} alt={item.name} className='img-fluid' style={{maxHeight: '70px', objectFit:'contain'}}/>
                            <p>{item.name}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Category