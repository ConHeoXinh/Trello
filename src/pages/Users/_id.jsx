import React from "react";

const Board = () => {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ hegight: "100vh" }}>
        <Box
          sx={{
            backgroundColor: "primary.light",
            height: (theme) => theme.trello.appBarHeight,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ModeSelect>sdf</ModeSelect>
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.dark",
            height: (theme) => theme.trello.boardBarHeight,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          board bar
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.light",
            height: (theme) =>
              `calc(100vh-${theme.trello.appBarHeight}-${theme.trello.boardBarHeight})`,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          content
        </Box>
      </Container>
    </>
  );
};

export default Board;
