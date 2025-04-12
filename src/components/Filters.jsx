
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const Filters = ({ search, setSearch, fuel, setFuel, seating, setSeating, sort, setSort }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <motion.div
      style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: isMobile ? 'center' : 'flex-start',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 180 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Fuel</InputLabel>
          <Select value={fuel} onChange={(e) => setFuel(e.target.value)} label="Fuel">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
          </Select>
        </FormControl>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Seating</InputLabel>
          <Select value={seating} onChange={(e) => setSeating(e.target.value)} label="Seating">
            <MenuItem value="">All</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={7}>7</MenuItem>
          </Select>
        </FormControl>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Sort</InputLabel>
          <Select value={sort} onChange={(e) => setSort(e.target.value)} label="Sort">
            <MenuItem value="">None</MenuItem>
            <MenuItem value="low">Low to High</MenuItem>
            <MenuItem value="high">High to Low</MenuItem>
          </Select>
        </FormControl>
      </motion.div>
    </motion.div>
  );
};

export default Filters;
