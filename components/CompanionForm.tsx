"use client";

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { subjects } from "@/constants";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    subject: z.string().min(1, "Subject is required"),
    topic: z.string().min(1, "Topic is required"),
    duration: z.coerce.number().min(1, "Duration must be at least 1 minute"),
    voice : z.string().min(1, "Voice is required"),
    style : z.string().min(1, "Style is required"),
})

const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",   
            topic: "",
            duration: 30,
            voice: "",
            style: "",
        },
    })

  return (
    <Form {...form} >
        <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-8">
            <FormField
            control={form.control}
             name="name"
            render={({field})=>(

                <FormItem>
                    <FormLabel>Companion Name</FormLabel>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Enter Companion Name"
                            {...field}
                            className="input"
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
             />
             <FormField
              control={form.control}
              name="subject"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                            <Select
                             value={field.value}
                             defaultValue={field.value}
                            >
                                <SelectTrigger className="input capitalize">
                                    <SelectValue placeholder="Select the subject"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {subjects.map((subject) => (
                                        <SelectItem key={subject} value={subject}>
                                            {subject}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
             />
             <FormField
                name="topic"
                control={form.control}
                render={({field})=>(
                    <FormItem>
                        <FormLabel>What Should the companion help with</FormLabel>
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Ex: Derivates & algebra"
                                {...field}
                                className="input"
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
             />
             <FormField
              control={form.control}
              name= "voice"
              render={({field})=>(
                <FormItem>
                    <FormLabel>Voice</FormLabel>
                    <FormControl>
                       <Select
                       value={field.value}
                       defaultValue={field.value}>
                        <SelectTrigger className="input capitalize">
                            <SelectValue placeholder="Select the voice"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                       </Select>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
              )}
             />
             <FormField
                name="style"
                control={form.control}
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Style</FormLabel>
                        <FormControl>
                            <Select
                             value={field.value}
                             defaultValue={field.value}
                            >
                                <SelectTrigger className="input capitalize">
                                    <SelectValue placeholder="Select the style"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="formal">Formal</SelectItem>
                                    <SelectItem value="casual">Casual</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
             />
             <FormField 
             name="duration"
             control={form.control}
             render={({field})=>(
                <FormItem>
                    <FormLabel>Estimating session duration in minutes</FormLabel>
                    <FormControl>
                        <Input
                            type="number"
                            placeholder="Enter duration in minutes"
                            {...field}
                            className="input"
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
             )}
             />
             <Button type="submit" className="w-full cursor-pointer" >Build Your Companion</Button>
        </form>
    </Form>
  )
}

export default CompanionForm