import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { linkRef } from './firebase';
import { query, where, getDocs, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';

const Visit = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const check = async () => {
            const firestoreQuery = query(linkRef, where("token", "==", id));
            const querySnapshot = await getDocs(firestoreQuery);

            if (!querySnapshot.empty) {
                // Loop through the documents in the query snapshot
                querySnapshot.forEach((doc) => {
                    // Access the actual data using doc.data()
                    const data = doc.data();
                    let link = data.link;
                    window.location.href = `${link}`;
                    console.log(link);
                    console.log("found");
                    // Now you can use `data` to access the document fields
                });
            } else {
                navigate('/notfound');
            }
        };

        check();
    }, []);

    return (
        <div>
            Redirecting...
        </div>
    )
}

export default Visit
