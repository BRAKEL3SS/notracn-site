import { Helmet } from 'react-helmet'
import { useForm } from "react-hook-form"
import { TextField} from '@mui/material'

import * as reportsAPI from '../../utilities/reports-api'

export default function ReportPage() {
    const TITLE = 'Race Reports'
    const { register, handleSubmit, reset, formState: {  error } } = useForm()
    async function getReports() {
        const reports = await reportsAPI.getAll
        return reports
    }

    function makeReport() {

    }
    const onSubmit = (formData) => {
        reportsAPI.create(formData)
    }


    return (
        <>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <h1>Race Reports</h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft: '15vw'}} >
            <input type="text"
            {...register("report", { required: true }) } /><br />
            <input type="submit" />
        </form>
        </>
    )
}