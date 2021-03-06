import { Box, Button, createStyles, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import { Block, CardGiftcard, Comment, Flag, Save, Share } from "@material-ui/icons";
import React, { ReactElement } from "react";
import CategoryItem from "../../components/header/CategoryItem";
import Vote from "./vote";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: "10px 20px 10px 5px",
      borderBottom: "1px solid rgba(0,0,0,0.3)",
    },
  })
);
interface Props {
  post: PostType;
}

export default function TopicItem({
  post: { title, passedTime, poster, externalLink, postCategory, voteCnt },
}: Props): ReactElement {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Vote voteCnt={voteCnt} />
      <Box>
        <div>
          <Typography>
            {title}
            {externalLink && <Link href="">{externalLink}</Link>}
            {postCategory && <CategoryItem postCategory={postCategory} />}
          </Typography>
          <Box mx={2}></Box>
        </div>
        <Typography variant="caption">
          Posted by {poster}
          {passedTime} ago
        </Typography>
        <Box>
          <Button startIcon={<Comment />}>Comments</Button>
          <Button startIcon={<CardGiftcard />}>Awart</Button>
          <Button startIcon={<Share />}>Share</Button>
          <Button startIcon={<Save />}>Save</Button>
          <Button startIcon={<Block />}>Hide</Button>
          <Button startIcon={<Flag />}>Report</Button>
        </Box>
      </Box>
    </div>
  );
}
