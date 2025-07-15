<template>
  <div class="page-container">
    <v-container>
      <div class="content">
        <h1 class="page-title">Work</h1>

        <div class="section">
          <p>Built 20+ projects across various domains, exploring new technologies.</p>
        </div>

        <div class="section">
          <h2 class="section-title">Projects</h2>

          <div class="item">
            <h3 class="item-title">DocuTeam - Multi-Tenant Document Management</h3>
            <p>
              Built a secure, scalable document platform on AWS Elastic Beanstalk.
              Implemented key features including request upload, secure file sharing, user management,
              permission control, reminder notifications, and data retention policies.
            </p>
            <p class="item-meta">Nest.js, React, AWS S3, Stripe</p>
            <a class="external-link" href="https://docoteam.com" target="_blank">docoteam.com</a>
          </div>

          <div class="item">
            <h3 class="item-title">Mimir MAM Platform</h3>
            <p>
              Enterprise media asset management platform serving 4,000+ users across 15+ enterprises.
              Built cloud-native solutions with scalability, security, and AWS cloud integration.
            </p>
            <p class="item-meta">Vue.js, TypeScript, AWS, FFmpeg, OpenSearch, DynamoDB</p>
          </div>

          <div class="item">
            <h3 class="item-title">Portfolio Website</h3>
            <p>
              Simple, text-based portfolio website following professional developer aesthetics.
            </p>
            <p class="item-meta">Vue 3, TypeScript, Vuetify</p>
            <a class="external-link" href="https://github.com/XAbirHasan/site" target="_blank">GitHub</a>
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
