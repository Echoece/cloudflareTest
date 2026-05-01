import './App.css'

function App() {
  const patient = {
    name: 'Jane Doe',
    dob: '1988-04-17',
    mrn: 'MRN-104293',
    allergies: ['Penicillin (rash)'],
  }

  const patientHistory = [
    { date: '2026-03-05', type: 'Visit', note: 'Annual physical. BP slightly elevated.' },
    { date: '2025-11-12', type: 'Diagnosis', note: 'Seasonal allergic rhinitis.' },
    { date: '2025-08-20', type: 'Procedure', note: 'Tetanus booster (Tdap).' },
  ]

  const drugHistory = [
    {
      name: 'Lisinopril',
      dose: '10 mg',
      sig: 'PO daily',
      start: '2026-03-05',
      status: 'Active',
    },
    {
      name: 'Cetirizine',
      dose: '10 mg',
      sig: 'PO daily PRN',
      start: '2025-11-12',
      status: 'Active',
    },
    {
      name: 'Azithromycin',
      dose: '250 mg',
      sig: 'Z-Pak',
      start: '2024-12-02',
      status: 'Completed',
    },
  ]

  const testHistory = [
    { date: '2026-03-05', name: 'CBC', result: 'WNL', status: 'Final' },
    { date: '2026-03-05', name: 'CMP', result: 'WNL', status: 'Final' },
    { date: '2026-03-10', name: 'Lipid panel', result: 'LDL mildly elevated', status: 'Final' },
  ]

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="brandMark" aria-hidden="true" />
          <div>
            <div className="brandTitle">Doctor Prescription</div>
            <div className="brandSub">Single-page demo for Cloudflare Pages</div>
          </div>
        </div>

        <div className="patientCard" role="group" aria-label="Patient summary">
          <div className="patientName">{patient.name}</div>
          <div className="metaRow">
            <span className="pill">DOB {patient.dob}</span>
            <span className="pill">{patient.mrn}</span>
            <span className="pill pillWarn">Allergies: {patient.allergies.join(', ')}</span>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="panel" aria-label="Patient history">
          <div className="panelHeader">
            <h2>Patient history</h2>
            <div className="panelHint">Most recent first</div>
          </div>
          <ul className="list">
            {patientHistory.map((item) => (
              <li key={`${item.date}-${item.type}`} className="row">
                <div className="rowLeft">
                  <div className="rowTitle">{item.type}</div>
                  <div className="rowSub">{item.note}</div>
                </div>
                <div className="rowRight">{item.date}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel" aria-label="Drug history">
          <div className="panelHeader">
            <h2>Drug history</h2>
            <div className="panelHint">Active + past medications</div>
          </div>
          <ul className="list">
            {drugHistory.map((drug) => (
              <li key={`${drug.name}-${drug.start}`} className="row">
                <div className="rowLeft">
                  <div className="rowTitle">
                    {drug.name} <span className="muted">— {drug.dose}</span>
                  </div>
                  <div className="rowSub">{drug.sig}</div>
                </div>
                <div className="rowRight">
                  <div className={`status ${drug.status === 'Active' ? 'statusActive' : ''}`}>
                    {drug.status}
                  </div>
                  <div className="mutedSmall">{drug.start}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel" aria-label="Test history">
          <div className="panelHeader">
            <h2>Test history</h2>
            <div className="panelHint">Labs & imaging</div>
          </div>
          <ul className="list">
            {testHistory.map((test) => (
              <li key={`${test.date}-${test.name}`} className="row">
                <div className="rowLeft">
                  <div className="rowTitle">{test.name}</div>
                  <div className="rowSub">{test.result}</div>
                </div>
                <div className="rowRight">
                  <div className="status">{test.status}</div>
                  <div className="mutedSmall">{test.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
