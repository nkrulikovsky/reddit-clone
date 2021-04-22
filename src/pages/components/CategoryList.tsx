import { Box, createStyles, makeStyles, Paper, Theme, Typography, useTheme } from "@material-ui/core";
import React, { ReactElement } from "react";
import CategoryItem from "../../components/header/CategoryItem";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
  })
);
interface Props {}

export default function CategoryList({}: Props): ReactElement {
  const classes = useStyle();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Box>
        <Paper>
          <Box p={2} borderRadius={5} bgcolor={theme.palette.primary.main} color="white">
            <Typography variant="subtitle1">View by Post Types</Typography>
          </Box>
          <Box display="flex" padding={2} flexWrap="wrap">
            <CategoryItem postCategory={{ title: "Go", postType: "discussion" }} />
            <CategoryItem postCategory={{ title: "Help Wanted", postType: "helpWanted" }} />
            <CategoryItem postCategory={{ title: "Help Wanted", postType: "portfolio" }} />
            <CategoryItem postCategory={{ title: "Description", postType: "discussion" }} />
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
