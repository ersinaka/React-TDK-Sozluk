import { useEffect, useState, Fragment } from "react"
import { Stack, Typography, Box, IconButton, Divider } from "@mui/material"
import { ArrowBack as BackIcon, BookmarkBorder as BookmarkIcon, Border as BookmarkedIcon } from "@mui/icons-material"
import {useParams, useNavigate}  from 'react-router-dom'
import axios from 'axios'

const Definition = () => {
  const {kelime} = useParams ();
  const navigate = useNavigate ()
  const [definitions, setDefinitions] = useState ([])

  console.log(definitions)

    useEffect (() =>{
      const fetchAnlam = async () => {
          const resp = await axios.get(`https://sozluk.gov.tr/gts?ara=${kelime}`);
          setDefinitions(resp.data)

      }
      fetchAnlam();

    }, [])
    return (
      <>
      <Stack direction="row" justifyContent="space-between">
        <IconButton onClick={() => navigate(-1)}>
        <BackIcon />
        </IconButton>
        <IconButton>
        <BookmarkIcon />
        </IconButton>

      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{
 mt: 3,
 background: 'white',
 boxShadow: '-1px 4px 20px 20px rgb(19 23 71 / 25%)',
 px: 4,
 py: 5,
 color: '#0A151F',
 borderRadius: 2,

      }}>
      <Typography   variant="h4">{kelime}</Typography>

      </Stack>
      {definitions.map((def, idx) =>
        <Fragment key={idx}>
            <Divider />
          {def.anlamlarListe.map(meaning =>
            <Box key={meaning.anlam_id} sx={{
              boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.05)',
              backgroundColor: '#fff',
              p: 2,
              borderRadius: 2,
              mt: 3
            }}>
              <Typography variant="subtitle1">{meaning.anlam}</Typography>

            </Box>
            
            )}
        </Fragment>
        )}
      
      </>
    )
  }
  
  export default Definition