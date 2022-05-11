import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from '../../components/Feed/Feed'
import { Helmet } from 'react-helmet'
import { ImageList, Typography } from '@mui/material'

export default function MediaPage({token, ...props}) {
    const TITLE = 'Media Page'
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${token}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
        
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [])

    return (
        <div className="container">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Typography variant='h3'> Check Us out on Intagram @Notracn_team</Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
            </ImageList>
        </div>
    );
}