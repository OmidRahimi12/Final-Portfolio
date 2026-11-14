import { Reveal } from '../../components/motion/Reveal.jsx'

export function SkillGroup({ group, index = 0 }) {
  return (
    <Reveal className="skill-group" delay={index * 0.08}>
      <div className="skill-group__head"><span className="skill-group__number">0{index + 1}</span><h3>{group.name}</h3></div>
      {group.description && <p>{group.description}</p>}
      <ul className="skill-list">
        {(group.items ?? []).map((item, itemIndex) => <li key={`${item}-${itemIndex}`}>{item}</li>)}
      </ul>
    </Reveal>
  )
}
