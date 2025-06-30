// pages/sponsorship.js
import Head from 'next/head'
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
          {/* Header Banner - Same as main page */}
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

          {/* Navigation - Updated with sponsorship link */}
          <table style={{ backgroundColor: '#ccddff', width: '100%', maxWidth: '600px' }} border="2" cellPadding="5" cellSpacing="0">
            <tbody>
              <tr>
                <td align="center" style={{ padding: '8px 4px' }}><a href="/" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>HOME</a></td>
                <td align="center" style={{ padding: '8px 4px' }}><a href="/#when" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>WHEN</a></td>
                <td align="center" style={{ padding: '8px 4px' }}><a href="/#where" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>WHERE</a></td>
                <td align="center" style={{ padding: '8px 4px' }}><span style={{ color: '#ff0000', fontSize: 'clamp(11px, 2vw, 14px)', fontWeight: 'bold' }}>SPONSOR</span></td>
                <td align="center" style={{ padding: '8px 4px' }}><a href="/#contact" style={{ color: '#0000ff', fontSize: 'clamp(11px, 2vw, 14px)' }}>EMAIL</a></td>
              </tr>
            </tbody>
          </table>

          <br />

          {/* Windows-style sponsorship content */}
          <table style={{ width: '100%', maxWidth: '800px', backgroundColor: '#F5F5FF', border: '2px solid #9B9BD4' }} cellPadding="0" cellSpacing="0">
            <tbody>
              {/* Title bar */}
              <tr>
                <td style={{ 
                  background: 'linear-gradient(90deg, #9B86BD, #B8A9D9, #D4C5F9)',
                  color: 'white',
                  padding: '4px 8px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>💾 Art Hack - Sponsorship Opportunities</span>
                    <span>[_][□][X]</span>
                  </div>
                </td>
              </tr>
              
              {/* Content */}
              <tr>
                <td style={{ backgroundColor: '#FFFBFF', padding: '20px' }}>
                  {/* Header */}
                  <div style={{ 
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#F5F0FF',
                    border: '1px solid #D4C5F9',
                    marginBottom: '20px'
                  }}>
                    <h1 style={{ 
                      fontSize: '36px',
                      color: '#9B86BD',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '3px'
                    }}>
                      SPONSORSHIP OPPORTUNITIES
                    </h1>
                    <p style={{ fontSize: '16px', color: '#B8A9D9', fontStyle: 'italic' }}>
                      Support the future of creative technology
                    </p>
                  </div>

                  {/* What is Art Hack section */}
                  <div style={{ 
                    backgroundColor: '#F5F0FF',
                    border: '1px solid #D4C5F9',
                    padding: '20px',
                    marginBottom: '20px'
                  }}>
                    <h2 style={{ color: '#9B86BD', fontSize: '20px', marginBottom: '15px' }}>
                      ❀ What is Art Hack? ❀
                    </h2>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#7575B8' }}>
                      Art Hack - Poetic Computing is a creative technology event where artists, designers, 
                      programmers, and poets come together to explore the intersection of code and creativity. 
                      Over 3 days, participants collaborate to create experimental digital art, interactive 
                      installations, and poetic algorithms that push the boundaries of what's possible when 
                      art meets technology. This unique hackathon celebrates the beauty in code and the logic 
                      in art, fostering a community where technical innovation serves artistic expression.
                    </p>
                  </div>

                  {/* Sponsorship tiers table */}
                  <div style={{ 
                    backgroundColor: '#FFFBFF',
                    border: '2px solid #D4C5F9',
                    padding: '2px',
                    marginBottom: '20px'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                      <thead>
                        <tr>
                          <th style={{ 
                            backgroundColor: '#F5F0FF',
                            border: '1px solid #D4C5F9',
                            padding: '8px',
                            textAlign: 'left',
                            color: '#7575B8',
                            fontWeight: 'bold'
                          }}>
                            Features
                          </th>
                          <th style={{ backgroundColor: '#F4D9CC', color: '#8B5A3C', border: '1px solid #D4C5F9', padding: '8px' }}>
                            Bronze
                          </th>
                          <th style={{ backgroundColor: '#E8E8F0', color: '#6B6B7D', border: '1px solid #D4C5F9', padding: '8px' }}>
                            Silver
                          </th>
                          <th style={{ backgroundColor: '#FFF4D4', color: '#B8860B', border: '1px solid #D4C5F9', padding: '8px' }}>
                            Gold
                          </th>
                          <th style={{ backgroundColor: '#FFE5F1', color: '#9B5B75', border: '1px solid #D4C5F9', padding: '8px' }}>
                            Platinum
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ 
                            backgroundColor: '#F5F0FF',
                            border: '1px solid #D4C5F9',
                            padding: '8px',
                            fontWeight: 'bold',
                            color: '#7575B8'
                          }}>
                            Investment
                          </td>
                          <td style={{ backgroundColor: '#FFF0F5', border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center', fontWeight: 'bold', color: '#9B86BD' }}>
                            $1,000
                          </td>
                          <td style={{ backgroundColor: '#FFF0F5', border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center', fontWeight: 'bold', color: '#9B86BD' }}>
                            $2,000
                          </td>
                          <td style={{ backgroundColor: '#FFF0F5', border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center', fontWeight: 'bold', color: '#9B86BD' }}>
                            $3,000
                          </td>
                          <td style={{ backgroundColor: '#FFF0F5', border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center', fontWeight: 'bold', color: '#9B86BD' }}>
                            $5,000
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', backgroundColor: '#F5F0FF', color: '#7575B8', fontWeight: 'bold' }}>
                            Logo on social media + banner
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', backgroundColor: '#F5F0FF', color: '#7575B8', fontWeight: 'bold' }}>
                            Company Booth
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', backgroundColor: '#F5F0FF', color: '#7575B8', fontWeight: 'bold' }}>
                            Slot in the opening ceremony
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#B8A9D9', fontWeight: 'bold' }}>1 min</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#B8A9D9', fontWeight: 'bold' }}>2 min</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#B8A9D9', fontWeight: 'bold' }}>3 min</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', backgroundColor: '#F5F0FF', color: '#7575B8', fontWeight: 'bold' }}>
                            Company Workshop
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', backgroundColor: '#F5F0FF', color: '#7575B8', fontWeight: 'bold' }}>
                            Company sponsored challenge
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', backgroundColor: '#F5F0FF', color: '#7575B8', fontWeight: 'bold' }}>
                            Member on the Jury
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', backgroundColor: '#F5F0FF', color: '#7575B8', fontWeight: 'bold' }}>
                            CV Collection
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#D4C5F9' }}>-</span>
                          </td>
                          <td style={{ border: '1px solid #D4C5F9', padding: '8px', textAlign: 'center' }}>
                            <span style={{ color: '#7FB069', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* CTA Button */}
                  <div style={{ textAlign: 'center', margin: '30px 0' }}>
                    <table style={{ backgroundColor: '#ffffff' }} border="2" cellPadding="10">
                      <tbody>
                        <tr>
                          <td>
                            <a href="mailto:medhaav.mahesh@gmail.com?subject=Art Hack Sponsorship" style={{ 
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#0000ff',
                              textDecoration: 'none'
                            }}>
                              → BECOME A SPONSOR ←
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Contact info */}
                  <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <p style={{ color: '#B8A9D9', fontSize: '14px' }}>
                      For sponsorship inquiries, please email: 
                      <br />
                      <a href="mailto:medhaav.mahesh@gmail.com" style={{ color: '#9B86BD' }}>medhaav.mahesh@gmail.com</a>
                    </p>
                    <p style={{ 
                      color: '#E88CA4',
                      marginTop: '10px',
                      animation: 'blink 1s step-end infinite'
                    }}>
                      ★ Limited spots available! ★
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <br />

          {/* Footer - Same as main page */}
          <hr style={{ width: '100%', maxWidth: '600px' }} />
          <span style={{ fontSize: '13px' }}>
            <p>
              made with ❀ and bad html<br />
              best viewed in netscape 3.0 @ 800x600<br />
              © 2025 or whatever<br />
              <br />
              page last updated: {currentDate}
            </p>
          </span>

          <br /><br />
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