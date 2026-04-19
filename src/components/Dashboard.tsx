import { useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import CandidatesTable from "./CandidatesTable";

export type Status = {
  text: string;
  color: "success" | "warning";
  reason: string;
};

export const getStatus = (score: number): Status => {
  if (score >= 70) {
    return { text: "גבוה", color: "success", reason: "התאמה גבוהה" };
  }

  return { text: "בינוני", color: "warning", reason: "התאמה בינונית" };
};

export default function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <Box
      dir="rtl"
      sx={{
        background: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1400px", px: 2 }}>
        
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 10,
            mt: -4,
            fontWeight: "bold",
            color: "#c62828",
          }}
        >
          פיענוח נתוני מועמדים
        </Typography>

        <SearchBar search={search} setSearch={setSearch} />

        <CandidatesTable />

      </Box>
    </Box>
  );
}