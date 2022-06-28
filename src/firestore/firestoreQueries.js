import { db } from "./firestore";

export const getCategories = async (callback) => {
    try {
       return await db.collection("Categories").onSnapshot(callback);
    } catch (error){
        return error
    }
}

export const getSizes = async (callback) => {
    try {
       return await db.collection("Sizes").onSnapshot(callback);
    } catch (error){
        return error
    }
}

export const getMenu = async (callback) => {
    try {
       return await db.collection("Menu").onSnapshot(callback);
    } catch (error){
        return error
    }
}

export const addMenu = async (data) => {
    try {
       return await db.collection('Menu').add(data);
    } catch (error){
        return error
    }
}


export const deleteMenu = async (id) => {
    try {
       return await db.collection('Menu').doc(id).delete()
    } catch (error){
        return error
    }
}



