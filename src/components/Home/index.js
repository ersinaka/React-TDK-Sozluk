import { useState } from "react"
import { Box,Typography, FilledInput, IconButton } from "@mui/material"
import {Search as SearchIcon, Bookmark as BookmarkIcon} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [kelime, setKelime] = useState ("");
  const navigate = useNavigate ()
 
  const handleSubmit =(event) =>{
    event.preventDefault()
    const trimmedWord = kelime.trim().toLowerCase();
    if (!trimmedWord || trimmedWord.split(' ').length > 1) return;
    navigate(`/search/${kelime}`)
  }
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        height: '100vh'

    }}>

    <img src="/assets/logo.png" alt="TDK logo"/>
    <Typography 
    color="primary"
    sx={{
        mt:3,
        mb: 1,
    }} variant="h5">Türkçe Sözlük</Typography>
    <Typography color="primary">TDK sözlüğünde arama yapın</Typography>
    <Box sx={{ width: '300px' }}>
      <form onSubmit={handleSubmit}>
                    <FilledInput
                    value={kelime}
                    onChange={event =>setKelime(event.target.value)}
                        disableUnderline placeholder="Türkçe Sözlük’te Ara"
                        sx={{
                            my: 4,
                            backgroundColor: 'white',
                            borderRadius: 2,
                            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.05)',
                            '& .MuiFilledInput-input': {
                                p: 2,
                            }
                        }}
                        startAdornment={<SearchIcon color="disabled" />}
                        fullWidth
                    />
        </form>
            </Box>
      

    <IconButton sx={{
      backgroundColor: 'white',
      borderRadius: 2,
      p:2,
      color: '#E11E3C',
      background: 'linear-gradient(138.72deg, #fff 0%, #fff 95.83%)',
      boxShadow: '0px 10px 10px rgba(221, 114, 133, 0.2)',
    }}>
      <BookmarkIcon />

    </IconButton>

    </Box>
  )
}

export default Home