import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import CandidatesTable from "./CandidatesTable";
import type { ApiData } from "../pages/CandidatePage";

type Candidate = {
  name: string;
  phone: string;
  email: string;
  profile: string;
  score: number;
};

type Props = {
  data: ApiData;
};

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

  const filteredData = useMemo(() => {
    // Note: CandidatesTable now fetches its own data from server
    // Search filtering logic might need to move to CandidatesTable if search is global
    return []; 
  }, []);

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