import { Box, Typography, CircularProgress, Paper } from "@mui/material";

export default function CheckingData() {
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
        elevation={3}
        sx={{
          width: 400,
          p: 4,
          borderRadius: 4,
          border: "1px solid #e53935",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 3, color: "#c62828", fontWeight: "bold" }}
        >
          בודקים את הנתונים שלך...
        </Typography>

        <CircularProgress
          sx={{
            color: "#e53935",
          }}
        />
      </Paper>
    </Box>
  );
}