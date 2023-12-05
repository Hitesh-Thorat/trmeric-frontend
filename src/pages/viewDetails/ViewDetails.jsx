import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RightSideMenu from "../../components/common/rightSideMenu/RightSideMenu";
import Header from "../../components/common/Header/header";
import { Link, useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    
  </Box>
);

export default function ViewDetails() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <Card
        sx={{
          height: "1800px",
          width: "1000px",
          marginTop: "150px",
          display: "flex",
        }}
      >
        <CardContent>
          <ArrowBackIcon
            onClick={() => {
              navigate(-1);
            }}
            sx={{ cursor: "pointer" }}
          ></ArrowBackIcon>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <RightSideMenu></RightSideMenu>
    </div>
  );
}
