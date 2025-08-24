// pages/sponsorship.js
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Sponsorship() {
  const [currentDate, setCurrentDate] = useState('')
  
  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString())
  }, [])

  return (
    <>
      <Head>
        <title>☆ ART HACK - SPONSORSHIP ☆</title>
        <meta name="description" content="Sponsor the Art Hack Poetic Computing hackathon" />
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
                  </span><br />
                  <span style={{ fontFamily: 'Arial', fontSize: 'clamp(10px, 2vw, 12px)', color: '#666666', marginTop: '5px', display: 'inline-block' }}>
                    co-hosted by <a href="https://www.aivalley.io/" target="_blank" style={{ color: '#0066cc' }}>AI Valley</a> & <a href="https://tiat.vercel.app/" target="_blank" style={{ color: '#0066cc' }}>TIAT</a>
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
              <span style={{ color: '#ff00ff' }}>★</span> SUPPORT CREATIVE TECH <span style={{ color: '#00ff00' }}>★</span> BE A PATRON OF THE ARTS <span style={{ color: '#ff00ff' }}>★</span> JOIN THE MOVEMENT <span style={{ color: '#00ff00' }}>★</span>
            </div>
          </div>

          <br /><br />

          {/* Navigation */}
          <table style={{ backgroundColor: '#ccddff', width: '100%', maxWidth: '600px' }} border="2" cellPadding="5" cellSpacing="0">
            <tbody>
              <tr>
                <td align="center" style={{ padding: '8px 4px' }}>
                  <Link href="/" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>
                    HOME
                  </Link>
                </td>
                <td align="center" style={{ padding: '8px 4px' }}>
                  <Link href="/#about" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>
                    ABOUT
                  </Link>
                </td>
                <td align="center" style={{ padding: '8px 4px' }}>
                  <Link href="/#when" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>
                    WHEN
                  </Link>
                </td>
                <td align="center" style={{ padding: '8px 4px' }}>
                  <Link href="/#apply" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>
                    APPLY
                  </Link>
                </td>
                <td align="center" style={{ padding: '8px 4px' }}>
                  <span style={{ color: '#ff0000', fontSize: 'clamp(11px, 2vw, 14px)', fontWeight: 'bold' }}>
                    ♥ SPONSOR ♥
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <br />

          {/* Main Content Table */}
          <table style={{ width: '100%', maxWidth: '700px' }} border="0" cellPadding="10" cellSpacing="0">
            <tbody>
              <tr>
                <td style={{ padding: '10px' }}>
                  
                  {/* Title Section */}
                  <table width="100%" border="1" cellPadding="10" cellSpacing="0" style={{ backgroundColor: '#ffccff' }}>
                    <tbody>
                      <tr>
                        <td>
                          <center>
                            <span style={{ fontSize: '30px', color: '#ff00ff', fontWeight: 'bold' }}>
                              ✨ SUPPORT CREATIVE INNOVATION ✨
                            </span>
                            <br />
                            <span style={{ fontSize: '16px', color: '#0066cc' }}>
                              Partner with artists, designers & creative technologists
                            </span>
                          </center>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Why Support Section */}
                  <table width="100%" border="1" cellPadding="10" cellSpacing="0" style={{ backgroundColor: '#ffffff' }}>
                    <tbody>
                      <tr>
                        <td>
                          <span style={{ fontSize: '20px', color: '#0000ff', fontWeight: 'bold' }}>❀ Why Support Art Hack? ❀</span>
                          <hr />
                          <div style={{ fontFamily: 'Verdana, Arial', fontSize: '13px' }}>
                            <p>
                              Art Hack brings together 100+ creative technologists, digital artists, interaction designers, 
                              and experimental makers from the Bay Area&apos;s vibrant creative tech scene. Co-hosted by 
                              <strong> AI Valley</strong> and <strong>TIAT</strong>, this event connects your brand with the 
                              next generation of creative innovators who are redefining how we interact with technology through 
                              art, poetry, and experimental design.
                            </p>
                            
                            <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
                              <strong>Who attends:</strong><br />
                              → Digital artists & new media artists<br />
                              → Interaction designers & creative coders<br />
                              → AI experimentalists & glitch artists<br />
                              → Poets, musicians & sound artists<br />
                              → Creative technologists from TIAT community<br />
                            </p>

                            <center>
                              <pre style={{ fontFamily: 'monospace', fontSize: '10px', color: '#ff00ff' }}>
{`    ∧_∧
   (◕‿◕✿)
   /つ ART
  ⊂_)_)━☆ﾟ.*･｡ﾟ`}
                              </pre>
                            </center>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Sponsorship Tiers */}
                  <table width="100%" border="3" cellPadding="5" cellSpacing="0" style={{ backgroundColor: '#ffffcc' }}>
                    <tbody>
                      <tr>
                        <td colSpan="5" style={{ backgroundColor: '#ffccff', textAlign: 'center' }}>
                          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>SPONSORSHIP PACKAGES</span>
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#ccffcc' }}>
                        <td style={{ fontWeight: 'bold' }}>Creative Benefits</td>
                        <td align="center" style={{ color: '#0066cc', fontWeight: 'bold' }}>
                          PIXEL<br />
                          <span style={{ fontSize: '11px' }}>friend</span>
                        </td>
                        <td align="center" style={{ color: '#ff00ff', fontWeight: 'bold' }}>
                          GLITCH<br />
                          <span style={{ fontSize: '11px' }}>supporter</span>
                        </td>
                        <td align="center" style={{ color: '#00cc00', fontWeight: 'bold' }}>
                          VECTOR<br />
                          <span style={{ fontSize: '11px' }}>patron</span>
                        </td>
                        <td align="center" style={{ color: '#cc00cc', fontWeight: 'bold' }}>
                          DREAM<br />
                          <span style={{ fontSize: '11px' }}>visionary</span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ backgroundColor: '#f0f0ff', fontWeight: 'bold' }}>Community Investment</td>
                        <td align="center" style={{ fontWeight: 'bold', color: '#ff0000' }}>$500</td>
                        <td align="center" style={{ fontWeight: 'bold', color: '#ff0000' }}>$1,500</td>
                        <td align="center" style={{ fontWeight: 'bold', color: '#ff0000' }}>$2,500</td>
                        <td align="center" style={{ fontWeight: 'bold', color: '#ff0000' }}>$5,000+</td>
                      </tr>
                      <tr>
                        <td>Featured in exhibition & digital gallery</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                      </tr>
                      <tr>
                        <td>Interactive art installation space</td>
                        <td align="center">-</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                      </tr>
                      <tr>
                        <td>Custom AI art piece commission</td>
                        <td align="center">-</td>
                        <td align="center">-</td>
                        <td align="center">1 piece</td>
                        <td align="center">2 pieces</td>
                      </tr>
                      <tr>
                        <td>Host creative workshop/masterclass</td>
                        <td align="center">-</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                      </tr>
                      <tr>
                        <td>Sponsor creative challenge theme</td>
                        <td align="center">-</td>
                        <td align="center">-</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                      </tr>
                      <tr>
                        <td>Judge art pieces & select winners</td>
                        <td align="center">-</td>
                        <td align="center">-</td>
                        <td align="center">-</td>
                        <td align="center">✓</td>
                      </tr>
                      <tr>
                        <td>Artist portfolio access + studio visits</td>
                        <td align="center">-</td>
                        <td align="center">-</td>
                        <td align="center">-</td>
                        <td align="center">✓</td>
                      </tr>
                      <tr>
                        <td>Invite to TIAT salon showcases</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                        <td align="center">✓</td>
                      </tr>
                      <tr>
                        <td>Social media features</td>
                        <td align="center">1 post</td>
                        <td align="center">3 posts</td>
                        <td align="center">5 posts</td>
                        <td align="center">10+ posts</td>
                      </tr>
                      <tr>
                        <td>Documentation in zine/catalog</td>
                        <td align="center">logo</td>
                        <td align="center">½ page</td>
                        <td align="center">1 page</td>
                        <td align="center">2 pages</td>
                      </tr>
                      <tr>
                        <td>Complimentary tickets</td>
                        <td align="center">2</td>
                        <td align="center">5</td>
                        <td align="center">10</td>
                        <td align="center">20</td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* Why Support Creative Tech */}
                  <table width="100%" border="1" cellPadding="10" cellSpacing="0" style={{ backgroundColor: '#e6f3ff' }}>
                    <tbody>
                      <tr>
                        <td>
                          <span style={{ fontSize: '20px', color: '#0000ff', fontWeight: 'bold' }}>✨ Why Support Creative Tech? ✨</span>
                          <hr />
                          <div style={{ fontFamily: 'Verdana, Arial', fontSize: '13px' }}>
                            <p>🎨 <strong>Access Creative Talent:</strong> Connect with Bay Area&apos;s most innovative digital artists</p>
                            <p>🚀 <strong>Brand Innovation:</strong> Associate your brand with experimental art & critical AI discourse</p>
                            <p>💫 <strong>Community Impact:</strong> Support the intersection of art & technology</p>
                            <p>🌈 <strong>Unique Engagement:</strong> Engage with creators who think differently about technology&apos;s role</p>
                            <p>🎭 <strong>Cultural Capital:</strong> Be part of TIAT and AI Valley communities</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* CTA */}
                  <table width="100%" style={{ backgroundColor: '#ffccff' }} border="5" cellPadding="20" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          <center>
                            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>READY TO SPONSOR?</span>
                            <br /><br />
                            
                            <span style={{ fontSize: '13px' }}>
                              support weird art + critical tech experiments<br />
                              be part of something different<br /><br />
                            </span>
                            
                            <table style={{ backgroundColor: '#ffffff' }} border="2" cellPadding="10">
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="mailto:community@aivalley.io?subject=Art Hack Sponsorship" style={{ fontSize: '20px', fontWeight: 'bold', color: '#0000ff' }}>
                                      → BECOME A SPONSOR ←
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            
                            <br />
                            <span style={{ fontSize: '11px', animation: 'blink 1s step-end infinite', color: '#ff0000' }}>
                              ★ limited spots available! ★
                            </span>
                          </center>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <br />

                  {/* ASCII Art */}
                  <center>
                    <pre style={{ fontFamily: 'monospace', fontSize: '10px', color: '#0066cc' }}>
{`     .-""""""-.
   .'          '.
  /   O      O   \\
 :           \`    :
 |                |   
 :    .------.    :
  \\  '        '  /
   '.  '------'  .'
     '-.......-'
  SUPPORT THE ARTS!`}
                    </pre>
                  </center>

                  <br />

                  {/* Contact */}
                  <table width="100%" border="2" cellPadding="10" cellSpacing="0" style={{ backgroundColor: '#e6ffe6' }}>
                    <tbody>
                      <tr>
                        <td>
                          <center>
                            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>❀ GET IN TOUCH ❀</span>
                          </center>
                          <p align="center">
                            sponsorship inquiries: <a href="mailto:community@aivalley.io" style={{ color: '#0000ff' }}>community@aivalley.io</a><br />
                            event questions: <a href="mailto:ashleyjherr@gmail.com" style={{ color: '#0000ff' }}>ashleyjherr@gmail.com</a><br />
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
                            CREATIVE TECH WEB RING<br />
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