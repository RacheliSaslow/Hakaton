import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
      <FormControl variant="outlined" sx={{ width: 320 }}>
        <InputLabel
        
          sx={{
            color: "#e53935",
            "&.Mui-focused": { color: "#e53935" },
          }}
        >חיפוש לפי סטטוס או ציון</InputLabel>

        <OutlinedInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          label="חיפוש לפי סטטוס או ציון"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#e53935", fontSize: 18 }} />
            </InputAdornment>
          }
          sx={{
            background: "white",
            borderRadius: 3,

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e53935",
            },
 "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#e53935",
      },
            "& input": {
              textAlign: "right",
            },
          }}
        />
      </FormControl>
    </Box>
  );
}