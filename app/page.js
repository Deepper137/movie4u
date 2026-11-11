'use client';
import { useMemo, useState, useEffect } from 'react';
import { Play, ChevronRight, X, Star, Search, Clapperboard } from 'lucide-react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';

const categories = ['ทั้งหมด', 'แอ็กชัน', 'ไซไฟ', 'ดราม่า', 'แอนิเมชัน', 'แฟนตาซี'];
export default function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('ทั้งหมด');
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState([]);
  useEffect(()=>{ try { setFavorites(JSON.parse(localStorage.getItem('movie4u-favorites') || '[]')); } catch {} },[]);
  const toggleFavorite = id => setFavorites(old => { const next = old.includes(id) ? old.filter(x=>x!==id) : [...old,id]; localStorage.setItem('movie4u-favorites', JSON.stringify(next)); return next; });
  const filtered = useMemo(()=>movies.filter(m=>(category==='ทั้งหมด'||m.genre===category)&&m.title.toLowerCase().includes(search.toLowerCase())),[category,search]);
  const featured = movies[0];
  return <main id="top"><Navbar search={search} setSearch={setSearch}/>
    <section className="hero" id="home"><div className="hero-bg"/><div className="hero-content"><span className="eyebrow"><Clapperboard size={15}/> MOVIE4U ORIGINAL COLLECTION</span><h1>เรื่องราวดี ๆ<br/><span>เริ่มต้นที่นี่</span></h1><p>ค้นพบโลกแห่งภาพยนตร์และซีรีส์ที่คุณชื่นชอบ<br/>เลือกเรื่องที่ใช่ แล้วออกเดินทางไปพร้อมกัน</p><div className="hero-buttons"><a className="primary-btn" href="#movies"><Play size={17} fill="currentColor"/> สำรวจภาพยนตร์</a><button className="outline-btn" onClick={()=>setSelected(featured)}>รายละเอียดเพิ่มเติม <ChevronRight size={17}/></button></div><div className="hero-foot"><span><i/> คัดสรรเรื่องเด่นสำหรับคุณ</span><span>01 / 08</span></div></div></section>
    <section className="content-section" id="movies"><div className="section-heading"><div><span className="section-kicker">เลือกชมตามสไตล์</span><h2>สำรวจภาพยนตร์ <span>& ซีรีส์</span></h2></div><span className="count">{filtered.length} เรื่อง</span></div>
      <div className="filters"><div className="category-list">{categories.map(c=><button key={c} className={category===c?'chip active':'chip'} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="mobile-search"><Search size={16}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="ค้นหาชื่อเรื่อง"/></label></div>
      {filtered.length ? <div className="movie-grid">{filtered.map(movie=><MovieCard key={movie.id} movie={movie} onSelect={setSelected} favorite={favorites.includes(movie.id)} onFavorite={toggleFavorite}/>)}</div> : <div className="empty">ไม่พบเรื่องที่ค้นหา ลองเปลี่ยนคำค้นหาหรือหมวดหมู่ค่ะ</div>}
    </section>
    <section className="about-strip" id="about"><div><span className="section-kicker">YOUR ENTERTAINMENT SPACE</span><h2>ทุกแนวที่คุณชอบ<br/>รวมไว้ในที่เดียว</h2></div><p>MOVIE4U เป็นหน้าเว็บตัวอย่างสำหรับจัดแสดงแคตตาล็อกภาพยนตร์ ซีรีส์ และตัวอย่างที่ได้รับอนุญาตให้เผยแพร่ สามารถต่อยอดเชื่อมระบบสมาชิกและฐานข้อมูลได้</p></section>
    <footer><a className="brand" href="#top">MOVIE<span>4U</span></a><span>© 2026 MOVIE4U. Demo catalog interface.</span><span>รับชมเฉพาะเนื้อหาที่มีสิทธิ์เผยแพร่</span></footer>
    {selected&&<div className="modal-backdrop" onClick={()=>setSelected(null)}><section className="detail-modal" onClick={e=>e.stopPropagation()}><button className="close-modal" onClick={()=>setSelected(null)} aria-label="ปิด"><X/></button><img className="detail-poster" src={selected.poster} alt=""/><div className="detail-copy"><span className="section-kicker">{selected.type} · {selected.year}</span><h2>{selected.title}</h2><div className="detail-rating"><Star size={16} fill="currentColor"/> {selected.rating} / 10 <span>·</span> {selected.genre}</div><p>{selected.description}</p><p className="notice">ตัวอย่างหน้ารายละเอียด — ยังไม่ได้เชื่อมระบบเล่นวิดีโอ</p><button className="primary-btn" onClick={()=>setSelected(null)}>กลับไปเลือกชม</button></div></section></div>}
  </main>;
}
