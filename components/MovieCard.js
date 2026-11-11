import { Star, Play } from 'lucide-react';

export default function MovieCard({ movie, onSelect, favorite, onFavorite }) {
  return <article className="movie-card"><button className="poster-button" onClick={()=>onSelect(movie)} aria-label={`ดูรายละเอียด ${movie.title}`}><img src={movie.poster} alt={`โปสเตอร์ ${movie.title}`} loading="lazy"/><span className="poster-play"><Play size={22} fill="currentColor"/></span></button><div className="movie-info"><div className="movie-meta"><span>{movie.year}</span><span className="dot">•</span><span>{movie.genre}</span><span className="rating"><Star size={13} fill="currentColor"/> {movie.rating}</span></div><div className="movie-title-row"><button className="movie-title" onClick={()=>onSelect(movie)}>{movie.title}</button><button className={`heart ${favorite ? 'active' : ''}`} onClick={()=>onFavorite(movie.id)} aria-label="เพิ่มรายการโปรด">♥</button></div><span className="type-label">{movie.type}</span></div></article>;
}
