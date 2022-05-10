import { Helmet } from 'react-helmet'

export default function TeamPage() {
    const TITLE = 'Meet The Team'
    return (
        <>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <h1>Team page</h1>
        </>
    )
}