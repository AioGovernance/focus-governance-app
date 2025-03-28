import { useState } from 'react'

const roles = [
  { name: 'Ownership', description: 'Defines the purpose of the organization. Governance starts here.' },
  { name: 'Board of Directors', description: 'Aligns the organization with purpose. Accountable for oversight and support.' },
  { name: 'CEO', description: 'Leads execution and operations to achieve the organization’s defined purpose.' },
  { name: 'Staff / Systems', description: 'Provides capacity and implementation support for strategic and operational success.' },
]

export default function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Governance Circle Prototype</h1>
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
    </div>
  )
}
