import React from "react";
import { db, auth } from "./firebase";

const url = "https://bau-bau-default-rtdb.europe-west1.firebasedatabase.app/meals"


// export const getAll = () => {

//     return fetch(`${url}.json`)
//         .then(res => res.json())
//         .catch(error => console.log(error))
// };

export const getAll = () => {

        db.collection('meals')
        .get()
        .then((res) => {
            let meals = []
            res.forEach((doc) => {
                let data = doc.data()
                meals.push(data)
            })
        })
}


