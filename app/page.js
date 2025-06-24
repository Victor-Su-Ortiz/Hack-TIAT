import MatrixRain from './components/MatrixRain';
import CursorTrail from './components/CursorTrail';
import GlitchText from './components/GlitchText';

export default function Home() {
  return (
    <>
      <MatrixRain />
      <CursorTrail />
      
      <div className="terminal-window">
        <div className="terminal-header">
          <pre>{`┌─────────────────────────────────────────────────────────────────────────────┐
│ ◯ ◯ ◯  ART_HACK_2024.exe - POETIC COMPUTING TERMINAL                    [-][x]│
└─────────────────────────────────────────────────────────────────────────────┘`}</pre>
        </div>
        
        <header>
          <pre className="main-ascii-logo">
{`
     ▄▄▄       ██▀███  ▄▄▄█████▓    ██░ ██  ▄▄▄       ▄████▄   ██ ▄█▀
    ▒████▄    ▓██ ▒ ██▒▓  ██▒ ▓▒   ▓██░ ██▒▒████▄    ▒██▀ ▀█   ██▄█▒ 
    ▒██  ▀█▄  ▓██ ░▄█ ▒▒ ▓██░ ▒░   ▒██▀▀██░▒██  ▀█▄  ▒▓█    ▄ ▓███▄░ 
    ░██▄▄▄▄██ ▒██▀▀█▄  ░ ▓██▓ ░    ░▓█ ░██ ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓██ █▄ 
     ▓█   ▓██▒░██▓ ▒██▒  ▒██▒ ░    ░▓█▒░██▓ ▓█   ▓██▒▒ ▓███▀ ░▒██▒ █▄
     ▒▒   ▓▒█░░ ▒▓ ░▒▓░  ▒ ░░       ▒ ░░▒░▒ ▒▒   ▓▒█░░ ░▒ ▒  ░▒ ▒▒ ▓▒
      ▒   ▒▒ ░  ░▒ ░ ▒░   ░          ░ ░░ ░  ▒   ▒▒ ░  ░  ▒   ░ ░▒ ▒░
      ░   ▒     ░░   ░  ░            ░  ░░    ░   ▒        ░   ░ ░░ ░ 
          ░  ░   ░                        ░        ░  ░ ░       ░  ░   
                                                        ░               
`}
          </pre>
          
          <pre className="subtitle-ascii">
{`╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║  ██████╗  ██████╗ ███████╗████████╗██╗ ██████╗     ██████╗ ██████╗ ███╗   ███╗║
║  ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██║██╔════╝    ██╔════╝██╔═══██╗████╗ ████║║
║  ██████╔╝██║   ██║█████╗     ██║   ██║██║         ██║     ██║   ██║██╔████╔██║║
║  ██╔═══╝ ██║   ██║██╔══╝     ██║   ██║██║         ██║     ██║   ██║██║╚██╔╝██║║
║  ██║     ╚██████╔╝███████╗   ██║   ██║╚██████╗    ╚██████╗╚██████╔╝██║ ╚═╝ ██║║
║  ╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚═╝ ╚═════╝     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝║
║                                                                               ║
║                     CRITICAL & CREATIVE AI EXPLORATIONS                       ║
╚═══════════════════════════════════════════════════════════════════════════════╝`}
          </pre>

          <pre className="terminal-prompt">
{`
C:\\POETIC_COMPUTING> _
> Initializing creative AI protocols...
> Loading neural networks... [████████████████████] 100%
> Establishing human-machine poetry interface... CONNECTED
> Ready to hack reality through code & consciousness_`}
          </pre>
        </header>
        
        <nav>
          <pre className="nav-ascii">
{`┌─────────────────────────────────────────────────────────────────────────────┐
│  [F1] ABOUT     [F2] SCHEDULE     [F3] THEMES     [F4] SPONSORS     [F5] JOIN │
└─────────────────────────────────────────────────────────────────────────────┘`}
          </pre>
          <div className="nav-links">
            <a href="#about">[ABOUT.TXT]</a>
            <a href="#schedule">[SCHEDULE.LOG]</a>
            <a href="#themes">[THEMES.MD]</a>
            <a href="#sponsors">[SPONSORS.DAT]</a>
            <a href="#register">[REGISTER.EXE]</a>
          </div>
        </nav>
        
        <div className="content-container">
          <section id="about" className="terminal-section">
            <pre className="section-header">
{`┌──────────────────────────────────────────────────────────────────────────────┐
│ > cat ABOUT.TXT                                                              │
├──────────────────────────────────────────────────────────────────────────────┤`}
            </pre>
            
            <pre className="ascii-robot">
{`                    ╭─────────────────────────╮
                    │   ╱◣_◢╲    ╱◣_◢╲       │
                    │  ╱ ◉   ◉╲╱◉   ◉ ╲      │
                    │  │   ━━━━━━━━   │       │
                    │  │  ╱─────────╲  │       │
                    │  ╲ │ >THINK< │ ╱        │
                    │   ╲╰─────────╯╱         │
                    │    ╱║║║║║║║║║╲          │
                    │   ╱═════════════╲       │
                    │  ║ NEURAL  NET  ║       │
                    │  ║═════════════║       │
                    │  ║ 01001000 01 ║       │
                    │  ║ 01100001 01 ║       │
                    │  ║ 01100011 01 ║       │
                    │  ║ 01101011 00 ║       │
                    │  ╚═════════════╝       │
                    ╰─────────────────────────╯`}
            </pre>
            
            <div className="terminal-text">
              <p>&gt; Welcome to ART HACK 2024: POETIC COMPUTING</p>
              <p>&gt; A 3-day hackathon exploring critical and creative uses of AI</p>
              <p>&gt; Where artists, engineers, and poets collaborate to build experimental AI projects</p>
              <p>&gt; Push the boundaries of what AI can create, question, and imagine</p>
              <br />
              <pre className="info-table">
{`┌─────────────────────┬──────────────────────────────────────┐
│ PARAMETER           │ VALUE                                │
├─────────────────────┼──────────────────────────────────────┤
│ Event.Name          │ "ART HACK: POETIC COMPUTING"         │
│ Event.Theme         │ "Critical & Creative AI"             │
│ Event.Dates         │ [2024-08-15, 2024-08-17]            │
│ Event.Location      │ "Frontier Tower, SF"                 │
│ Event.Type          │ HACKATHON + EXHIBITION              │
│ Participants.Max    │ 100                                 │
│ Entry.Fee           │ $10.00                              │
│ Projects.Expected   │ ["generative", "critical", "poetic"]│
└─────────────────────┴──────────────────────────────────────┘`}
              </pre>
            </div>
            
            <pre className="section-footer">
{`└──────────────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </section>

          <section id="themes" className="terminal-section">
            <pre className="section-header">
{`┌──────────────────────────────────────────────────────────────────────────────┐
│ > ls -la THEMES/                                                             │
├──────────────────────────────────────────────────────────────────────────────┤`}
            </pre>
            
            <div className="themes-container">
              <pre className="theme-ascii-art">
{`drwxr-xr-x  4 artist  staff   128 Aug 15 09:00 .
drwxr-xr-x  8 artist  staff   256 Aug 15 09:00 ..
-rw-r--r--  1 artist  staff  2048 Aug 15 09:00 GENERATIVE_ART.py
-rw-r--r--  1 artist  staff  4096 Aug 15 09:00 LANGUAGE_MODELS.txt
-rw-r--r--  1 artist  staff  1024 Aug 15 09:00 CRITICAL_AI.md
-rw-r--r--  1 artist  staff  8192 Aug 15 09:00 INTERACTIVE_XP.js`}
              </pre>
              
              <pre className="theme-detail">
{`┌─────────────────────────────────────────────────────────────────┐
│                      ⚡ GENERATIVE ART ⚡                       │
├─────────────────────────────────────────────────────────────────┤
│     ╱╲     ╱╲     ╱╲     ╱╲     ╱╲     ╱╲     ╱╲     ╱╲       │
│   ╱    ╲ ╱    ╲ ╱    ╲ ╱    ╲ ╱    ╲ ╱    ╲ ╱    ╲ ╱    ╲     │
│ ╱        X      X      X      X      X      X      X        ╲   │
│╱        ╱ ╲    ╱ ╲    ╱ ╲    ╱ ╲    ╱ ╲    ╱ ╲    ╱ ╲        ╲ │
│╲      ╱     ╲╱     ╲╱     ╲╱     ╲╱     ╲╱     ╲╱     ╲      ╱ │
│  ╲  ╱                                                     ╲  ╱   │
│    X          AI-POWERED VISUAL EXPERIENCES               X     │
│  ╱  ╲                                                   ╱  ╲    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                     📝 LANGUAGE MODELS 📝                       │
├─────────────────────────────────────────────────────────────────┤
│ while (true) {                                                  │
│   thought = model.generate();                                   │
│   if (thought.isPoetic()) {                                    │
│     reality.transform(thought);                                 │
│     consciousness.expand();                                     │
│   }                                                            │
│ }                                                              │
│                                                                │
│ // CREATIVE TEXT GENERATION & LINGUISTIC EXPERIMENTS           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      🤔 CRITICAL AI 🤔                         │
├─────────────────────────────────────────────────────────────────┤
│      ┌─────┐     ┌─────┐     ┌─────┐                          │
│      │ WHY │ ──> │ HOW │ ──> │ WHO │                          │
│      └──┬──┘     └──┬──┘     └──┬──┘                          │
│         │           │           │                              │
│         v           v           v                              │
│    [ ETHICS ]  [ BIAS ]   [ POWER ]                            │
│         │           │           │                              │
│         └───────────┴───────────┘                              │
│                     │                                          │
│              [ QUESTIONING AI ]                                │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                   🎮 INTERACTIVE EXPERIENCES 🎮                 │
├─────────────────────────────────────────────────────────────────┤
│     HUMAN                              MACHINE                  │
│       ○                                  ◊                      │
│      ╱│╲                                ╱│╲                     │
│     ╱ │ ╲  <---- conversation ---->   ╱ │ ╲                    │
│       │                                  │                      │
│      ╱ ╲                                ╱ ╲                     │
│                                                                │
│          COLLABORATIVE HUMAN-AI CREATION                       │
└─────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
            
            <pre className="section-footer">
{`└──────────────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </section>
          
          <section id="schedule" className="terminal-section">
            <pre className="section-header">
{`┌──────────────────────────────────────────────────────────────────────────────┐
│ > tail -f SCHEDULE.LOG                                                       │
├──────────────────────────────────────────────────────────────────────────────┤`}
            </pre>
            
            <pre className="schedule-ascii">
{`╔═══════════════════════════════════════════════════════════════════════════╗
║                              EVENT TIMELINE                               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                           ║
║  FRIDAY 08/15 ─────────────────────────────────────────────────────────> ║
║                                                                           ║
║  18:00 ├─ REGISTRATION_START                                             ║
║        │  └─> Check-in, get swag, find your tribe                       ║
║  19:00 ├─ OPENING_CEREMONY                                               ║
║        │  └─> Keynote: "AI as Creative Collaborator"                    ║
║  20:00 ├─ LIGHTNING_TALKS                                                ║
║        │  └─> 5-min project pitches & idea sharing                      ║
║  21:00 └─ NEURAL_NETWORK_SOCIAL                                          ║
║           └─> Connect, conspire, caffeinate                             ║
║                                                                           ║
║  SATURDAY 08/16 ───────────────────────────────────────────────────────> ║
║                                                                           ║
║  09:00 ├─ MORNING_MEDITATION                                             ║
║        │  └─> Coffee & consciousness alignment                           ║
║  09:30 ├─ HACKING_BEGINS                                                 ║
║        │  └─> Build, break, reimagine                                   ║
║  13:00 ├─ WORKSHOP: "Prompt Engineering as Poetry"                       ║
║        │  └─> with Dr. Maya Chen                                        ║
║  15:00 ├─ WORKSHOP: "Ethics in AI Art"                                   ║
║        │  └─> Critical perspectives panel                               ║
║  18:00 ├─ DINNER & PROGRESS_SHARES                                       ║
║        │  └─> Show & tell session                                       ║
║  19:00 └─ LATE_NIGHT_HACKING                                            ║
║           └─> Code until dawn                                           ║
║                                                                           ║
║  SUNDAY 08/17 ─────────────────────────────────────────────────────────> ║
║                                                                           ║
║  09:00 ├─ FINAL_PUSH                                                     ║
║        │  └─> Polish, debug, prepare demos                              ║
║  14:00 ├─ EXHIBITION_SETUP                                               ║
║        │  └─> Transform space into gallery                              ║
║  16:00 ├─ PUBLIC_SHOWCASE                                                ║
║        │  └─> Open to community                                         ║
║  18:00 ├─ AWARDS_CEREMONY                                                ║
║        │  └─> Celebrate the weird & wonderful                           ║
║  19:00 └─ CLOSING_RITUAL                                                 ║
║           └─> Reflections & future visions                              ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝`}
            </pre>
            
            <pre className="section-footer">
{`└──────────────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </section>
          
          <section id="sponsors" className="terminal-section">
            <pre className="section-header">
{`┌──────────────────────────────────────────────────────────────────────────────┐
│ > grep -r "SPONSOR" ./PARTNERS/                                              │
├──────────────────────────────────────────────────────────────────────────────┤`}
            </pre>
            
            <pre className="sponsors-ascii">
{`    ╔═══════════════╗    ╔═══════════════╗    ╔═══════════════╗
    ║    OPENAI     ║    ║   ANTHROPIC   ║    ║    RUNWAY     ║
    ║   ╱─────╲     ║    ║      ⚡⚡      ║    ║   ▶ ═══ ▶    ║
    ║  │ ◐ ◑ │     ║    ║    ╱─────╲    ║    ║   ▶ ═══ ▶    ║
    ║  │  ━━  │     ║    ║   │ 🤖🤖 │   ║    ║   ▶ ═══ ▶    ║
    ║   ╲─────╱     ║    ║    ╲─────╱    ║    ║   ML TOOLS    ║
    ╚═══════════════╝    ╚═══════════════╝    ╚═══════════════╝
    
    ╔═══════════════╗    ╔═══════════════╗    ╔═══════════════╗
    ║   GRAY AREA   ║    ║   SF MOMA     ║    ║    NVIDIA     ║
    ║ ┌───────────┐ ║    ║   ╱╲___╱╲     ║    ║  ╱═══════╲    ║
    ║ │░░░░░░░░░░░│ ║    ║  │ █ █ █ │    ║    ║ │ ██████ │    ║
    ║ │░ DIGITAL ░│ ║    ║  │ █ █ █ │    ║    ║ │ ██████ │    ║
    ║ │░░░ ART ░░░│ ║    ║  │_█_█_█_│    ║    ║  ╲═══════╱    ║
    ║ └───────────┘ ║    ║   MUSEUM      ║    ║    GPUs       ║
    ╚═══════════════╝    ╚═══════════════╝    ╚═══════════════╝`}
            </pre>
            
            <pre className="sponsor-cta">
{`┌─────────────────────────────────────────────────────────────────────────┐
│ > echo "Support the future of creative AI"                              │
│ > ./sponsor_packet.pdf --download                                       │
│ > mailto:sponsors@poeticcomputing.art                                   │
└─────────────────────────────────────────────────────────────────────────┘`}
            </pre>
            
            <pre className="section-footer">
{`└──────────────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </section>
          
          <section id="register" className="terminal-section">
            <pre className="section-header">
{`┌──────────────────────────────────────────────────────────────────────────────┐
│ > ./REGISTER.EXE                                                             │
├──────────────────────────────────────────────────────────────────────────────┤`}
            </pre>
            
            <pre className="register-ascii">
{`                    ╔══════════════════════════════╗
                    ║                              ║
                    ║    ┌─────────────────────┐   ║
                    ║    │  HACK THE FUTURE    │   ║
                    ║    │    WITH US          │   ║
                    ║    └─────────────────────┘   ║
                    ║                              ║
                    ║  ┌───────────────────────┐   ║
                    ║  │ [>] APPLY NOW         │   ║
                    ║  │ [>] $10 ENTRY FEE     │   ║
                    ║  │ [>] LIMITED SPOTS     │   ║
                    ║  └───────────────────────┘   ║
                    ║                              ║
                    ║      ╱───────────────╲       ║
                    ║     │  ◉  SUBMIT  ◉  │       ║
                    ║      ╲───────────────╱       ║
                    ║                              ║
                    ╚══════════════════════════════╝`}
            </pre>
            
            <div className="cta-buttons">
              <a href="#apply" className="ascii-button">
                <pre>{`╔═══════════════════╗
║  > APPLY TO HACK  ║
╚═══════════════════╝`}</pre>
              </a>
              <a href="#sponsor" className="ascii-button">
                <pre>{`╔═══════════════════╗
║ > BECOME SPONSOR  ║
╚═══════════════════╝`}</pre>
              </a>
            </div>
            
            <pre className="section-footer">
{`└──────────────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </section>
        </div>
        
        <footer>
          <pre className="footer-ascii">
{`┌──────────────────────────────────────────────────────────────────────────────┐
│ > cat /etc/motd                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ╔══════════════════════════════════════════════════════════════════════╗   │
│  ║  ART HACK 2024: POETIC COMPUTING © 2024                              ║   │
│  ║  Where AI Dreams in Code | hello@poeticcomputing.art                 ║   │
│  ║  Individual Pass: $10 | Limited to 100 Hackers                       ║   │
│  ╚══════════════════════════════════════════════════════════════════════╝   │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │ "The future is already here — it's just not evenly distributed."  │     │
│  │                                          - William Gibson          │     │
│  └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│ > logout                                                                     │
└──────────────────────────────────────────────────────────────────────────────┘`}
          </pre>
        </footer>
      </div>
    </>
  );
}