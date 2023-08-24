"use client"
import React from "react";
import { useEffect } from "react";
import {useForm,useFieldArray} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'


let renderCount = 0;

type FormValues = {
    username: string;
    email:string;
    channel: string;
    social:{
        twitter:string;
        facebook:string;
    };
    phoneNumbers:string[];
    phNumbers:{
        number:string;
    }[];
    age:number;
    dob:Date
};

export const YouTubeForm= () => {
    const form = useForm<FormValues>({
        defaultValues:{
            username:"Maherun",
            email:"",
            channel:"",
            social: {
                twitter:"",
                facebook:"",
            },
            phoneNumbers:["",""],
            phNumbers:[{number:""}],
            age:0,
            dob:new Date()
            
        },
    });
    const {register,control, handleSubmit, formState,watch,getValues,setValue} = form;

    const {errors, touchedFields, dirtyFields} = formState;
    console.log({touchedFields, dirtyFields});

    const {fields, append,remove}= useFieldArray({
        name:"phNumbers",
        control,

    })

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted',data)
    };

    const handleGetValues= ()=> {
        console.log("Get values", getValues())
    }
    const handleSetValues= ()=> {
       setValue("username","",{
        shouldValidate:true,
        shouldDirty:true,
        shouldTouch:true,
       });
    }

    useEffect(()=> {
        const subscription =watch((value)=>{
            console.log(value);
        });
        return ()=> subscription.unsubscribe();
    },[watch]);
    // const watchUsername = watch("username")
    // const watchUsername = watch(["username","email"])
    const watchForm= watch()
   // const { name,ref,onChange, onBlur } = register("username")
   renderCount++;
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <h1>YouTube Form {renderCount / 2} </h1>
            {/* <h2>Watched value: {watchUsername}</h2> */}
            {/* <h2>Watch value: {JSON.stringify(watchForm)}</h2> */}
            
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* <label htmlFor="username">Username</label><br></br>
                <input type='text'className="border-2 border-black" id="username" name={name} ref={ref} onClick={onChange} onBlur={onBlur} /><br></br> */}
                <div className="form-control">
                <label htmlFor="username">Username</label><br></br>
                <input type='text'className="border-2 border-black" id="username" {...register("username", { required: {
                    value:true,
                    message:"Username is required",}})} /><br></br> 
                 <p  className="error ">{errors.username?.message}</p>
                </div>
               
               <div className="form-control">
               <label htmlFor="email">Email</label><br></br>
                <input type='email' className="border-2 border-black" id="email" {...register("email", {pattern: {
                    value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:"Invalid email format",
                },
                // validate: (fieldValue) => {
                //     return (
                //         fieldValue !== "admin@example.com" || 
                //         "Enter a different email address"
                //     );
                // },
                validate:{
                    notAdmin: (fieldValue)=>{
                        return (
                            fieldValue !== "admin@example.com" || 
                                    "Enter a different email address"
                        );
                    },
                    notBlackListed: (fieldValue)=> {
                        return (
                            !fieldValue.endsWith("iubat.edu") ||
                            "This domain is not supported"
                        );
                    },
                }
                
                
                
                })}/><br></br>
                <p  className="error ">{errors.email?.message}</p>

               </div>
                <div className="form-control">
                <label htmlFor="channel">Channel</label><br></br>
                <input type='text' className="border-2 border-black" id="channel" {...register("channel",{
                    required:{
                        value:true,
                        message:"Channel is required",
                    }
                })} /><br></br>
                <p className="error ">{errors.channel?.message}</p>
                 
                </div>
                <div className="form-control">
                <label htmlFor="twitter">Twitter</label><br></br>
                <input type='text' className="border-2 border-black" id="twitter" {...register("social.twitter")} /><br></br>
              
                </div>
                <div className="form-control">
                <label htmlFor="facebook">Facebook</label><br></br>
                <input type='text' className="border-2 border-black" id="facebook" {...register("social.facebook")} /><br></br>
              
                </div>
                <div className="form-control">
                <label htmlFor="primary-phone">Primary phone Number</label><br></br>
                <input type='text' className="border-2 border-black" id="primary-phone" {...register("phoneNumbers.0")} /><br></br>
              
                </div>
                <div className="form-control">
                <label htmlFor="secondary-phone">Secondary phone number</label><br></br>
                <input type='text' className="border-2 border-black" id="secondary-phone" {...register("phoneNumbers.1")} /><br></br>
              
                </div>

                <div>
                    <label>List of phone numbers</label>
                    <div>
                        {
                            fields.map((field,index)=>{
                                return (
                                    <div className="form-control flex flex-col" key={field.id}>
                                        <input type="text" className="border-2 border-black"
                                        {...register(`phNumbers.${index}.number` as const)}/>
                                        {index >0 && (
                                            <button type="button" onClick={()=> remove(index)}>
                                                Remove
                                            </button>
                                        )}

                                    </div>
                                );
                            })
                        }
                        <button type="button" onClick={()=>append({number:""})}>
                            Add phone number
                        </button>
                    </div>
                </div>

                <div className="form-control">
                <label htmlFor="age">Age</label><br></br>
                <input type='number' className="border-2 border-black" id="age" {...register("age",{
                    valueAsNumber:true,
                    required:{
                        value:true,
                        message:"Age is required",
                    }
                })} /><br></br>
                <p className="error ">{errors.age?.message}</p>
                 
                </div>

                <div className="form-control">
                <label htmlFor="dob">Date of birth</label><br></br>
                <input type='date' className="border-2 border-black" id="dob" {...register("dob",{
                    valueAsDate:true,
                    required:{
                        value:true,
                        message:"Date of birth is required",
                    }
                })} /><br></br>
                <p className="error ">{errors.dob?.message}</p>
                 
                </div>
                <button>Submit</button>
                <button type="button" onClick={handleGetValues}>Get values</button>
                <button type="button" onClick={handleSetValues}>Set values</button>
            </form>
            <DevTool control={control}/>
           
        </div>
    )
}