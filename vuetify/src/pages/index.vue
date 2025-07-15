<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">Md Abir Hassan</h1>
        <p class="page-subtitle">Software Engineer</p>

        <div class="contact-links section">
          <a href="mailto:abirhassanalrabbi4005@gmail.com">abirhassanalrabbi4005@gmail.com</a>
          <span class="contact-separator">•</span>
          <a href="https://linkedin.com/in/abir-hassan" target="_blank">LinkedIn</a>
          <span class="contact-separator">•</span>
          <a href="https://github.com/XAbirHasan" target="_blank">GitHub</a>
        </div>

        <div class="section">
          <p>
            Software Engineer with 3+ years of experience building scalable, cloud-native applications in AWS.
            Expertise in backend development, automation, media asset management (MAM), and performance optimization.
            Passionate about clean code, security, and mentoring.
          </p>
        </div>

        <div class="section">
          <h2 class="section-title">Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3 class="item-title">Programming Languages</h3>
              <p class="skill-list">JavaScript, TypeScript, Python, C, C++, Java</p>
            </div>
            <div class="skill-category">
              <h3 class="item-title">Backend</h3>
              <p class="skill-list">Nest.js, Express.js</p>
            </div>
            <div class="skill-category">
              <h3 class="item-title">Databases</h3>
              <p class="skill-list">DynamoDB, Firebase, MySQL, OpenSearch</p>
            </div>
            <div class="skill-category">
              <h3 class="item-title">Frontend</h3>
              <p class="skill-list">Vue.js, Vuetify, Nuxt.js</p>
            </div>
            <div class="skill-category">
              <h3 class="item-title">Cloud & DevOps</h3>
              <p class="skill-list">AWS (S3, Lambda, API Gateway, CloudFront, Elastic Beanstalk), Docker, CI/CD (GitHub Actions, AWS CodeBuild & CodePipeline), Serverless</p>
            </div>
            <div class="skill-category">
              <h3 class="item-title">Others</h3>
              <p class="skill-list">Git, FFmpeg, Media Asset Management (MAM), AI, Tensorflow</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Projects</h2>
          <div class="item">
            <h3 class="item-title">DocuTeam - Multi-Tenant Document Management</h3>
            <p>Built a secure, scalable document platform on AWS Elastic Beanstalk with request upload, secure file sharing, user management, permission control, reminder notifications, and data retention policies.</p>
            <p class="item-meta">Nest.js, React, AWS S3, Stripe</p>
            <a class="external-link" href="https://docoteam.com" target="_blank">docoteam.com</a>
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
</style>
