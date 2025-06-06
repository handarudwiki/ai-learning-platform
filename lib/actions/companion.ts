"use server";
import { CreateCompanion, GetAllCompanions } from "@/types";
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

export const getAllCompanions = async ({limit=10, page=1, subject, topic}:GetAllCompanions) => {
    const supabase = createSupabaseClient();

    let query = supabase
        .from("companions").select()


    if (subject && topic) {
        query = query.ilike("subject", `%${subject}%`)
            .or(`topic.ilike.%${topic}%,subject.ilike.%${topic}%`);
    }else if (subject) {
        query = query.ilike("subject", `%${subject}%`);
    }else if (topic) {
        query = query.or(`topic.ilike.%${topic}%,subject.ilike.%${topic}%`);
    }

    query = query.range((page - 1)*limit, page * limit - 1)

    const { data, error } = await query;
    if (error) {
        throw new Error(error.message || "Failed to fetch companions");
    }

    return data;
}


