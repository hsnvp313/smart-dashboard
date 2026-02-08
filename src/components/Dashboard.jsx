function Dashboard() {
  const stats = [
    { title: 'Orders', value: '120', icon: '▣', trend: '+12%', color: 'cyan' },
    { title: 'Revenue', value: 'AED 15,000', icon: '◈', trend: '+8%', color: 'purple' },
    { title: 'Users', value: '45', icon: '◎', trend: '+5%', color: 'green' },
  ];

  return (
    <div className="page-content">
      <h2 className="page-title">Dashboard</h2>
      <div className="dashboard-cards">
        {stats.map((stat) => (
          <div key={stat.title} className={`stat-card stat-card-${stat.color}`}>
            <div className="stat-card-glow" />
            <div className="stat-card-header">
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-trend">{stat.trend}</span>
            </div>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-title">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
