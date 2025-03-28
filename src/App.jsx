import { useState } from 'react';

const roles = [
  { name: 'Ownership', description: 'Defines purpose and expectations. Governance starts here.' },
  { name: 'Board of Directors', description: 'Aligns operations with purpose. Accountable for direction and oversight.' },
  { name: 'CEO', description: 'Leads execution. Accountable for implementation of purpose-aligned strategy.' },
  { name: 'Staff / Systems', description: 'Implements internal and external work in support of purpose.' },
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState('home');

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Focus Governance App</h1>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setView('home')} style={{ marginRight: '1rem' }}>Governance Circle</button>
        <button onClick={() => setView('map')}>Governance Map</button>
      </div>

      {view === 'home' && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' }}>
            {roles.map(role => (
              <div key={role.name} style={{ border: '1px solid #ccc', padding: '1rem', cursor: 'pointer' }} onClick={() => setSelected(role)}>
                <h2>{role.name}</h2>
              </div>
            ))}
          </div>
          {selected && (
            <div style={{ marginTop: '2rem', border: '1px solid #aaa', padding: '1rem', borderRadius: '8px' }}>
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
            </div>
          )}
        </>
      )}

      {view === 'map' && (
        <div style={{ textAlign: 'center' }}>
          <h2>Governance Roles, Responsibilities & Relationships</h2>
          <img src="/FocusGovernanceStructure.jpeg" alt="Focus Governance Structure" style={{ width: '100%', maxWidth: '800px', margin: '2rem auto', display: 'block' }} />
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            This graphic shows the full cycle of governance purpose, delegation, and accountability.
          </p>
        </div>
      )}
    </div>
  );
}
