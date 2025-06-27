// pages/index.js
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [currentDate, setCurrentDate] = useState('')
  
  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString())
  }, [])

  return (
    <>
      <Head>
        <title>☆ ART HACK - POETIC COMPUTING ☆</title>
        <meta name="description" content="critical AI experiments hackathon august 15-17" />
        <meta name="keywords" content="hackathon, AI, art, poetic computing, san francisco" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div style={{ 
        backgroundColor: '#e8f0ff',
        color: '#000080',
        minHeight: '100vh',
        margin: 0,
        padding: '0 10px',
        width: '100%',
        overflowX: 'hidden'
      }}>
        <center style={{ width: '100%', overflowX: 'auto' }}>
          {/* Header Banner */}
          <table style={{ width: '100%', maxWidth: '600px' }} border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td style={{ 
                  height: '100px',
                  textAlign: 'center',
                  padding: '10px'
                }}>
                  <span style={{ fontFamily: 'Comic Sans MS, Arial', fontSize: 'clamp(24px, 5vw, 36px)', color: '#ff00ff', fontWeight: 'bold' }}>
                    ART HACK
                  </span><br />
                  <span style={{ fontFamily: 'Arial', fontSize: 'clamp(16px, 3vw, 24px)', color: '#0066cc' }}>
                    ~ poetic computing ~
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <br />

          {/* Marquee */}
          <div style={{ 
            backgroundColor: '#ffffe0', 
            width: '100%',
            maxWidth: '600px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            margin: '0 auto',
            padding: '3px 0',
            position: 'relative',
            height: '24px'
          }}>
            <div style={{
              display: 'inline-block',
              paddingLeft: '50%',
              animation: 'marquee 15s linear infinite',
              position: 'absolute'
            }}>
              <span style={{ color: '#ff00ff' }}>❀</span> AUGUST 15-17 @ TO BE ANNOUNCED <span style={{ color: '#00ff00' }}>❀</span> CRITICAL AI EXPERIMENTS <span style={{ color: '#ff00ff' }}>❀</span> $10 TICKETS <span style={{ color: '#00ff00' }}>❀</span> ALL WELCOME <span style={{ color: '#ff00ff' }}>❀</span>
            </div>
          </div>

          <br /><br />

          {/* Navigation */}
          <table style={{ backgroundColor: '#ccddff', width: '100%', maxWidth: '600px' }} border="2" cellPadding="5" cellSpacing="0">
            <tbody>
              <tr>
                <td align="center" style={{ padding: '8px 4px' }}><a href="#about" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>ABOUT</a></td>
                <td align="center" style={{ padding: '8px 4px' }}><a href="#when" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>WHEN</a></td>
                <td align="center" style={{ padding: '8px 4px' }}><a href="#where" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>WHERE</a></td>
                <td align="center" style={{ padding: '8px 4px' }}><a href="#apply" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>APPLY</a></td>
                <td align="center" style={{ padding: '8px 4px' }}><a href="#contact" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>EMAIL</a></td>
              </tr>
            </tbody>
          </table>

          <br />

          {/* Main Content Table */}
          <table style={{ width: '100%', maxWidth: '600px' }} border="0" cellPadding="10" cellSpacing="0">
            <tbody>
              <tr>
                <td style={{ padding: '10px' }}>
                  {/* About Section */}
                  <a id="about"></a>
                  <table width="100%" border="1" cellPadding="10" cellSpacing="0" style={{ backgroundColor: '#ffffff' }}>
                    <tbody>
                      <tr>
                        <td>
                          <span style={{ fontSize: '20px', color: '#0000ff', fontWeight: 'bold' }}>☆ WHAT IS THIS? ☆</span>
                          <hr />
                          <div style={{ fontFamily: 'Verdana, Arial', fontSize: '13px' }}>
                            <p>hey! we&apos;re doing a 3-day hackathon about using AI in weird/critical/poetic ways</p>
                            
                            <p>tired of boring corporate AI? want to make something strange and beautiful instead?</p>
                            
                            <p>come build:</p>
                            <ul>
                              <li>art through AI hallucinations & glitch aesthetics</li>
                              <li>impossible machines & speculative futures</li>
                              <li>digital gardens & synthetic dreams</li>
                              <li>critical AI experiments</li>
                              <li>whatever weird thing you imagine!</li>
                            </ul>
                            
                            <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
                              examples of the vibe we&apos;re going for:<br />
                              → <a href="https://x.com/jacobrintamaki/status/1927855607597412389?t=KYX9sqJEwNyviaxBAcGfeA&s=19" target="_blank" style={{ color: '#0066cc' }}>jacob&apos;s AI experiments</a><br />
                            </p>
                            
                            <center>
                              <pre style={{ fontFamily: 'monospace', fontSize: '10px', color: '#0066cc' }}>
{`      [o_o]     [^_^]
       ]|[       ]|[
       / \\       / \\
    ✿  ✿  ✿  ✿  ✿  ✿
  ✿  ✿  ✿  ✿  ✿  ✿  ✿
✿  ✿  ✿  ✿  ✿  ✿  ✿  ✿`}
                              </pre>
                            </center>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Schedule */}
                  <a id="when"></a>
                  <table width="100%" border="3" cellPadding="5" cellSpacing="0" style={{ backgroundColor: '#ffffcc' }}>
                    <tbody>
                      <tr>
                        <td colSpan="2" style={{ backgroundColor: '#ffccff' }}>
                          <center><span style={{ fontSize: '20px', fontWeight: 'bold' }}>SCHEDULE</span></center>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" style={{ backgroundColor: '#ccffcc' }}>
                          <b>FRIDAY AUG 15</b> <span style={{ color: '#ff00ff' }}>❀</span>
                        </td>
                      </tr>
                      <tr>
                        <td width="100">6:00 PM</td>
                        <td>show up & say hi</td>
                      </tr>
                      <tr>
                        <td>7:00 PM</td>
                        <td>opening talk: &quot;wtf is poetic computing?&quot;</td>
                      </tr>
                      <tr>
                        <td>8:00 PM</td>
                        <td>share ideas, find your crew</td>
                      </tr>
                      <tr>
                        <td>9:00 PM</td>
                        <td>hang out time</td>
                      </tr>
                      <tr>
                        <td colSpan="2" style={{ backgroundColor: '#ccffcc' }}>
                          <b>SATURDAY AUG 16</b> <span style={{ color: '#ff00ff' }}>❀</span>
                        </td>
                      </tr>
                      <tr>
                        <td>9:00 AM</td>
                        <td>coffee & breakfast</td>
                      </tr>
                      <tr>
                        <td>10:00 AM</td>
                        <td><span style={{ animation: 'blink 1s step-end infinite' }}>HACKING STARTS!!!</span></td>
                      </tr>
                      <tr>
                        <td>1:00 PM</td>
                        <td>workshop: &quot;glitch aesthetics & AI hallucinations&quot;</td>
                      </tr>
                      <tr>
                        <td>2:30 PM</td>
                        <td>workshop: &quot;ethics in the machine&quot;</td>
                      </tr>
                      <tr>
                        <td>all day</td>
                        <td>hack hack hack</td>
                      </tr>
                      <tr>
                        <td colSpan="2" style={{ backgroundColor: '#ccffcc' }}>
                          <b>SUNDAY AUG 17</b> <span style={{ color: '#ff00ff' }}>❀</span>
                        </td>
                      </tr>
                      <tr>
                        <td>morning</td>
                        <td>finish your projects!</td>
                      </tr>
                      <tr>
                        <td>4:00 PM</td>
                        <td><span style={{ color: '#ff0000', fontWeight: 'bold' }}>PUBLIC EXHIBITION!!!</span></td>
                      </tr>
                      <tr>
                        <td>6:00 PM</td>
                        <td>awards & closing</td>
                      </tr>
                      <tr>
                        <td>7:00 PM</td>
                        <td>afterparty :)</td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Location */}
                  <a id="where"></a>
                  <table width="100%" border="1" cellPadding="10" cellSpacing="0" style={{ backgroundColor: '#e6f3ff' }}>
                    <tbody>
                      <tr>
                        <td>
                          <span style={{ fontSize: '20px', color: '#0000ff', fontWeight: 'bold' }}>❀ WHERE? ❀</span>
                          <hr />
                          <p>To be announced</p>
                          <p>(we&apos;ll email you the exact address when you sign up)</p>
                          <p>
                            <span style={{
                              display: 'inline-block',
                              width: '16px',
                              height: '16px',
                              background: 'repeating-linear-gradient(45deg, #ff0, #ff0 5px, #000 5px, #000 10px)'
                            }}></span>
                            {' '}under construction{' '}
                            <span style={{
                              display: 'inline-block',
                              width: '16px',
                              height: '16px',
                              background: 'repeating-linear-gradient(45deg, #ff0, #ff0 5px, #000 5px, #000 10px)'
                            }}></span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Apply */}
                  <a id="apply"></a>
                  <table width="100%" style={{ backgroundColor: '#ffccff' }} border="5" cellPadding="20" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          <center>
                            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>WANT TO JOIN?</span>
                            <br /><br />
                            <span style={{ fontSize: '13px' }}>
                              open to everyone! artists, coders, dreamers, weirdos<br />
                              no AI experience needed<br />
                              just bring ideas!<br /><br />
                              
                              <span style={{ fontSize: '20px', color: '#ff0000', fontWeight: 'bold' }}>only $10!</span><br />
                              (includes food & workshops)<br /><br />
                            </span>
                            
                            <table style={{ backgroundColor: '#ffffff' }} border="2" cellPadding="10">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="mailto:apply@arthack.xyz?subject=I want to hack!" style={{ fontSize: '20px', fontWeight: 'bold', color: '#0000ff' }}>
                                      → CLICK HERE TO APPLY ←
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            
                            <br />
                            <span style={{ fontSize: '11px' }}>deadline: august 1st (but like, we&apos;re flexible)</span>
                          </center>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Sponsors */}
                  <table width="100%" border="1" cellPadding="10" cellSpacing="0" style={{ backgroundColor: '#f0f0f0' }}>
                    <tbody>
                      <tr>
                        <td>
                          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>SPONSORS</span>
                          <p>want to support weird art+tech? email us: <a href="mailto:vsuortiz@andrew.cmu.edu" style={{ color: '#0000ff' }}>vsuortiz@andrew.cmu.edu</a></p>
                          <p>
                            levels:<br />
                            • big supporter ($5k+)<br />
                            • medium supporter ($2.5k+)<br />
                            • friend ($1k+)<br />
                            • pizza sponsor ($whatever)
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Contact */}
                  <a id="contact"></a>
                  <table width="100%" border="2" cellPadding="10" cellSpacing="0" style={{ backgroundColor: '#e6ffe6' }}>
                    <tbody>
                      <tr>
                        <td>
                          <center>
                            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>❀ GET IN TOUCH ❀</span>
                          </center>
                          <p align="center">
                            general stuff: <a href="mailto:vsuortiz@andrew.cmu.edu" style={{ color: '#0000ff' }}>vsuortiz@andrew.cmu.edu</a><br />
                            press (lol): <a href="mailto:ashleyjherr@gmail.com" style={{ color: '#0000ff' }}>ashleyjherr@gmail.com</a><br />
                            money stuff: <a href="mailto:medhaav.mahesh@gmail.com" style={{ color: '#0000ff' }}>medhaav.mahesh@gmail.com</a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Web Ring */}
                  <table width="100%" style={{ backgroundColor: '#cccccc' }} border="1" cellPadding="5" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td align="center">
                          <span style={{ fontSize: '13px' }}>
                            <div style={{ width: '88px', height: '31px', border: '1px solid #000', backgroundColor: '#fff', margin: '0 auto' }}></div>
                            <br />
                            POETIC COMPUTING WEB RING<br />
                            [ <a href="#" style={{ color: '#0000ff' }}>&lt;&lt; prev</a> | <a href="#" style={{ color: '#0000ff' }}>random</a> | <a href="#" style={{ color: '#0000ff' }}>next &gt;&gt;</a> ]
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Footer */}
                  <hr style={{ width: '100%', maxWidth: '600px' }} />
                  <span style={{ fontSize: '13px' }}>
                    <p>
                      made with ❀ and bad html<br />
                      best viewed in netscape 3.0 @ 800x600<br />
                      © 2025 or whatever<br />
                      <br />
                      page last updated: {currentDate}
                    </p>

                    <p>
                      <span style={{ display: 'inline-block', width: '88px', height: '31px', border: '1px solid #666', backgroundColor: '#eee', margin: '0 5px' }}></span>
                      <span style={{ display: 'inline-block', width: '88px', height: '31px', border: '1px solid #666', backgroundColor: '#eee', margin: '0 5px' }}></span>
                      <span style={{ display: 'inline-block', width: '88px', height: '31px', border: '1px solid #666', backgroundColor: '#eee', margin: '0 5px' }}></span>
                    </p>
                  </span>

                  <br /><br />
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #e8f0ff;
          min-height: 100vh;
          width: 100%;
        }
        * {
          box-sizing: border-box;
        }
        @keyframes marquee {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100%, 0); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @media (max-width: 640px) {
          table {
            font-size: 12px !important;
          }
          center {
            padding: 0 10px;
          }
        }
      `}</style>
    </>
  )
}