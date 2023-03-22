import { CheckCircle, Delete, Edit } from "@mui/icons-material";
import { Grid, IconButton, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { toast } from "react-toastify";

const main = grey[100];
const PostList = (props) => {
  const { posts, setPosts } = props;
  if (posts?.length === 0) {
    return <p>Chưa có ghi chú</p>;
  }
  const handleOpenUpdatePost = (index) => {
    let postIndexNeedToEdit = posts.findIndex((post, idx) => idx === index);
    if (postIndexNeedToEdit > -1) {
      posts[postIndexNeedToEdit].isEdit = true;
      setPosts([...posts]);
    }
  };
  const handleCompletedPost = (index) => {
    let postIndexNeedToEdit = posts.findIndex((post, idx) => idx === index);
    if (
      posts.find(
        (post, idx) =>
          post.content === posts[postIndexNeedToEdit].content && index !== idx
      )
    ) {
      return toast.error("Nội dung đã tồn tại!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
    posts[postIndexNeedToEdit] = {
      ...posts[postIndexNeedToEdit],
      isEdit: false
    };
    setPosts([...posts]);
  };
  const handleUpdatePost = (index, content) => {
    let postIndexNeedToEdit = posts.findIndex((post, idx) => idx === index);
    if (postIndexNeedToEdit < 0) {
      return toast.error("Không tìm thấy ghi chú!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
    if (content === "") {
      return toast.error("Nội dung không được để trống!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
    posts[postIndexNeedToEdit] = {
      ...posts[postIndexNeedToEdit],
      content: content
    };
    setPosts([...posts]);
  };

  const handleDeletePost = (post) => {
    let postIndexNeedToDelete = posts.findIndex((item, idx) => item === post);
    if (postIndexNeedToDelete > -1) {
      posts.splice(postIndexNeedToDelete, 1);
      setPosts([...posts]);
    }
  };
  return (
    <>
      <p>List Post here</p>
      <Box
        sx={{
          width: "50%",
          height: "auto",
          minHeight: "100px",
          padding: "1rem 6rem",
          backgroundColor: main,
          borderRadius: "8px"
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {posts.map((post, index) => (
            <Grid item xs={10} container alignItems="center" key={index}>
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  size="large"
                  variant="outlined"
                  color="primary"
                  disabled={!post.isEdit}
                  value={post.content}
                  onChange={(e) => {
                    let content = e.target.value;
                    handleUpdatePost(index, content);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleCompletedPost(index);
                    }
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                {!post.isEdit ? (
                  <IconButton onClick={() => handleOpenUpdatePost(index)}>
                    <Edit color="info" />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleCompletedPost(index)}>
                    <CheckCircle color="success" />
                  </IconButton>
                )}
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={() => handleDeletePost(post)}>
                  <Delete color="error" />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PostList;
