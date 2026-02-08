function Sidebar({ setPage, page }) {
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: '▣' },
    { id: 'products', label: 'Products', icon: '◈' },
    { id: 'orders', label: 'Orders', icon: '◎' },
  ];

  return (
    <aside className="sidebar-futuristic">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`sidebar-item ${page === item.id ? 'sidebar-item-active' : ''}`}
          onClick={() => setPage(item.id)}
        >
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-label">{item.label}</span>
          {page === item.id && <span className="sidebar-indicator" />}
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;
