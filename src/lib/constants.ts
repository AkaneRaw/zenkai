export const LOGO_URL =
  'https://voxeodunvjrhtbjvbbxt.supabase.co/storage/v1/object/public/Admin%20uploads/IMG_20260928_151609_577.jpg'

export const GENRES: { name: string }[] = [
  { name: 'Action' },
  { name: 'Adventure' },
  { name: 'Comedy' },
  { name: 'Drama' },
  { name: 'Fantasy' },
  { name: 'Horror' },
  { name: 'Mahou Shoujo' },
  { name: 'Mecha' },
  { name: 'Music' },
  { name: 'Mystery' },
  { name: 'Psychological' },
  { name: 'Romance' },
  { name: 'Sci-Fi' },
  { name: 'Slice of Life' },
  { name: 'Sports' },
  { name: 'Supernatural' },
  { name: 'Thriller' },
]

export const MOVIE_LINKS: { label: string; to: string }[] = [
  { label: 'Home', to: '/movies' },
  { label: 'Movies', to: '/movies/browse?type=movie' },
  { label: 'TV Shows', to: '/movies/browse?type=tv' },
]

export const NAV_LINKS: { label: string; to: string }[] = [
  { label: 'Home', to: '/home' },
  { label: 'Trending', to: '/trending' },
  { label: 'Popular', to: '/popular' },
  { label: 'Browse', to: '/browse' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'My List', to: '/list' },
]
