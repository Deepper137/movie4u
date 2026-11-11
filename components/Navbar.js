'use client';
import { Film, Search, UserRound } from 'lucide-react';

export default function Navbar({ search, setSearch }) {
  return <header className="navbar"><a className="brand" href="#top"><span className="brand-mark"><Film size={22}/></span>MOVIE<span>4U</span></a><nav><a href="#home">หน้าแรก</a><a href="#movies">ภาพยนตร์</a><a href="#series">ซีรีส์</a><a href="#about">เกี่ยวกับเรา</a></nav><div className="nav-actions"><label className="search-box"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="ค้นหาหนัง..." /></label><button className="user-btn" aria-label="บัญชีผู้ใช้"><UserRound size={19}/></button></div></header>;
}
