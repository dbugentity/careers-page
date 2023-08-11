// // @ts-nocheck
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./Timeline.css";

// const Timeline = () => {
//   useEffect(()=> {
//     timelineTwo
//     .from(e1Ref.current, {autoAlpha: 0, x: -100, duration: .5})
//     .from(e2Ref.current, {autoAlpha: 0, x: -100, duration: .5})
//     .from(e3Ref.current, {autoAlpha: 0, x: -100, duration: .5})
//     .to(e1Ref.current, {autoAlpha: 0, x: -100, duration: .5, delay:1})
//     .to(e2Ref.current, {autoAlpha: 0, x: -100, duration: .5})
//     .to(e3Ref.current, {autoAlpha: 0, x: -100, duration: .5})
//     .to(lineRef.current, {opacity: 0, duration:1})
//   }, []);

//   const timelineTwo = gsap.timelineTwo({
//     repeat: false,
//     defaults: { duration: 1, ease: "easeInOut"}
//   })
//   const e1Ref = useRef();
// const e2Ref = useRef();
// const e3Ref = useRef();
// const lineRef = useRef();

// const data = [
//   {id: 1, year: 2015, name: "fun year", ref: e1Ref  },
//   {id: 2, year: 2021, name: "fun year 2", ref: e2Ref},
//   {id: 3, year: 2018, name: "fun year 3", ref: e3Ref },
// ];

//   return (
//     <div className="mainBox">
//       <div className="wrapper">
//         {data.map(el=> {
//           return (
//             <div key={el.id} ref={el.ref}>
//               <h1>{el.year}</h1>
//               <p>{el.name}</p>
//             </div>
//           )})}
//       </div>
//       <div className="line" ref={lineRef}></div>
//     </div>
//   )
// };

// export default Timeline



