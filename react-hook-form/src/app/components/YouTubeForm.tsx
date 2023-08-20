"use client"
import React from "react";
import {useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'


let renderCount = 0;

type FormValues = {
    username: string
    email:string
    channel: string
}

export const YouTubeForm= () => {
    const form = useForm<FormValues>();
    const {register,control, handleSubmit, formState} = form;

    const {errors} = formState;

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted',data)
    }
   // const { name,ref,onChange, onBlur } = register("username")
   renderCount++
    return (
        <div className="flex items-center justify-center py-20">
            <h1>YouTube Form {renderCount / 2} </h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* <label htmlFor="username">Username</label><br></br>
                <input type='text'className="border-2 border-black" id="username" name={name} ref={ref} onClick={onChange} onBlur={onBlur} /><br></br> */}
                <label htmlFor="username">Username</label><br></br>
                <input type='text'className="border-2 border-black" id="username" {...register("username", { required: "Username is required",})} /><br></br> 
                 <p>{errors.username?.message}</p>
                <label htmlFor="email">Email</label><br></br>
                <input type='email' className="border-2 border-black" id="email" {...register("email", {pattern: {
                    value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:"Invalid email format",
                }})}/><br></br>

                <label htmlFor="channel">Channel</label><br></br>
                <input type='text' className="border-2 border-black" id="channel" {...register("channel")} /><br></br>

                <button>Submit</button>
            </form>
            <DevTool control={control}/>
           
        </div>
    )
}