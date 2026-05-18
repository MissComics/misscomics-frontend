'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// ─── Cartoon Hamburger SVG ────────────────────────────────────────────────────
function BurgerIcon({ isOpen }) {
  const base = "absolute left-0 right-0 transition-all duration-[450ms]"
  const ease = "cubic-bezier(0.34, 1.56, 0.64, 1)"

  const layers = {
    topBun:  isOpen ? "-translate-y-[18px] -rotate-[8deg]"  : "top-0",
    lettuce: isOpen ? "-translate-y-[10px] rotate-[4deg]"   : "top-[6px]",
    cheese:  isOpen ? "-translate-y-[4px] -rotate-[3deg]"   : "top-[12px]",
    patty:   isOpen ? "translate-y-[4px] rotate-[3deg]"     : "top-[18px]",
    tomato:  isOpen ? "translate-y-[10px] -rotate-[4deg]"   : "top-[24px]",
    botBun:  isOpen ? "translate-y-[18px] rotate-[8deg]"    : "top-[30px]",
  }

  return (
    <div className="relative w-9 h-9">
      {/* Top Bun */}
      <svg className={`${base} ${layers.topBun} h-2`} viewBox="0 0 36 8">
        <rect x="0" y="2" width="36" height="6" rx="3" fill="#c8820a"/>
        <ellipse cx="18" cy="3" rx="14" ry="3" fill="#d4942a"/>
        <circle cx="10" cy="2" r="1.5" fill="#c8820a" opacity="0.6"/>
        <circle cx="20" cy="1.5" r="1.2" fill="#c8820a" opacity="0.5"/>
        <circle cx="27" cy="2.2" r="1" fill="#c8820a" opacity="0.4"/>
      </svg>
      {/* Lettuce */}
      <svg className={`${base} ${layers.lettuce} h-[6px]`} viewBox="0 0 36 6">
        <path d="M0 3 Q4 0 8 3 Q12 6 16 3 Q20 0 24 3 Q28 6 32 3 Q34 1 36 3"
          fill="none" stroke="#4a9e3f" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      {/* Cheese */}
      <svg className={`${base} ${layers.cheese} h-[5px]`} viewBox="0 0 36 5">
        <rect x="0" y="0" width="36" height="5" rx="1" fill="#f5c518"/>
        <polygon points="0,0 4,5 0,5" fill="#e6b800"/>
        <polygon points="36,0 32,5 36,5" fill="#e6b800"/>
      </svg>
      {/* Patty */}
      <svg className={`${base} ${layers.patty} h-[7px]`} viewBox="0 0 36 7">
        <rect x="0" y="0" width="36" height="7" rx="3" fill="#6b3a1f"/>
        <rect x="2" y="1" width="32" height="2" rx="1" fill="#7a4525" opacity="0.5"/>
      </svg>
      {/* Tomato */}
      <svg className={`${base} ${layers.tomato} h-[5px]`} viewBox="0 0 36 5">
        <rect x="0" y="0" width="36" height="5" rx="1" fill="#e8342a"/>
        <rect x="4" y="1" width="8" height="3" rx="1" fill="#cc2a20" opacity="0.5"/>
        <rect x="18" y="1" width="10" height="3" rx="1" fill="#cc2a20" opacity="0.4"/>
      </svg>
      {/* Bottom Bun */}
      <svg className={`${base} ${layers.botBun} h-[6px]`} viewBox="0 0 36 6">
        <rect x="0" y="0" width="36" height="5" rx="2" fill="#c8820a"/>
        <rect x="0" y="0" width="36" height="3" rx="1" fill="#d4942a" opacity="0.5"/>
      </svg>
    </div>
  )
}

// ─── Community Icon ───────────────────────────────────────────────────────────
function CommunityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className="w-6 h-6">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      <circle cx="19" cy="8" r="3" fill="none"/>
      <path d="M22 20c0-2.5-1.5-4.5-3-5.5"/>
    </svg>
  )
}

// ─── Settings Icon ────────────────────────────────────────────────────────────
function SettingsIcon({ isOpen }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}>
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42
               M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  )
}

// ─── Hamburger menu items ─────────────────────────────────────────────────────
const BURGER_ITEMS = [
  { key: 'ads',       label: 'Ads',           emoji: '📣', href: '/ads' },
  { key: 'tags',      label: 'Tags',          emoji: '🏷️', href: '/tags' },
  { key: 'nothing',   label: 'Nothing Burger', emoji: '🫙', href: '/nothing' },
  { key: 'dashboard', label: 'Dashboard',     emoji: '📊', href: '/dashboard' },
  { key: 'favauthor', label: 'Fav Author',    emoji: '✍️', href: '/fav-author' },
]

// ─── Settings menu items ──────────────────────────────────────────────────────
const SETTINGS_ITEMS = [
  { label: 'Profile',          emoji: '👤', href: '/profile' },
  { label: 'Subscription',     emoji: '💳', href: '/subscription' },
  { label: 'Dashboard Edit',   emoji: '🎨', href: '/dashboard/edit' },
  { label: 'Connect w\' Us',   emoji: '🤝', href: '/connect' },
  { label: 'Suggestion Board', emoji: '💡', href: '/suggestions' },
]

// ─── Main Navbar ─────────────────────────────────────────────────────────────
const Navbar = () => {
  const [burgerOpen, setBurgerOpen]     = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [subPanelOpen, setSubPanelOpen] = useState(false)
  const [pinnedItem, setPinnedItem]     = useState(null)   // key of pinned item
  const [darkMode, setDarkMode]         = useState(true)

  const burgerRef   = useRef(null)
  const settingsRef = useRef(null)

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (burgerRef.current && !burgerRef.current.contains(e.target)) {
        setBurgerOpen(false)
        setSubPanelOpen(false)
      }
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSettingsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handlePinItem = (key) => {
    setPinnedItem(key)
    setBurgerOpen(false)
    setSubPanelOpen(false)
  }

  const visibleBurgerItems = BURGER_ITEMS.filter(i => i.key !== pinnedItem)
  const pinnedBurgerItem   = BURGER_ITEMS.find(i => i.key === pinnedItem)

  return (
    <>
      {/* ── Desktop / Tablet Navbar ── */}
      <nav className="hidden md:flex relative items-center justify-between
                      px-6 py-3 border-b border-gray-800 bg-black z-50">

        {/* Site name = home */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight
                                   hover:text-purple-400 transition-colors">
          MissComic
        </Link>

        <div className="flex items-center gap-4">

          {/* ── Placeholder slot ── */}
          <div className="relative group">
            {pinnedBurgerItem ? (
              <button
                onClick={() => setPinnedItem(null)}
                title={`${pinnedBurgerItem.label} (click to unpin)`}
                className="w-9 h-9 flex items-center justify-center rounded-xl
                           bg-gray-900 hover:bg-gray-800 transition text-xl">
                {pinnedBurgerItem.emoji}
              </button>
            ) : (
              <div className="w-9 h-9 flex items-center justify-center rounded-xl
                              border-2 border-dashed border-gray-700 text-gray-600
                              text-xs font-bold select-none cursor-default">
                +
              </div>
            )}
          </div>

          {/* ── Community ── */}
          <Link href="/community"
            className="text-gray-500 hover:text-white transition-colors p-2
                       rounded-xl hover:bg-gray-900">
            <CommunityIcon />
          </Link>

          {/* ── Hamburger ── */}
          <div className="relative" ref={burgerRef}>
            <button
              onClick={() => {
                setBurgerOpen(o => !o)
                setSettingsOpen(false)
              }}
              className="w-11 h-11 flex items-center justify-center
                         rounded-xl hover:bg-gray-900 transition"
              aria-label="Toggle menu">
              <BurgerIcon isOpen={burgerOpen} />
            </button>

            {burgerOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-gray-950
                              border border-gray-800 rounded-2xl p-2
                              shadow-2xl z-50 animate-in fade-in slide-in-from-top-2
                              duration-200 flex flex-col gap-0.5">

                {visibleBurgerItems.map(item => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setBurgerOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                               text-gray-300 hover:bg-gray-800 hover:text-white
                               text-sm transition">
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-800 my-1" />

                {/* Add to main */}
                <button
                  onClick={() => setSubPanelOpen(o => !o)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                             text-gray-300 hover:bg-gray-800 hover:text-purple-400
                             text-sm transition w-full text-left">
                  <span>📌</span>
                  <span className="flex-1">Add to main</span>
                  <span className="text-[9px] bg-purple-900/50 text-purple-400
                                  rounded px-1.5 py-0.5 font-bold tracking-wide">
                    SLOT
                  </span>
                </button>

                {/* Sub panel */}
                {subPanelOpen && (
                  <div className="bg-gray-900 rounded-xl p-1.5 flex flex-col gap-0.5">
                    <p className="text-[10px] text-gray-600 font-bold
                                  uppercase tracking-widest px-2 py-1">
                      Pin to navbar
                    </p>
                    {BURGER_ITEMS.map(item => (
                      <button
                        key={item.key}
                        onClick={() => handlePinItem(item.key)}
                        className={`flex items-center gap-2 px-2 py-2 rounded-lg
                                    text-xs transition w-full text-left
                                    ${pinnedItem === item.key
                                      ? 'bg-purple-900/40 text-purple-300'
                                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                        <span>{item.emoji}</span>
                        <span>{item.label}</span>
                        {pinnedItem === item.key && (
                          <span className="ml-auto text-purple-500">✓</span>
                        )}
                      </button>
                    ))}
                    {pinnedItem && (
                      <button
                        onClick={() => { setPinnedItem(null); setSubPanelOpen(false) }}
                        className="flex items-center gap-2 px-2 py-2 rounded-lg
                                    text-xs text-red-500 hover:bg-red-950 transition">
                        <span>✕</span> Remove pin
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── Settings ── */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => {
                setSettingsOpen(o => !o)
                setBurgerOpen(false)
                setSubPanelOpen(false)
              }}
              className="text-gray-500 hover:text-white transition p-2
                         rounded-xl hover:bg-gray-900"
              aria-label="Settings">
              <SettingsIcon isOpen={settingsOpen} />
            </button>

            {settingsOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-gray-950
                              border border-gray-800 rounded-2xl p-2 shadow-2xl
                              z-50 flex flex-col gap-0.5">

                {SETTINGS_ITEMS.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setSettingsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                               text-gray-300 hover:bg-gray-800 hover:text-white
                               text-sm transition">
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}

                {/* Theme toggle */}
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                text-gray-300 text-sm border-t border-gray-800 mt-1">
                  <span>🌗</span>
                  <span className="flex-1">UI Experience</span>
                  <div className="flex bg-gray-800 rounded-lg p-0.5 gap-0.5">
                    <button
                      onClick={() => setDarkMode(false)}
                      className={`text-[11px] px-2 py-1 rounded-md font-semibold transition
                                  ${!darkMode ? 'bg-gray-600 text-white' : 'text-gray-500'}`}>
                      Light
                    </button>
                    <button
                      onClick={() => setDarkMode(true)}
                      className={`text-[11px] px-2 py-1 rounded-md font-semibold transition
                                  ${darkMode ? 'bg-gray-600 text-white' : 'text-gray-500'}`}>
                      Dark
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-800 my-1" />

                <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                   text-gray-300 hover:bg-gray-800 hover:text-white
                                   text-sm transition w-full text-left">
                  <span>🚪</span> Log Out
                </button>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                   text-gray-400 hover:bg-red-950 hover:text-red-400
                                   text-sm transition w-full text-left">
                  <span>🗑️</span> Delete My Data
                </button>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* ── Mobile Bottom Navbar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50
                      bg-black border-t border-gray-800
                      flex items-center justify-around px-2 h-[68px]
                      safe-area-pb">
        <MobileTab href="/"             label="Home"         icon="home" />
        <MobileTab href="/community"    label="Community"    icon="community" />
        <MobileTab href="/settings"     label="Settings"     icon="settings" />
        <MobileTab href="/subscription" label="Subscription" icon="subscription" />
      </nav>

      {/* Spacer so content isn't hidden behind mobile nav */}
      <div className="md:hidden h-[68px]" />
    </>
  )
}

// ─── Mobile Tab ──────────────────────────────────────────────────────────────
function MobileTab({ href, label, icon }) {
  const icons = {
    home: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6">
        <path d="M3 12L12 3l9 9"/>
        <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"/>
      </svg>
    ),
    community: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
    settings: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42
                 M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    subscription: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6">
        <rect x="3" y="6" width="18" height="13" rx="2"/>
        <path d="M3 10h18M7 15h2M11 15h2"/>
      </svg>
    ),
  }

  return (
    <Link href={href}
      className="flex flex-col items-center gap-1 px-4 py-2 rounded-2xl
                 text-gray-500 hover:text-purple-400 hover:bg-gray-900
                 transition-all active:scale-95">
      {icons[icon]}
      <span className="text-[10px] font-semibold">{label}</span>
    </Link>
  )
}

export default Navbar
