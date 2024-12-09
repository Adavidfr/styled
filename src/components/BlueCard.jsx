import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function BluuCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f2/latest/20150621181400/Eevee.png/800px-Eevee.png"
          height="200"
          alt="una descripcion"
        />
        <CardContent>
          <Typography variant="h5">Card Title</Typography>
          <Typography
            component="p"
            variant="body2"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nemo
            tempore blanditiis fuga harum! Nam dignissimos odit eligendi magni
            perferendis voluptatum labore esse at earum! Officiis vel quam
            voluptatum debitis.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained">Add</Button>
        <Button color="error">Remove</Button>
      </CardActions>
    </Card>
  );
}
