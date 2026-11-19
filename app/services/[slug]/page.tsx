import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const detail: Record<string, { title: string; intro: string; description: string }> = {
  'family-law': { title: 'Семейное право', intro: 'Юридическая помощь в вопросах семьи и родительских прав.', description: 'Разберём обстоятельства вашей ситуации и возможные варианты действий по вопросам развода, алиментов, раздела имущества, места жительства ребёнка и порядка общения с ним. Помогу подготовить необходимые документы и представить ваши интересы.' },
  'civil-cases': { title: 'Гражданские дела', intro: 'Защита интересов в имущественных и договорных спорах.', description: 'Помощь по договорным спорам, взысканию долгов, вопросам недвижимости и трудовым спорам, возмещению ущерба и спорам с квартирными товариществами. Объём работы и возможную стратегию обсудим после знакомства с обстоятельствами дела.' },
  'administrative-cases': { title: 'Административные дела', intro: 'Обжалование решений государственных и муниципальных органов.', description: 'Помогу разобраться в содержании решения, предписания или отказа, оценить доступные способы обжалования и подготовить необходимые обращения и процессуальные документы.' },
  'criminal-cases': { title: 'Уголовные дела', intro: 'Юридическая помощь на досудебной стадии и в суде.', description: 'Защита интересов подозреваемых и обвиняемых, помощь при подготовке к допросу и разбор процессуальных документов. Обратитесь за консультацией как можно раньше, чтобы обсудить вашу ситуацию и дальнейшие шаги.' },
  'misdemeanor-cases': { title: 'Дела о проступках', intro: 'Помощь при производстве по делу о проступке.', description: 'Анализ материалов дела и протокола, подготовка возражений и обжалование решений о назначении штрафа. Возможные действия зависят от конкретных материалов и сроков по делу.' },
  'court-representation': { title: 'Представительство в суде', intro: 'Подготовка позиции и представление интересов в судебном процессе.', description: 'Подготовка исков, ходатайств и других процессуальных документов, работа с доказательствами и участие в судебных заседаниях по гражданским и уголовным делам.' },
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = detail[slug]
  if (!service) return <main className="detail-page"><div className="wrap"><Link href="/#services" className="text-link"><ArrowLeft size={15}/> Все услуги</Link><h1>Страница не найдена</h1></div></main>
  return <main className="detail-page"><div className="detail-header"><div className="wrap detail-nav"><Link href="/" className="brand"><span>ViruLex</span><small>ÕIGUSBÜROO</small></Link><Link href="/#services" className="text-link"><ArrowLeft size={15}/> Все услуги</Link></div></div><div className="wrap detail-content"><span className="eyebrow">ЮРИДИЧЕСКИЕ УСЛУГИ · VIRULEX</span><h1>{service.title}</h1><p className="detail-lead">{service.intro}</p><div className="detail-rule"/><p>{service.description}</p><p>Каждая ситуация индивидуальна. На консультации обсудим факты, возможные варианты и порядок дальнейшей работы — без обещания заранее определённого результата.</p><Link href="/#contact" className="button button-dark">Записаться на консультацию <ArrowRight size={16}/></Link></div><footer className="detail-footer"><div className="wrap"><span>ViruLex Õigusbüroo OÜ</span><span>Sompa 1, Jõhvi, Estonia</span><Link href="/">На главную</Link></div></footer></main>
}
