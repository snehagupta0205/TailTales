// import React, { useState, useEffect } from "react"
// import { Link, useParams } from "react-router-dom"

// export default function SingleDog() {
//   const [dog, setDog] = useState([])
//   const { name } = useParams()

//   useEffect(() => {
//     const fetchSingleDogData = async () => {
//       try {
//         const res = await fetch(
//           `https://api.thedogapi.com/v1/breeds/search?q=${name}`
//         )
//         const data = await res.json()
//         setDog(data)
//         console.log(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }

//     fetchSingleDogData()
//   }, [name])

//   return (
//     <>
//       <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
//         {dog.map((item) => (
//           <div
//             key={item.id}
//             className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center"
//           >
//             <article>
//               <img
//                 src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
//                 alt={item.name}
//               />
//             </article>
//             <article>
//               <h1 className="text-3xl font-bold text-white border-e-black mb-8 lg:text-5xl">
//                 {item.name}
//               </h1>
//               {item.description && (
//                 <p className="text-slate-400 mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed">
//                   {item.description}
//                 </p>
//               )}

//               <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
//                 <li>
//                   <span className="font-bold text-slate-200">Bred For:</span>{" "}
//                   {item.bred_for}
//                 </li>
//                 <li>
//                   <span className="font-bold text-slate-200">Height:</span>{" "}
//                   {item.height.metric} cm
//                 </li>
//                 <li>
//                   <span className="font-bold text-slate-200">Weight:</span>{" "}
//                   {item.weight.metric} kgs
//                 </li>
//                 <li>
//                   <span className="font-bold text-slate-200">Breed Group:</span>{" "}
//                   {item.breed_group}
//                 </li>
//                 <li>
//                   <span className="font-bold text-slate-200">Lifespan:</span>{" "}
//                   {item.life_span}
//                 </li>
//                 <li>
//                   <span className="font-bold text-slate-200">Temperament:</span>{" "}
//                   {item.temperament}
//                 </li>
//               </ul>

//               <Link
//                 to="/"
//                 className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200"
//               >
//                 &larr; Back
//               </Link>
//             </article>
//           </div>
//         ))}
//       </section>
//     </>
//   )
// }
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleDog() {
  const [dog, setDog] = useState(null); // Changed to null for initial state
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const response = await fetch(`http://localhost:5002/api/dogs/search?name=${name}`);
        console.log("ug8g");
        if (!response.ok) {
          throw new Error("Failed to fetch dog");
        }
        const data = await response.json();
        setDog(data[0]); // Assuming the first result is the correct dog breed
      } catch (error) {
        console.error("Error fetching dog:", error);
      }
    };

    fetchSingleDogData();
  }, [name]);

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center">
        <article>
          <img
            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
            alt={dog.name}
          />
        </article>
        <article>
          <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">
            {dog.name}
          </h1>
          {dog.description && (
            <p className="text-slate-800 mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed">
              {dog.description}
            </p>
          )}

          <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
            <li>
              <span className="font-bold text-slate-200">Bred For:</span>{" "}
              {dog.bred_for}
            </li>
            <li>
              <span className="font-bold text-slate-200">Height:</span>{" "}
              {dog.height.metric} cm
            </li>
            <li>
              <span className="font-bold text-slate-200">Weight:</span>{" "}
              {dog.weight.metric} kgs
            </li>
            <li>
              <span className="font-bold text-slate-200">Breed Group:</span>{" "}
              {dog.breed_group}
            </li>
            <li>
              <span className="font-bold text-slate-200">Lifespan:</span>{" "}
              {dog.life_span}
            </li>
            <li>
              <span className="font-bold text-slate-200">Temperament:</span>{" "}
              {dog.temperament}
            </li>
          </ul>

          <Link
            to="/"
            className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200"
          >
            &larr; Back
          </Link>
        </article>
      </div>
    </section>
  );
}
