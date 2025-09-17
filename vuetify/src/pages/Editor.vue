<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <!-- Coming Soon Section -->
        <div class="coming-soon-container">
          <div class="coming-soon-content">
            <div class="coming-soon-icon">
              <v-icon color="primary" size="80">mdi-video-plus</v-icon>
            </div>

            <h1 class="coming-soon-title">
              🎬 Revolutionary Media Editor
            </h1>

            <p class="coming-soon-subtitle">
              Something extraordinary is brewing...
            </p>

            <div class="features-preview">
              <div class="feature-pill">
                <v-icon color="success" size="20">mdi-lightning-bolt</v-icon>
                <span>Lightning-fast FFmpeg processing</span>
              </div>
              <div class="feature-pill">
                <v-icon color="info" size="20">mdi-cloud-upload</v-icon>
                <span>Cloud-native architecture</span>
              </div>
              <div class="feature-pill">
                <v-icon color="warning" size="20">mdi-magic-staff</v-icon>
                <span>AI-powered editing assistance</span>
              </div>
              <div class="feature-pill">
                <v-icon color="error" size="20">mdi-rocket-launch</v-icon>
                <span>Real-time collaboration</span>
              </div>
            </div>

            <div class="teaser-box">
              <h3>🚀 What's Coming?</h3>
              <p>
                A next-generation web-based media editor that combines the power of
                <strong>FFmpeg</strong> with modern cloud technology. Edit videos and audio
                files directly in your browser with professional-grade tools.
              </p>
              <p class="highlight">
                💡 Built with the same expertise that powers enterprise MAM platforms
                serving 8,000+ users worldwide.
              </p>
            </div>

            <div class="status-indicator">
              <div class="status-dot" />
              <span>Currently in stealth development</span>
            </div>

            <div class="cta-section">
              <p class="cta-text">Want early access? Let's connect!</p>
              <div class="contact-buttons">
                <v-btn
                  color="primary"
                  href="https://linkedin.com/in/abir-hassan"
                  prepend-icon="mdi-linkedin"
                  target="_blank"
                  variant="elevated"
                >
                  LinkedIn
                </v-btn>
                <v-btn
                  color="success"
                  href="https://github.com/XAbirHasan"
                  prepend-icon="mdi-github"
                  target="_blank"
                  variant="outlined"
                >
                  GitHub
                </v-btn>
              </div>
            </div>
          </div>
        </div>

        <!-- Hidden Original Content (preserved for later) -->
        <div v-if="false" class="hidden-original-content">
          <h1 class="page-title">Media Editor</h1>

          <div class="section">
            <p>
              Basic editor - will polish later. Coming soon with FFmpeg integration!
              A web-based media processing tool for video and audio editing.
            </p>
          </div>

          <div class="section">
            <h2 class="section-title">Features</h2>

            <div class="item">
              <h3 class="item-title">Video/Audio Upload</h3>
              <p>Support for multiple media formats with drag-and-drop interface.</p>
            </div>

            <div class="item">
              <h3 class="item-title">Basic Editing Tools</h3>
              <p>Cut, trim, merge, and apply basic effects to your media files.</p>
            </div>

            <div class="item">
              <h3 class="item-title">FFmpeg Integration</h3>
              <p class="item-meta">Coming Soon</p>
              <p>Advanced processing capabilities with FFmpeg backend integration.</p>
            </div>

            <div class="item">
              <h3 class="item-title">Export Functionality</h3>
              <p>Export processed media in various formats and quality settings.</p>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Development Status</h2>
            <div class="item">
              <h3 class="item-title">Current Phase</h3>
              <p class="item-meta">Alpha Development</p>
              <p>
                This editor is currently in active development. Core features are being implemented
                with a focus on performance and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import '@/styles/pages.css';

.coming-soon-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

.coming-soon-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.coming-soon-icon {
  margin-bottom: 24px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.coming-soon-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  line-height: 1.2;
}

.coming-soon-subtitle {
  font-size: 1.4rem;
  color: rgb(var(--v-theme-on-surface-variant));
  margin-bottom: 32px;
  font-style: italic;
}

.features-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 32px;
}

.feature-pill {
  background: rgba(var(--v-theme-primary), 0.1);
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
  border-radius: 25px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.feature-pill:hover {
  background: rgba(var(--v-theme-primary), 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.teaser-box {
  background: rgba(var(--v-theme-surface-variant), 0.1);
  border: 1px solid rgba(var(--v-theme-outline-variant), 0.2);
  border-radius: 16px;
  padding: 24px;
  margin: 32px 0;
  text-align: left;
}

.teaser-box h3 {
  color: rgb(var(--v-theme-primary));
  margin-bottom: 16px;
  font-size: 1.3rem;
}

.teaser-box p {
  margin-bottom: 12px;
  line-height: 1.6;
}

.highlight {
  background: rgba(var(--v-theme-warning), 0.1);
  border-left: 4px solid rgb(var(--v-theme-warning));
  padding: 12px 16px;
  border-radius: 0 8px 8px 0;
  font-weight: 600;
  font-style: italic;
}

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 24px 0;
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface-variant));
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(var(--v-theme-warning));
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.cta-section {
  margin-top: 32px;
}

.cta-text {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: rgb(var(--v-theme-primary));
}

.contact-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hidden-original-content {
  display: none;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .coming-soon-title {
    font-size: 2.2rem;
  }

  .coming-soon-subtitle {
    font-size: 1.1rem;
  }

  .features-preview {
    flex-direction: column;
    align-items: center;
  }

  .feature-pill {
    width: 100%;
    max-width: 300px;
  }

  .teaser-box {
    padding: 16px;
  }

  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }

  .contact-buttons .v-btn {
    width: 200px;
  }
}
</style>
