import './App.css'
import heroPortraitBg from './assets/canva/hero-portrait-bg.png'
import heroTeamLeft from './assets/canva/hero-team-left.png'
import heroTeamCenter from './assets/canva/hero-team-center.png'
import heroTeamRight from './assets/canva/hero-team-right.png'
import whoBackground from './assets/canva/quem-somos-bg.png'
import fundamentalsImageOne from './assets/canva/fundamentos-1.jpg'
import fundamentalsImageTwo from './assets/canva/fundamentos-2.jpg'
import fundamentalsImageThree from './assets/canva/fundamentos-3.jpg'

const brandLogo = '/DS-Corp.svg'

const heroTags = [
  'Business Intelligence',
  'Contabilidade',
  'Controladoria',
]

const whoWeAreParagraphs = [
  'Somos uma empresa especializada em soluções inteligentes baseada em dados, ajudando negócios a coletar, organizar, analisar e transformar informações em estratégias de crescimento.',
  'Na DS Corp, a tecnologia é nossa base, mas os dados são o nosso combustível.',
]

const whoHighlights = [
  'Leitura contábil com visão gerencial',
  'Estratégia baseada em dados confiáveis',
  'Estrutura para decisões rápidas e seguras',
]

const fundamentalsText =
  'Em um cenário cada vez mais orientado por dados e resultados, as áreas de Contabilidade e Controladoria se destacam como pilares fundamentais da gestão empresarial. Embora tenham funções distintas, elas são complementares e, quando atuam de forma integrada, potencializam a qualidade das informações e fortalecem a tomada de decisões estratégicas.'

const accountingBulletPoints = [
  'Balanço Patrimonial',
  'Demonstração do Resultado do Exercício (DRE)',
  'Demonstração de Fluxo de Caixa (DFC)',
]

const controllingBulletPoints = [
  'Planejamento estratégico e orçamentário',
  'Análise de indicadores de desempenho',
  'Apoio à tomada de decisões gerenciais',
  'Avaliação de rentabilidade por produto, cliente ou unidade de negócio',
]

const integrationBulletPoints = [
  'Promovem transparência e confiabilidade das informações.',
  'Facilitam a análise de desempenho e a identificação de desvios.',
  'Conectam o passado, o presente e o futuro do negócio.',
  'Oferecem uma visão integrada e estratégica da operação.',
]

const consultingBenefits = [
  'Automatização de relatórios contábeis e gerenciais com atualizações em tempo real',
  'Análise de performance financeira cruzando receitas, despesas, tributos e KPIs operacionais',
  'Planejamento e orçamento mais precisos com base em dados históricos e tendências de mercado',
  'Conformidade e auditoria facilitadas com rastreabilidade completa das informações',
  'Capacidade de resposta rápida a variações de mercado pela integração entre dados financeiros e operacionais',
]

const fundamentalsGallery = [
  {
    src: fundamentalsImageOne,
    alt: 'Profissionais analisando documentos financeiros',
  },
  {
    src: fundamentalsImageTwo,
    alt: 'Relatórios, calculadora e planilhas em mesa corporativa',
  },
  {
    src: fundamentalsImageThree,
    alt: 'Documentos com gráficos e anotações estratégicas',
  },
]

const comparisonCards = [
  {
    title: 'O Papel da Contabilidade',
    intro:
      'A Contabilidade é a ciência que registra, classifica e interpreta os fatos econômicos e financeiros de uma empresa. Seu foco principal é garantir a fidedignidade das demonstrações contábeis, como:',
    items: accountingBulletPoints,
    closing:
      'Essas informações são essenciais para avaliar o patrimônio, o desempenho econômico e a situação financeira da organização, servindo como base legal, fiscal e gerencial.',
  },
  {
    title: 'O Papel da Controladoria',
    intro:
      'A Controladoria atua de forma mais estratégica. Seu objetivo é coletar, analisar e interpretar dados contábeis, financeiros e operacionais, transformando essas informações em insumos para planejamento, controle e decisão.',
    items: controllingBulletPoints,
    closing:
      'Enquanto a contabilidade foca em registrar o passado com precisão, a controladoria utiliza esses registros para projetar o futuro com inteligência.',
  },
]

const toolCards = [
  {
    title: 'O que é o Microsoft Fabric?',
    text:
      'O Microsoft Fabric é uma plataforma unificada de análise de dados desenvolvida pela Microsoft, lançada oficialmente em 2023. Seu objetivo é integrar diversas ferramentas de engenharia de dados, ciência de dados, business intelligence e armazenamento em um único ambiente.',
  },
  {
    title: 'O que é o Databricks?',
    text:
      'O Databricks é uma plataforma unificada de análise de dados, engenharia de dados, ciência de dados e machine learning, baseada no Apache Spark. Ela foi criada para facilitar o processamento de grandes volumes de dados de forma rápida, escalável e colaborativa.',
  },
]

function AnalyticsIcon() {
  return (
    <svg
      className="analytics-illustration"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="32" y="48" width="118" height="96" rx="16" stroke="currentColor" strokeWidth="7" />
      <path d="M56 117V95" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M82 117V79" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M108 117V101" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M134 117V69" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M54 72L83 52L106 62L145 28"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M136 28H153V45" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M89 145V171" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M59 171H120" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M185 116C211.51 116 233 137.49 233 164C233 190.51 211.51 212 185 212C158.49 212 137 190.51 137 164C137 137.49 158.49 116 185 116Z"
        stroke="currentColor"
        strokeWidth="7"
      />
      <path d="M184.87 141.5V187.5" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M198 150.5C194.99 145.83 190.34 143.5 184.06 143.5C176.37 143.5 171.5 147.37 171.5 153.75C171.5 160.56 176.25 163.95 185.75 165.4C194.34 166.74 198.62 169.73 198.62 176.88C198.62 184.22 193.26 188.5 184.19 188.5C176.73 188.5 171.12 185.81 167.5 180.44"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M137 194L154 177" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M151 191L168 208" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="content-shell site-header__inner">
          <nav className="site-nav" aria-label="Navegação principal">
            <a href="#quem-somos">Quem somos</a>
            <a href="#fundamentos">Fundamentos</a>
            <a href="#ferramentas">Ferramentas</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <section className="hero-section" id="top">
        <div className="content-shell hero-stage">
          <div className="hero-layout">
            <div className="hero-copy">
              <a className="brand-link" href="#top" aria-label="DS Corp">
                <span className="brand-link__mark">
                  <img className="brand-link__logo" src={brandLogo} alt="DS Corp" />
                </span>

                <span className="brand-link__copy">
                  <strong>DS Corp</strong>
                  <span>Business Intelligence</span>
                </span>
              </a>

              <p className="eyebrow">Business Intelligence com visão contábil e gerencial</p>

              <h1>
                <span>Tecnologia é a nossa base,</span>
                <span>mas os dados são o nosso</span>
                <span>combustível.</span>
              </h1>

              <p className="hero-lead">
                Estruturamos informação, leitura financeira e inteligência operacional para
                transformar números dispersos em direção estratégica.
              </p>

              <div className="tag-row" aria-label="Áreas de atuação">
                {heroTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="hero-insight">
                <div>
                  <strong>Dados que geram clareza.</strong>
                  <p>Menos ruído operacional, mais leitura estratégica para a gestão.</p>
                </div>

                <div className="hero-insight__icon">
                  <AnalyticsIcon />
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-glow hero-glow--one"></div>
              <div className="hero-glow hero-glow--two"></div>
              <img className="hero-portrait" src={heroPortraitBg} alt="" />
              <img className="hero-person hero-person--left" src={heroTeamLeft} alt="" />
              <img className="hero-person hero-person--center" src={heroTeamCenter} alt="" />
              <img className="hero-person hero-person--right" src={heroTeamRight} alt="" />
              <div className="hero-conceal hero-conceal--bouquet"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--who" id="quem-somos">
        <div className="content-shell">
          <div className="section-intro">
            <p className="eyebrow">Quem somos</p>
            <h2>Dados, gestão e execução no mesmo plano.</h2>
            <p>
              A DS Corp une inteligência analítica, contabilidade e controladoria para
              criar uma base de decisão mais confiável, clara e útil para o negócio.
            </p>
          </div>

          <div className="who-layout">
            <article className="panel panel--story">
              {whoWeAreParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="story-highlights">
                {whoHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>

            <div className="who-visual">
              <img className="who-background" src={whoBackground} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--fundamentals" id="fundamentos">
        <div className="content-shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Fundamentos</p>
            <h2>Contabilidade e controladoria atuando em conjunto.</h2>
            <p>{fundamentalsText}</p>
          </div>

          <div className="fundamentals-grid">
            {fundamentalsGallery.map((item, index) => (
              <figure className={`fundamentals-card fundamentals-card--${index + 1}`} key={item.src}>
                <img src={item.src} alt={item.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--comparison">
        <div className="content-shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Pilares</p>
            <h2>Do registro preciso à leitura estratégica.</h2>
          </div>

          <div className="comparison-grid">
            {comparisonCards.map((card, index) => (
              <article
                className={`comparison-card comparison-card--${index === 0 ? 'light' : 'dark'}`}
                key={card.title}
              >
                <span className="comparison-card__index">0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.intro}</p>

                <ul className="copy-list">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p>{card.closing}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--integration">
        <div className="content-shell">
          <div className="integration-layout">
            <article className="integration-lead panel panel--dark">
              <p className="eyebrow eyebrow--inverse">Sinergia</p>
              <h2>Como se complementam?</h2>
              <p>
                A Contabilidade gera os dados, e a Controladoria transforma esses dados em
                valor. Juntas, criam visibilidade real sobre a operação e sustentam decisões
                mais rápidas, embasadas e inteligentes.
              </p>
            </article>

            <div className="integration-points">
              {integrationBulletPoints.map((item) => (
                <article className="integration-point" key={item}>
                  <span className="integration-point__marker"></span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <article className="panel panel--accent integration-summary">
            <p>
              Esse trabalho conjunto é essencial na construção de dashboards gerenciais,
              relatórios de performance, análises de margem de contribuição e cenários de
              orçamento versus realizado. A integração entre Contabilidade e Controladoria
              fortalece a gestão empresarial e torna a tomada de decisão mais embasada, ágil
              e estratégica.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--tools" id="ferramentas">
        <div className="content-shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Ferramentas</p>
            <h2>Tecnologia aplicada com contexto financeiro.</h2>
          </div>

          <div className="tool-grid">
            {toolCards.map((card) => (
              <article className="panel tool-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <article className="panel consulting-card">
            <p className="eyebrow">Consultoria integrada</p>
            <h3>
              Por que unir Business Intelligence, contabilidade e controladoria?
            </h3>

            <p>
              Em um cenário cada vez mais competitivo e orientado por dados, tomar decisões
              com base em suposições ou planilhas fragmentadas custa caro. Por isso, unir
              Databricks, Microsoft Fabric, contabilidade e controladoria cria uma vantagem
              estratégica real para a gestão.
            </p>

            <p>
              Essa abordagem transforma dados brutos em informação acionável, conecta os
              números à realidade econômica da empresa e aumenta a qualidade da execução.
            </p>

            <div className="benefit-grid">
              {consultingBenefits.map((item) => (
                <article className="benefit-card" key={item}>
                  <span className="benefit-card__bar"></span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section--contact" id="contato">
        <div className="content-shell">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow eyebrow--inverse">Entre em contato</p>
              <h2>DSCORP_</h2>
              <p className="contact-line">62 9853-3383</p>
              <p className="contact-line">CONTATO@DSCORP.TOP</p>
              <p className="contact-line">CNPJ: 36.406.295/0001-48 DANIEL DE SOUZA COSTA - ME</p>
            </div>

            <div className="contact-actions" aria-label="Ações de contato">
              <a href="tel:+556298533383">Ligar agora</a>
              <a href="mailto:contato@dscorp.top">Enviar e-mail</a>
              <span>LINKEDIN</span>
              <span>PORTFOLIO</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
