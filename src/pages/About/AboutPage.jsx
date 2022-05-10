import { Helmet } from 'react-helmet'

export default function AboutPage() {
    const TITLE = 'NotRacn'
    return (
        <>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <h1>About Us</h1>
        </>
    )
}