async function loadGames() {
  const grid = document.getElementById('grid');
  const count = document.getElementById('count');

  try {
    const res = await fetch('games.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('games.json tapılmadı');
    const games = await res.json();

    if (!Array.isArray(games) || games.length === 0) {
      grid.innerHTML = '<div class="empty">HƏLƏ OYUN YOXDUR — games.json-A BİRİNCİSİNİ ƏLAVƏ ET</div>';
      count.textContent = '0';
      return;
    }

    const liveCount = games.filter(g => g.status === 'live').length;
    count.textContent = String(liveCount);

    grid.innerHTML = games.map(renderCabinet).join('');
  } catch (err) {
    grid.innerHTML = '<div class="empty">games.json OXUNA BİLMƏDİ — Konsola bax</div>';
    console.error(err);
  }
}

function renderCabinet(game) {
  const isLive = game.status === 'live';
  const tag = isLive ? 'a' : 'div';
  const hrefAttr = isLive ? `href="${game.path}"` : '';
  const ribbon = isLive ? '' : '<span class="ribbon">TEZLİKLƏ</span>';

  return `
    <${tag} class="cabinet ${isLive ? 'live' : 'soon'}" ${hrefAttr}>
      ${ribbon}
      <div class="screen">${game.emoji || '🎮'}</div>
      <h2>${game.title}</h2>
      <div class="controls"><span></span><span></span></div>
    </${tag}>
  `;
}

loadGames();
