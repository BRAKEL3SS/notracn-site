import { Helmet } from 'react-helmet'

export default function ReportPage() {
    const TITLE = 'Race Reports'
    return (
        <>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <h1>Race Reports</h1>
        </>
    )
}