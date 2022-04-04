import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function OneBook({ book }) {
  const [hover, setHover] = useState(false);

  const imgUrl = `https://covers.openlibrary.org/b/id/1005829-L.jpg`;

  //   console.log(books);

  if (!book.details) {
    return "Loeading...";
  }

  function mouseenter() {
    setHover(true);
  }
  function mouseleave() {
    setHover(false);
  }

  console.log(book);

  return (
    <div className="onebook-wrap">
      <Card onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
        <CardMedia component="img" alt="book-Image" image={imgUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.details.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.details && book.details.authors
              ? book.details.authors.map((a) => a.name).join(", ")
              : "Authors unknown"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{book.details.publish_date}</Button>
          <Button size="small">{book.details.physical_format}</Button>
          <Button size="small">
            {hover ? book.details.number_of_pages : null}
          </Button>
          <Button size="small">{hover ? book.details.weight : null}</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default OneBook;
