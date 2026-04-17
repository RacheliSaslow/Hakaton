import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import CheckingData from "./CheckingData";
import SuccessMessage from "././SuccessMessage";

type FormData = {
  name: string;
  phone: string;
  email: string;
};

export default function FirstMassage() {
    const [step, setStep] = useState<"form" | "loading" | "success">("form");
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!form.name) newErrors.name = "יש להזין שם";
    if (!form.phone) newErrors.phone = "יש להזין טלפון";
    if (!form.email || !form.email.includes("@"))
      newErrors.email = "מייל לא תקין";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
  if (!validate()) return;

  setStep("loading");

  setTimeout(() => {
    setStep("success");
  }, 2000); 
  };
if (step === "loading") return <CheckingData />;
if (step === "success") return <SuccessMessage />;
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
        }}
      >
        {/* כותרת */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 3,
            color: "#c62828",
            fontWeight: "bold",
          }}
        >
          הרשמה למערכת
        </Typography>

        {/* שם */}
        <TextField
          fullWidth
          label="שם מלא"
          variant="outlined"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
          }}
        />

        {/* טלפון */}
        <TextField
          fullWidth
          label="טלפון"
          variant="outlined"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
          }}
        />

        {/* מייל */}
        <TextField
          fullWidth
          label="מייל"
          variant="outlined"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
          }}
        />

        {/* כפתור */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#e53935",
            borderRadius: 3,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
        >
          שליחה
        </Button>
      </Paper>
    </Box>
  );
}