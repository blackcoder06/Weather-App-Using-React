import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';


export default function InfoBox({ info }){
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWRzfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwc3VtbWVyfGVufDB8fDB8fHww";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670598342794-249547599860?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
            
                <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL  }
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <h4>{info.city} {info.humidity > 80 ? <ThunderstormTwoToneIcon/> : info.temp > 15 ? <WbSunnyTwoToneIcon/> : <AcUnitIcon/>}</h4>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temprature {info.temp}&deg;C</p>
                <p>Humidity {info.humidity}&#37;</p>
                <p>Min Temp {info.tempmin}&deg;C</p>
                <p>Max Temp {info.tempmax}&deg;C</p>
                <p>Weather can be Described as <i><b>{info.weather}</b></i></p>
                <p>Feels Like {info.feelslike}&deg;C</p>
            </Typography>
        </CardContent>
        </Card>
        </div>
    );
}