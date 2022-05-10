import { Helmet } from 'react-helmet'
export default function ContactPage() {
    const TITLE = 'Contact-us'
    return (
        <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <h1>Contact page</h1>
        </>
    )
}