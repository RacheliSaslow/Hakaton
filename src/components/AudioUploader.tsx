import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SendIcon from "@mui/icons-material/Send";

export default function AudioUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // בחירת קובץ
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // שליחה
  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    // סימולציה של העלאה
    await new Promise((res) => setTimeout(res, 2000));

    setLoading(false);
    alert("הקובץ נשלח בהצלחה 🎉");
  };

  return (
    <Box
      dir="rtl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <Paper
        sx={{
          width: "90%",
          maxWidth: 500,
          p: 4,
          textAlign: "center",
          borderRadius: 4,
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          border: "1px solid #e53935",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 3, fontWeight: "bold", color: "#e53935" }}
        >
          העלאת קובץ שמע
        </Typography>

        {/* כפתור בחירת קובץ */}
        <Button
          variant="outlined"
          component="label"
          startIcon={<UploadFileIcon />}
          sx={{
            borderColor: "#e53935",
            color: "#e53935",
            mb: 2,
          }}
        >
          בחר קובץ
          <input type="file" hidden accept="audio/*" onChange={handleFileChange} />
        </Button>

        {/* הצגת שם הקובץ */}
        {file && (
          <Typography sx={{ mb: 2 }}>{file.name}</Typography>
        )}

        {/* אנימציית טעינה */}
        {loading ? (
          <CircularProgress sx={{ color: "#e53935", mt: 2 }} />
        ) : (
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleUpload}
            disabled={!file}
            sx={{
              mt: 2,
              background: "#e53935",
              "&:hover": { background: "#c62828" },
            }}
          >
            שלח קובץ
          </Button>
        )}
      </Paper>
    </Box>
  );
}