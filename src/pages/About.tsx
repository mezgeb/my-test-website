export default function About() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">About us</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Full of Life Adult Home Care is a small, home-like residence where
          seniors live with the dignity, comfort, and attentive care they
          deserve.
        </p>
      </div>

      <div className="space-y-3 max-w-2xl text-slate-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-slate-900">Our story</h2>
        <p>
          We opened our doors to offer families a different kind of option — a
          real home, not an institution. Our caregivers aren&apos;t rotating
          through shifts across a floor of strangers; they care for a small
          group of residents, every day, and get to know each one by name,
          by story, and by preference.
        </p>
        <p>
          Meals are made in our kitchen. Afternoons are spent in the
          backyard, the common room, or wherever each resident is most at
          ease. The pace is slower, the attention closer, and the care feels
          like it should — personal.
        </p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <h2 className="text-xl font-semibold text-slate-900">What we believe</h2>
        <ul className="space-y-3 text-slate-700 leading-relaxed">
          <li>
            <strong className="text-slate-900">Dignity first.</strong> Every
            resident is treated with respect, patience, and warmth — always.
          </li>
          <li>
            <strong className="text-slate-900">A real home.</strong>{' '}
            Home-cooked meals at the kitchen table, familiar faces every day,
            and the comforts of a house that feels lived in.
          </li>
          <li>
            <strong className="text-slate-900">Peace of mind for families.</strong>{' '}
            You&apos;ll always know how your loved one is doing. Communication
            is open, honest, and easy.
          </li>
          <li>
            <strong className="text-slate-900">Compassionate, attentive care.</strong>{' '}
            Our caregivers are trained, experienced, and genuinely love what
            they do.
          </li>
        </ul>
      </div>
    </section>
  )
}
