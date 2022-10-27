import PropTypes from 'prop-types';
// @mui
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Divider,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
// components
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];
export const FILTER_CATEGORY_OPTIONS = ['모두', '교육', '비즈니스', '모집/공고'];
export const FILTER_LIKE_OPTIONS = [
  { value: '이하', label: '10개 이하' },
  { value: '사이', label: '10~50개 사이' },
  { value: '이상', label: '50개 이상' },
]

ShopFilterSidebar.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function ShopFilterSidebar({ openFilter, onOpenFilter, onCloseFilter }) {
  return (
    <>
      <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' },
        }}
      >
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
        <Typography variant="subtitle1" sx={{ ml: 1 }}>
          Filters
        </Typography>
        <IconButton onClick={onCloseFilter}>
          <Iconify icon="eva:close-fill" />
        </IconButton>
      </Stack>

      <Divider />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3 }}>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Category
            </Typography>
            <RadioGroup>
              {FILTER_CATEGORY_OPTIONS.map((item) => (
                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
              ))}
            </RadioGroup>
          </div>

          <div>
              <Typography variant="subtitle1" gutterBottom>
                좋아요 개수
              </Typography>
              <RadioGroup>
                {FILTER_LIKE_OPTIONS.map((item) => (
                  <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                ))}
              </RadioGroup>
            </div>
        </Stack>
      </Scrollbar>

      <Box sx={{ p: 3 }}>
        <Button
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon="ic:round-clear-all" />}
        >
          Select
        </Button>
      </Box>
    </Drawer>
    </>
  );
}