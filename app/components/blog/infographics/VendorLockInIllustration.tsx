'use client';

import React from 'react';

interface VendorLockInProps {
  isVisible: boolean
  data?: Record<string, any>
  layout?: "horizontal" | "vertical"
}

const VendorLockInIllustration: React.FC<VendorLockInProps> = ({
  isVisible,
  data = {},
  layout = "horizontal"
}) => {
  const styles: Record<string, React.CSSProperties> = {
    illustration: {
      width: '100%',
      maxWidth: '1200px',
      aspectRatio: '16/9',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      borderRadius: '24px',
      padding: '60px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
      position: 'relative',
      margin: '0 auto',
      overflow: 'hidden',
    },
    title: {
      textAlign: 'center',
      fontSize: '42px',
      fontWeight: 800,
      color: '#1e293b',
      marginBottom: '50px',
      position: 'relative',
      zIndex: 10,
    },
    scene: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '80px',
      position: 'relative',
    },
    cageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    cage: {
      width: '450px',
      height: '450px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cageTop: {
      position: 'absolute',
      top: 0,
      left: '20px',
      right: '20px',
      height: '20px',
      background: 'linear-gradient(90deg, #475569 0%, #334155 100%)',
      borderRadius: '4px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      zIndex: 1,
    },
    cageBottom: {
      position: 'absolute',
      bottom: 0,
      left: '20px',
      right: '20px',
      height: '20px',
      background: 'linear-gradient(90deg, #475569 0%, #334155 100%)',
      borderRadius: '4px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      zIndex: 1,
    },
    cageBars: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: '8px',
      padding: '20px',
      zIndex: 0,
    },
    bar: {
      background: 'linear-gradient(180deg, #475569 0%, #334155 100%)',
      borderRadius: '4px',
      position: 'relative',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Courier New", monospace',
      fontSize: '20px',
      color: '#94a3b8',
      fontWeight: 'bold',
    },
    cageLock: {
      position: 'absolute',
      top: '-30px',
      right: '20px',
      width: '60px',
      height: '70px',
      zIndex: 5,
    },
    lockShackle: {
      width: '35px',
      height: '35px',
      border: '8px solid #334155',
      borderBottom: 'none',
      borderRadius: '35px 35px 0 0',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    lockBody: {
      width: '60px',
      height: '45px',
      background: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
      borderRadius: '8px',
      position: 'absolute',
      bottom: 0,
      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    },
    lockKeyhole: {
      width: '12px',
      height: '20px',
      background: '#64748b',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '2px',
    },
    browser: {
      width: '320px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 2,
    },
    browserHeader: {
      background: '#e2e8f0',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    browserDots: {
      display: 'flex',
      gap: '6px',
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
    },
    dotRed: { background: '#ef4444' },
    dotYellow: { background: '#f59e0b' },
    dotGreen: { background: '#10b981' },
    browserUrl: {
      flex: 1,
      background: 'white',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '11px',
      color: '#94a3b8',
      textAlign: 'center',
    },
    browserContent: {
      padding: '24px',
      minHeight: '280px',
    },
    websiteHeader: {
      height: '40px',
      background: '#cbd5e1',
      borderRadius: '6px',
      marginBottom: '16px',
    },
    websiteNav: {
      display: 'flex',
      gap: '8px',
      marginBottom: '20px',
    },
    navItem: {
      height: '24px',
      background: '#e2e8f0',
      borderRadius: '4px',
      flex: 1,
    },
    websiteContent: {
      display: 'flex',
      gap: '12px',
    },
    contentMain: {
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    contentLine: {
      height: '12px',
      background: '#f1f5f9',
      borderRadius: '2px',
    },
    contentSidebar: {
      flex: 1,
      background: '#f1f5f9',
      borderRadius: '6px',
    },
    chain: {
      position: 'absolute',
      zIndex: 3,
    },
    chainLink: {
      width: '60px',
      height: '8px',
      background: '#475569',
      borderRadius: '4px',
      position: 'relative',
      margin: '4px 0',
    },
    chainLabel: {
      position: 'absolute',
      background: '#dc2626',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      fontSize: '13px',
      fontWeight: 700,
      whiteSpace: 'nowrap',
      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
    },
    chain1: {
      top: '60px',
      left: '-120px',
    },
    chain2: {
      bottom: '180px',
      left: '-120px',
    },
    chain3: {
      bottom: '60px',
      left: '-120px',
    },
    chainLabel1: {
      left: '-160px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    chainLabel2: {
      left: '-160px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    chainLabel3: {
      left: '-200px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    arrow: {
      position: 'absolute',
      right: '40%',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '60px',
      color: '#cbd5e1',
      animation: 'pulse 2s ease-in-out infinite',
    },
    freedomSection: {
      flex: 0.8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
      position: 'relative',
    },
    keyContainer: {
      position: 'relative',
      animation: 'float 3s ease-in-out infinite',
    },
    key: {
      width: '180px',
      height: '180px',
      position: 'relative',
      filter: 'drop-shadow(0 8px 24px rgba(16, 185, 129, 0.4))',
    },
    keyHead: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      borderRadius: '50%',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      border: '8px solid #34d399',
      boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },
    keyHole: {
      width: '30px',
      height: '30px',
      background: 'white',
      borderRadius: '50%',
    },
    keyShaft: {
      width: '16px',
      height: '100px',
      background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
      position: 'absolute',
      top: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '0 0 8px 8px',
    },
    keyTeeth: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '4px',
    },
    tooth: {
      width: '12px',
      height: '20px',
      background: '#059669',
      borderRadius: '0 0 4px 4px',
    },
    freedomText: {
      textAlign: 'center',
    },
    freedomTitle: {
      fontSize: '32px',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '12px',
    },
    freedomFeatures: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    freedomFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'white',
      padding: '12px 20px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    },
    freedomIcon: {
      width: '24px',
      height: '24px',
      color: '#10b981',
      stroke: '#10b981',
      fill: 'none',
      strokeWidth: 2,
      flex: '0 0 24px',
    },
    freedomFeatureText: {
      fontSize: '15px',
      fontWeight: 600,
      color: '#1e293b',
    },
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
      <div style={styles.illustration}>
        <h2 style={styles.title}>Vendor Lock-in vs Open Source Freedom</h2>

        <div style={styles.scene}>
          {/* Locked Cage Section */}
          <div style={styles.cageContainer}>
            <div style={styles.cage}>
              <div style={styles.cageTop} />
              <div style={styles.cageBottom} />

              {/* Cage Bars */}
              <div style={styles.cageBars}>
                {['<', '/', '>', '{ }', '[ ]', '#', '$', '%'].map((symbol, i) => (
                  <div key={i} style={styles.bar}>
                    {symbol}
                  </div>
                ))}
              </div>

              {/* Lock on Cage */}
              <div style={styles.cageLock}>
                <div style={styles.lockShackle} />
                <div style={styles.lockBody}>
                  <div style={styles.lockKeyhole} />
                </div>
              </div>

              {/* Browser Window */}
              <div style={styles.browser}>
                <div style={styles.browserHeader}>
                  <div style={styles.browserDots}>
                    <div style={{ ...styles.dot, ...styles.dotRed }} />
                    <div style={{ ...styles.dot, ...styles.dotYellow }} />
                    <div style={{ ...styles.dot, ...styles.dotGreen }} />
                  </div>
                  <div style={styles.browserUrl}>yourwebsite.builderplatform.com</div>
                </div>
                <div style={styles.browserContent}>
                  <div style={styles.websiteHeader} />
                  <div style={styles.websiteNav}>
                    <div style={styles.navItem} />
                    <div style={styles.navItem} />
                    <div style={styles.navItem} />
                    <div style={styles.navItem} />
                  </div>
                  <div style={styles.websiteContent}>
                    <div style={styles.contentMain}>
                      <div style={styles.contentLine} />
                      <div style={styles.contentLine} />
                      <div style={styles.contentLine} />
                      <div style={styles.contentLine} />
                      <div style={{ ...styles.contentLine, width: '60%' }} />
                    </div>
                    <div style={styles.contentSidebar} />
                  </div>
                </div>
              </div>

              {/* Chains */}
              <div style={{ ...styles.chain, ...styles.chain1 }}>
                <div style={styles.chainLink} />
                <div style={styles.chainLink} />
                <div style={styles.chainLink} />
                <div style={{ ...styles.chainLabel, ...styles.chainLabel1 }}>
                  Proprietary Code
                </div>
              </div>

              <div style={{ ...styles.chain, ...styles.chain2 }}>
                <div style={styles.chainLink} />
                <div style={styles.chainLink} />
                <div style={styles.chainLink} />
                <div style={{ ...styles.chainLabel, ...styles.chainLabel2 }}>
                  No Data Export
                </div>
              </div>

              <div style={{ ...styles.chain, ...styles.chain3 }}>
                <div style={styles.chainLink} />
                <div style={styles.chainLink} />
                <div style={styles.chainLink} />
                <div style={{ ...styles.chainLabel, ...styles.chainLabel3 }}>
                  Platform Dependent
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={styles.arrow}>→</div>

          {/* Freedom Section */}
          <div style={styles.freedomSection}>
            <div style={styles.keyContainer}>
              <div style={styles.key}>
                <div style={styles.keyHead}>
                  <div style={styles.keyHole} />
                </div>
                <div style={styles.keyShaft}>
                  <div style={styles.keyTeeth}>
                    <div style={styles.tooth} />
                    <div style={{ ...styles.tooth, height: '30px' }} />
                    <div style={{ ...styles.tooth, height: '15px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.freedomText}>
              <div style={styles.freedomTitle}>Full Control</div>
              <div style={styles.freedomFeatures}>
                <div style={styles.freedomFeature}>
                  <svg style={styles.freedomIcon} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={styles.freedomFeatureText}>Own Your Data</span>
                </div>
                <div style={styles.freedomFeature}>
                  <svg style={styles.freedomIcon} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={styles.freedomFeatureText}>Full Export</span>
                </div>
                <div style={styles.freedomFeature}>
                  <svg style={styles.freedomIcon} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={styles.freedomFeatureText}>Platform Independent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorLockInIllustration;
