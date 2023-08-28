import React from 'react'
import "./index.css"
import { useForm } from "react-hook-form";
import { linkRef } from './firebase';
import { addDoc } from 'firebase/firestore'; // Make sure to import query, where, getDocs, and addDoc
import {toast} from "react-toastify";
const Main = () => {
    const {
        register,
        handleSubmit,
        
    } = useForm();
    const onSubmit = async (data) => {
        const obj = {};
        obj.link = data.link;
        let token = generateTokenId();
        obj.token = token;
       
        await addDoc(linkRef, obj);
        let copy = `${window.location.origin}/visit/${token}`;
    
        // Copy the link to the clipboard
        try {
            await navigator.clipboard.writeText(copy);
            toast.success("Created and link copied to clipboard");
        } catch (error) {
            toast.error("Created, but failed to copy link to clipboard");
        }
    };
    
    function generateTokenId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let tokenId = '';
    
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            tokenId += characters.charAt(randomIndex);
        }
    
        return tokenId;
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-semibold mb-4">Link Shortener</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <input
            type="text"
            {...register("link", { required: true,minLength:3})}
            placeholder="Enter your link"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <button
          
            className="w-full mt-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            type="submit"
        >
            Shorten
        </button>
       
    </div>

    </form>
    
</div>
    
       

  )
}

export default Main
