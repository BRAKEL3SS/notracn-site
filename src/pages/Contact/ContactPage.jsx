import { TextField, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function ContactPage() {
    const TITLE = 'Contact-us'
    const { register, handleSubmit, reset, formState: {  error } } = useForm()
    const onSubmit = (formData) => {
        console.log(formData)

        axios({
            method: "POST",
            url:"http://localhost:3001/send",
            data:  formData
          }).then((response)=>{
            if (response.data.status === 'success') {
              alert("Message Sent.");
              reset({ name: '', email: '', message: ''})
            } else if (response.data.status === 'fail') {
              alert("Message failed to send.")
            }
          })
        }


    return (
        <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Typography variant='h1'>Reach out to us</Typography>
        <Typography variant='body1'>Intersted in supporting the team? <br />
        Any questions/comments? <br />
        Reach out below!</Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft: '15vw'}} >
            <TextField
                id="outlined-basic"
                label="Your Name" 
                variant="outlined" 
                placeholder='Your Name Here'
                {...register("name", { required: true }) }
            /><br />
            <TextField
                id="outlined-basic"
                label="Your Email" 
                variant="outlined" 
                placeholder='email@email.com'
                {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email address",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid email address",
                    },
                  })}
                
            /><br />
            <TextField
                id="outlined-multiline-static"
                label="Enter your message"
                multiline
                rows={4}
                placeholder="Your message here"
                sx={{width: '28em'}}
                {...register("message", { required: true })}
            /><br />
            <input type="submit" />
        </form>

        </>
    )
}