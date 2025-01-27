import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/Form";
import { Input } from "../components/ui/Input";
import { Select,SelectContent,SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import axios from "axios";

// Define the validation schema
const formSchema = z.object({
  secretCode:z.string().min(4,{ message: "Secret Code is required." }),
  link: z.string().url({ message: "Must be a valid URL." }),
  typeOfMaterial: z.enum(["questionpaper", "notes", "referencebooks"]),
  Class: z.string().min(1, { message: "Class is required." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  chapter: z.string().min(1, { message: "Chapter is required." }),
});

export function LinkSubmissionPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      secretCode:"",
      link: "",
      typeOfMaterial: "questionpaper",
      Class: "",
      subject: "",
      chapter: "",
    },
  });
  const [loading, setLoading] = useState(false)

  // Submit handler
  async function onSubmit(values) {
    try {
        setLoading(true)
        
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/post-links`,
          values
        );
    
        // If response is successful, show a success toast with the backend message
        toast.success(response.data.message || 'Link submitted successfully!');

      } catch (error) {
        console.error("Error saving data:", error);
    
        // Display the backend error message if available, otherwise a generic error message
        const errorMessage = error.response?.data?.message || 'Something went wrong!';
        toast.error(errorMessage);
      }
      finally{
        setLoading(false)
      }
  }
  const classes = ["9th", "10th", "11th Science","11th Commerce", "12th Science","12th Commerce"];


  return (
    <div className="bg-gray-50 p-4 rounded-lg">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="secretCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secret Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Secret Code" {...field} />
              </FormControl>
              <FormDescription>
                Provide the Secret Code
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormDescription>
                Provide the link to the material.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="typeOfMaterial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Material</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type of material" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="questionpaper">Question Paper</SelectItem>
                  <SelectItem value="notes">Notes</SelectItem>
                  <SelectItem value="referencebooks">Reference Books</SelectItem>
                </SelectContent>
              </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Class"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {classes.map((classItem, index) => (
                    <SelectItem key={index} value={classItem}>
                    {classItem}
                    </SelectItem>
                ))}
                </SelectContent>
              </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Enter subject (e.g., Mathematics)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="chapter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chapter</FormLabel>
              <FormControl>
                <Input placeholder="Enter chapter name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" >{loading ? "Loading..." : "Submit"}</Button>
      </form>
    </Form>
    <ToastContainer />
    </div>
  );
}
