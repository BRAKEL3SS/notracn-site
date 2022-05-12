import { Helmet } from 'react-helmet'
import { useForm } from "react-hook-form"
import { TextField} from '@mui/material'
import { useState, useEffect } from 'react'
import Report from '../../components/Report/Report'

import * as reportsAPI from '../../utilities/reports-api'

export default function ReportPage({ user }) {
    const [reports, setReports] = useState([])
    const TITLE = 'Race Reports'
    const { register, handleSubmit, reset, formState: {  error } } = useForm()

    async function getReports() {
        const reportsData = await reportsAPI.getAll()
        setReports(reportsData)
    }

    
    useEffect(() => {
        const abortController = new AbortController();
        
        getReports();
        
  
        return () => {
            abortController.abort(); 
        };
    }, [])

    const onSubmit = (formData) => {
        reportsAPI.create(formData)
        getReports()
        reset({report: ''})
    
    }


    return (
        <>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <h1>Race Reports</h1>
        { user ?
        <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft: '15vw'}} >
            <TextField 
            id="outlined-basic"
            placeholder="Your report here"
            multiline
            rows={4}
            sx={{width: '60vw'}}
            {...register("report", { required: true }) }
             /><br />
            <input type="hidden"
            value={user.name}
            {...register("user")} />
            <input type="submit" />
        </form>
        :
        <></>
}
        {reports.map((report, idx) => (
                <Report key={idx} report={report} />
            ))}
        </>
    )
}