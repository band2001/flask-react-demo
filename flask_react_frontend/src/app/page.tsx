"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

export default function Home() {
  
  const api:string = 'http://localhost:8080/'

  const onSubmit = async(formData: any): Promise<void> => {
    const body = {
      "name": formData.get("name"),
      "addr": formData.get("addr"),
      "city": formData.get("city"),
      "pin": formData.get("pin")
    }
    try {
      await fetch(api + 'add_student', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
    } catch(e) {
      console.log(e)
    }
    console.log("Success")
  }
  
  return(
    <div className={styles.main}>
      <div style={{alignContent: 'center',}}>
        <h1>Testing React & Flask API</h1>
        <p>Interact with a Python/Flask backend using the React frontend</p>
      </div>
      <div>
        <form action={onSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Address:
            <input type="text" name="addr" />
          </label>
          <label>
            City:
            <input type="text" name="city" />
          </label>
          <label>
            Pin:
            <input type="text" name="pin" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
