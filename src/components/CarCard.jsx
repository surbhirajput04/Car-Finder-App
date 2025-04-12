import { motion } from 'framer-motion';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const CarCard = ({ car, toggleWishlist, isWishlisted }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      style={{ width: 300 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 3,
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={car.image}
          alt={car.name}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />

        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6">{car.name}</Typography>
          <Typography color="text.secondary">
            ₹{car.price.toLocaleString()} • {car.fuel} • {car.seats} Seater
          </Typography>
          <IconButton onClick={() => toggleWishlist(car)}>
            {isWishlisted ? (
              <Favorite color="error" />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CarCard;
