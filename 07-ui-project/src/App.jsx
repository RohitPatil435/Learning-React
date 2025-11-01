
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      intro: 'Empowering customers with seamless banking solutions that exceed expectations and build lasting trust.',
      tag: 'Satisfied',
      color: '#10b981'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661578704127-8708237189bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: 'Reaching communities that lack access to essential financial services and creating opportunities for growth.',
      tag: 'Underserved',
      color: '#f59e0b'
    },
    {
      img: 'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: 'Providing accessible financial solutions to those with limited banking options and helping them thrive.',
      tag: 'Underbanked',
      color: '#ef4444'
    },
    {
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: 'Supporting entrepreneurs and small businesses with tailored financial products that fuel innovation.',
      tag: 'Entrepreneurs',
      color: '#8b5cf6'
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
      intro: 'Delivering modern digital banking experiences that adapt to the fast-paced lifestyle of young professionals.',
      tag: 'Millennials',
      color: '#3b82f6'
    },
    {
      img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: 'Helping families secure their future with comprehensive wealth management and retirement planning services.',
      tag: 'Family-Focused',
      color: '#ec4899'
    },
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
