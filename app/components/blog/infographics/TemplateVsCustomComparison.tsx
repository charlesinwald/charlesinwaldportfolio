'use client';

import React from 'react';

interface TemplateVsCustomProps {
  isVisible: boolean
  data?: Record<string, any>
  layout?: "horizontal" | "vertical"
}

const TemplateVsCustomComparison: React.FC<TemplateVsCustomProps> = ({
  isVisible,
  data = {},
  layout = "horizontal"
}) => {
  const styles: Record<string, React.CSSProperties> = {
    comparison: {
      width: '100%',
      maxWidth: '1600px',
      background: 'white',
      borderRadius: '24px',
      padding: '50px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
      position: 'relative',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    title: {
      fontSize: '48px',
      fontWeight: 800,
      color: '#1e293b',
      marginBottom: '12px',
    },
    subtitle: {
      fontSize: '20px',
      color: '#64748b',
      fontWeight: 500,
    },
    splitContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      position: 'relative',
      minHeight: '650px',
      paddingTop: '20px',
    },
    side: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    sideHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '20px',
    },
    sideTitle: {
      fontSize: '24px',
      fontWeight: 700,
    },
    templateSideTitle: {
      color: '#ef4444',
    },
    customSideTitle: {
      color: '#10b981',
    },
    emoji: {
      fontSize: '32px',
    },
    browserMockup: {
      flex: 1,
      background: '#f1f5f9',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    browserChrome: {
      background: '#e2e8f0',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      borderBottom: '1px solid #cbd5e1',
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
      fontSize: '12px',
      color: '#94a3b8',
    },
    browserContent: {
      flex: 1,
      overflow: 'hidden',
      position: 'relative',
      background: 'white',
    },
    // Template Website (Bad)
    templateContent: {
      padding: '20px',
      background: 'white',
    },
    templateHeader: {
      background: 'linear-gradient(90deg, #ff0080 0%, #7928ca 100%)',
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '4px',
    },
    templateLogo: {
      fontFamily: '"Comic Sans MS", cursive',
      fontSize: '28px',
      color: '#ffff00',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    templateNav: {
      display: 'flex',
      gap: '15px',
      marginBottom: '15px',
      padding: '10px',
      background: '#fbbf24',
      borderRadius: '4px',
    },
    templateNavItem: {
      fontSize: '14px',
      fontWeight: 700,
      color: '#dc2626',
      fontFamily: '"Times New Roman", serif',
    },
    templateHero: {
      background: 'repeating-linear-gradient(45deg, #e0e7ff 0px, #e0e7ff 10px, #ddd6fe 10px, #ddd6fe 20px)',
      padding: '25px',
      marginBottom: '15px',
      border: '3px solid #8b5cf6',
      borderRadius: '4px',
    },
    templateHeroTitle: {
      fontSize: '26px',
      fontWeight: 900,
      color: '#dc2626',
      fontFamily: '"Impact", sans-serif',
      textTransform: 'uppercase',
      marginBottom: '8px',
      letterSpacing: '2px',
    },
    templateHeroText: {
      fontSize: '11px',
      color: '#1e293b',
      lineHeight: 1.3,
      fontFamily: '"Arial", sans-serif',
    },
    templateSections: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '10px',
    },
    templateBox: {
      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      border: '2px dashed #f59e0b',
      padding: '15px',
      borderRadius: '4px',
      textAlign: 'center',
    },
    templateBoxTitle: {
      fontSize: '14px',
      fontWeight: 900,
      color: '#7c2d12',
      marginBottom: '6px',
      fontFamily: '"Verdana", sans-serif',
    },
    templateBoxIcon: {
      width: '40px',
      height: '40px',
      background: '#ef4444',
      borderRadius: '50%',
      margin: '0 auto 8px',
    },
    // Custom Professional Website (Good)
    customContent: {
      padding: 0,
      background: 'white',
    },
    customHeader: {
      background: 'white',
      padding: '20px 40px',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    customLogo: {
      fontSize: '24px',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    customNav: {
      display: 'flex',
      gap: '30px',
    },
    customNavItem: {
      fontSize: '15px',
      color: '#64748b',
      fontWeight: 500,
    },
    customHero: {
      padding: '60px 40px',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
    },
    customHeroContent: {
      flex: 1,
    },
    customHeroTitle: {
      fontSize: '36px',
      fontWeight: 800,
      color: '#0f172a',
      lineHeight: 1.2,
      marginBottom: '16px',
    },
    customHeroText: {
      fontSize: '16px',
      color: '#475569',
      lineHeight: 1.6,
      marginBottom: '20px',
    },
    customCta: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      color: 'white',
      padding: '12px 28px',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '15px',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
    },
    customHeroVisual: {
      width: '200px',
      height: '140px',
      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48px',
    },
    customFeatures: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      padding: '40px',
    },
    customFeature: {
      textAlign: 'center',
    },
    customFeatureIcon: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
      borderRadius: '12px',
      margin: '0 auto 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    customFeatureIconSvg: {
      width: '24px',
      height: '24px',
      stroke: '#3b82f6',
      fill: 'none',
      strokeWidth: 2,
    },
    customFeatureTitle: {
      fontSize: '14px',
      fontWeight: 700,
      color: '#1e293b',
      marginBottom: '4px',
    },
    // Labels
    label: {
      position: 'absolute',
      bottom: '-40px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'white',
      padding: '12px 24px',
      borderRadius: '12px',
      fontSize: '15px',
      fontWeight: 700,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      whiteSpace: 'nowrap',
    },
    templateLabel: {
      color: '#dc2626',
      border: '2px solid #fecaca',
    },
    customLabel: {
      color: '#10b981',
      border: '2px solid #d1fae5',
    },
    // Bounce Rate Indicators
    bounceIndicator: {
      position: 'absolute',
      top: '-35px',
      right: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'white',
      padding: '8px 16px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      fontSize: '13px',
      fontWeight: 700,
      zIndex: 5,
    },
    bounceHigh: {
      color: '#dc2626',
    },
    bounceLow: {
      color: '#10b981',
    },
    bounceArrow: {
      fontSize: '20px',
      fontWeight: 900,
    },
    vsDivider: {
      position: 'absolute',
      left: '50%',
      top: '280px',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      fontWeight: 800,
      boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
      zIndex: 10,
      pointerEvents: 'none',
    },
  };

  const IconComponent = ({ type }: { type: string }) => {
    const icons: Record<string, React.ReactNode> = {
      lightning: (
        <svg style={styles.customFeatureIconSvg} viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      layers: (
        <svg style={styles.customFeatureIconSvg} viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      grid: (
        <svg style={styles.customFeatureIconSvg} viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M9 3v18M3 9h18M3 15h18M15 3v18" />
        </svg>
      ),
    };
    return icons[type];
  };

  return (
    <div style={styles.comparison}>
      <div style={styles.header}>
        <h2 style={styles.title}>Template vs Custom Design</h2>
        <p style={styles.subtitle}>
          First impressions matter: your website is your digital storefront
        </p>
      </div>

      <div style={styles.splitContainer}>
        {/* Template Side (Bad) */}
        <div style={styles.side}>
          <div style={styles.sideHeader}>
            <span style={styles.emoji}>😟</span>
            <h3 style={{ ...styles.sideTitle, ...styles.templateSideTitle }}>
              Template #47
            </h3>
            <span style={styles.emoji}>👎</span>
          </div>

          <div style={{ ...styles.bounceIndicator, ...styles.bounceHigh }}>
            <span style={styles.bounceArrow}>↑↑↑</span>
            <span>78% Bounce Rate</span>
          </div>

          <div style={styles.browserMockup}>
            <div style={styles.browserChrome}>
              <div style={styles.browserDots}>
                <div style={{ ...styles.dot, ...styles.dotRed }} />
                <div style={{ ...styles.dot, ...styles.dotYellow }} />
                <div style={{ ...styles.dot, ...styles.dotGreen }} />
              </div>
              <div style={styles.browserUrl}>
                mywebsite.wixsite.com/template47
              </div>
            </div>
            <div style={styles.browserContent}>
              <div style={styles.templateContent}>
                <div style={styles.templateHeader}>
                  <div style={styles.templateLogo}>My Business!!!</div>
                </div>
                <div style={styles.templateNav}>
                  <div style={styles.templateNavItem}>HOME</div>
                  <div style={styles.templateNavItem}>ABOUT US</div>
                  <div style={styles.templateNavItem}>SERVICES</div>
                  <div style={styles.templateNavItem}>CONTACT</div>
                </div>
                <div style={styles.templateHero}>
                  <div style={styles.templateHeroTitle}>
                    WELCOME TO OUR WEBSITE!
                  </div>
                  <div style={styles.templateHeroText}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Click here to learn more about our amazing services!!!
                  </div>
                </div>
                <div style={styles.templateSections}>
                  <div style={styles.templateBox}>
                    <div style={styles.templateBoxIcon} />
                    <div style={styles.templateBoxTitle}>Feature 1</div>
                  </div>
                  <div style={styles.templateBox}>
                    <div style={styles.templateBoxIcon} />
                    <div style={styles.templateBoxTitle}>Feature 2</div>
                  </div>
                  <div style={styles.templateBox}>
                    <div style={styles.templateBoxIcon} />
                    <div style={styles.templateBoxTitle}>Feature 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.label, ...styles.templateLabel }}>
            Looks like everyone else
          </div>
        </div>

        {/* Custom Side (Good) */}
        <div style={styles.side}>
          <div style={styles.sideHeader}>
            <span style={styles.emoji}>😊</span>
            <h3 style={{ ...styles.sideTitle, ...styles.customSideTitle }}>
              Custom Professional
            </h3>
            <span style={styles.emoji}>👍</span>
          </div>

          <div style={{ ...styles.bounceIndicator, ...styles.bounceLow }}>
            <span style={styles.bounceArrow}>↓</span>
            <span>23% Bounce Rate</span>
          </div>

          <div style={styles.browserMockup}>
            <div style={styles.browserChrome}>
              <div style={styles.browserDots}>
                <div style={{ ...styles.dot, ...styles.dotRed }} />
                <div style={{ ...styles.dot, ...styles.dotYellow }} />
                <div style={{ ...styles.dot, ...styles.dotGreen }} />
              </div>
              <div style={styles.browserUrl}>yourbrand.com</div>
            </div>
            <div style={styles.browserContent}>
              <div style={styles.customContent}>
                <div style={styles.customHeader}>
                  <div style={styles.customLogo}>YourBrand</div>
                  <div style={styles.customNav}>
                    <div style={styles.customNavItem}>Home</div>
                    <div style={styles.customNavItem}>About</div>
                    <div style={styles.customNavItem}>Services</div>
                    <div style={styles.customNavItem}>Contact</div>
                  </div>
                </div>
                <div style={styles.customHero}>
                  <div style={styles.customHeroContent}>
                    <div style={styles.customHeroTitle}>
                      Transform Your Business Online
                    </div>
                    <div style={styles.customHeroText}>
                      Professional solutions designed specifically for your unique
                      brand and goals.
                    </div>
                    <div style={styles.customCta}>Get Started</div>
                  </div>
                  <div style={styles.customHeroVisual}>📊</div>
                </div>
                <div style={styles.customFeatures}>
                  <div style={styles.customFeature}>
                    <div style={styles.customFeatureIcon}>
                      <IconComponent type="lightning" />
                    </div>
                    <div style={styles.customFeatureTitle}>
                      Fast Performance
                    </div>
                  </div>
                  <div style={styles.customFeature}>
                    <div style={styles.customFeatureIcon}>
                      <IconComponent type="layers" />
                    </div>
                    <div style={styles.customFeatureTitle}>Scalable</div>
                  </div>
                  <div style={styles.customFeature}>
                    <div style={styles.customFeatureIcon}>
                      <IconComponent type="grid" />
                    </div>
                    <div style={styles.customFeatureTitle}>Responsive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.label, ...styles.customLabel }}>
            Unique brand identity
          </div>
        </div>
      </div>

      {/* VS Divider */}
      <div style={styles.vsDivider}>VS</div>
    </div>
  );
};

export default TemplateVsCustomComparison;
