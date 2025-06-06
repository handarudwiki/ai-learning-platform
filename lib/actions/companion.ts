"use server";
import { CreateCompanion } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formData:CreateCompanion)=>{
    const {userId:author} = await auth()

    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from("companions")
        .insert({...formData, author })
        .select()

    if (error || !data){
        throw new Error(error?.message || "Failed to create companion");
    }

    return data[0];
}


export const createCompanyPermission = async ()=>{
    const {userId, has}= await auth()

    console.log("== createCompanyPermission ==")
    console.log(has({feature: "3_companions_limit"}))

    const supabase = createSupabaseClient();

    let limit = 0;

    if (has({plan: "pro_companion"})) {
        return true;
    }else if (has({feature: "3_companions_limit"})) {
        limit = 3;
    }else if (has({feature: "10_companion_limit"})) {
        limit = 10;
    }

    const { data, error } = await supabase
        .from("companions")
        .select("id", { count: "exact" })
        .eq("author", userId);

    if (error) {
        throw new Error(error.message || "Failed to count companions");
    }

    const companionCount = data?.length || 0;

    if (companionCount >= limit) {
        return false;
    } else {
        return true;
    }
}