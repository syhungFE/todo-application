import { Button, Grid, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

const main = grey[100];
const AddPost = (props) => {
  const { addPost } = props;
  const handleAddPost = () => {
    let content = document.getElementById("post-input")?.value || "";
    addPost(content);
    document.getElementById("post-input").value = "";
  };
  return (
    <>
      <p>Add Post here: </p>
      <Box
        sx={{
          width: "50%",
          height: "auto",
          padding: "1rem 6rem",
          backgroundColor: main,
          borderRadius: "8px"
        }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={11}>
            <TextField
              id="post-input"
              fullWidth
              size="large"
              variant="outlined"
              color="primary"
              label="Vui lòng nhập ghi chú"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddPost();
                }
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              size="large"
              s
              color="primary"
              variant="contained"
              onClick={handleAddPost}
            >
              Lưu
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddPost;
