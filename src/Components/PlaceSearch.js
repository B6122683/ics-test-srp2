import * as React from "react";
import {
  Container,
  Box,
  MenuItem,
  Select,
  TextField,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "../App.css";
import data from "../Data/example_data.json";

export default function BasicSelect() {
  const [types, setTypes] = React.useState("restaurant");
  const [name, setName] = React.useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChange = (event) => {
    setTypes(event.target.value);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" component="div">
                Place List
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={types}
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <MenuItem value="restaurant">Restaurant</MenuItem>
              <MenuItem value="bakery">Bakery</MenuItem>
              <MenuItem value="cafe">Cafe</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-name"
              value={name}
              onChange={handleChangeName}
              placeholder="Search restaurant..."
            />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 2 }} maxWidth="lg">
        <Grid container spacing={2}>
          {data
            .filter((item) => {
              if (name === "") {
                return item;
              } else {
                return item.name.toLowerCase().includes(name.toLowerCase());
              }
            })
            .map((item) => (
              <Grid item key={item.id} xs={12} sm={4} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardHeader
                    avatar={
                      <img
                        src={item.profile_image_url}
                        alt={item.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "10px",
                        }}
                      />
                    }
                    title={
                      <Typography variant="h6" component="div">
                        {item.name}
                      </Typography>
                    }
                    subheader={
                      <Typography component="div">{item.rating}</Typography>
                    }
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "none", md: "flex" },
                      }}
                      mt={2}
                    >
                      <Grid container>
                        <Grid item xs={12} md={4}>
                          <CardMedia
                            component="img"
                            style={{ height: "120px", width: "120px" }}
                            image={item.images[0]}
                            alt={item.name}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <CardMedia
                            component="img"
                            style={{ height: "120px", width: "120px" }}
                            image={item.images[1]}
                            alt={item.name}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <CardMedia
                            component="img"
                            style={{ height: "120px", width: "120px" }}
                            image={item.images[2]}
                            alt={item.name}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", md: "none" },
                      }}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <CardMedia
                            component="img"
                            style={{ maxHeight: "180px" }}
                            image={item.images[0]}
                            alt={item.name}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}
